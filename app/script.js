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
        <div class="user-card" style=" margin-bottom: 0px !important; padding-bottom: 0px !important; margin-bottom: 10px;"  id="posts-container">
						<div class="cover-photo">
							<img src="${company.logo}" alt="Profile Picture" class="profile-photo">
						</div><div class="user-info">
							<h3>${company.name}</h3>
							<p>${company.about.description}</p>
						</div>
            <span><strong>Website:</strong> <p>${company.about.website}</p></span>
            <span><strong>Contact:</strong> ${company.about.contact.email} | ${company.about.contact.phone}</span>
						
						<div class="buttons">
							<button class="cta-btn">Contact</button>
							<button class="cta-btn">Message</button>
						</div>
					</div>
            
        `;

        companyPosts.innerHTML = `<h3>📌 Posts</h3>` + 
            company.posts.map(post => `
                <div><h4>${post.title}</h4><p>${post.content}</p><small>${post.date}</small></div>
                
                
                
                
                
                
                `).join("");

        companyPetitions.innerHTML = `<h3>📝 Petitions</h3>` + 
            company.petitions.map(petition => `<div><h4>${petition.title}</h4><p>${petition.description}</p><p>Signatures: ${petition.signatures}</p></div>`).join("");

        companyVideo_Posts.innerHTML = `<h3>📹 Video Posts</h3>` + 
            company.video_posts.map(video => `
               
                    <div class="tiktok-card" style="margin-bottom: 30px; float: left;">
						<div class="video-container">
							<iframe src="${video.video_url}" allowfullscreen></iframe>
						</div><!-- Floating User Info -->
						<div class="tiktok-user-info">
							<h4>${video.title}</h4>
							<p>${video.description}</p>
						</div>
						<!-- Floating Action Buttons -->
						<div class="floating-actions">
							<img src="${video.thumbnail}" alt="Profile Picture" class="profile-photo">
							<div>❤️ 1.2K</div>
							<div>💬 324</div>
							<div>↪️ 89</div>
						</div>
					</div>
              





                
            `).join("");

        companyPicture_Posts.innerHTML = `` + 
            company.picture_posts.map(pic => `
                             
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
						<div class="post-actions">
							<div>👍 Like</div>
							<div>💬 Comment</div>
							<div>↪️ Share</div>
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
});
