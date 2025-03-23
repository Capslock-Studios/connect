document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");

    if (!userForm) {
        console.error("❌ Error: userForm not found!");
        return;
    }

    // Function to get user location and autofill input field
    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    document.querySelector('[name="location"]').value = `${position.coords.latitude}, ${position.coords.longitude}`;
                },
                (error) => {
                    alert("❌ Failed to get location: " + error.message);
                }
            );
        } else {
            alert("❌ Geolocation is not supported by your browser.");
        }
    }

    // Attach geolocation function to button
    const locationButton = document.querySelector('button[onclick="getUserLocation()"]');
    if (locationButton) {
        locationButton.addEventListener("click", getUserLocation);
    }

    userForm.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent page reload

        const formData = {
            name: this.name.value,
            email: this.email.value,
            password: this.password.value,
            phoneNumber: this.phoneNumber.value || null,
            profilePicture: this.profilePicture.value || null,
            location: this.location.value || null,
            role: this.role.value
        };

        // Use Netlify Environment Variable or Render Fallback
        const API_URL = window.API_URL || "https://dbconn-b837.onrender.com/api/users"; 

        try {
            // Fetch existing users (GET request)
            let usersResponse = await fetch(API_URL);
            let usersData = await usersResponse.json();
            console.log("Existing Users:", usersData);

            // Create a new user (POST request)
            let response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            let result = await response.json();
            alert("✅ User Created: " + JSON.stringify(result));
        } catch (error) {
            console.error("❌ Error:", error);
        }
    });
});
