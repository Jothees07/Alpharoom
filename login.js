var username = ["subbu"];
var password = ["abc"];

//signup credentials

function signup(){

    var signin_username = String(document.getElementById('username_signup').value);
    var signin_password = String(document.getElementById('password_signup').value);
    var signin_password_re = String(document.getElementById('re_password_signup').value);

    if (signin_username == "" || signin_password == "" || signin_password_re == "") {
        alert("All fields are mandatory!!");
    } else {
        if (signin_password != signin_password_re ) {
            alert("please verify the passwords entered!!")
        } else {
            username.push(signin_username);
            password.push(signin_password);
        }  
    }
    document.getElementById('username_signup').value = "";
    document.getElementById('password_signup').value = "";
    document.getElementById('re_password_signup').value = "";

}

//login credentials


function login() {
    var login_username = String(document.getElementById('username_login').value);
    var login_password = String(document.getElementById('password_login').value);

    if (login_username == "" || login_password == "") {
        alert("All fields are mandatory!!");
    } else {
        for ( let user of username) {
            if (login_username == user) {
                var index = username.indexOf(user);
                var password_verification = String(password[index]);
                if (login_password != password_verification) {
                    alert("please enter the correct password!!");
                } else {
                    window.location.href = "index.html";
                };
               
            } 
        }
    }
}