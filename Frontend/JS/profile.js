// ======================================
// SHOW LOGGED-IN USER
// ======================================

const profileName = document.getElementById("profileName");
const userName = document.getElementById("userName");
const fullName = document.getElementById("fullName");
const userEmail = document.getElementById("userEmail");
const email = document.getElementById("email");

const loggedInUser = localStorage.getItem("userEmail") || "Guest";

profileName.textContent = loggedInUser;
userName.textContent = loggedInUser;
fullName.textContent = loggedInUser;
userEmail.textContent = loggedInUser;
email.textContent = loggedInUser;


// ======================================
// NOTIFICATION
// ======================================

const notification = document.querySelector(".notification");

notification.addEventListener("click", () => {

    alert("No new notifications.");

});


// ======================================
// EDIT PROFILE
// ======================================

const editBtn = document.querySelector(".edit-btn");

editBtn.addEventListener("click", () => {

    alert("Edit Profile feature will be added in backend.");

});


// ======================================
// EDIT PROFILE (SETTINGS)
// ======================================

const editProfileBtn = document.querySelector(".edit-profile-btn");

editProfileBtn.addEventListener("click", () => {

    alert("Edit Profile feature will be available soon.");

});


// ======================================
// CHANGE PASSWORD
// ======================================

const passwordBtn = document.querySelector(".password-btn");

passwordBtn.addEventListener("click", () => {

    alert("Change Password feature will be added in backend.");

});


// ======================================
// NOTIFICATION SETTINGS
// ======================================

const notificationBtn = document.querySelector(".notification-btn");

notificationBtn.addEventListener("click", () => {

    alert("Notification Settings will be available soon.");

});

// ======================================
// RIDE HISTORY
// ======================================

const historyBtn = document.querySelector(".history-btn");

historyBtn.addEventListener("click", () => {

    window.location.href = "ride-history.html";

});

// ======================================
// LOGOUT
// ======================================

const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", () => {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if(confirmLogout){

        localStorage.removeItem("userEmail");

        alert("Logged out successfully.");

        window.location.href = "login.html";

    }

});


// ======================================
// PAGE LOAD ANIMATION
// ======================================

window.addEventListener("load", () => {

    const cards = document.querySelectorAll(
        ".profile-card, .info-card, .contact-card, .stat-card, .setting-card"
    );

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "0.5s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});

 