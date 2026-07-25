// ======================================
// SHOW LOGGED-IN USER
// ======================================

const profileName = document.getElementById("profileName");

const userEmail = localStorage.getItem("userEmail") || "Guest";

profileName.textContent = userEmail;


// ======================================
// NOTIFICATION
// ======================================

const notification = document.querySelector(".notification");

notification.addEventListener("click", () => {

    alert("No new notifications.");

});


// ======================================
// SEARCH RIDE
// ======================================

const searchInput = document.getElementById("searchRide");

const rideCards = document.querySelectorAll(".ride-card");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    rideCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if(text.includes(searchValue)){

            card.style.display = "flex";

        }else{

            card.style.display = "none";

        }

    });

});


// ======================================
// FILTER BUTTONS
// ======================================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        alert(button.innerText + " filter selected.");

    });

});


// ======================================
// DOWNLOAD INVOICE
// ======================================

const invoiceButtons = document.querySelectorAll(".invoice-btn");

invoiceButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Invoice downloaded successfully.");

    });

});


// ======================================
// BOOK AGAIN
// ======================================

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Redirecting to Dashboard...");

        window.location.href = "dashboard.html";

    });

});


// ======================================
// PAGE ANIMATION
// ======================================

window.addEventListener("load", () => {

    rideCards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "0.5s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 200);

    });

});