function login(){
    let username = document.getElementById('uname').value;
    let password = document.getElementById('password').value;
    let invalid= document.getElementById('invalid');

    if(username === "citiustech" && password === "citiustech"){
        window.open('http://www.google.com/');
    }
    
    else {
        invalid.innerHTML = "You have entered the wrong credentials";
    }
    }
