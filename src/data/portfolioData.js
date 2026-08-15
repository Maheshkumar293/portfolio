export const personalInfo = {
  name: "Maheshkumar R",
  monogram: "MAHESHKUMAR.R",
  eyebrow: "FULL-STACK DEVELOPER · CLOUD · SOFTWARE ENGINEERING",
  headline: "Building reliable software from interface to infrastructure.",
  summary: "Computer Science & Engineering graduate with hands-on experience in full-stack web development, enterprise applications, cloud technologies, and IT infrastructure.",
  aboutHeading: "Engineering with a systems mindset.",
  aboutText: [
    "I am a Computer Science & Engineering graduate focused on building scalable, reliable software applications and managing core infrastructure.",
    "My background spans full-stack web development, software engineering internships, IT support, network configuration, and cloud computing. I thrive at the intersection where clean frontend user experiences interface with resilient backend APIs and robust infrastructure."
  ],
  location: "Madurai / Chennai, Tamil Nadu, India",
  email: "r.mahesh2903@gmail.com",
  phone: "+91 8778977606",
  status: "Open to Software Engineering Opportunities",
  stats: [
    { label: "Professional Experience", value: "2+ Years", detail: "Development & IT Infrastructure" },
    { label: "Featured Projects", value: "3", detail: "Enterprise & Full-Stack Apps" },
    { label: "Engineering Degree", value: "8.0 CGPA", detail: "Computer Science & Engineering" },
    { label: "Certifications", value: "3", detail: "AWS, Oracle & Cisco Certified" }
  ]
};

export const heroTechFloating = [
  { name: "ReactJS", color: "from-sky-400 to-blue-600", position: "top-2 -left-3" },
  { name: "Spring Boot", color: "from-emerald-400 to-green-600", position: "bottom-12 -left-6" },
  { name: "AWS", color: "from-amber-400 to-orange-600", position: "top-10 -right-4" },
  { name: "MySQL", color: "from-cyan-400 to-blue-500", position: "bottom-4 -right-4" }
];

export const experienceData = [
  {
    role: "Junior Software Developer Intern",
    company: "V7Lancers Technopark Pvt. Ltd.",
    location: "Madurai",
    period: "Mar 2026 – May 2026",
    type: "Internship",
    points: [
      "Worked on real-time CRM application development and maintenance.",
      "Developed and enhanced CRM features using PHP and CodeIgniter.",
      "Resolved development tickets, bugs, and application issues.",
      "Implemented business logic and contributed to system improvements.",
      "Collaborated with the development team on feature implementation and testing."
    ],
    tech: ["PHP", "CodeIgniter", "MySQL", "CRM Systems", "REST API", "Git"]
  },
  {
    role: "IT Support",
    company: "OTTO Clothing Pvt. Ltd.",
    location: "Chennai",
    period: "Oct 2021 – Feb 2023",
    type: "Full-Time",
    points: [
      "Technical assistance for hardware and software.",
      "Configured UniFi devices.",
      "Configured firewalls and VLANs.",
      "Performed hardware/software installation and configuration.",
      "Network monitoring.",
      "Asset management and Excel reporting.",
      "Barcode printer maintenance."
    ],
    tech: ["UniFi Networking", "VLAN Configuration", "Firewalls", "Network Monitoring", "Hardware Support", "Asset Management"]
  },
  {
    role: "Process Associate",
    company: "Deliveriyan Pvt. Ltd.",
    location: "Sivakasi",
    period: "Jan 2021 – Sep 2021",
    type: "Full-Time",
    points: [
      "Customer interaction and issue resolution.",
      "Delivery partner coordination.",
      "Team collaboration.",
      "Troubleshooting processing issues and order assignment."
    ],
    tech: ["Process Optimization", "Logistics Operations", "Troubleshooting", "Data Management"]
  }
];

export const projectsData = [
  {
    id: "01",
    title: "Cloud-Based Electronic Document Management System",
    category: "Full-Stack · Cloud · Enterprise Application",
    description: "Secure cloud-based document management platform designed for document storage, workflow automation, version management, role-based access, and secure collaboration.",
    technologies: ["ReactJS", "Laravel", "PHP", "MySQL", "HTML", "CSS", "Bootstrap", "Git", "Cloud Hosting"],
    architectureType: "diagram",
    architectureNodes: [
      { name: "User", sub: "Client Browser" },
      { name: "React Frontend", sub: "SPA Interface" },
      { name: "Laravel Backend", sub: "REST APIs & Auth" },
      { name: "MySQL", sub: "Relational DB" },
      { name: "Cloud Hosting", sub: "Infrastructure" }
    ],
    highlights: [
      "Role-Based Access Control (RBAC) enforcing explicit document security per user tier.",
      "Automated document versioning and audit trails for compliance.",
      "Cloud hosting infrastructure design for seamless file retrieval and storage."
    ]
  },
  {
    id: "02",
    title: "Passport Sewa",
    category: "Full-Stack · Automation · REST API",
    description: "Web-based passport management system designed to automate application submission, verification, and real-time status tracking.",
    technologies: ["ReactJS", "Java", "Spring Boot", "MySQL", "Postman", "CSS", "Bootstrap"],
    architectureType: "process",
    architectureNodes: [
      { name: "Application", sub: "User Form Submission" },
      { name: "Verification", sub: "Document Check" },
      { name: "Processing", sub: "Workflow Approval" },
      { name: "Status Tracking", sub: "Live Notifications" }
    ],
    highlights: [
      "Spring Boot backend REST APIs handling complex passport application status workflows.",
      "Automated verification pipeline reducing processing overhead.",
      "Integrated step-by-step live status tracking for applicants."
    ]
  },
  {
    id: "03",
    title: "Pet Care Management",
    category: "Web Application",
    description: "Centralized web platform for managing pet records, appointments, and healthcare services.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
    architectureType: "matrix",
    architectureNodes: [
      { name: "Pet Records", sub: "Medical History" },
      { name: "Appointments", sub: "Vet Scheduling" },
      { name: "Healthcare", sub: "Vaccination Logs" },
      { name: "Service Hub", sub: "Clinic Dashboard" }
    ],
    highlights: [
      "Intuitive pet profiling system for tracking vaccination logs and medical schedules.",
      "Relational MySQL schema for quick appointment booking and query execution.",
      "Clean user interface designed for both pet owners and veterinary staff."
    ]
  }
];

export const skillsCategories = [
  {
    title: "Backend",
    description: "Enterprise application logic, REST API development & MVC frameworks.",
    skills: ["Core Java", "Spring Boot", "Core PHP", "PHP CodeIgniter", "Maven", "Hibernate", "MVC", "Microservices"]
  },
  {
    title: "Frontend",
    description: "Modern, responsive user interfaces & component-driven design.",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap"]
  },
  {
    title: "Database",
    description: "Relational and document-oriented database design & query tuning.",
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "Integration",
    description: "API authentication, cloud services & real-time messaging.",
    skills: ["Firebase", "JSON Web Tokens", "REST/API tooling"]
  },
  {
    title: "Cloud & Deployment",
    description: "Cloud infrastructure provisioning, compute & storage services.",
    skills: ["AWS", "EC2", "S3", "IAM", "RDS", "Cloud Computing"]
  },
  {
    title: "Tools",
    description: "Version control, API testing, IDEs & design software.",
    skills: ["Git", "Postman", "Power BI", "IntelliJ IDEA", "Eclipse", "Figma"]
  },
  {
    title: "Additional",
    description: "Scripting languages and hardware network infrastructure.",
    skills: ["Python", "Networking"]
  }
];

export const certificationsData = [
  {
    title: "Oracle Cloud Infrastructure 2024 Certified Foundation Associate",
    issuer: "Oracle",
    code: "OCI-2024-FA",
    badge: "Oracle Certified",
    description: "Core cloud concepts, OCI architecture, IAM, compute, storage, networking, and governance principles."
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    code: "AWS-CQ-CP",
    badge: "AWS Quest",
    description: "Hands-on cloud solutions architecture covering AWS EC2, S3, RDS, security, and cloud cost management."
  },
  {
    title: "Cisco Networking Foundation Fundamentals of Cisco Networking",
    issuer: "Cisco",
    code: "CISCO-NF-01",
    badge: "Cisco Certified",
    description: "Fundamental networking concepts, OSI model, IP addressing, VLAN configuration, routing, and network security."
  }
];

export const educationData = [
  {
    degree: "Bachelor's in Computer Science and Engineering",
    institution: "Anna University Regional Campus Madurai",
    period: "2023 – 2026",
    grade: "8.0 CGPA",
    details: "Specialized in Full-Stack Software Engineering, Cloud Computing, Database Management Systems, and Web Architecture."
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Arulmigu Kalasalingam Polytechnic College",
    period: "2018 – 2021",
    grade: "91%",
    details: "Foundational studies in Computer Hardware, System Programming, Data Structures, and Software Development."
  }
];
