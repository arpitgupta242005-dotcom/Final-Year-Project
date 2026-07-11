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
// CALL DRIVER
// ======================================

const callBtn = document.querySelector(".call-btn");

callBtn.addEventListener("click", () => {

    alert("Calling Rajesh Kumar...");

});


// ======================================
// CHAT DRIVER
// ======================================

const chatBtn = document.querySelector(".chat-btn");

chatBtn.addEventListener("click", () => {

    alert("Opening chat with driver...");

});


// ======================================
// SHARE TRIP
// ======================================

const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", () => {

    alert("Trip link shared successfully.");

});


// ======================================
// EMERGENCY
// ======================================

const emergencyBtn = document.querySelector(".emergency-btn");

emergencyBtn.addEventListener("click", () => {

    const emergency = confirm("Do you want to contact emergency support?");

    if(emergency){

        alert("Emergency support has been notified.");

    }

});


// ======================================
// COMPLETE RIDE
// ======================================

const completeBtn = document.querySelector(".complete-btn");

completeBtn.addEventListener("click", () => {

    const completeRide = confirm("Have you reached your destination?");

    if(completeRide){

        alert("Ride Completed Successfully!");

        window.location.href = "payment.html";

    }

});


// ======================================
// SIMPLE ETA COUNTDOWN
// ======================================

const eta = document.querySelector(".eta-card h1");

let minutes = 4;
let seconds = 15;

setInterval(() => {

    if(seconds === 0){

        if(minutes > 0){

            minutes--;
            seconds = 59;

        }

    }else{

        seconds--;

    }

    const m = String(minutes).padStart(2,'0');
    const s = String(seconds).padStart(2,'0');

    eta.innerHTML = `${m} : ${s}`;

},1000); 