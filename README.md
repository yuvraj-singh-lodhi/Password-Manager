# Password Manager

This is a simple password manager web app created with HTML, CSS, and JavaScript.

## Features

- User friendly interface for managing passwords 
- Encrypted password storage using localStorage
- Copy passwords to clipboard
- Add new passwords
- Delete existing passwords
- Responsive design

## Pages

The app contains the following pages:

- **index.html** - Home page to view and manage passwords
- **about.html** - About page with info on the app 
- **contact.html** - Contact page with developer's email

## Usage

To use the app:

1. Open index.html in a browser
2. Saved passwords are loaded from localStorage and displayed in a table 
3. To add a new password:
    - Enter website, username, and password in the form
    - Click Submit to save to localStorage
4. To copy a password:
    - Click the copy icon next to the password
    - Password is copied to clipboard
5. To delete a password:
    - Click the Delete button in the password row

Passwords are encrypted using a simple maskPassword() function before saving to localStorage.

## Customization

The style is controlled by style.css. Customize colors, fonts, sizes etc. there.

The JavaScript in script.js handles the password management functionality.

## Credits

Code created by [Yuvraj Singh Lodhi]

Let me know if you have any other questions!
