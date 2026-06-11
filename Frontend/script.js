const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".card");

searchBox.addEventListener("keyup", () => {
    let searchValue = searchBox.value.toLowerCase();

    cards.forEach(card => {
        let medicine = card.dataset.name.toLowerCase();

        if (medicine.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});