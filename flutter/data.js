// data.js - Contains all the company data
const companies = [
    {
        id: "c1",
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
                id: "p1",
                title: "Introducing WhatsNext",
                content: "Your one-stop hub for all things entrepreneurship! We deliver the latest news, updates, and trends on the companies you care about.",
                date: "2025-03-20",
            }
        ],
        petitions: [
            {
                id: "pt1",
                title: "Ban Plastic Waste",
                description: "Support our movement to eliminate single-use plastics.",
                signatures: 5000
            }
        ],
        video_posts: [
            {
                id: "v1",
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
            }
        ],
        products: [
            { id: "pr1", name: "WhatsNext - NotLikeUs T-shirt", description:"Promotional Crop top T-shirt for the whatsnext movement.", product_img:"https://mongo-piano.netlify.app/WhatsNext-T-shirt.png", price: 250 },
            { id: "pr2", name: "WhatsNext - Squabbleup Promotions T-shirt", description:"Promotional T-shirt for the whatsnext movement.", product_img:"https://mongo-piano.netlify.app/t-shirt-squabbleup.png", price: 250 }
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
        video_posts: [
            {
                id: "v1",
                title: "Marchers demand justice for Cwecwe",
                description: "Over 100 people including activists and students marched across Johannesburg on Sunday calling for justice for a 7-year-old girl who was raped at her Eastern Cape school.",
                video_url: "https://www.youtube.com/embed/4il1KHB_pnU",
                thumbnail: "https://whatsnextgp.netlify.app/Img/psa.png"
            }
        ],
        products: [
            { id: "pr1", name: "PSA Promotional T-shirt", description:"Official Proudly South African merchandise", product_img:"https://mongo-piano.netlify.app/t-shirt-squabbleup.png", price: 300 }
        ]
    },
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
         
        ],
        petitions: [
          
        ],
        video_posts: [
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