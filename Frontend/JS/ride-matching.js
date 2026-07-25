// ======================================
// SHOW PICKUP & DESTINATION
// ======================================

const pickupLocation = document.getElementById("pickupLocation");

const destinationLocation = document.getElementById("destinationLocation");

const pickup = localStorage.getItem("pickup");
const destination = localStorage.getItem("destination");

if (pickupLocation && pickup) {

    pickupLocation.textContent = pickup;

}

if (destinationLocation && destination) {

    destinationLocation.textContent = destination;

}

//  ======================================
// SHOW LOGGED-IN USER
// ======================================

const profileName = document.getElementById("profileName");

const userEmail = localStorage.getItem("userEmail") || "Guest";

profileName.textContent = userEmail;


// ======================================
// NOTIFICATION BUTTON
// ======================================

const notification = document.querySelector(".notification");

notification.addEventListener("click", () => {

    alert("No new notifications.");

});


// ======================================
// JOIN RIDE BUTTON
// ======================================

const joinButtons = document.querySelectorAll(".join-btn");

joinButtons.forEach(button => {

    button.addEventListener("click", () => {

        const confirmRide = confirm(
            "Do you want to join this shared ride?"
        );

        if (confirmRide) {

            alert("Ride Joined Successfully!");

            window.location.href = "driver-assigned.html";

        }

    });

});


// ======================================
// PRIVATE RIDE BUTTON
// ======================================

const privateRide = document.querySelector(".private-btn");

privateRide.addEventListener("click", () => {

    alert("Searching for a private taxi...");

});


// ======================================
// EMERGENCY BUTTON
// ======================================

const emergency = document.querySelector(".emergency-btn");

emergency.addEventListener("click", () => {

    alert("Emergency support has been contacted.");

});


// ======================================
// MATCH CARDS
// ======================================

const cards = document.querySelectorAll(".ride-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// ======================================
// PAGE LOAD ANIMATION
// ======================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});