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
// STAR RATING
// ======================================

const stars = document.querySelectorAll(".star");

let selectedRating = 0;

stars.forEach((star, index) => {

    star.addEventListener("click", () => {

        selectedRating = index + 1;

        stars.forEach((s, i) => {

            if(i <= index){

                s.classList.remove("fa-regular");
                s.classList.add("fa-solid");
                s.style.color = "#f59e0b";

            }else{

                s.classList.remove("fa-solid");
                s.classList.add("fa-regular");
                s.style.color = "#d1d5db";

            }

        });

    });

});


// ======================================
// DOWNLOAD INVOICE
// ======================================

const invoiceBtn = document.querySelector(".invoice-btn");

invoiceBtn.addEventListener("click", () => {

    alert("Invoice downloaded successfully.");

});


// ======================================
// BOOK AGAIN
// ======================================

 const bookBtn = document.querySelector(".book-btn");

bookBtn.addEventListener("click", () => {

    window.location.href = "ride-history.html";

});

// ======================================
// BACK TO HOME
// ======================================

const homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click", () => {

    window.location.href = "../index.html";

});


// ======================================
// FEEDBACK
// ======================================

const feedback = document.getElementById("feedback");

feedback.addEventListener("blur", () => {

    if(feedback.value.trim() !== ""){

        alert("Thank you for your feedback!");

    }

});