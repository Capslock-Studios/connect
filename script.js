document.addEventListener("DOMContentLoaded", function () {
    // Function to get user location and autofill input field
    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    document.querySelector('[name="location"]').value = 
                        `${position.coords.latitude}, ${position.coords.longitude}`;
                },
                (error) => {
                    alert("❌ Failed to get location: " + error.message);
                }
            );
        } else {
            alert("❌ Geolocation is not supported by your browser.");
        }
    }

    // Attach geolocation function to button (better selection)
    const locationButton = document.getElementById("getLocationBtn");
    if (locationButton) {
        locationButton.addEventListener("click", getUserLocation);
    }

    // Attach submit event listeners to all forms dynamically
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent page reload
            
            const formData = new FormData(form);
            const jsonObject = Object.fromEntries(formData.entries());

            // Determine entity based on form ID
            const entity = form.id.replace("Form", ""); // E.g., "user" from "userForm"
            const apiUrl = `https://dbconn-b837.onrender.com/api/${entity}s`; // e.g., /api/users, /api/companies

            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(jsonObject),
                });

                const result = await response.json();
                if (response.ok) {
                    alert(`${entity} submitted successfully!`);
                    form.reset(); // Clear form
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                alert("Failed to submit. Check your API connection.");
                console.error("Submission Error:", error);
            }
        });
    });
});
