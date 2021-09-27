const cardBody = document.querySelectorAll(".card-body");
const cardText = document.querySelectorAll(".card-text");
const cardLink = document.querySelectorAll(".text-link");

cardBody.addEventListener("onClick", e=> {
    e.preventDefault;
    console.log("Halo");
});