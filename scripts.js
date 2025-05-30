// Helper: Get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// On load: Check for ?company= in the URL
window.addEventListener("DOMContentLoaded", () => {
    const companyId = getQueryParam("company");
    if (companyId) {
        const selectedCompany = companies.find(c => c.id === companyId);
        if (selectedCompany) {
            showCompanyInfo(selectedCompany);
        }
    }
});

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
    const companyEvents = document.getElementById("companyEvents");


    // Load logos as buttons in the header
    companies.forEach(company => {
        const btn = document.createElement("button");
        btn.classList.add("logo-btn");
        btn.innerHTML = `<img src="${company.logo}" alt="${company.name}">`;
        btn.addEventListener("click", () => {
            // Redirect to index.html and pass the company ID or name in the URL
            window.location.href = `index.html?company=${encodeURIComponent(company.id)}`;
        });
        
        logoContainer.appendChild(btn);
    });

    // Function to display full company details
    function showCompanyInfo(company) {
        companyAbout.innerHTML = `
        <div class="user-card" style="margin-bottom: 10px;" id="posts-container">
           <div class="cover-photo-wrapper">
    <img src="${company["cover_img"] || 'default-wallpaper.jpg'}" onerror="this.src='default-wallpaper.jpg'" class="cover-background-img" />
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
        </div>
    `;
    

        companyPosts.innerHTML = `<h3>📌 Posts</h3>` + 
            company.posts.map(post => `
                <div><h4>${post.title}</h4><p>${post.content}</p><small>${post.date}</small></div>
            `).join("");

        companyPetitions.innerHTML = `<h3>Petitions</h3>` + 
            company.petitions.map(petition => `
                <div class="petition-card">
                    <img src="https://whatsnext.joburg/1pulse-cover.jpg" alt="Petition Cover">
                    <h3 id="petition-title">${petition.title}</h3>
                    <p id="petition-description">${petition.description}</p>
                    <strong>Signatures: <span id="petition-signatures">${petition.signatures}</span></strong>
                    <strong>Date: <span id="petition-date">Not provided</span></strong>
                    <strong>Time: <span id="petition-time">Not provided</span></strong>
                    <strong>Location: <span id="petition-location">Not provided</span></strong>
                    <form class="registration-form" data-title="${petition.title}">
                        <div class="mb-3">
                            <input type="text" class="form-control name-input" placeholder="Full Names" required>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control name-input" placeholder="Surname" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control email-input" placeholder="Email" required>
                        </div>
                        <div class="mb-3">
                            <input type="tel" class="form-control phone-input" placeholder="Phone Number" required>
                        </div>
                        <button type="button" class="whatsapp-btn formb">Sign & Support</button>
                    </form>
                </div>
            `).join("");

        companyVideo_Posts.innerHTML = `<h3>📹 Video Posts</h3>` + 
            company.video_posts.map(video => `
                <div class="tiktok-card" style="margin-bottom: 30px; float: left;">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${video.video_url}?autoplay=0&mute=1&controls=1&playlist=${video.video_url}" allowfullscreen></iframe>
                    </div>
                    <div class="tiktok-user-info">
                        <h4>${video.title}</h4>
                        <p>${video.description}</p>
                    </div>
                    <div class="floating-actions">
                        <img src="${video.thumbnail}" alt="Profile Picture" class="profile-photo">
                        <div>❤️ 1.2K</div>
                        <div>💬 324</div>
                        <div>↪️ 89</div>
                    </div>
                </div>
            `).join("");

        companyPicture_Posts.innerHTML = `<h3></h3>` + 
            company.picture_posts.map(pic => `
                <div class="pic-post">
                    <div class="post-header">
                        <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="Profile Picture" class="profile-photo">
                        <div class="user-info">
                            <h4>${pic.title}</h4>
                            <p>2 hrs ago · 🌍</p>
                        </div>
                    </div>
                    <div class="post-content">
                        ${pic.description}
                    </div>
                    <div class="pic-image-grid">
                        <img src="${pic.image_url}" alt="Large Post Image" class="pic-large-image">
                        <div class="pic-small-images">
                            <img src="${pic.image_url2}" alt="Small Image 1" class="pic-small-image">
                            <img src="${pic.image_url3}" alt="Small Image 2" class="pic-small-image">
                            <div class="pic-small-image" style="position: relative;">
                                <div class="pic-overlay">+1</div>
                            </div>
                        </div>
                    </div>
                  <!---  <div class="post-actions">
                        <div>👍 Like</div>
                        <div>💬 Comment</div>
                        <div>↪️ Share</div>
                    </div>-->
                </div>
            `).join("");
            companyEvents.innerHTML = `<h3>🔥 Events</h3>` + 
            company.events.map(events => `
		<div class="event-card">
		  <img src="${company.cover_img}" alt="${company.name}" class="event-cover" />
		
		  <div class="event-content">
			<div class="organizer">
			  <img src="${company.logo}" alt="Organizer" />
			  <div class="organizer-info">
				<h4>Organizer: ${company.name}</h4>
				<p id="event-date">${events.date}</p>
			  </div>
			</div>
		
			<h2 id="event-title">${events.title}</h2>
		
			<div class="countdown">
			  <div><div id="days">00</div><span>Days</span></div>
			  <div><div id="hours">00</div><span>Hours</span></div>
			  <div><div id="minutes">00</div><span>Minutes</span></div>
			  <div><div id="seconds">00</div><span>Seconds</span></div>
			</div>
		
			<div class="description" id="desc">
			  <span id="desc-text">${events.description}  </span>
			<span class="read-more" onclick="this.previousElementSibling.classList.toggle('expanded')">Read more</span>
			</div>
			<div class="actions">
			  <button onclick="handleComment()">💬 Comment</button>
			  <button onclick="handleShare()">🔗 Share</button>
			  <button onclick="handleRSVP()">✅ RSVP</button>
			</div>
		  </div>
		</div>`).join("");

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
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            `).join("");

        companyServices.innerHTML = `<h3>💼 Services</h3>` + 
            company.services.map(service => `<div><strong>${service.name}</strong>: ${service.description}</div>`).join("");

        // Make all sections visible
        document.querySelectorAll(".company-section").forEach(section => section.style.display = "block");
    }

    // Function to send WhatsApp message
    function sendWhatsAppMessage(name, email, phone, petitionTitle) {
        const phoneNumber = "27685090669"; // Target WhatsApp number
        const message = `Hello 1pulse, I am signing the petition: "${petitionTitle}".\n\nMy Details:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp link
        window.open(whatsappURL, "_blank");
    }

    // Attach event listeners to dynamically added buttons using event delegation
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("whatsapp-btn")) {
            const form = event.target.closest(".registration-form");
            const name = form.querySelector(".name-input").value.trim();
            const email = form.querySelector(".email-input").value.trim();
            const phone = form.querySelector(".phone-input").value.trim();
            const petitionTitle = form.getAttribute("data-title");

            if (name && email && phone) {
                sendWhatsAppMessage(name, email, phone, petitionTitle);
            } else {
                alert("Please fill in all fields before signing.");
            }
        }
    });

    
		  // Set event info
		  document.getElementById("event-title").textContent = event.title;
		  document.getElementById("event-date").textContent = new Date(event.date).toLocaleString();
		
		  // Countdown logic
		  const daysEl = document.getElementById("days");
		  const hoursEl = document.getElementById("hours");
		  const minutesEl = document.getElementById("minutes");
		  const secondsEl = document.getElementById("seconds");
		
		  function updateCountdown(targetDate) {
			const now = new Date().getTime();
			const distance = new Date(targetDate).getTime() - now;
		
			if (distance <= 0) {
			  daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = '00';
			  return;
			}
		
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((distance / (1000 * 60)) % 60);
			const seconds = Math.floor((distance / 1000) % 60);
		
			daysEl.textContent = String(days).padStart(2, '0');
			hoursEl.textContent = String(hours).padStart(2, '0');
			minutesEl.textContent = String(minutes).padStart(2, '0');
			secondsEl.textContent = String(seconds).padStart(2, '0');
		  }
		
		  setInterval(() => {
			updateCountdown(event.date);
		  }, 1000);
		  updateCountdown(event.date);
		
		  // Read more toggle
		  let expanded = false;
		  function toggleReadMore() {
			const textEl = document.getElementById("desc-text");
			const button = document.querySelector(".read-more");
		
			if (!expanded) {
			  textEl.textContent = event.description;
			  button.textContent = "Read less";
			} else {
			  textEl.textContent = event.description.slice(0, 160) + "...";
			  button.textContent = "Read more";
			}
			expanded = !expanded;
		  }
		
});