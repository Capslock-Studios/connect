
    
        // Existing code remains the same until displayCompanyDetails function
        
        // Modified displayCompanyDetails to use modal
        function displayCompanyDetails(company) {
            const modal = document.getElementById('companyModal');
            
            // Populate modal with company data
            document.getElementById('modalCompanyName').innerText = company.name;
            document.getElementById('modalCompanyCategory').innerText = company.category;
            document.getElementById('modalCompanyDescription').innerText = company.description;
            document.getElementById('modalCompanyLogo').src = company.logo;
            
            // Set social media links
            document.getElementById('modalFacebook').href = company.socialMedia?.facebook || '#';
            document.getElementById('modalTwitter').href = company.socialMedia?.twitter || '#';
            document.getElementById('modalInstagram').href = company.socialMedia?.instagram || '#';
            
            // Get location name
            getLocationName(company.location.latitude, company.location.longitude)
                .then(location => {
                    document.getElementById('modalCompanyLocation').innerText = location;
                })
                .catch(() => {
                    document.getElementById('modalCompanyLocation').innerText = 
                        `${company.location.latitude}, ${company.location.longitude}`;
                });
            
            // Load products and posts
            fetchModalProducts(company._id);
            fetchModalPosts(company._id);
            
            // Show modal
            modal.style.display = 'block';
        }
        
        // Close modal when clicking X
        document.querySelector('.close-modal').addEventListener('click', function() {
            document.getElementById('companyModal').style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('companyModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Fetch products for modal
        async function fetchModalProducts(companyId) {
            try {
                const response = await fetch(`https://dbconn-b837.onrender.com/api/products?companyId=${companyId}`);
                const products = await response.json();
                const container = document.getElementById('modalProductsContainer');
                
                container.innerHTML = products.map(product => `
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
                `).join('');
            } catch (error) {
                console.error("Error fetching products:", error);
                document.getElementById('modalProductsContainer').innerHTML = 
                    '<p>Error loading products</p>';
            }
        }
        
        // Fetch posts for modal
        async function fetchModalPosts(companyId) {
            try {
                const response = await fetch(`https://dbconn-b837.onrender.com/api/posts?companyId=${companyId}`);
                const posts = await response.json();
                const container = document.getElementById('modalPostsContainer');
                
                if (posts.length === 0) {
                    container.innerHTML = '<p>No posts available</p>';
                    return;
                }
                
                container.innerHTML = posts.map(post => `
                    <div class="post">
                        <p><strong>${new Date(post.createdAt).toLocaleDateString()}</strong></p>
                        <p>${post.content}</p>
                        ${post.media?.length > 0 ? 
                            `<img src="${post.media[0]}" alt="Post image" style="max-width: 200px;">` : ''}
                    </div>
                `).join('');
            } catch (error) {
                console.error("Error fetching posts:", error);
                document.getElementById('modalPostsContainer').innerHTML = 
                    '<p>Error loading posts</p>';
            }
        }
        
        // Keep all your existing functions (fetchCompanies, getLocationName, etc.)
        
        // Initialize
        fetchCompanies();