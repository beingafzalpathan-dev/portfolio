export const portfolioData = {
  personal: {
    name: "Mohd Afzal Khan",
    title: "Full Stack & Blockchain Developer",
    email: "afzalkhanm57@email.com",
    phone: "+91 8923031670",
    location: "Noida, Sector-62",
    resume: "/resume.pdf"
  },

  hero: {
    greeting: "Hi, I'm",
    description: "I craft innovative blockchain solutions and full-stack applications that bridge the gap between traditional web development and decentralized technologies."
  },

  about: {
    description: "With 4+ years in full-stack development and 2+ years in blockchain, I've delivered 20+ projects from DeFi protocols to enterprise applications. I specialize in turning complex ideas into scalable, secure solutions.",
    stats: [
      { label: "Projects Completed", value: "20+" },
      { label: "Years Experience", value: "4+" },
      { label: "Smart Contracts", value: "15+" },
      { label: "Mainnet Deploys", value: "10+" }
    ]
  },

  skills: [
    { name: "Blockchain Development", level: 95, icon: "⛓️", category: "blockchain" },
    { name: "Solidity", level: 90, icon: "📜", category: "blockchain" },
    { name: "Smart Contracts", level: 92, icon: "🔐", category: "blockchain" },
    { name: "Web3.js & Ethers.js", level: 88, icon: "🌐", category: "blockchain" },
    { name: "React.js", level: 94, icon: "⚛️", category: "frontend" },
    { name: "Node.js", level: 89, icon: "🟢", category: "backend" },
    { name: "JavaScript", level: 96, icon: "💛", category: "frontend" },
    { name: "HTML & CSS", level: 93, icon: "🎨", category: "frontend" },
    { name: "Bootstrap", level: 85, icon: "🅱️", category: "frontend" }
  ],

  projects: [
    {
      id: 1,
      title: "DeFi Lending Protocol",
      description: "Decentralized lending platform with dynamic interest rates and collateral management on Ethereum.",
      image: "/project1.jpg",
      tags: ["Solidity", "React", "Web3.js", "DeFi"],
      github: "https://github.com/username/defi-lending",
      demo: "https://defi-lending-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "Full-featured NFT marketplace with minting, trading, auctions, and creator royalties.",
      image: "/project2.jpg",
      tags: ["Solidity", "React", "IPFS", "Ethers.js"],
      github: "https://github.com/username/nft-marketplace",
      demo: "https://nft-marketplace-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "DAO Governance Platform",
      description: "Token-based voting system with proposal creation and transparent treasury management.",
      image: "/project3.jpg",
      tags: ["Solidity", "React", "Web3.js", "DAO"],
      github: "https://github.com/username/dao-platform",
      demo: "https://dao-platform-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Crypto Portfolio Tracker",
      description: "Real-time portfolio tracking with analytics, price alerts, and multi-wallet support.",
      image: "/project4.jpg",
      tags: ["React", "Node.js", "MongoDB", "APIs"],
      github: "https://github.com/username/crypto-tracker",
      demo: "https://crypto-tracker-demo.vercel.app",
      featured: true
    },
    {
      id: 5,
      title: "Supply Chain DApp",
      description: "Blockchain supply chain with end-to-end traceability and product verification.",
      image: "/project5.jpg",
      tags: ["Solidity", "React", "Web3.js", "Supply Chain"],
      github: "https://github.com/username/supply-chain",
      demo: "https://supply-chain-demo.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "Modern e-commerce with payment integration, inventory management, and admin dashboard.",
      image: "/project6.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      title: "Senior Blockchain Developer",
      company: "Speqto Technology Pvt Ltd",
      period: "2024 - Present",
      description: "Leading the architecture of decentralized protocols and secure smart contracts. Bridging traditional enterprise systems with Web3 technologies using Solidity and Ethers.js."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Speqto Technology Pvt Ltd",
      period: "2023 - 2024",
      description: "Developed and maintained scalable MERN stack applications. Implemented microservices and integrated blockchain features into existing web platforms."
    },
    {
      id: 3,
      title: "Associate Web Developer",
      company: "Speqto Technology Pvt Ltd",
      period: "2022 - 2023",
      description: "Collaborated on frontend and backend features for client-facing applications. Focused on UI/UX implementation and API development using React and Node.js."
    },
    {
      id: 4,
      title: "Assistant Web Developer",
      company: "Speqto Technology Pvt Ltd",
      period: "2022", // Initial starting role
      description: "Supported the development team in building responsive web components. Gained hands-on experience with modern JavaScript frameworks and agile workflows."
    }
  ],

  social: {
    github: "https://github.com/beingafzalpathan-dev",
    linkedin: "https://linkedin.com/in/afzal-khan-4623401b9",
    twitter: "https://x.com/being_AfzalKhan",
    email: "mailto:afzalkhanm57@gmail.com"
  }
};