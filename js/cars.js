
document.getElementById("searchButton").addEventListener("click", filterCars);
document.getElementById("searchInput").addEventListener("keyup", filterCars);

function filterCars() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const carCards = document.querySelectorAll(".car-card-container");

    // Loop through each car card
    carCards.forEach((card) => {
        const carModel = card.querySelector(".car-model").textContent.toLowerCase();
        // If the car model includes the search term, display it
        if (carModel.includes(searchValue)) {
            card.style.display = "block";  // Show matching cards
        } else {
            card.style.display = "none";  // Hide non-matching cards
        }
    });
}