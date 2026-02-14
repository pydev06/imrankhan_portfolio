export const resumeData = {
    personalInfo: {
        name: "IMRAN KHAN",
        title: "Python | GenAI | Backend Engineer",
        email: "correo2imran@gmail.com",
        phone: "+91 8939455190",
        location: "Bangalore, India",
        linkedin: "https://linkedin.com/in/imrankhan06",
        github: "https://github.com/pydev06",
        instagram: "https://instagram.com/i_am_rkstr",
    },
    about: [
        "I am a Senior Software Engineer with 9+ years of experience dedicated to crafting high-impact, scalable digital solutions. My journey has taken me from automating complex forecasting models to architecting mission-critical tools for global leaders in aerospace and telecommunications.",
        "I thrive at the intersection of robust backend engineering and cutting-edge artificial intelligence. Whether it's designing cloud-native architectures at Cisco or building generative AI tools for Airbus, my focus remains constant: delivering measurable business value through innovation.",
        "Driven by curiosity, I specialize in building systems that don't just work—they excel. From RAG-based job navigators to autonomous data pipelines, I am passionate about leveraging the power of LLMs to solve real-world problems and push the boundaries of what's possible in software engineering."
    ],
    skills: [
        {
            category: "Languages",
            items: ["Python", "TypeScript", "JavaScript", "R", "SQL"]
        },
        {
            category: "AI & GenAI",
            items: ["OpenAI GPT-4o", "LangChain", "ChromaDB", "RAG", "Prompt Engineering", "Fine-Tuning", "Agentic AI", "Embeddings"]
        },
        {
            category: "Backend",
            items: ["FastAPI", "Flask", "Django", "PostgreSQL", "MongoDB", "Redis", "Supabase", "REST APIs"]
        },
        {
            category: "DevOps & Cloud",
            items: ["Docker", "Kubernetes", "GitLab CI/CD", "Jenkins", "AWS", "Google Cloud", "SonarQube"]
        },
        {
            category: "Frontend & Tools",
            items: ["Next.js", "React", "Tailwind CSS", "Streamlit", "Apache Airflow", "PySide6", "Power BI"]
        }
    ],
    experience: [
        {
            company: "SII India (Client: Airbus, France)",
            role: "Senior Software Engineer",
            duration: "02/2024 – Present",
            location: "Bangalore, India",
            description: "Leading development of mission-critical tools for Airbus, optimizing aerospace workflows and data integrity.",
            achievements: [
                "Architected scalable solutions using Python and FastAPI for aerospace engineering workflows.",
                "Developed VSIM-D Booking Application: A resource scheduling system for iFCS teams to manage test stations.",
                "Built OPCTool: An interactive desktop tool transforming aircraft data into real-time operational insights.",
                "Delivered PASTIS: A dynamic project and task management web app with role-based control."
            ],
            stack: ["Python3", "FastAPI", "PySide6", "Docker", "GitLab CI/CD", "SonarQube", "Pytest"]
        },
        {
            company: "Axilwits IT Services (Client: Cisco)",
            role: "Python Developer",
            duration: "12/2022 – 02/2024",
            location: "Bangalore, India",
            description: "Drove digital transformation of Cisco manufacturing systems with cloud-native automated solutions.",
            achievements: [
                "Led backend engineering for Apollo Cloud 3, powering next-gen manufacturing pipelines.",
                "Implemented Kubernetes-based testing solutions, accelerating hardware delivery.",
                "Developed microservices for test automation and orchestration using Docker."
            ],
            stack: ["Python", "Docker", "Kubernetes", "Pytest", "Git", "CI/CD"]
        },
        {
            company: "Electronikmedia",
            role: "Senior Python Developer",
            duration: "11/2020 – 11/2022",
            location: "Cochin, India",
            description: "Led backend development for innovative SaaS platforms focused on ETL automation.",
            achievements: [
                "Engineered scalable ETL pipelines for structured and semi-structured data.",
                "Designed microservice APIs and backend logic for real-time data operations.",
                "Improved system reliability and processing speed through extensible codebases."
            ],
            stack: ["Python", "REST APIs", "SaaS Architecture", "ETL", "Git"]
        },
        {
            company: "Prowesstics IT Services",
            role: "Python Developer",
            duration: "07/2019 – 11/2020",
            location: "Chennai, India",
            description: "Built secure, scalable ETL pipelines for financial data systems, enabling clean and reliable data flow across critical business processes.",
            achievements: [
                "Developed and managed Apache Airflow workflows for scheduling and orchestrating ETL pipelines.",
                "Designed end-to-end pipelines for extraction, transformation, cleansing, and enrichment.",
                "Ensured data accuracy and system stability through validation, logging, and error handling."
            ],
            stack: ["Python", "Apache Airflow", "ETL", "Data Cleansing", "Validation", "Git", "Agile"]
        },
        {
            company: "Codoid",
            role: "Software Developer",
            duration: "01/2018 – 06/2019",
            location: "Chennai, India",
            description: "Optimized physical asset management systems to enhance lifecycle tracking and asset utilization.",
            achievements: [
                "Developed scalable backend systems and APIs for real-time asset data tracking.",
                "Designed and deployed API systems with AWS architecture for real-time data access.",
                "Configured monitoring scripts for AWS EC2 instances to ensure system uptime."
            ],
            stack: ["Python", "Django", "AWS", "MySQL", "API Development", "Git", "Agile"]
        },
        {
            company: "Sutherland Global Services",
            role: "Workforce Planning Associate",
            duration: "03/2016 – 01/2018",
            location: "Chennai, India",
            description: "Automated scheduling and forecasting processes, leveraging R and Python to deliver data-driven workforce planning solutions.",
            achievements: [
                "Automated scheduling and forecasting workflows using R and Python.",
                "Implemented time series forecasting models including ARIMA, Exponential Smoothing, Neural Networks, and Holt-Winters.",
                "Built and deployed R Shiny applications to visualize forecasting models and improve accuracy."
            ],
            stack: ["R", "Python", "Shiny", "Time Series Forecasting", "Machine Learning"]
        }
    ],
    projects: [
        {
            name: "EU-AI Job Navigator",
            problem: "Tech professionals struggle to find visa-sponsored roles in the EU that match their specific skills.",
            solution: "A RAG-based job searching platform that classifies visa likelihood and matches resumes via vector search.",
            tech: ["FastAPI", "Next.js", "GPT-4o", "ChromaDB", "Supabase"],
            outcome: "Enabled automated matching with 0-100 scoring and personalized career preparation tools.",
            github: "https://github.com/pydev06/eu_ai_job_navigator"
        },
        {
            name: "Resume Shortlisting Automation",
            problem: "HR teams are overwhelmed by bulk resume screening and lack objective ranking metrics.",
            solution: "AI-powered platform parsing resumes and matching them semantically against job descriptions.",
            tech: ["FastAPI", "Streamlit", "Supabase", "GPT-4o-mini"],
            outcome: "Provides explainable scoring and justification for candidate suitability.",
            github: "https://github.com/pydev06/resume_shortlisting_automation_system",
            live: "https://screenr.streamlit.app/"
        },
        {
            name: "Resume Fine Tuner",
            problem: "Job seekers struggle to identify latent skill gaps and optimize resumes for ATS gatekeepers.",
            solution: "AI-driven platform providing high-fidelity feedback, neural parsing, and automated tailoring.",
            tech: ["Python", "FastAPI", "React", "Supabase", "OpenAI"],
            outcome: "Architects the perfect career path with semantic analysis and interview preparation tools.",
            github: "https://github.com/pydev06/resume_fine_tuner",
            live: "https://resume-fine-tuner.vercel.app/"
        },
        {
            name: "AviRriskAI",
            problem: "Complexity in assessing and managing operational aviation risks in real-time.",
            solution: "Stealth intelligence platform leveraging AI for advanced aviation risk assessment and predictive analysis.",
            tech: ["Python", "AI/ML", "Backend Architecture"],
            outcome: "Private security layer for high-profile aviation risk mitigation (Classified).",
            github: "https://github.com/pydev06/AviRriskAI"
        }
    ],
    philosophy: [
        "I build systems that scale.",
        "AI is a collaborator, not a tool.",
        "Precision is the foundation of innovation.",
        "Complexity simplified is elegance."
    ]
};
