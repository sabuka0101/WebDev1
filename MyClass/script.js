const usernames = ["saba1","saba2","saba3"];
const passwords = ["saba123","nika123","dato123"]
let username = prompt("Enter your username")
let password = prompt("Enter your password")
for(let i = 0; i < usernames.length && passwords.length; i++){
    if(username === usernames[i] && password === passwords[i]){
     alert("Login successful")
    }else{
        alert("Invalid username or password")
    }
    break;
}
