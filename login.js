const formOpenBtn = document.querySelector("#form_open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelector(".pw_hide");


signupBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formContainer.classList.remove("active");
});







































































































