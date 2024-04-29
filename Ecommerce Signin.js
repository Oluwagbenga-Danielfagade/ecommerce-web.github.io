const Forms = document.getElementById("Form").addEventListener("submit", (e)=>{
    var Name,Surname,password,confirmpassword,email,text;
    Name = document.getElementById("Name").value;
    Surname = document.getElementById("SName").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    confirmpassword = document.getElementById("Confirmpassword").value;
    if (Name === ""||Name === Number){
        text = document.getElementById("Error-msg").textContent = "Name has to be filled here";
        e.preventDefault();
    }  else {
        text = document.getElementById("Error-msg").textContent  = ""
    }
    if (Surname === ""||Surname === Number){
        text = document.getElementById("Error-mag").textContent = "surname has to be filled here";
        e.preventDefault();
    }  else {
        text = document.getElementById("Error-mag").textContent  = ""
    }
    if (password === ""||password === null){
        text = document.getElementById("Error-msage").textContent = "The password  needs to be filled here";
        e.preventDefault();
    }  else {
        text = document.getElementById("Error-msage").textContent  = ""
    }
    if (email === ""){
        text = document.getElementById("Error-msag").textContent = "The email  needs to be filled here";
        e.preventDefault();
    }  else {
        text = document.getElementById("Error-msag").textContent  = "";
    }
    if (confirmpassword !== password){
        text = document.getElementById("Error-masage").innerHTML = "The password does not match with the inputed password";
        e.preventDefault();
    } else {
        text = document.getElementById("Error-masage").innerHTML = "";
    }
    if (password.length < 8){
        text = document.getElementById("Error-msage").textContent = "Password needs to be eight characters in a minimum";
        e.preventDefault();
    }
});
function capi(){
    var name,surname;
    name = document.getElementById("Name");
    surname = document.getElementById("SName");
    name.value = name.value.toUpperCase();
    surname.value = surname.value.toUpperCase();
}
function Aboutus(){
    window.open("Ecommerce About us.html")
}