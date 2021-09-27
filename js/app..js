const card = document.querySelectorAll(".card");

card.addEventListener("touchstart", function(e) {
    e.preventDefault;

    card.classList.add(".change-color");
});