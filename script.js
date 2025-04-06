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

    companies.forEach(company => {
        const btn = document.createElement("button");
        btn.classList.add("logo-btn");
        btn.innerHTML = `<img src="${company.logo}" alt="${company.name}">`;
        btn.addEventListener("click", () => showCompanyInfo(company));
        logoContainer.appendChild(btn);
    });

    function showCompanyInfo(company) {
        companyAbout.innerHTML = `
        <div class="user-card" style="margin-bottom: 10px;" id="posts-container">
            <div class="cover-photo-wrapper">
                <img src="${company.cover_img || 'default-wallpaper.jpg'}" onerror="this.src='default-wallpaper.jpg'" class="cover-background-img" />
                <div class="cover-overlay">
                    <img src="${company.logo}" onerror="this.src='default-logo.jpg'" class="profile-photo" />
                </div>
            </div>
            <div class="user-info">
                <h3>${company.name}</h3>
                <p>${company.about.description}</p>
            </div>
            <span><strong>Website:</strong> ${company.about.website}<p></p></span>
            <span><strong>Email:</strong> ${company.about.contact.email}</span>
            <div class="buttons">
                <button onclick="window.open('https://wa.me/${company.about.contact.phone}', '_blank')" class="cta-btn">WhatsApp</button>
                <button onclick="window.location.href = 'mailto:${company.about.contact.email}'" class="cta-btn">Email</button>
                <button onclick="window.open('${company.about.website}', '_blank')" class="cta-btn">Website</button>
                <br><br>
            </div>
        </div>`;

        companyPosts.innerHTML = `<h3>📌 Posts</h3>` + 
            company.posts.map(post => `
                <div><h4>${post.title}</h4><p>${post.content}</p><small>${post.date}</small></div>
            `).join("");

        companyPetitions.innerHTML = `<h3>Petitions</h3>` + 
            company.petitions.map(petition => `
                <div class="petition-card">
                    <img src="https://whatsnext.joburg/1pulse-cover.jpg" alt="Petition Cover">
                    <h3>${petition.title}</h3>
                    <p>${petition.description}</p>
                    <strong>Signatures: ${petition.signatures}</strong>
                    <form class="registration-form" data-title="${petition.title}">
                        <input type="text" class="form-control name-input" placeholder="Full Names" required>
                        <input type="text" class="form-control name-input" placeholder="Surname" required>
                        <input type="email" class="form-control email-input" placeholder="Email" required>
                        <input type="tel" class="form-control phone-input" placeholder="Phone Number" required>
                        <button type="button" class="whatsapp-btn formb">Sign & Support</button>
                    </form>
                </div>
            `).join("");

        companyVideo_Posts.innerHTML = `<h3>📹 Video Posts</h3>` + 
            company.video_posts.map(video => `
                <div class="tiktok-card" data-id="${video.video_url}" style="margin-bottom: 30px; float: left;">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${video.video_url}?autoplay=1&mute=1&controls=1&playlist=${video.video_url}" allowfullscreen></iframe>
                    </div>
                    <div class="tiktok-user-info">
                        <h4>${video.title}</h4>
                        <p>${video.description}</p>
                    </div>
                    <div class="floating-actions">
                        <img src="${video.thumbnail}" alt="Profile Picture" class="profile-photo">
                        <div class="share-button">↪️ Share</div>
                    </div>
                    <div class="fb-comments" 
                         data-href="https://whatsnext.joburg/video/${video.video_url}" 
                         data-width="100%" 
                         data-numposts="3">
                    </div>
                </div>
            `).join("");

        companyPicture_Posts.innerHTML = `` + 
            company.picture_posts.map(pic => `
                <div class="pic-post">
                    <div class="post-header">
                        <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="Profile Picture" class="profile-photo">
                        <div class="user-info">
                            <h4>${pic.title}</h4>
                            <p>2 hrs ago · 🌍</p>
                        </div>
                    </div>
                    <div class="post-content">${pic.description}</div>
                    <div class="pic-image-grid">
                        <img src="${pic.image_url}" class="pic-large-image">
                        <div class="pic-small-images">
                            <img src="${pic.image_url2}" class="pic-small-image">
                            <img src="${pic.image_url3}" class="pic-small-image">
                            <div class="pic-small-image" style="position: relative;">
                                <div class="pic-overlay">+1</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join("");

        companySavvies.innerHTML = `<h3>🔥 Savvies</h3>` + 
            company.savvies.map(savvy => `<div><h4>${savvy.topic}</h4><p>Votes: ${savvy.votes}</p></div>`).join("");

        companyProducts.innerHTML = `<h3>🛍️ Products</h3>` + 
            company.products.map(product => `
                <div class="card">
                    <div class="card-img product-image">
                        <img src="${product.product_img}" alt="${product.title}">
                    </div>
                    <div class="card-info">
                        <p class="text-title">${product.name}</p>
                        <p class="text-body">${product.description}</p>
                    </div>
                    <div class="card-footer">
                        <span class="text-title">R${product.price}</span>
                        <div class="card-button">
                            <svg class="svg-icon" viewBox="0 0 20 20"><path d="M17.72..."></path></svg>
                        </div>
                    </div>
                </div>
            `).join("");

        companyServices.innerHTML = `<h3>💼 Services</h3>` + 
            company.services.map(service => `<div><strong>${service.name}</strong>: ${service.description}</div>`).join("");

        document.querySelectorAll(".company-section").forEach(section => section.style.display = "block");
        bindShareButtons();
        if (typeof FB !== 'undefined') FB.XFBML.parse();
    }

    function sendWhatsAppMessage(name, email, phone, petitionTitle) {
        const phoneNumber = "27685090669";
        const message = `Hello 1pulse, I am signing the petition: "${petitionTitle}".\n\nMy Details:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    }

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("whatsapp-btn")) {
            const form = event.target.closest(".registration-form");
            const inputs = form.querySelectorAll("input");
            const name = inputs[0].value.trim() + " " + inputs[1].value.trim();
            const email = inputs[2].value.trim();
            const phone = inputs[3].value.trim();
            const petitionTitle = form.getAttribute("data-title");

            if (name && email && phone) {
                sendWhatsAppMessage(name, email, phone, petitionTitle);
            } else {
                alert("Please fill in all fields before signing.");
            }
        }
    });
});

function bindShareButtons() {
    document.querySelectorAll(".share-button").forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".tiktok-card");
            const videoId = card.getAttribute("data-id");
            const url = `https://whatsnext.joburg/video/${videoId}`;
            const title = card.querySelector("h4")?.innerText || "Check this out!";
            const text = card.querySelector("p")?.innerText || "Interesting video on WhatsNext!";

            if (navigator.share) {
                navigator.share({
                    title: title,
                    text: text,
                    url: url
                }).catch(console.error);
            } else {
                prompt("Copy this link to share:", url);
            }
        });
    });
}
