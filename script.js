document.getElementById("registrationForm").addEventListener("submit", function(event) {
event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if (name === "" || email === "" || age === "" ||
       course === "" || password === "") {
       message.style.color = "red";
       message.innerHTML = "Please fill in all fields!";
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
       message.style.color = "red";
       message.innerHTML = "Please enter a valid email!";
    }

    else if (Number(age) <= 0) {
       message.style.color = "red";
       message.innerHTML = "Please enter a valid age!";
    }

    else if (password.length < 6) {
       message.style.color = "red";
       message.innerHTML = "Password must be at least 6 characters!";
    }

    else {
       message.style.color = "green";
       message.innerHTML = "Registration Successful!";
       document.getElementById("registrationForm").reset();
    }
});
