// ======================================
// DYNAMIC GREETING
// ======================================

const greeting = document.getElementById("greeting");
const profileName = document.getElementById("profileName");

const userEmail = localStorage.getItem("userEmail") || "Guest";

profileName.textContent = userEmail;

const hour = new Date().getHours();

if(hour < 12){

    greeting.innerHTML = `Good Morning, ${userEmail} 👋`;

}
else if(hour < 18){

    greeting.innerHTML = `Good Afternoon, ${userEmail} ☀️`;

}
else{

    greeting.innerHTML = `Good Evening, ${userEmail} 🌙`;

}

 // ======================================
// FIND RIDE
// ======================================

const rideBtn = document.querySelector(".ride-btn");

rideBtn.addEventListener("click", function () {

    const pickup = document.querySelector("input[placeholder='Enter pickup location']").value.trim();

    const destination = document.querySelector("input[placeholder='Enter destination']").value.trim();

    if (pickup === "" || destination === "") {

        alert("Please enter both Pickup Location and Destination.");

        return;

    }

    // Save data for next page (optional)
    localStorage.setItem("pickup", pickup);
    localStorage.setItem("destination", destination);

    window.location.href = "ride-matching.html";

});
// ======================================
// QUICK ACTION CARDS
// ======================================

 const actions = document.querySelectorAll(".action-card");

actions.forEach(card => {

    card.addEventListener("click", () => {

        const title = card.querySelector("h3").innerText;

        if(title === "Ride History"){

            window.location.href = "ride-history.html";

        }

        else if(title === "Wallet"){

            alert("Wallet feature will be added in backend.");

        }

        else if(title === "Shared Ride"){

            window.location.href = "ride-matching.html";

        }

        else if(title === "Private Ride"){

            alert("Private Ride feature coming soon.");

        }

    });

});


// ======================================
// DRIVER CARD BUTTONS
// ======================================

const driverButtons = document.querySelectorAll(".driver-card button");

driverButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        alert("Driver booking request sent.");

    });

});


// ======================================
// NOTIFICATION BUTTON
// ======================================

const notification = document.querySelector(".notification");

notification.addEventListener("click",()=>{

    alert("No new notifications.");

});


// ======================================
// PROFILE
// ======================================

 const profile = document.querySelector(".profile");

profile.addEventListener("click", () => {

    window.location.href = "profile.html";

});


// ======================================
// DESTINATION CARDS
// ======================================

const destinations = document.querySelectorAll(".destination-card");

destinations.forEach(place=>{

    place.addEventListener("click",()=>{

        const destination = place.querySelector("h3").innerText;

        alert(destination + " selected.");

    });

});