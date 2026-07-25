// ======================================
// DYNAMIC GREETING
// ======================================
const greeting = document.getElementById("greeting");
const profileName = document.getElementById("profileName");

const userName = localStorage.getItem("userName") || "Guest";
const token = localStorage.getItem("token");

profileName.textContent = userName;

const hour = new Date().getHours();
if(hour < 12){
    greeting.innerHTML = `Good Morning, ${userName} 👋`;
} else if(hour < 18){
    greeting.innerHTML = `Good Afternoon, ${userName} ☀️`;
} else {
    greeting.innerHTML = `Good Evening, ${userName} 🌙`;
}

// ======================================
// FIND RIDE — BACKEND CONNECTED
// ======================================
const rideBtn = document.querySelector(".ride-btn");

rideBtn.addEventListener("click", async function () {

    const pickup = document.getElementById("pickup").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const passengers = document.querySelector("select").value;
    const rideType = document.querySelectorAll("select")[1].value;

    if (pickup === "" || destination === "") {
        alert("Please enter both Pickup Location and Destination.");
        return;
    }

    // Passenger ID localStorage se lo
    const passengerId = localStorage.getItem("userId") || 1;

    try {
        const response = await fetch("http://localhost:8080/api/rides/request", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                passengerId: parseInt(passengerId),
                pickupLocation: pickup,
                destination: destination,
                pickupLat: 28.6315,
                pickupLon: 77.2167,
                destinationLat: 28.5562,
                destinationLon: 77.1000,
                passengers: parseInt(passengers),
                rideType: rideType.toUpperCase()
            })
        });

        if(response.ok){
            const data = await response.json();
            localStorage.setItem("rideId", data.id);
            localStorage.setItem("pickup", pickup);
            localStorage.setItem("destination", destination);
            localStorage.setItem("rideStatus", data.status);
            alert("Ride Requested! Status: " + data.status);
            window.location.href = "ride-matching.html";
        } else {
            alert("Ride request failed — try again!");
        }

    } catch(error) {
        alert("Backend se connect nahi ho pa raha!");
    }
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
        } else if(title === "Wallet"){
            alert("Wallet feature coming soon.");
        } else if(title === "Shared Ride"){
            window.location.href = "ride-matching.html";
        } else if(title === "Private Ride"){
            alert("Private Ride feature coming soon.");
        }
    });
});

// ======================================
// DRIVER CARD BUTTONS
// ======================================
const driverButtons = document.querySelectorAll(".driver-card button");

driverButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Driver booking request sent.");
    });
});

// ======================================
// NOTIFICATION BUTTON
// ======================================
const notification = document.querySelector(".notification");

notification.addEventListener("click", () => {
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

destinations.forEach(place => {
    place.addEventListener("click", () => {
        const dest = place.querySelector("h3").innerText;
        alert(dest + " selected.");
    });
});
