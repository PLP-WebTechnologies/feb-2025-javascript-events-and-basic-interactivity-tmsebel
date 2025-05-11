// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Select the button and header elements
    const contactButton = document.querySelector('.btn');
    const header = document.querySelector('header');

    // Add click event listener to the button
    contactButton.addEventListener('click', () => {
        // Toggle the 'active' class on the header
        header.classList.toggle('active');
    });

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            card.style.transform = "scale(1.05)";
            card.style.transition = "all 0.3s ease-in-out";
            const image = card.querySelector("img");
            if (image) {
                image.style.transform = "rotateY(180deg)";
                image.style.transition = "transform 0.3s ease-in-out";
            }
        });

        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "none";
            card.style.transform = "scale(1)";
        });
    });

    const modal = document.getElementById("contactModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.querySelector(".close-btn");

    // Open the modal when the button is clicked
    openModalBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});