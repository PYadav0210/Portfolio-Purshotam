export const profile = {
  name: "Purshotam Yadav",
  role: "Data Strategist & Frontend Developer",
  location: "Bremen, Germany",
  email: "ypurshotam50@gmail.com",
  headline: "SEO, data analytics and the web.",
  bio: "I'm a Junior Data Strategist at mySWOOOP GmbH in Bremen, with a BSc in Intelligent Mobile Systems and Robotics from Constructor University. My work sits between data and the web: Python automation with Playwright, SQL and Power BI reporting, and data-driven SEO — alongside frontend development in React and TypeScript. I started out as a frontend developer in Kathmandu, and I've been building for the web ever since.",
  github: "https://github.com/PYadav0210",
  linkedin: "https://www.linkedin.com/in/purshotam-yadav-7500851b2/",
  resume: "https://drive.google.com/file/d/1uNCddjUZsUNHXxtnIe8frNVYJZiZ4889/view?usp=sharing",
};

export const stats = [
  { value: 15, suffix: "", label: "Public repositories" },
  { value: 4, suffix: "", label: "Languages spoken" },
  { value: 2, suffix: "", label: "Countries worked in" },
];

export const experience = [
  {
    role: "Junior Data Strategist",
    company: "mySWOOOP GmbH",
    period: "Feb 2025 — Present",
    location: "Bremen, Germany",
    points: [
      "Develop and maintain a Python-based web automation and data extraction system using Playwright, scraping structured product and compliance data from dynamic e-commerce platforms.",
      "Develop and optimize responsive front-end architectures with React, TypeScript and Material UI.",
      "Ensure code quality through automated testing with Jest and React Testing Library.",
      "Implement data-driven SEO strategies — keyword research, structured metadata, performance optimization.",
      "Manage and optimize digital ad campaigns on eBay Kleinanzeigen using analytics and A/B testing.",
    ],
  },
  {
    role: "Purchasing Agent",
    company: "mySWOOOP GmbH",
    period: "Sep 2024 — Feb 2025",
    location: "Bremen, Germany",
    points: [
      "Managed incoming and outgoing shipments using JTL-WMS and JTL-Wawi.",
      "Handled returns and inventory corrections (Korrekturbuchungen) across partner channels.",
      "Applied SQL and Power BI to surface inventory and purchasing insights.",
    ],
  },
  {
    role: "Full Stack Developer — Internship",
    company: "Whyzzer UG",
    period: "Jun 2021 — Sep 2021",
    location: "Hamburg, Germany",
    points: [
      "Built interactive, responsive interfaces using Flutter and JavaScript.",
      "Designed the entity relationship diagram for the Whyzzer app, streamlining database structure.",
      "Trained machine learning models with TensorFlow to extract actionable insights.",
      "Wrote SQL to query and shape application data.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Leapfrog Technology",
    period: "Jul 2017 — Aug 2019",
    location: "Kathmandu, Nepal",
    points: [
      "Developed and optimized core web components in HTML, CSS and JavaScript, improving UI consistency and performance.",
      "Collaborated with cross-functional teams on frontend scalability and backend/mobile integration.",
      "Implemented agile practices (SCRUM) to streamline delivery.",
    ],
  },
];

export const education = [
  {
    degree: "BSc, Intelligent Mobile Systems / Robotics",
    school: "Constructor University",
    period: "Sep 2019 — Aug 2023",
    location: "Bremen, Germany",
    note: "Four-year engineering degree spanning robotics, autonomous systems, computer vision and embedded software — the foundation behind both my thesis and my systems work.",
    focus: ["Robotics", "Intelligent Systems", "Computer Vision", "Embedded Software", "Algorithms", "Control Systems"],
  },
];

export const thesis = {
  title: "Image Detection — Smiling or Not Smiling",
  subtitle: "BSc Thesis · Constructor University",
  year: "2023",
  summary:
    "My bachelor's thesis built a computer-vision classifier that determines whether a face in an image is smiling. The work covered the full machine-learning pipeline end to end — sourcing and preparing the dataset, extracting facial features, training the model, and evaluating accuracy across held-out test data.",
  highlights: [
    { label: "Dataset preparation", text: "Cleaned, labelled and balanced the image dataset to reduce classification bias." },
    { label: "Feature extraction", text: "Isolated facial landmarks and regions most predictive of a genuine smile." },
    { label: "Model training", text: "Trained and tuned the classifier iteratively, tracking accuracy against validation data." },
    { label: "Evaluation", text: "Measured performance on unseen data and analysed misclassification patterns." },
  ],
  tags: ["Python", "Machine Learning", "Computer Vision", "Jupyter Notebook"],
  href: "https://github.com/PYadav0210/Image-detection-Smiling-Not-Smiling-",
};

export const referenceLetter = {
  company: "Whyzzer UG (haftungsbeschränkt)",
  companyAddress: "Itzehoer Weg 4, 20251 Hamburg",
  companyEmail: "hey@whyzzer.com",
  companyWeb: "www.whyzzer.com",
  date: "27 September 2021",
  title: "Employer Reference Letter",
  intro: "Mr. Purshotam Yadav, born on Feb. 10, 1999, was employed as an intern in our company during the following period: 15.06. – 15.09.2021.",
  tasksIntro: "During this period, he worked on the following tasks:",
  tasks: [
    "Worked on the entity relationship diagram of the Whyzzer app.",
    "Gained first experience in SQL on Database and Flutter on app development.",
    "Worked on training ML models to extract actionable insights.",
    "First experience with TensorFlow and writing SQL to query data.",
  ],
  body: [
    "Mr. Yadav completed the projects assigned to him very independently and with a high degree of personal responsibility, using his excellent programming and algorithm knowledge.",
    "We have come to know Mr. Yadav as a highly motivated, very reliable intern who has always handled all tasks with the greatest personal commitment to our complete satisfaction.",
    "His behavior was very team-oriented and he contributed his ideas and competences comprehensively.",
    "We thank Mr. Yadav for his productive cooperation and are pleased to have worked with him. We wish him all the best for his future and continued success.",
  ],
  author: "Benjamin Buthmann",
  authorRole: "Co-Founder & CEO",
  file: "/Refrence_letter.pdf",
};

export const languages = [
  { name: "Nepali", level: "Native", pct: 100 },
  { name: "Hindi", level: "Native", pct: 100 },
  { name: "English", level: "C1", pct: 85 },
  { name: "German", level: "B1", pct: 55 },
];

export const skillCategories = [
  { title: "Web Development", tag: "Build", desc: "Production frontends and full-stack apps.", items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Angular", "HTML / CSS", "Express", "Supabase"] },
  { title: "Web Design & UI/UX", tag: "Design", desc: "Interfaces that feel considered, not templated.", items: ["Figma", "Tailwind CSS", "Material UI", "Design Systems", "Responsive Design", "Shopify", "Framer Motion"] },
  { title: "Data & Analytics", tag: "Analyse", desc: "Turning raw data into decisions.", items: ["Python", "SQL", "PostgreSQL", "Power BI", "Playwright", "Web Scraping", "Data-driven SEO", "A/B Testing"] },
  { title: "AI & Systems", tag: "Engineer", desc: "From models to microcontrollers.", items: ["TensorFlow", "Machine Learning", "Computer Vision", "C / C++", "Robotics", "Docker", "Jenkins", "Jest / RTL", "Git"] },
];

export const projects = [
  { title: "Otto Product Scraper", badge: "Featured", desc: "Python automation that scrapes product pages on Otto.de — capturing product URLs and datasheet PDF links, extracting energy efficiency class and supplier information into a structured CSV, then emailing the finished report automatically.", tags: ["Python", "Web Scraping", "Automation", "CSV", "Email Reporting"], href: "https://github.com/PYadav0210/otto-product-scraper", live: "", featured: true },
  { title: "Circle Locator App", badge: "Live Demo", desc: "React and Material UI app letting users place draggable circles on an image and adjust their positions, tracking coordinates in both pixels and percentages with coordinate input, material selection and a dynamic output table.", tags: ["React", "Material UI", "CSS", "Vercel"], href: "https://github.com/PYadav0210/Frontend_Coding_Challenge_R24", live: "https://frontend-coding-challenge-r24.vercel.app/", featured: true },
  { title: "Real-Time Discussion Snippets", badge: "Full Stack", desc: "Web app for real-time discussion snippets built with Next.js and Supabase, backed by PostgreSQL. Responsive Tailwind UI with secure API credential and environment variable handling.", tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind"], href: "https://github.com/PYadav0210/Time-Discussion-Snippets-Web-Application", live: "", featured: true },
  { title: "Vue.js Toast Notification", badge: "Component", desc: "A lightweight, reusable toast notification component for Vue.js — configurable position, duration and variants, built as a clean drop-in with a small API surface.", tags: ["Vue.js", "JavaScript", "Component", "UI"], href: "https://github.com/PYadav0210/VueJS_Toast_Notification", live: "", featured: true },
  { title: "Music School Platform", badge: "", desc: "Responsive music school platform in Next.js and TypeScript with dynamic routing and state management for course listings and enrollments. Deployed on Vercel.", tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"], href: "https://github.com/PYadav0210/Music_school_using_Nextjs", live: "", featured: false },
  { title: "RIS Project", badge: "", desc: "Robotics and Intelligent Systems build in C++ with CMake — perception, control and system integration.", tags: ["C++", "CMake", "Robotics"], href: "https://github.com/PYadav0210/RIS_Project", live: "", featured: false },
];

export const marqueeStack = ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Angular", "Tailwind CSS", "Material UI", "Python", "Playwright", "SQL", "PostgreSQL", "Supabase", "Power BI", "TensorFlow", "Computer Vision", "C / C++", "Docker", "Jenkins", "Jest", "Figma", "Shopify", "Git", "SEO", "Robotics"];