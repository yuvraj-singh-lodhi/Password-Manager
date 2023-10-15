function maskPassword(pass){
    let str =""
    for (let index = 0; index < pass.length; index++) {
        str +="*"
    }
    return str 
}

function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
        ()=>{
            // alert("copied the text" + txt)
            document.querySelector(".alert").style.display = "inline"
            setTimeout(()=>{
                document.querySelector(".alert").style.display = "none"
            },2000)
        },
        () =>{
            alert("Clipboard coping failed")
        },
    );
  }




const deletePassword =(website)=>{
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e) =>{
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated));
    alert(`Successfully deleted ${website}'s password`)
    showPassword()
}


const showPassword =()=>{
let tb =document.querySelector("table")
let data = localStorage.getItem("passwords")
if(data == null || JSON.parse(data).length == 0){
 tb.innerHTML ="no data to show"
}
else{
tb.innerHTML =` <tr>
<th>Website </th>
<th>Username</th>
<th>Password</th>
<th>Delete</th>
</tr>`

 let arr = JSON.parse(data);
 let str =""
 for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    
    str +=`<tr>
    <td>${element.website}<img
    src="copy.svg"
    alt="Copy"
    width="24"
    height="24"
    onclick="copyText('${element.website}')"
  />
  </td>
    <td>${element.username}<img
    src="copy.svg"
    alt="Copy"
    width="24"
    height="24"
    onclick="copyText('${element.username}')"
  />
  </td>
    <td>${maskPassword(element.password)}<img
    src="copy.svg"
    alt="Copy"
    width="24"
    height="24"
    onclick="copyText('${element.password}')"
  />
  </td>
    <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
    </tr>`
 }

    tb.innerHTML = tb.innerHTML + str
}
    website.value =""
    username.value =""
    password.value =""
}
showPassword();
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  //  console.log(username.value , password.value)
  let passwords = localStorage.getItem("passwords");
  console.log(passwords);
  if (passwords == null) {
    let json = [];
    json.push({website: website.value, username: username.value, password: password.value });
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));

  } 
  
  else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({website: website.value, username: username.value, password: password.value });
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
    showPassword();
  }
});
