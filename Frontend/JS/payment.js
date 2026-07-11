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
// PROMO CODE
// ======================================

const promoBtn = document.getElementById("applyPromo");

const promoInput = document.getElementById("promoCode");

promoBtn.addEventListener("click", () => {

    const promo = promoInput.value.trim().toUpperCase();

    if (promo === "") {

        alert("Please enter a promo code.");

    }

    else if (promo === "SMART50") {

        alert("Promo Applied Successfully!\nYou saved ₹50.");

    }

    else {

        alert("Invalid Promo Code.");

    }

});


// ======================================
// PAYMENT METHOD
// ======================================

const paymentMethods = document.querySelectorAll("input[name='payment']");

paymentMethods.forEach(method => {

    method.addEventListener("change", () => {

        console.log("Selected Payment:", method.value);

    });

});


// ======================================
// PAY NOW
// ======================================

const payBtn = document.getElementById("payNowBtn");

payBtn.addEventListener("click", () => {

    const selectedMethod = document.querySelector("input[name='payment']:checked");

    if (!selectedMethod) {

        alert("Please select a payment method.");

        return;

    }

    alert(
        "Payment Successful!\n\nMethod: " +
        selectedMethod.value +
        "\nAmount: ₹110"
    );

    window.location.href = "ride-completed.html";

});