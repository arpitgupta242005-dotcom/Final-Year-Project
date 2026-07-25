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

    alert("Calling Driver...");

});


// ======================================
// CHAT
// ======================================

const chatBtn = document.querySelector(".chat-btn");

chatBtn.addEventListener("click", () => {

    alert("Opening chat with driver...");

});


// ======================================
// CANCEL RIDE
// ======================================

const cancelBtn = document.querySelector(".cancel-btn");

cancelBtn.addEventListener("click", () => {

    const confirmCancel = confirm("Do you really want to cancel this ride?");

    if(confirmCancel){

        alert("Ride Cancelled Successfully.");

        window.location.href = "dashboard.html";

    }

});


// ======================================
// START TRACKING
// ======================================

const trackingBtn = document.querySelector(".tracking-btn");

trackingBtn.addEventListener("click", () => {

    alert("Opening Live Tracking...");

    window.location.href = "live-tracking.html";

});