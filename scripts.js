document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.getElementById("logoContainer");
    const companyAbout = document.getElementById("companyAbout");
    const companyPosts = document.getElementById("companyPosts");
    const companyPetitions = document.getElementById("companyPetitions");
    const companyVideo_Posts = document.getElementById("companyVideo_Posts");
    const companyPicture_Posts = document.getElementById("companyPicture_Posts");
    const companySavvies = document.getElementById("companySavvies");
    const companyProducts = document.getElementById("companyProducts");
    const companyServices = document.getElementById("companyServices");

    // Load logos as buttons in the header
    companies.forEach(company => {
        const btn = document.createElement("button");
        btn.classList.add("logo-btn");
        btn.innerHTML = `<img src="${company.logo}" alt="${company.name}">`;
        btn.addEventListener("click", () => showCompanyInfo(company));
        logoContainer.appendChild(btn);
    });

    // Function to display full company details
    function showCompanyInfo(company) {
        companyAbout.innerHTML = `
            <h2>${company.name}</h2>
            <p>${company.about.description}</p>
            <p><strong>Website:</strong> <a href="${company.about.website}" target="_blank">${company.about.website}</a></p>
            <p><strong>Contact:</strong> ${company.about.contact.email} | ${company.about.contact.phone}</p>
        `;

        companyPosts.innerHTML = `<h3>📌 Posts</h3>` + 
            company.posts.map(post => `<div><h4>${post.title}</h4><p>${post.content}</p><small>${post.date}</small></div>`).join("");

        companyPetitions.innerHTML = `<h3>📝 Petitions</h3>` + 
            company.petitions.map(petition => `
                <img src="https://whatsnext.joburg/1pulse-cover.jpg" alt="Petition Cover">
												<h3 id="petition-title">${petition.title}</h3>
												<p id="petition-description">${petition.description}</p>
												<strong>Signatures: <span id="petition-signatures">${petition.signatures}</span></strong>
												<strong>Date: <span id="petition-date">Not provided</span></strong>
												<strong>Time: <span id="petition-time">Not provided</span></strong>
												<strong>Location: <span id="petition-location">Not provided</span></strong>
                
                
                
                
                `).join("");

        companyVideo_Posts.innerHTML = `<h3>📹 Video Posts</h3>` + 
            company.video_posts.map(video => `
                <div>
                    <h4>${video.title}</h4>
                    <a href="${video.video_url}" target="_blank">
                        <img src="${video.thumbnail}" width="150">
                    </a>
                </div>
            `).join("");

        companyPicture_Posts.innerHTML = `<h3>🖼️ Picture Posts</h3>` + 
            company.picture_posts.map(pic => `<div><h4>${pic.title}</h4><img src="${pic.image_url}" width="150"></div>`).join("");

        companySavvies.innerHTML = `<h3>🔥 Savvies</h3>` + 
            company.savvies.map(savvy => `<div><h4>${savvy.topic}</h4><p>Votes: ${savvy.votes}</p></div>`).join("");

        companyProducts.innerHTML = `<h3>🛍️ Products</h3>` + 
            company.products.map(product => `<div><strong>${product.name}</strong>: $${product.price}</div>`).join("");

        companyServices.innerHTML = `<h3>💼 Services</h3>` + 
            company.services.map(service => `<div><strong>${service.name}</strong>: ${service.description}</div>`).join("");

        // Make all sections visible
        document.querySelectorAll(".company-section").forEach(section => section.style.display = "block");
    }
});
