document.getElementById("userForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevent page reload

    const formData = {
        name: this.name.value,
        email: this.email.value,
        password: this.password.value, // Now included
        phoneNumber: this.phoneNumber.value || null,
        profilePicture: this.profilePicture.value || null,
        location: this.location.value || null,
        role: this.role.value
    };

    try {
        let response = await fetch("http://localhost:5000/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        let result = await response.json();
        alert("User Created: " + JSON.stringify(result));
    } catch (error) {
        console.error("Error:", error);
    }
});
