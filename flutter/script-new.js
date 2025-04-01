// scripts.js - Contains all the application logic

// App State
const state = {
    currentCompany: null,
    currentSection: 'home',
    darkMode: false,
    scrollPosition: 0
};

// DOM Elements
const topNav = document.getElementById('topNav');
const bottomNav = document.getElementById('bottomNav');
const content = document.getElementById('content');
const searchBar = document.getElementById('searchBar');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.getElementById('searchBtn');
const themeBtn = document.getElementById('themeBtn');
const homeBtn = document.getElementById('homeBtn');

// Initialize the app
function init() {
    loadCompanyLogos();
    setupEventListeners();
    goHome();
    
    // Set initial theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }
}

// Load company logos in top navigation
function loadCompanyLogos() {
    companies.forEach(company => {
        const logo = document.createElement('img');
        logo.src = company.logo;
        logo.alt = company.name;
        logo.title = company.name;
        logo.className = 'company-logo';
        logo.dataset.companyId = company.id;
        topNav.appendChild(logo);
    });
}

// Set up all event listeners
function setupEventListeners() {
    // Scroll event for bottom nav visibility
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        // Show/hide bottom nav based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            bottomNav.classList.remove('visible');
        } else if (currentScroll < lastScroll - 5) {
            // Scrolling up
            bottomNav.classList.add('visible');
        }
        
        lastScroll = currentScroll;
    });
    
    // Company logo click event
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('company-logo')) {
            loadCompanyContent(e.target.dataset.companyId);
        }
    });
    
    // Bottom nav item clicks
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            loadSection(section);
        });
    });
    
    // Floating button events
    searchBtn.addEventListener('click', toggleSearch);
    themeBtn.addEventListener('click', toggleTheme);
    homeBtn.addEventListener('click', goHome);
    
    // Search input event
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', () => {
        bottomNav.classList.remove('visible');
    });
    
    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target) && e.target !== searchBtn) {
            searchBar.style.display = 'none';
        }
    });
}

// Load company content
function loadCompanyContent(companyId) {
    const company = companies.find(c => c.id === companyId);
    if (!company) return;
    
    state.currentCompany = company;
    state.currentSection = 'home';
    
    // Highlight selected company logo
    document.querySelectorAll('.company-logo').forEach(logo => {
        logo.classList.toggle('active', logo.dataset.companyId === companyId);
    });
    
    // Update URL without reload
    history.pushState({ companyId }, '', `#${companyId}`);
    
    // Load company home content
    loadCompanyHomeContent(company);
}

// Load company home content
function loadCompanyHomeContent(company) {
    let html = `
        <div class="company-profile">
            <div class="cover-photo" style="background-color: #f0f0f0; height: 200px; margin-bottom: 20px;"></div>
            
            <div class="profile-header">
                <img src="${company.logo}" alt="${company.name}" class="profile-logo" style="width: 80px; height: 80px; border-radius: 8px; margin-right: 20px;">
                <div>
                    <h1>${company.name}</h1>
                    <p class="company-website"><a href="${company.website}" target="_blank">${company.website}</a></p>
                </div>
            </div>
            
            <div class="company-description">
                <p>${company.about.description}</p>
            </div>
            
            <div class="company-contact" style="margin: 20px 0;">
                <h3>Contact</h3>
                <p>Email: ${company.about.contact.email}</p>
                <p>Phone: ${company.about.contact.phone}</p>
            </div>
            
            <div class="company-videos">
                <h2>Videos</h2>
    `;
    
    // Add featured video (first video)
    if (company.video_posts && company.video_posts.length > 0) {
        const featuredVideo = company.video_posts[0];
        html += `
            <div class="featured-video" style="margin-bottom: 30px;">
                <h3>${featuredVideo.title}</h3>
                <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
                    <iframe src="${featuredVideo.video_url}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"></iframe>
                </div>
                <p>${featuredVideo.description}</p>
            </div>
        `;
        
        // Add video list
        if (company.video_posts.length > 1) {
            html += `<div class="video-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;">`;
            company.video_posts.slice(1).forEach(video => {
                html += `
                    <div class="video-item">
                        <div class="video-thumbnail" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; background-color: #000; margin-bottom: 10px;">
                            <img src="${video.thumbnail}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 30px; color: white;">▶</div>
                        </div>
                        <h4>${video.title}</h4>
                    </div>
                `;
            });
            html += `</div>`;
        }
    } else {
        html += `<p>No videos available</p>`;
    }
    
    html += `</div></div>`;
    
    content.innerHTML = html;
    window.scrollTo(0, 0);
}

// Load section (Home, Shop, Social, Contact)
function loadSection(section) {
    state.currentSection = section;
    
    if (!state.currentCompany) {
        // If no company selected, show welcome message
        goHome();
        return;
    }
    
    switch(section) {
        case 'home':
            loadCompanyHomeContent(state.currentCompany);
            break;
        case 'shop':
            loadShopContent(state.currentCompany);
            break;
        case 'social':
            loadSocialContent(state.currentCompany);
            break;
        case 'contact':
            loadContactContent(state.currentCompany);
            break;
        default:
            loadCompanyHomeContent(state.currentCompany);
    }
}

// Load shop content
function loadShopContent(company) {
    let html = `
        <div class="shop-content">
            <h1>${company.name} Shop</h1>
            <div class="shop-banner" style="background-color: #f0f0f0; height: 150px; margin: 20px 0; display: flex; align-items: center; justify-content: center;">
                <h2>Featured Products</h2>
            </div>
            
            <div class="product-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">
    `;
    
    if (company.products && company.products.length > 0) {
        company.products.forEach(product => {
            html += `
                <div class="product-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <div class="product-image" style="height: 200px; background-color: #f5f5f5;">
                        <img src="${product.product_img}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain;">
                    </div>
                    <div class="product-details" style="padding: 15px;">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p style="font-weight: bold; margin: 10px 0;">R${product.price}</p>
                        <div style="display: flex; gap: 10px;">
                            <button class="add-to-cart" style="padding: 8px 15px; background: #1877f2; color: white; border: none; border-radius: 4px; cursor: pointer;">Add to Cart</button>
                            <button class="buy-now" style="padding: 8px 15px; background: #42b72a; color: white; border: none; border-radius: 4px; cursor: pointer;">Buy Now</button>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        html += `<p>No products available</p>`;
    }
    
    html += `</div></div>`;
    
    content.innerHTML = html;
    
    // Add event listeners to buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Your item was added to cart');
        });
    });
    
    document.querySelectorAll('.buy-now').forEach(btn => {
        btn.addEventListener('click', () => {
            const phone = state.currentCompany.about.contact.phone;
            const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}?text=I%20want%20to%20buy%20this%20product`;
            window.open(whatsappUrl, '_blank');
        });
    });
    
    window.scrollTo(0, 0);
}

// Load social content
function loadSocialContent(company) {
    let html = `
        <div class="social-content">
            <h1>${company.name} Social</h1>
            
            <div class="post-list" style="margin-top: 20px;">
    `;
    
    if (company.posts && company.posts.length > 0) {
        company.posts.forEach(post => {
            html += `
                <div class="post" style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <h3>${post.title}</h3>
                    <p style="color: #666; margin: 5px 0;">Posted on ${post.date}</p>
                    <p>${post.content}</p>
                </div>
            `;
        });
    } else {
        html += `<p>No posts available</p>`;
    }
    
    // Add petitions if available
    if (company.petitions && company.petitions.length > 0) {
        html += `<h2 style="margin-top: 30px;">Petitions</h2>`;
        company.petitions.forEach(petition => {
            html += `
                <div class="petition" style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <h3>${petition.title}</h3>
                    <p>${petition.description}</p>
                    <p style="font-weight: bold; margin-top: 10px;">${petition.signatures} signatures</p>
                    <button style="padding: 8px 15px; background: #1877f2; color: white; border: none; border-radius: 4px; margin-top: 10px; cursor: pointer;">Sign Petition</button>
                </div>
            `;
        });
    }
    
    html += `</div></div>`;
    content.innerHTML = html;
    window.scrollTo(0, 0);
}

// Load contact content
function loadContactContent(company) {
    const contact = company.about.contact;
    content.innerHTML = `
        <div class="contact-content">
            <h1>Contact ${company.name}</h1>
            
            <div class="contact-methods" style="margin-top: 20px;">
                <div class="contact-card" style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <h3>Email</h3>
                    <p>${contact.email}</p>
                    <button onclick="window.location.href='mailto:${contact.email}'" style="padding: 8px 15px; background: #1877f2; color: white; border: none; border-radius: 4px; margin-top: 10px; cursor: pointer;">Send Email</button>
                </div>
                
                <div class="contact-card" style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <h3>Phone</h3>
                    <p>${contact.phone}</p>
                    <button onclick="window.location.href='tel:${contact.phone.replace(/\D/g, '')}'" style="padding: 8px 15px; background: #42b72a; color: white; border: none; border-radius: 4px; margin-top: 10px; cursor: pointer;">Call Now</button>
                    <button onclick="window.open('https://wa.me/${contact.phone.replace(/\D/g, '')}', '_blank')" style="padding: 8px 15px; background: #25D366; color: white; border: none; border-radius: 4px; margin-top: 10px; margin-left: 10px; cursor: pointer;">WhatsApp</button>
                </div>
                
                <div class="contact-card" style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <h3>Website</h3>
                    <p><a href="${company.website}" target="_blank">${company.website}</a></p>
                    <button onclick="window.open('${company.website}', '_blank')" style="padding: 8px 15px; background: #333; color: white; border: none; border-radius: 4px; margin-top: 10px; cursor: pointer;">Visit Website</button>
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

// Toggle search bar visibility
function toggleSearch() {
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    if (searchBar.style.display === 'block') {
        searchInput.focus();
    }
}

// Handle search input
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    if (query.length < 2) return;
    
    const results = companies.filter(company => 
        company.name.toLowerCase().includes(query) ||
        company.about.description.toLowerCase().includes(query)
    );
    
    // For now, just log results - we'll implement proper search results display later
    console.log('Search results:', results);
}

// Toggle dark/light theme
function toggleTheme() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark-theme', state.darkMode);
    
    // Update theme button icon
    themeBtn.innerHTML = state.darkMode ? '☀️' : '🌙';
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', state.darkMode);
}

// Go to home
function goHome() {
    state.currentCompany = null;
    state.currentSection = 'home';
    
    content.innerHTML = `
        <div class="welcome-message" style="text-align: center; padding: 40px 20px;">
            <h1>Welcome to WhatsNext</h1>
            <p style="font-size: 1.2rem; margin: 20px 0;">Select a company from the top navigation to view their profile.</p>
            <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 40px;">
                ${companies.map(company => `
                    <div class="company-card" style="background: white; padding: 20px; border-radius: 8px; width: 200px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center; cursor: pointer;" data-company-id="${company.id}">
                        <img src="${company.logo}" alt="${company.name}" style="width: 80px; height: 80px; object-fit: contain; margin-bottom: 15px;">
                        <h3>${company.name}</h3>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add click event to company cards
    document.querySelectorAll('.company-card').forEach(card => {
        card.addEventListener('click', () => {
            loadCompanyContent(card.dataset.companyId);
        });
    });
    
    // Remove active class from all logos
    document.querySelectorAll('.company-logo').forEach(logo => {
        logo.classList.remove('active');
    });
    
    // Update URL
    history.pushState({}, '', window.location.pathname);
    window.scrollTo(0, 0);
}

// Handle back/forward navigation
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.companyId) {
        loadCompanyContent(e.state.companyId);
    } else {
        goHome();
    }
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);