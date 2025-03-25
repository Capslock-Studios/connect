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


    
	document.addEventListener("DOMContentLoaded", () => {
        fetch("https://dbconn-b837.onrender.com/api/products?companyId=${companyId}")
          .then(response => response.json())
          .then(data => {
            const productContainer = document.querySelector(".lap-box");
            productContainer.innerHTML = ""; // Clear previous content
      
            data.forEach(product => {
              const productCard = `
                <div class="card">
                   <div class="card-img product-image">
                                      <img src="${product.ProductImage}" alt="${product.title}">
                                  </div>
                  <div class="card-info">
                    <p class="text-title">${product.title}</p>
                    <p class="text-body">${product.productDescription}</p>
                  </div>
                  <div class="card-footer">
                    <span class="text-title">${product.ProductPrice}</span>
                    <div class="card-button">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              `;
              productContainer.innerHTML += productCard;
            });
          })
          .catch(error => console.error("Error fetching products:", error));
      });
      

      
	//
	//document.getElementById("addCompanyBtn").addEventListener("click", function () {
//document.getElementById("addCompanyForm").style.display = "block";
//});
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
	img.onclick = () => displayCompanyDetails(createdCompany);
	logoContainer.appendChild(img);

} catch (error) {
	console.error("Error:", error);
	alert("Error adding company");
}
});
///
// Fetch and display posts for a company
async function fetchPosts(companyId) {
    try {
        const response = await fetch(`https://dbconn-b837.onrender.com/api/posts?companyId=${companyId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();
        const postsContainer = document.getElementById("posts-container");
        
        // Clear old posts
        postsContainer.innerHTML = "";

        if (posts.length === 0) {
            postsContainer.innerHTML = `<div class="no-posts">No posts available yet.</div>`;
            return;
        }

        // Create document fragment for better performance
        const fragment = document.createDocumentFragment();

        posts.forEach(post => {
            const postElement = document.createElement("article");
            postElement.className = "post-card";
            
            // Format date nicely
            const postDate = new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            postElement.innerHTML = `
                <div class="post-header">
                    <img src="${post.companyLogo || 'default-logo.png'}" 
                         alt="${post.companyName || 'Company'} logo" 
                         class="company-logo">
                    <div class="post-meta">
                        <h4>${post.companyName || 'Company'}</h4>
                        <time datetime="${post.createdAt}">${postDate}</time>
                    </div>
                </div>
                <div class="post-content">
                    <p>${post.content || ''}</p>
                </div>
                ${post.media && post.media.length > 0 ? `
                <div class="post-media">
                    <img src="${post.media[0]}" 
                         alt="Post media content" 
                         class="post-image"
                         loading="lazy">
                </div>` : ''}
                <div class="post-actions">
                    <button class="action-btn like-btn">
                        <i class="far fa-thumbs-up"></i> Like
                    </button>
                    <button class="action-btn comment-btn">
                        <i class="far fa-comment"></i> Comment
                    </button>
                    <button class="action-btn share-btn">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            `;

            fragment.appendChild(postElement);
        });

        postsContainer.appendChild(fragment);

    } catch (error) {
        console.error("Error fetching posts:", error);
        const postsContainer = document.getElementById("posts-container");
        postsContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Unable to load posts. Please try again later.</p>
            </div>
        `;
    }
}




	// Fetch and display products
	async function fetchProducts(companyId) {
		try {
			let response = await fetch(`https://dbconn-b837.onrender.com/api/products?companyId=${companyId}`);
			let products = await response.json();
			let productsContainer = document.getElementById("products-container");
			productsContainer.innerHTML = ""; // Clear old products

			if (products.length === 0) {
				productsContainer.innerHTML = "<p>No products available.</p>";
				return;
			}

			products.forEach(product => {
				let productElement = document.createElement("div");
                productElement.style.backgroundColor = "green";

				productElement.classList.add("product");

				productElement.innerHTML = `
    <div class="card">
        <div class="card-img">
            <img src="${product.ProductImage}" alt="${product.title}">
        </div>
        <div class="card-info">
            <p class="text-title">${product.title}</p>
            <p class="text-body">${product.productDescription}</p>
        </div>
        <div class="card-footer">
            <span class="text-title">${product.ProductPrice}</span>
        </div>
    </div>
`;
productsContainer.appendChild(productElement);

			});

		} catch (error) {
			console.error("Error fetching products:", error);
		}
	}

	// Fetch and display companies
	async function fetchCompanies() {
		const response = await fetch('https://dbconn-b837.onrender.com/api/companies');
		const companies = await response.json();
		const logoContainer = document.getElementById('logoContainer');
		
		companies.forEach(company => {
			const img = document.createElement('img');
			img.src = company.logo;
			img.className = 'logo';
			img.onclick = () => displayCompanyDetails(company);
			logoContainer.appendChild(img);
		});
	}

	function displayCompanyDetails(company) {
		document.getElementById('companyName').innerText = company.name;
		document.getElementById('category').innerText = company.category;
		document.getElementById('description').innerText = company.description;
		document.getElementById('email').innerText = company.email;
		document.getElementById('phone').innerText = company.phoneNumber;
		document.getElementById('logo').innerText = company.profilePicture;
		
		getLocationName(company.location.latitude.$numberDouble, company.location.longitude.$numberDouble)
			.then(suburb => document.getElementById('location').innerText = suburb)
			.catch(() => document.getElementById('location').innerText = 'Unknown');
		
		document.getElementById('companyDetails').style.display = 'block';

		// Fetch posts and products for this company
		fetchPosts(company._id);
		fetchProducts(company._id);
	}

	async function getLocationName(lat, lon) {
		const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
		const data = await response.json();
		return data.address.suburb || data.address.city || 'Unknown';
	}

	fetchCompanies();

