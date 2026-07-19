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
// LOGIN FORM — BACKEND CONNECTED
// ======================================
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value.trim();
    const pass = password.value.trim();

    if (email === "" || pass === "") {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        });

        if (response.ok) {
            const data = await response.json();

            // Token aur user info save karo
            localStorage.setItem("token", data.token);
            localStorage.setItem("userRole", data.role);
            localStorage.setItem("userName", data.name);

            alert("Login Successful! Welcome " + data.name);
            window.location.href = "dashboard.html";

        } else {
            alert("Invalid email or password!");
        }

    } catch (error) {
        alert("Server se connect nahi ho pa raha — backend run hai?");
    }
});
