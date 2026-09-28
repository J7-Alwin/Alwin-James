// All portfolio content for Alwin James
export const PROFILE = {
  name: "Alwin James",
  roles: ["Backend Developer", "Full-Stack Developer", "AI / ML Engineer"],
  tagline:
    "MCA graduate engineering robust backend architectures and full-stack systems — from production MERN platforms to RAG-powered AI workflows.",
  summary:
    "MCA graduate with hands-on backend and AI development experience across two internships. I built a production MERN stack recruitment platform at Beepeaks and a RAG chatbot at IPSR Solutions. My core strength lies in designing clean REST APIs, secure JWT authentication, scalable MongoDB data models, and end-to-end ML workflows. Currently seeking SDE or AI/ML roles in Bengaluru.",
  location: "Bengaluru, India",
  email: "alwinjames66@gmail.com",
  phone: "+91 9846400256",
  github: "https://github.com/J7-Alwin",
  linkedin: "https://www.linkedin.com/in/alwin-james-69b363261",
  resumeUrl: "/assets/resume/Alwin_James_Resume.pdf",
  // Replace with your own professional headshot URL when ready
  photo: "/assets/alwinpic.png",
};

export const SKILLS = [
  {
    category: "Backend",
    icon: "Server",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "Nodemailer", "node-cron", "Multer", "Django"],
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: ["React.js", "JavaScript", "HTML", "CSS", "Firebase"],
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["MongoDB", "Firebase Realtime DB", "SQL", "Pinecone"],
  },
  {
    category: "AI / ML",
    icon: "BrainCircuit",
    items: ["Python", "RAG", "LLMs", "Prompt Engineering", "Scikit-learn", "Pandas", "NumPy", "Power BI", "n8n"],
  },
  {
    category: "Cloud & Tools",
    icon: "Cloud",
    items: ["AWS", "Microsoft Azure", "Git", "GitHub", "VS Code", "Postman", "Google Colab"],
  },
];

export const PROJECTS = [
  {
    id: "cts",
    name: "Candidate Tracking System",
    tag: "Live Production Use",
    context: "Beepeaks Pvt. Ltd. — Production Internship",
    description:
      "Complete backend architecture for a MERN recruitment platform with JWT auth and role-based access for Admin & Recruiter. Automated live Google Sheets → MongoDB sync and cron-driven email reminders, with Excel/PDF export APIs.",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "Google Sheets API", "JWT", "Nodemailer"],
    github: "https://github.com/J7-Alwin",
    screenshots: [
      "/assets/project/pj3-1.png",
      "/assets/project/pj3-2.png",
      "/assets/project/pj3-3.png",
      "/assets/project/pj3-4.png",
      "/assets/project/pj3-5.png",
      "/assets/project/pj3-6.png",
      "/assets/project/pj3-7.png",
      "/assets/project/pj3-8.png",
      "/assets/project/pj3-9.png",
      "/assets/project/pj3-10.png",
      "/assets/project/pj3-11.png"
    ],
  },
  {
    id: "certiport",
    name: "Certiport — Blockchain Verification",
    tag: "Team Project · Blockchain",
    context: "Full-Stack · IPFS + Ethereum",
    description:
      "Node/Express backend with JWT auth and role-based protected routes for Admin, University & Student. Integrated IPFS via Pinata for decentralized certificate storage and registered hashes on Ethereum via Solidity smart contracts, with dynamic QR-coded PDFs.",
    tech: ["React.js", "Node.js", "MongoDB", "Solidity", "Ethereum", "IPFS", "Hardhat", "JWT"],
    github: "https://github.com/J7-Alwin/Certiport",
    screenshots: [
      "/assets/project/pj2-1.png",
      "/assets/project/pj2-2.png",
      "/assets/project/pj2-3.png",
      "/assets/project/pj2-4.png",
      "/assets/project/pj2-5.png",
      "/assets/project/pj2-6.png",
      "/assets/project/pj2-7.png",
      "/assets/project/pj2-8.png",
      "/assets/project/pj2-9.png",
      "/assets/project/pj2-10.png",
      "/assets/project/pj2-11.png"
    ],
  },
  {
    id: "strivo",
    name: "Strivo — Department Management",
    tag: "Team Project · Web Panel",
    context: "Web Admin Panel · Firebase",
    description:
      "Web admin panel to manage students, faculty, rooms, meetings & academic calendar with Firebase Auth. Real-time sync with a companion Android app via Firebase Realtime DB, plus duplicate detection and FCM push notifications.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Firebase Realtime DB", "FCM"],
    github: "https://github.com/J7-Alwin/Strivo",
    screenshots: [
      "/assets/project/pj1-1.png",
      "/assets/project/pj1-2.png",
      "/assets/project/pj1-3.png",
      "/assets/project/pj1-4.png",
      "/assets/project/pj1-5.png",
      "/assets/project/pj1-6.png",
      "/assets/project/pj1-7.png",
      "/assets/project/pj1-8.png",
      "/assets/project/pj1-9.png",
      "/assets/project/pj1-10.png"
    ],
  },
];

export const CERTIFICATES = [
  { id: 1, title: "Data Science & ML — Gold 80%", issuer: "NASSCOM", year: "2026", image: "/assets/certificates/nasscom .png" },
  { id: 2, title: "Agentic AI Automation", issuer: "UiPath", year: "2025", image: "/assets/certificates/uipath.png" },
  { id: 3, title: "OCI AI Foundations", issuer: "Oracle Cloud", year: "2025", image: "/assets/certificates/oracle.png" },
  { id: 4, title: "Academy Cloud Developing", issuer: "AWS", year: "2025", image: "/assets/certificates/aws .png" },
  { id: 5, title: "Azure Fundamentals", issuer: "Microsoft", year: "2025", image: "/assets/certificates/azure.png" },
  { id: 6, title: "Advanced Certificate in AI", issuer: "IPSR Solutions", year: "2025", image: "/assets/certificates/alccoAI.png" },
  { id: 7, title: "Certificate in AI", issuer: "IPSR Solutions", year: "2025", image: "/assets/certificates/ccoAI.png" },
  { id: 9, title: "Introduction to Artificial Intelligence", issuer: "Infosys", year: "2025", image: "/assets/certificates/ITAI.png" },
  { id: 10, title: "Unix Linux OS - Unix Fundamentals", issuer: "Infosys", year: "2025", image: "/assets/certificates/unix.png" },
  { id: 8, title: "Programming Using Java", issuer: "Infosys", year: "2024", image: "/assets/certificates/java.png" },
];

export const EXPERIENCE = [
  {
    role: "Backend Developer Intern",
    company: "Beepeaks Private Limited",
    period: "Mar 2026 – May 2026",
    location: "Bengaluru · Remote",
    certificate: { title: "Backend Developer Internship Certificate", images: ["/assets/certificates/int2-1.png"] },
    points: [
      "Built all backend REST APIs with Node.js & Express.js for a production MERN recruitment platform.",
      "Integrated Google Sheets API v4 for live candidate sync into MongoDB; implemented JWT role-based access.",
      "Automated interview email reminders with Nodemailer & node-cron; built Excel/PDF export for reporting.",
    ],
  },
  {
    role: "AI Intern",
    company: "IPSR Solutions Ltd",
    period: "Jun 2025 – Nov 2025",
    location: "Kerala · Remote",
    certificate: { title: "AI Internship Certificate", images: ["/assets/certificates/int1-1.png", "/assets/certificates/int1-2.png"] },
    points: [
      "Built a RAG chatbot using n8n, Gemini & Groq LLMs with a Pinecone vector database.",
      "Integrated LLMs with a Django backend; performed data analysis with Python & Pandas.",
      "Built Power BI dashboards and ML case studies on Decision Tree, Random Forest, SVM & PCA.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Kristu Jayanti College, Bengaluru",
    period: "2024 – 2026",
    score: "73%",
  },
  {
    degree: "BSc Mathematics",
    institution: "PTM Government College, Kerala (Univ. of Calicut)",
    period: "2020 – 2023",
    score: "74%",
  },
  {
    degree: "Class XII — BioScience",
    institution: "St. Mary's HSS, Kerala",
    period: "2018 – 2020",
    score: "92%",
  },
  {
    degree: "Class X",
    institution: "St. Joseph English Medium School, Kerala",
    period: "2017 – 2018",
    score: "84%",
  },
];
