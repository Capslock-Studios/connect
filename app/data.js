const companies = [
    {
        id: "c2",
        name: "Proudly South African",
        logo: "https://whatsnextgp.netlify.app/Img/psa.png",
        about: {
            description: "Proudly South African, the country’s national buy local campaign, seeks to influence local procurement in the public and private sectors and to influence consumers to buy local, thereby stimulating local production and manufacturing which in turn leads to job creation.",
            website: "https://proudlysa.co.za/",
            contact: {
                email: "info@proudlysa.co.za",
                phone: "+27 (11) 327 7778"
            }
        },
        posts: [
            {
                id: "p2",
                title: "New Solar Panels Launched!",
                content: "Introducing our most efficient solar panels yet, with 30% more power output.",
                date: "2025-03-20"
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
                title: "Green Tech Innovations",
                video_url: "https://example.com/green-tech.mp4",
                thumbnail: "https://via.placeholder.com/150"
            }
        ],
        picture_posts: [
            {
                id: "pic2",
                title: "Solar Farms Expansion",
                image_url: "https://via.placeholder.com/200"
            }
        ],
        savvies: [
            {
                id: "s2",
                topic: "How Can We Achieve 100% Renewable Energy?",
                votes: 800
            }
        ],
        products: [
            { id: "pr3", name: "Solar Panel", price: 500 },
            { id: "pr4", name: "Wind Turbine", price: 1200 }
        ],
        services: [
            { id: "sv2", name: "Energy Audits", description: "Evaluate your energy efficiency and optimize costs." }
        ]
    },
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
                title: "Green Tech Innovations",
                video_url: "https://example.com/green-tech.mp4",
                thumbnail: "https://via.placeholder.com/150"
            }
        ],
        picture_posts: [
            {
                id: "pic2",
                title: "Solar Farms Expansion",
                image_url: "https://via.placeholder.com/200"
            }
        ],
        savvies: [
            {
                id: "s2",
                topic: "How Can We Achieve 100% Renewable Energy?",
                votes: 800
            }
        ],
        products: [
            { id: "pr3", name: "WhatsNext T-shirt", purchaseLink:"", description:"Promotional T-shirt for the whatsnext movement.", price: 450 },
            { id: "pr4", name: "WhatsNext Crop-Top", purchaseLink:"", description:"Promotional Crop top T-shirt for the whatsnext movement.", price: 600 }
        ],
        services: [
            { id: "sv2", name: "Energy Audits",  purchaseLink:"", description: "Evaluate your energy efficiency and optimize costs.", price: 1500 }
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
            {
                id: "p2",
                title: "New Solar Panels Launched!",
                content: "Introducing our most efficient solar panels yet, with 30% more power output.",
                date: "2025-03-20"
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
                title: "Green Tech Innovations",
                video_url: "https://example.com/green-tech.mp4",
                thumbnail: "https://via.placeholder.com/150"
            }
        ],
        picture_posts: [
            {
                id: "pic2",
                title: "Solar Farms Expansion",
                image_url: "https://via.placeholder.com/200"
            }
        ],
        savvies: [
            {
                id: "s2",
                topic: "How Can We Achieve 100% Renewable Energy?",
                votes: 800
            }
        ],
        products: [
            { id: "pr3", name: "Solar Panel", price: 500 },
            { id: "pr4", name: "Wind Turbine", price: 1200 }
        ],
        services: [
            { id: "sv2", name: "Energy Audits", description: "Evaluate your energy efficiency and optimize costs." }
        ]
    },
    {
        id: "c2",
        name: "1Pulse online",
        logo: "https://i.ibb.co/Q35sd45k/1pulse-online-logo-CRc-L2.png",
        about: {
            description: "Community collaboration platform with tools.",
            website: "https://1pulse-online-beta.netlify.app/",
            contact: {
                email: "contact@1pulse.online",
                phone: "+9876543210"
            }
        },
        posts: [
            {
                id: "p2",
                title: "New Solar Panels Launched!",
                content: "Introducing our most efficient solar panels yet, with 30% more power output.",
                date: "2025-03-20"
            }
        ],
        petitions: [
            {
                id: "pt2",
                title: "Community Savvy",
                cover_img: "https://mongo-piano.netlify.app/1pulse-cover.jpg",
                description: "We would like you to be a part of a constitutional community structure that is responsible for holding the minicipality accountable. A community Trust.The Community Trust will act as a governing body ensuring fair allocation of municipal funds. Our mission is to bring transparency, accountability, and community-driven decision-making to budget spending. Being part of the Trust means giving a little time each week to make big changes in how our city works. ✅ Commitment Members are asked to set aside one hour per week for discussions, budget reviews, and decision-making. 📊 Reviewing Finances The Financial Oversight Team will present budget details every week. Members will discuss where funds should go and flag any suspicious spending. 🗳️ Voting on Community Needs Each member votes on which projects need urgent funding. Votes are counted and submitted to the municipality. 📢 Making Your Voice Heard Community representatives gather input from their neighborhoods. They present concerns and priorities at weekly meetings. 👀 Tracking Progress The Project Monitoring Team tracks projects from start to finish. Updates are shared online and at meetings so everyone knows what’s happening. 💡 Life Cycle of the Trust. The decision-making process follows a structured cycle... 📢 Community submits concerns & budget suggestions. 🗳️ Weekly review & voting on financial needs ✅ Trust finalizes allocations & submits decisions 📊 Transparency reports shared with the community. 📊 Community Engagement",
                signatures: 67
            }
        ],
        video_posts: [
            {
                id: "v2",
                title: "Green Tech Innovations",
                video_url: "https://example.com/green-tech.mp4",
                thumbnail: "https://via.placeholder.com/150"
            }
        ],
        picture_posts: [
            {
                id: "pic2",
                title: "Solar Farms Expansion",
                image_url: "https://via.placeholder.com/200"
            }
        ],
        savvies: [
            {
                id: "s2",
                topic: "How Can We Achieve 100% Renewable Energy?",
                votes: 800
            }
        ],
        products: [
            { id: "pr3", name: "Solar Panel", price: 500 },
            { id: "pr4", name: "Wind Turbine", price: 1200 }
        ],
        services: [
            { id: "sv2", name: "Energy Audits", description: "Evaluate your energy efficiency and optimize costs." }
        ]
    },
    {
        id: "c2",
        name: "BoniZulu",
        logo: "https://1pulse.online/images/bonizluu-fav.png",
        about: {
            description: "Sustainable energy solutions provider.",
            website: "https://greenenergy.com",
            contact: {
                email: "contact@greenenergy.com",
                phone: "+9876543210"
            }
        },
        posts: [
            {
                id: "p2",
                title: "New Solar Panels Launched!",
                content: "Introducing our most efficient solar panels yet, with 30% more power output.",
                date: "2025-03-20"
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
                title: "Green Tech Innovations",
                video_url: "https://example.com/green-tech.mp4",
                thumbnail: "https://via.placeholder.com/150"
            }
        ],
        picture_posts: [
            {
                id: "pic2",
                title: "Solar Farms Expansion",
                image_url: "https://via.placeholder.com/200"
            }
        ],
        savvies: [
            {
                id: "s2",
                topic: "How Can We Achieve 100% Renewable Energy?",
                votes: 800
            }
        ],
        products: [
            { id: "pr3", name: "Solar Panel", price: 500 },
            { id: "pr4", name: "Wind Turbine", price: 1200 }
        ],
        services: [
            { id: "sv2", name: "Energy Audits", description: "Evaluate your energy efficiency and optimize costs." }
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
            {
                id: "p2",
                title: "New Solar Panels Launched!",
                content: "Introducing our most efficient solar panels yet, with 30% more power output.",
                date: "2025-03-20"
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
                title: "Green Tech Innovations",
                video_url: "https://example.com/green-tech.mp4",
                thumbnail: "https://via.placeholder.com/150"
            }
        ],
        picture_posts: [
            {
                id: "pic2",
                title: "Solar Farms Expansion",
                image_url: "https://via.placeholder.com/200"
            }
        ],
        savvies: [
            {
                id: "s2",
                topic: "How Can We Achieve 100% Renewable Energy?",
                votes: 800
            }
        ],
        products: [
            { id: "pr3", name: "Solar Panel", price: 500 },
            { id: "pr4", name: "Wind Turbine", price: 1200 }
        ],
        services: [
            { id: "sv2", name: "Energy Audits", description: "Evaluate your energy efficiency and optimize costs." }
        ]
    },
    {
        id: "c2",
        name: "Auko Designs",
        logo: "https://whatsnext.joburg/app/Auko.png",
        about: {
            description: "Community collaboration platform with tools.",
            website: "https://1pulse-online-beta.netlify.app/",
            contact: {
                email: "contact@1pulse.online",
                phone: "+9876543210"
            }
        },
        posts: [
            {
                id: "p2",
                title: "New Solar Panels Launched!",
                content: "Introducing our most efficient solar panels yet, with 30% more power output.",
                date: "2025-03-20"
            }
        ],
        petitions: [
            {
                id: "pt2",
                title: "Community Savvy",
                cover_img: "https://mongo-piano.netlify.app/1pulse-cover.jpg",
                description: "We would like you to be a part of a constitutional community structure that is responsible for holding the minicipality accountable. A community Trust.The Community Trust will act as a governing body ensuring fair allocation of municipal funds. Our mission is to bring transparency, accountability, and community-driven decision-making to budget spending. Being part of the Trust means giving a little time each week to make big changes in how our city works. ✅ Commitment Members are asked to set aside one hour per week for discussions, budget reviews, and decision-making. 📊 Reviewing Finances The Financial Oversight Team will present budget details every week. Members will discuss where funds should go and flag any suspicious spending. 🗳️ Voting on Community Needs Each member votes on which projects need urgent funding. Votes are counted and submitted to the municipality. 📢 Making Your Voice Heard Community representatives gather input from their neighborhoods. They present concerns and priorities at weekly meetings. 👀 Tracking Progress The Project Monitoring Team tracks projects from start to finish. Updates are shared online and at meetings so everyone knows what’s happening. 💡 Life Cycle of the Trust. The decision-making process follows a structured cycle... 📢 Community submits concerns & budget suggestions. 🗳️ Weekly review & voting on financial needs ✅ Trust finalizes allocations & submits decisions 📊 Transparency reports shared with the community. 📊 Community Engagement",
                signatures: 67
            }
        ],
        video_posts: [
            {
                id: "v2",
                title: "Green Tech Innovations",
                video_url: "https://example.com/green-tech.mp4",
                thumbnail: "https://via.placeholder.com/150"
            }
        ],
        picture_posts: [
            {
                id: "pic2",
                title: "Solar Farms Expansion",
                image_url: "https://via.placeholder.com/200"
            }
        ],
        savvies: [
            {
                id: "s2",
                topic: "How Can We Achieve 100% Renewable Energy?",
                votes: 800
            }
        ],
        products: [
            { id: "pr3", name: "Solar Panel", price: 500 },
            { id: "pr4", name: "Wind Turbine", price: 1200 }
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
            {
                id: "p2",
                title: "New Solar Panels Launched!",
                content: "Introducing our most efficient solar panels yet, with 30% more power output.",
                date: "2025-03-20"
            }
        ],
        petitions: [
            {
                id: "pt2",
                title: "Community Savvy",
                cover_img: "https://mongo-piano.netlify.app/1pulse-cover.jpg",
                description: "We would like you to be a part of a constitutional community structure that is responsible for holding the minicipality accountable. A community Trust.The Community Trust will act as a governing body ensuring fair allocation of municipal funds. Our mission is to bring transparency, accountability, and community-driven decision-making to budget spending. Being part of the Trust means giving a little time each week to make big changes in how our city works. ✅ Commitment Members are asked to set aside one hour per week for discussions, budget reviews, and decision-making. 📊 Reviewing Finances The Financial Oversight Team will present budget details every week. Members will discuss where funds should go and flag any suspicious spending. 🗳️ Voting on Community Needs Each member votes on which projects need urgent funding. Votes are counted and submitted to the municipality. 📢 Making Your Voice Heard Community representatives gather input from their neighborhoods. They present concerns and priorities at weekly meetings. 👀 Tracking Progress The Project Monitoring Team tracks projects from start to finish. Updates are shared online and at meetings so everyone knows what’s happening. 💡 Life Cycle of the Trust. The decision-making process follows a structured cycle... 📢 Community submits concerns & budget suggestions. 🗳️ Weekly review & voting on financial needs ✅ Trust finalizes allocations & submits decisions 📊 Transparency reports shared with the community. 📊 Community Engagement",
                signatures: 67
            }
        ],
        video_posts: [
            {
                id: "v2",
                title: "Green Tech Innovations",
                video_url: "https://example.com/green-tech.mp4",
                thumbnail: "https://via.placeholder.com/150"
            }
        ],
        picture_posts: [
            {
                id: "pic2",
                title: "Solar Farms Expansion",
                image_url: "https://via.placeholder.com/200"
            }
        ],
        savvies: [
            {
                id: "s2",
                topic: "How Can We Achieve 100% Renewable Energy?",
                votes: 800
            }
        ],
        products: [
            { id: "pr3", name: "Solar Panel", price: 500 },
            { id: "pr4", name: "Wind Turbine", price: 1200 }
        ],
        services: [
            { id: "sv2", name: "Energy Audits", description: "Evaluate your energy efficiency and optimize costs." }
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
            {
                id: "p2",
                title: "New Solar Panels Launched!",
                content: "Introducing our most efficient solar panels yet, with 30% more power output.",
                date: "2025-03-20"
            }
        ],
        petitions: [
            {
                id: "pt2",
                title: "Community Savvy",
                cover_img: "https://mongo-piano.netlify.app/1pulse-cover.jpg",
                description: "We would like you to be a part of a constitutional community structure that is responsible for holding the minicipality accountable. A community Trust.The Community Trust will act as a governing body ensuring fair allocation of municipal funds. Our mission is to bring transparency, accountability, and community-driven decision-making to budget spending. Being part of the Trust means giving a little time each week to make big changes in how our city works. ✅ Commitment Members are asked to set aside one hour per week for discussions, budget reviews, and decision-making. 📊 Reviewing Finances The Financial Oversight Team will present budget details every week. Members will discuss where funds should go and flag any suspicious spending. 🗳️ Voting on Community Needs Each member votes on which projects need urgent funding. Votes are counted and submitted to the municipality. 📢 Making Your Voice Heard Community representatives gather input from their neighborhoods. They present concerns and priorities at weekly meetings. 👀 Tracking Progress The Project Monitoring Team tracks projects from start to finish. Updates are shared online and at meetings so everyone knows what’s happening. 💡 Life Cycle of the Trust. The decision-making process follows a structured cycle... 📢 Community submits concerns & budget suggestions. 🗳️ Weekly review & voting on financial needs ✅ Trust finalizes allocations & submits decisions 📊 Transparency reports shared with the community. 📊 Community Engagement",
                signatures: 67
            }
        ],
        video_posts: [
            {
                id: "v2",
                title: "Green Tech Innovations",
                video_url: "https://example.com/green-tech.mp4",
                thumbnail: "https://via.placeholder.com/150"
            }
        ],
        picture_posts: [
            {
                id: "pic2",
                title: "Solar Farms Expansion",
                image_url: "https://via.placeholder.com/200"
            }
        ],
        savvies: [
            {
                id: "s2",
                topic: "How Can We Achieve 100% Renewable Energy?",
                votes: 800
            }
        ],
        products: [
            { id: "pr3", name: "Solar Panel", price: 500 },
            { id: "pr4", name: "Wind Turbine", price: 1200 }
        ],
        services: [
            { id: "sv2", name: "Energy Audits", description: "Evaluate your energy efficiency and optimize costs." }
        ]
    },
    
];
