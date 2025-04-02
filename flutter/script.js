// Replace the entire script section from the previous code with this updated version

    // Database of companies (from your provided data)
    const companies = [
        {
            id: "c2",
            name: "WhatsNext",
            logo: "https://i.ibb.co/1Yj76MQW/whatsnext.png",
            about: {
                description: "Our mission is to empower businesses through mentorship, strategic partnerships, and access to vital resources. We also keep our community informed with the latest industry news and trends, while our podcast features in-depth discussions with experts, entrepreneurs, and changemakers shaping the future.",
                website: "https://whatsnext.joburg",
                cover_img: "",
                contact: {
                    email: "contact@whatsnext.joburg",
                    phone: "+9876543210"
                }
            },
            posts: [
                {
                    id: "p2",
                    title: "Introducing WhatsNext",
                    content: "Your one-stop hub for all things entrepreneurship! We deliver the latest news, updates, and trends on the companies you care about.",
                    date: "2025-03-20",
                }
            ],
            petitions: [
                {
                    id: "pt2",
                    title: "Ban Plastic Waste",
                    description: "Support our movement to eliminate single-use plastics.",
                    signatures: 5000
                }
            ],
            video_posts: [
                {
                    id: "v2",
                    title: "Justice for Cwecwe | Bureaucracy should not stand in our way: Themba Masango",
                    description: "Civil rights movement, Not in My Name has called for an overhaul on how schools and officials handle the rape of learners at school. This is after a public outrage at the lack of cooperation by school officials, following the rape of a seven- year old girl on school premises in the Eastern Cape.",
                    video_url: "https://www.youtube.com/embed/cm_vs93GJgs",
                    thumbnail: "https://yt3.googleusercontent.com/x5Bgc7UBYZvOHvp3UG91lZbV6ND0YCOi2a026vLPDGIU5GF2qp5JnHnCeLyPegWhEjM5njpN=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    id: "v2",
                    title: "School deregistered for mishandling rape case: Vuyiseka Mboxela",
                    description: "The Eastern Cape department of Education has deregistered a Matatiele based private school following the refusal of the school management to cooperate in the rape investigation of a seven year old learner.",
                    video_url: "https://www.youtube.com/embed/3NB0alyk_8o",
                    thumbnail: "https://yt3.googleusercontent.com/x5Bgc7UBYZvOHvp3UG91lZbV6ND0YCOi2a026vLPDGIU5GF2qp5JnHnCeLyPegWhEjM5njpN=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    id: "v2",
                    title: "Buy Local Conference",
                    description: "Proudly South African hosted a protest during our buy local conference in Sandton Convention Center.",
                    video_url: "https://www.youtube.com/embed/tg0soDatGDo?autoplay=1&mute=1&loop=1&controls=0",
                    thumbnail: "https://i.ibb.co/1Yj76MQW/whatsnext.png"
                },
                {
                    id: "v2",
                    title: "1 pulse online",
                    description: "For Community engagement and government accountability, hear out 1Pulse online.",
                    video_url: "https://www.youtube.com/embed/fLQwwh5sSWQ?autoplay=1&mute=1&loop=1&controls=0",
                    thumbnail: "https://i.ibb.co/1Yj76MQW/whatsnext.png"
                }
            ],
            picture_posts: [
                {
                    id: "pic2",
                    title: "The Birth of WhatsNext!",
                    description:"Your one-stop hub for all things entrepreneurship! We deliver the latest news, updates, and trends on the companies you care about.",
                    image_url: "siya-whatsnext.jpg",
                    image_url2: "group-whatsnext.jpg",
                    image_url3: "madness-whatsnext.jpg"
                }
            ],
            savvies: [
                {
                    id: "s2",
                    topic: "Where would you like us to go next?", 
                    details:"We are a movement therefore we would like to know where some of our people are at.",
                    votes: 80,
                    date: "02.03.25"
                }
            ],
            products: [
                { id: "pr4", name: "WhatsNext - NotLikeUs T-shirt", purchaseLink:"", description:"Promotional Crop top T-shirt for the whatsnext movement.", product_img:"https://mongo-piano.netlify.app/WhatsNext-T-shirt.png", price: 250 },
                { id: "pr3", name: "WhatsNext - Squabbleup Promotions T-shirt", purchaseLink:"", description:"Promotional T-shirt for the whatsnext movement.", product_img:"https://mongo-piano.netlify.app/t-shirt-squabbleup.png", price: 250 },
                { id: "pr4", name: "WhatsNext - NotLikeUs T-shirt", purchaseLink:"", description:"Promotional Crop top T-shirt for the whatsnext movement.", product_img:"https://mongo-piano.netlify.app/t-shirt-NotLikeUs.png", price: 250 },
                { id: "pr4", name: "WhatsNext - Mastaard T-shirt", purchaseLink:"", description:"Promotional Crop top T-shirt for the whatsnext movement.", product_img:"https://mongo-piano.netlify.app/t-shirt-Mastard.png", price: 250 }
            ],
            services: [
                { id: "sv2", name: "Networking",  purchaseLink:"", description: "We host Networking sessions at Tshimologong.", price: 0 }
            ]
        },
        {
            id: "c2",
            name: "Proudly South African",
            logo: "https://whatsnextgp.netlify.app/Img/psa.png",
            about: {
                description: "Proudly South African, the country's national buy local campaign, seeks to influence local procurement in the public and private sectors and to influence consumers to buy local, thereby stimulating local production and manufacturing which in turn leads to job creation.",
                website: "https://proudlysa.co.za/",
                contact: {
                    email: "info@proudlysa.co.za",
                    phone: "+27 (11) 327 7778"
                }
            },
            posts: [
             
            ],
            petitions: [
              
            ],
            video_posts: [
                {
                    id: "v2",
                    title: "Marchers demand justice for Cwecwe",
                    description: "Over 100 people including activists and students marched across Johannesburg on Sunday calling for justice for a 7-year-old girl who was raped at her Eastern Cape school.",
                    video_url: "https://www.youtube.com/embed/4il1KHB_pnU",
                    thumbnail: "https://whatsnextgp.netlify.app/Img/psa.png"
                },
                {
                    id: "v2",
                    title: "Buy Local Conference",
                    description: "We hosted a protest during our buy local conference in Sandton Convention Center.",
                    video_url: "https://www.youtube.com/embed/1Po6yjmkG-Q?autoplay=1&mute=1&loop=1&controls=0",
                    thumbnail: "https://whatsnextgp.netlify.app/Img/psa.png"
                },
                {
                    id: "v2",
                    title: "Buy Local Conference",
                    description: "We hosted a protest during our buy local conference in Sandton Convention Center.",
                    video_url: "https://www.youtube.com/embed/tg0soDatGDo?autoplay=1&mute=1&loop=1&controls=0",
                    thumbnail: "https://whatsnextgp.netlify.app/Img/psa.png"
                }
            ],
            picture_posts: [
               
            ],
            savvies: [
                {
                    id: "s2",
                    topic: "How Can We Achieve 100% Renewable Energy?",
                    votes: 800
                }
            ],
            products: [
                { id: "pr3", name: "WhatsNext Promotional - T-shirt - ", product_img:"https://mongo-piano.netlify.app/t-shirt-squabbleup.png", price: 250 },
                { id: "pr4", name: "WhatsNext Promotional - T-shirt - ", product_img:"https://mongo-piano.netlify.app/t-shirt-NotLikeUs.png", price: 250 },
                { id: "pr4", name: "WhatsNext Promotional - T-shirt - ", product_img:"https://mongo-piano.netlify.app/t-shirt-Mastard.png", price: 250 },
                { id: "pr4", name: "WhatsNext Promotional - T-shirt - ", product_img:"https://mongo-piano.netlify.app/WhatsNext-T-shirt.png", price: 250 }
            ],
            services: [
              
            ]
        },
         {
            id: "c2",
            name: "Tshimologong",
            logo: "https://i.ibb.co/jPG8vdF4/Tshimologong.png",
            about: {
                description: "Sustainable energy solutions provider.",
                website: "https://greenenergy.com",
                contact: {
                    email: "contact@greenenergy.com",
                    phone: "+9876543210"
                }
            },
            posts: [
              
            ],
            petitions: [
             
            ],
            video_posts: [
               
            ],
            picture_posts: [
             
            ],
            savvies: [
               
            ],
            products: [
                
            ],
            services: [
              
            ]
        },
        {
            id: "c2",
            name: "1Pulse online",
            logo: "https://i.ibb.co/Q35sd45k/1pulse-online-logo-CRc-L2.png",
            about: {
                description: "Community collaboration platform with tools.",
                website: "https://1pulse.online/",
                contact: {
                    email: "contact@1pulse.online",
                    phone: "+9876543210"
                }
            },
            posts: [
              
            ],
            petitions: [
                {
                    id: "pt2",
                    title: "Community Petition",
                    cover_img: "https://mongo-piano.netlify.app/1pulse-cover.jpg",
                    description: "We would like you to be a part of a constitutional community structure that is responsible for holding the minicipality accountable. A community Trust.The Community Trust will act as a governing body ensuring fair allocation of municipal funds. Our mission is to bring transparency, accountability, and community-driven decision-making to budget spending. Being part of the Trust means giving a little time each week to make big changes in how our city works. ✅ Commitment Members are asked to set aside one hour per week for discussions, budget reviews, and decision-making. 📊 Reviewing Finances The Financial Oversight Team will present budget details every week. Members will discuss where funds should go and flag any suspicious spending. 🗳️ Voting on Community Needs Each member votes on which projects need urgent funding. Votes are counted and submitted to the municipality. 📢 Making Your Voice Heard Community representatives gather input from their neighborhoods. They present concerns and priorities at weekly meetings. 👀 Tracking Progress The Project Monitoring Team tracks projects from start to finish. Updates are shared online and at meetings so everyone knows what’s happening. 💡 Life Cycle of the Trust. The decision-making process follows a structured cycle... 📢 Community submits concerns & budget suggestions. 🗳️ Weekly review & voting on financial needs ✅ Trust finalizes allocations & submits decisions 📊 Transparency reports shared with the community. 📊 Community Engagement",
                    signatures: 1
                }
            ],
            video_posts: [
                {
                    id: "v2",
                    title: "1 pulse online",
                    description: "One heart beat! For Community engagement and government accountability, hear out 1Pulse online.",
                    video_url: "https://www.youtube.com/embed/fLQwwh5sSWQ?autoplay=1&mute=1&loop=1&controls=0",
                    thumbnail: "https://i.ibb.co/1Yj76MQW/whatsnext.png"
                }
            ],
            picture_posts: [
            
            ],
            savvies: [
                {
                    id: "s2",
                    topic: "What fucntions would you liek to add the App?",
                    votes: 0
                }
            ],
            products: [
                { id: "pr4", name: "WhatsNext Promotional - 1pulse T-shirt - ", product_img:"https://mongo-piano.netlify.app/1pulse-T-shirt.png", price: 250 }
            
            ],
            services: [
                { id: "sv2", name: "We provide civic engagement resources and tool like the 1pulse oline platform and the CRM for case management.", description: "Evaluate your energy efficiency and optimize costs." }
            ]
        },
        {
            id: "c2",
            name: "BoniZulu",
            logo: "https://1pulse.online/images/bonizluu-fav.png",
            about: {
                description: "BoniZulu is a woman-centric fashion brand created by women, for women, celebrating the unique roles women play in society.",
                website: "https://greenenergy.com",
                contact: {
                    email: "contact@greenenergy.com",
                    phone: "+9876543210"
                }
            },
            posts: [
                {
                    id: "p2",
                    title: "The new Designs in line",
                    content: "Our focus extends beyond fashion into lifestyle and natural health products that support a woman’s journey. We design inclusive, empowering fashion choices that highlight strength, beauty, and diversity.",
                    date: "2025-03-20"
                }
            ],
            petitions: [
             
            ],
            video_posts: [
                
            ],
            picture_posts: [
               
            ],
            savvies: [
               
            ],
            products: [
                { id: "pr3", name: "WhatsNext - Crop-Top from BoniZulu", product_img:"https://mongo-piano.netlify.app/Bonizulu-cropTop.png", price: 500 },
                { id: "pr4", name: "WhatsNext - T-shirtp from BoniZulu", product_img:"https://mongo-piano.netlify.app/BoniZulu_Over-Sezed-T.png", price: 1200 }
            ],
            services: [
                { id: "sv2", name: "Fashion Design", description: "We design bespoke wear for people in all walks of life" }
            ]
        },
        {
            id: "c2",
            name: "Errand Camel",
            logo: "https://1pulse.online/images/errand%20camel%20logo.png",
            about: {
                description: "Sustainable energy solutions provider.",
                website: "https://greenenergy.com",
                contact: {
                    email: "contact@greenenergy.com",
                    phone: "+9876543210"
                }
            },
            posts: [
            ],
            petitions: [
              
                
            ],
            video_posts: [
               
                
            ],
            picture_posts: [
              
                
            ],
            savvies: [
                
                
            ],
            products: [
             
                
            ],
            services: [
           
                
            ]
        },
        {
            id: "c2",
            name: "Auko Designs",
            logo: "https://whatsnext.joburg/app/Auko.png",
            about: {
                description: "AUKODesigns is a leading 3D Industrial Design, R&D, and Manufacturing Company based in Johannesburg, South Africa. We specialize in turning ideas into reality using cutting-edge 3D Computer-Aided Design (CAD) software and advanced manufacturing technologies.",
                website: "https://www.aukodesigns.co.za/",
                contact: {
                    email: "contact@aukodesigns.co.za",
                    phone: " +26 60 615 7687"
                }
            },
            posts: [
            
            ],
            petitions: [
                {
                    id: "pt2",
                    title: "Community Petittion.",
                    cover_img: "https://mongo-piano.netlify.app/1pulse-cover.jpg",
                    description: "We would like you to be a part of a constitutional community structure that is responsible for holding the minicipality accountable. A community Trust.The Community Trust will act as a governing body ensuring fair allocation of municipal funds. Our mission is to bring transparency, accountability, and community-driven decision-making to budget spending. Being part of the Trust means giving a little time each week to make big changes in how our city works. ✅ Commitment Members are asked to set aside one hour per week for discussions, budget reviews, and decision-making. 📊 Reviewing Finances The Financial Oversight Team will present budget details every week. Members will discuss where funds should go and flag any suspicious spending. 🗳️ Voting on Community Needs Each member votes on which projects need urgent funding. Votes are counted and submitted to the municipality. 📢 Making Your Voice Heard Community representatives gather input from their neighborhoods. They present concerns and priorities at weekly meetings. 👀 Tracking Progress The Project Monitoring Team tracks projects from start to finish. Updates are shared online and at meetings so everyone knows what’s happening. 💡 Life Cycle of the Trust. The decision-making process follows a structured cycle... 📢 Community submits concerns & budget suggestions. 🗳️ Weekly review & voting on financial needs ✅ Trust finalizes allocations & submits decisions 📊 Transparency reports shared with the community. 📊 Community Engagement",
                    signatures: 67,
                    date:"",
                    time:"",
                    location:""
                }
            ],
            video_posts: [
              
            ],
            picture_posts: [
               
            ],
            savvies: [
               
            ],
            products: [
                { id: "pr3", name: "AUKODesigns Chef Apron", product_img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4OKPVGw7a3Cqyk4MXrRTKXvFFeWd5e2L8UXTEjnsZqdIg3s4XUokIlGDUhtei0AOHvssfpFT7zXFYY9N7oh_RMNQHL8OR24G0ELVvPPHKEA7yUPETwmqI&usqp=CAE", description:"AUKODesigns gives you a locally designed and manufactured high-end customisable Chef Apron.", price: 850.00},   
                { id: "pr3", name: "AUKO Designs", product_img:"https://media.takealot.com/covers_images/1cba16b478104528972390ff552bf758/s-zoom.file", description:"Auko Designs South Africa Map Puzzle.", price: 250.00},
            
            ],
            services: [
                { id: "sv2", name: "Energy Audits", description: "Evaluate your energy efficiency and optimize costs." }
            ]
        },
        {
            id: "c2",
            name: "Jozi My Jozi",
            logo: "https://i.ibb.co/39Z55ry2/JmJ.png",
            about: {
                description: "Community collaboration platform with tools.",
                website: "https://1pulse-online-beta.netlify.app/",
                contact: {
                    email: "contact@1pulse.online",
                    phone: "+9876543210"
                }
            },
            posts: [
               
            ],
            petitions: [
                
                
            ],
            video_posts: [
               
            ],
            picture_posts: [
                
            ],
            savvies: [
               
            ],
            products: [
              
            ],
            services: [
               
            ]
        },
        {
            id: "c2",
            name: "The governing of national unity",
            logo: "https://i.ibb.co/YwWPCP8/G20-logo.png",
            about: {
                description: "Community collaboration platform with tools.",
                website: "https://1pulse-online-beta.netlify.app/",
                contact: {
                    email: "contact@1pulse.online",
                    phone: "+9876543210"
                }
            },
            posts: [
               
            ],
            petitions: [
               
            ],
            video_posts: [
               
            ],
            picture_posts: [
               
            ],
            savvies: [
                
            ],
            products: [
               
            ],
            services: [
             
            ]
        },
    ];


    // In your existing state object, add these properties:
const state = {
    currentCompany: null,
    currentSection: 'home',
    darkMode: false,
    scrollPosition: 0,
    // Add these new properties:
    videoViewMode: 'youtube', // 'youtube' or 'tiktok'
    fullscreenVideo: null,
    // Add any other existing state properties you already have
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

  // Enhanced Company Profile Widget
function loadCompanyHomeContent(company) {
    let html = `
        <div class="company-profile">
            <div class="cover-photo" style="${company.about.cover_img ? `background-image: url('${company.about.cover_img}')` : 'background-color: #f0f0f0'}">
                <div style="position: absolute; bottom: 20px; right: 20px;">
                    <button class="btn-primary">Follow</button>
                </div>
            </div>
            
            <div class="profile-header">
                <img src="${company.logo}" alt="${company.name}" class="profile-logo">
                <div class="profile-header-content">
                    <h1 class="company-name">${company.name}</h1>
                    <p class="company-website"><a href="${company.website}" target="_blank">${company.website}</a></p>
                </div>
            </div>
            
            <div class="profile-tabs">
                <div class="tab active" data-tab="about">About</div>
                <div class="tab" data-tab="videos">Videos</div>
                <div class="tab" data-tab="posts">Posts</div>
                <div class="tab" data-tab="petitions">Petitions</div>
            </div>
            
            <div class="tab-content" id="about-tab">
                <div class="company-description">
                    <p>${company.about.description}</p>
                </div>
                
                <div class="company-contact">
                    <h3>Contact</h3>
                    <p>Email: ${company.about.contact.email}</p>
                    <p>Phone: ${company.about.contact.phone}</p>
                </div>
            </div>
            
            <div class="tab-content" id="videos-tab" style="display: none;">
        ${createVideoFeed(company)}
    </div>
    `;
    
    // Videos tab content
    if (company.video_posts && company.video_posts.length > 0) {
        const featuredVideo = company.video_posts[0];
        html += `
            <div class="featured-video">
                <h3>${featuredVideo.title}</h3>
                <div class="video-container">
                    <iframe src="${featuredVideo.video_url}" allowfullscreen></iframe>
                </div>
                <p>${featuredVideo.description}</p>
            </div>
        `;
        
        if (company.video_posts.length > 1) {
            html += `<div class="video-list">`;
            company.video_posts.slice(1).forEach(video => {
                html += `
                    <div class="video-item" data-video-url="${video.video_url}">
                        <div class="video-thumbnail">
                            <img src="${video.thumbnail}">
                            <div class="play-icon">▶</div>
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
    
    html += `</div>`;
    
    // Posts tab content
    html += `
        <div class="tab-content" id="posts-tab" style="display: none;">
            <div class="post-list">
    `;
    
    if (company.posts && company.posts.length > 0) {
        company.posts.forEach(post => {
            html += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p class="post-date">Posted on ${post.date}</p>
                    <p>${post.content}</p>
                </div>
            `;
        });
    } else {
        html += `<p>No posts available</p>`;
    }
    
    html += `</div></div>`;
    
    // Petitions tab content
    html += `
        <div class="tab-content" id="petitions-tab" style="display: none;">
    `;
    
    if (company.petitions && company.petitions.length > 0) {
        company.petitions.forEach(petition => {
            html += `
                <div class="petition">
                    <h3>${petition.title}</h3>
                    <p>${petition.description}</p>
                    <p class="signature-count">${petition.signatures} signatures</p>
                    <button class="btn-primary">Sign Petition</button>
                </div>
            `;
        });
    } else {
        html += `<p>No petitions available</p>`;
    }
    
    html += `</div></div>`;
    
    content.innerHTML = html;
    
    // Add tab switching functionality
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(`${tab.dataset.tab}-tab`).style.display = 'block';
        });
    });
    
    // Add video thumbnail click handlers
    document.querySelectorAll('.video-item').forEach(item => {
        item.addEventListener('click', () => {
            const videoUrl = item.dataset.videoUrl;
            const videoContainer = item.querySelector('.video-thumbnail');
            videoContainer.innerHTML = `
                <iframe src="${videoUrl}?autoplay=1" frameborder="0" allowfullscreen style="width: 100%; height: 100%;"></iframe>
            `;
        });
    });
    
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
























    function createVideoFeed(company) {
        if (!company.video_posts || company.video_posts.length === 0) {
            return '<p>No videos available</p>';
        }
    
        let html = `
            <div class="video-view-toggle ${state.darkMode ? 'dark' : ''}">
                <button class="video-view-btn ${state.videoViewMode === 'youtube' ? 'active' : ''} ${state.darkMode ? 'dark' : ''}" data-view="youtube">
                    YouTube Style
                </button>
                <button class="video-view-btn ${state.videoViewMode === 'tiktok' ? 'active' : ''} ${state.darkMode ? 'dark' : ''}" data-view="tiktok">
                    TikTok Style
                </button>
            </div>
        `;
    
        if (state.videoViewMode === 'youtube') {
            // YouTube style view implementation...
            // (Keep the existing YouTube view code)
        } else {
            // TikTok style view implementation...
            // (Keep the existing TikTok view code)
        }
    
        return html;
    }
    
    function setupVideoInteractions() {
        // View mode toggle
        document.querySelectorAll('.video-view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.videoViewMode = btn.dataset.view;
                if (state.currentCompany) {
                    loadCompanyContent(state.currentCompany.id);
                }
            });
        });
    
        // Fullscreen buttons
        document.querySelectorAll('.fullscreen-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                showFullscreenVideo(btn.dataset.videoUrl);
            });
        });
    
        // Video feed interactions
        const videoFeed = document.getElementById('video-feed');
        if (videoFeed) {
            // Auto-play videos when they come into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const video = entry.target.querySelector('video');
                    if (entry.isIntersecting) {
                        video.play().catch(e => console.log("Autoplay prevented:", e));
                    } else {
                        video.pause();
                    }
                });
            }, { threshold: 0.8 });
    
            document.querySelectorAll('.video-feed-item').forEach(item => {
                observer.observe(item);
            });
    
            // Like/comment/share buttons
            document.querySelectorAll('.like-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const count = btn.querySelector('.video-action-count');
                    count.textContent = parseInt(count.textContent) + 1;
                });
            });
        }
    }
    
    function showFullscreenVideo(videoUrl) {
        // Remove any existing fullscreen video
        const existing = document.querySelector('.video-fullscreen');
        if (existing) existing.remove();
    
        const fullscreenHtml = `
            <div class="video-fullscreen">
                <iframe src="${videoUrl}?autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                <button class="close-fullscreen">×</button>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', fullscreenHtml);
        document.body.style.overflow = 'hidden';
        
        document.querySelector('.close-fullscreen').addEventListener('click', () => {
            document.querySelector('.video-fullscreen').remove();
            document.body.style.overflow = '';
        });
    }