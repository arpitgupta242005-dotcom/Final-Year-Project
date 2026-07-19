// ======================================
// SHOW / HIDE PASSWORD
// ======================================
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});

toggleConfirmPassword.addEventListener("click", () => {
    if(confirmPassword.type === "password"){
        confirmPassword.type = "text";
        toggleConfirmPassword.classList.remove("fa-eye");
        toggleConfirmPassword.classList.add("fa-eye-slash");
    } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.classList.remove("fa-eye-slash");
        toggleConfirmPassword.classList.add("fa-eye");
    }
});

// ======================================
// REGISTER FORM — BACKEND CONNECTED
// ======================================
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async function(e){
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const pass = password.value.trim();
    const confirmPass = confirmPassword.value.trim();
    const terms = document.getElementById("terms");

    // Validations
    if(fullName===""||email===""||mobile===""||gender===""||dob===""||pass===""||confirmPass===""){
        alert("Please fill in all fields.");
        return;
    }
    if(mobile.length !== 10 || isNaN(mobile)){
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }
    if(pass.length < 6){
        alert("Password must be at least 6 characters.");
        return;
    }
    if(pass !== confirmPass){
        alert("Passwords do not match.");
        return;
    }
    if(!terms.checked){
        alert("Please accept the Terms & Conditions.");
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: fullName,
                email: email,
                phone: mobile,
                gender: gender,
                dob: dob,
                password: pass,
                role: "PASSENGER"
            })
        });

        if(response.ok){
            const data = await response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("userRole", data.role);
            localStorage.setItem("userName", data.name);
            alert("Registration Successful! Welcome " + data.name);
            window.location.href = "login.html";
        } else {
            const error = await response.text();
            alert("Registration failed: " + error);
        }

    } catch(error){
        alert("Server se connect nahi ho pa raha — backend run hai?");
    }
});
