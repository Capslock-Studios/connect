// Close modal functionality
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('addCompanyForm').classList.remove('active');
});

// Close modal when clicking outside of it
window.addEventListener('click', function (e) {
    let modal = document.getElementById('addCompanyForm');
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Open Modal
document.getElementById("addCompanyBtn").addEventListener("click", function () {
    document.getElementById("addCompanyForm").classList.add("active");
});

// Close Modal with Button
document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("addCompanyForm").classList.remove("active");
});

// Close Modal when Clicking Outside
window.addEventListener("click", function (e) {
    let modal = document.getElementById("addCompanyForm");
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

// Handle form submission
document.getElementById("companyForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    let newCompany = {
        name: document.getElementById("name").value,
        category: document.getElementById("categoryInput").value,
        description: document.getElementById("descriptionInput").value,
        email: document.getElementById("emailInput").value,
        phoneNumber: document.getElementById("phoneInput").value,
        logo: document.getElementById("logoInput").value,
        location: {
            latitude: parseFloat(document.getElementById("latitudeInput").value),
            longitude: parseFloat(document.getElementById("longitudeInput").value)
        }
    };

    try {
        let response = await fetch("https://dbconn-b837.onrender.com/api/companies", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCompany)
        });

        if (!response.ok) throw new Error("Failed to add company");

        let createdCompany = await response.json();

        alert("Company added successfully!");
        document.getElementById("companyForm").reset();
        document.getElementById("addCompanyForm").style.display = "none";

        // Add new company logo dynamically
        let logoContainer = document.getElementById("logoContainer");
        let img = document.createElement("img");
        img.src = createdCompany.logo;
        img.className = "logo";
        img.onclick = () => showCompanyModal(createdCompany);
        logoContainer.appendChild(img);

    } catch (error) {
        console.error("Error:", error);
        alert("Error adding company");
    }
});

// Show company details in modal
async function showCompanyModal(company) {
    // Populate modal with company data
    document.getElementById('modalCompanyName').textContent = company.name;
    document.getElementById('modalCompanyCategory').textContent = company.category;
    document.getElementById('modalCompanyDescription').textContent = company.description;
    document.getElementById('modalCompanyLogo').src = company.logo;
    
    // Set contact info
    document.getElementById('modalCompanyEmail').href = `mailto:${company.email}`;
    document.getElementById('modalCompanyEmail').textContent = company.email;
    document.getElementById('modalCompanyPhone').href = `tel:${company.phoneNumber}`;
    document.getElementById('modalCompanyPhone').textContent = company.phoneNumber;
    
    // Set social media links
    document.getElementById('modalFacebook').href = company.socialMedia?.facebook || '#';
    document.getElementById('modalTwitter').href = company.socialMedia?.twitter || '#';
    document.getElementById('modalInstagram').href = company.socialMedia?.instagram || '#';
    
    // Get and display location
    getLocationName(company.location.latitude, company.location.longitude)
        .then(location => {
            document.getElementById('modalCompanyLocation').textContent = location;
        })
        .catch(() => {
            document.getElementById('modalCompanyLocation').textContent = 
                `${company.location.latitude}, ${company.location.longitude}`;
        });
    
    // Load products and posts for this company
    fetchModalProducts(company._id);
    fetchModalPosts(company._id);
    
    // Show the modal
    document.getElementById('companyModal').style.display = 'block';
}

// Fetch products for modal display
async function fetchModalProducts(companyId) {
    try {
        const response = await fetch(`https://dbconn-b837.onrender.com/api/products?companyId=${companyId}`);
        const products = await response.json();
        const container = document.getElementById('modalProductsContainer');
        
        container.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.ProductImage}" alt="${product.title}">
                <h4>${product.title}</h4>
                <p>${product.description}</p>
                <span class="price">${product.price || ''}</span>
            </div>
        `).join('');
    } catch (error) {
        console.error("Error fetching products:", error);
        document.getElementById('modalProductsContainer').innerHTML = 
            '<p>Error loading products</p>';
    }
}

// Fetch posts for modal display
async function fetchModalPosts(companyId) {
    try {
        const response = await fetch(`https://dbconn-b837.onrender.com/api/posts?companyId=${companyId}`);
        const posts = await response.json();
        const container = document.getElementById('modalPostsContainer');
        
        container.innerHTML = posts.length === 0 ? '<p>No posts available</p>' : 
            posts.map(post => `
                <div class="post">
                    <p class="post-date">${new Date(post.createdAt).toLocaleDateString()}</p>
                    <p class="post-content">${post.content}</p>
                    ${post.media?.length > 0 ? 
                        `<img src="${post.media[0]}" alt="Post image" class="post-image">` : ''}
                </div>
            `).join('');
    } catch (error) {
        console.error("Error fetching posts:", error);
        document.getElementById('modalPostsContainer').innerHTML = 
            '<p>Error loading posts</p>';
    }
}

// Close company modal when clicking X
document.querySelector('.close-company-modal').addEventListener('click', function() {
    document.getElementById('companyModal').style.display = 'none';
});

// Close company modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('companyModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Fetch and display companies
async function fetchCompanies() {
    const logoContainer = document.getElementById('logoContainer');
    
    // Show loading message
    logoContainer.innerHTML = `<p id="loadingText">Loading companies...</p>`;
    
    try {
        const response = await fetch('https://dbconn-b837.onrender.com/api/companies');
        const companies = await response.json();

        // Clear loading message
        logoContainer.innerHTML = '';

        // Display companies
        companies.forEach(company => {
            const img = document.createElement('img');
            img.src = company.logo;
            img.className = 'logo';
            img.onclick = () => showCompanyModal(company);
            logoContainer.appendChild(img);
        });
    } catch (error) {
        console.error("Error fetching companies:", error);
        
        // Show an error message inside the container instead of an alert
        logoContainer.innerHTML = `<p style="color: red;">Failed to load companies. Please try again later.</p>`;
    }
}

// Call function to load companies when the page loads
fetchCompanies();





// Get location name from coordinates
async function getLocationName(lat, lon) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
        const data = await response.json();
        return data.address?.suburb || data.address?.city || 'Unknown';
    } catch (error) {
        console.error("Error getting location name:", error);
        return 'Unknown';
    }
}

// Initialize
fetchCompanies();