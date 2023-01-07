const send = document.querySelector(".fa-angle-right");
const email = document.getElementById("input");
const message = document.querySelector(".error");
const errorIcon = document.querySelector(".icon");

let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

send.addEventListener("click", function(){

     if(email.value.match(format)){
      message.textContent = "Email Submitted";
      message.classList.add("visi");
      setTimeout(function(){
             message.classList.remove("visi");
      }, 500);
     }else{
      message.classList.add("visi");
      message.textContent = "Please provide a valid email"
      errorIcon.classList.add("visi");
      setTimeout(function(){
             message.classList.remove("visi");
             errorIcon.classList.remove("visi");
      }, 500);
     }
     email.value="";
});

