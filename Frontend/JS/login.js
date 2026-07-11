// ======================================
// SHOW / HIDE PASSWORD
// ======================================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});


// ======================================
// LOGIN FORM
// ======================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.querySelector("input[type='email']").value.trim();
    const pass = password.value.trim();

    if (email === "" || pass === "") {

        alert("Please fill in all fields.");

        return;

    }

    // Save email in localStorage
localStorage.setItem("userEmail", email);
 localStorage.setItem("userEmail", email);

alert("Login Successful!");

window.location.href = "dashboard.html";
});