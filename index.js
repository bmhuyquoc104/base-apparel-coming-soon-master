const form = document.querySelector(".card__email");
const email = document.querySelector("#email");
const small = document.querySelector("#error");

form.addEventListener("submit",(e) =>{
    if (email.value === ""){
        form.classList.add("invalid");
        small.style.visibility = "visible";
        e.preventDefault();
    }
})