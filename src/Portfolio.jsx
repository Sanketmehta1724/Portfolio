import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Moon,
  Sun,
  Download,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "achievements",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xpwzgkpb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus(""), 3000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      title: "PrepTalk",
      subtitle: "AI-powered Interview Coach",
      description:
        "Resume-based question generator with voice Q&A practice and feedback. Real-time analytics dashboard and personalized plans to boost readiness.",
      tech: ["AI/ML", "Voice Recognition", "React", "Analytics"],
      link: "https://preptalk.render.com",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    },
    {
      title: "ServMate",
      subtitle: "Modern FullStack App",
      description:
        "Modern FullStack app on Vercel Cloud with serverless functions, edge deployment, auto CI/CD, and instant rollbacks. Proof-of-concept for 24/7 AI service management.",
      tech: ["React","Express","MongoDB","Node", "Vercel", "Serverless", "CI/CD"],
      link: "https://servmate.vercel.app",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    },
    {
      title: "Career Compass",
      subtitle: "AI Career Guidance Platform",
      description:
        "AI-powered career guidance platform recommending career paths using ML predictions and market analysis. Built with Django backend and integrated AI models.",
      tech: ["Django-Rest-FrameWork","React", "ML", "REST API", "AI"],
      link: "https://career-compass-guide.vercel.app",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
    {
      title: "Employee Management System",
      subtitle: "Full-Stack CRUD Application",
      description:
        "Developed full-stack CRUD application for employee management using Java Spring Boot backend with RESTful APIs, React frontend, and Maven build automation.",
      tech: ["Spring Boot", "React", "Maven", "REST API"],
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    },
    {
      title: "KidZee Learning Platform",
      subtitle: "Educational Console Application",
      description:
        "Console-based kids learning platform using Java with learning modules, practice quizzes, and games. Integrated PhpMyAdmin database with JDBC connectivity.",
      tech: ["Java", "JDBC", "MySQL", "PhpMyAdmin"],
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    },
    {
      title: "Food Ordering System",
      subtitle: "Java Console Application",
      description:
        "Developed Java-based console food-ordering system with persistent storage and custom data structures. Implemented asynchronous order processing.",
      tech: ["Java", "Data Structures", "Async Processing"],
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    },
  ];

  const skillsTree = {
    title: "MY SKILLS",
    children: [
      {
        title: "Frontend",
        skills: [
          "HTML",
          "CSS",
          "JAVASCRIPT",
          "REACT",
          "NEXT JS",
          "TAILWIND CSS",
          "FRAMER MOTION",
          "DOM",
          "UNIT TEST",
          "PERFORMANCE OPTIMIZE",
          "SSR",
        ],
      },
      {
        title: "Backend",
        skills: [
          "NODE",
          "BUN",
          "EXPRESS",
          "REST API",
          "ZOD VALIDATION",
          "JWT/OAUTH",
          "SQL",
          "POSTGRES",
          "PRISMA ORM",
          "DB MODELING",
          "STRIPE PAYMENTS",
          "Django",
          "Django-Rest-Framework",
          "Spring Boot",
          "Microservices",
          "Maven",
          "Hibernate",
          "MYSQL",
          "MongoDB",
        ],
      },
      {
        title: "Languages",
        skills: ["JAVASCRIPT", "TYPESCRIPT", "PYTHON","JAVA"],
      },
      {
        title: "Tools & Others",
        skills: [

          "GIT",
          "GITHUB",
          "DOCKER",
          "VPS",
          "VERCEL",
          "PRODUCT DESIGN",
          "FIGMA",
          "WIREFRAME",
        ],
      },
    ],
  };

  const achievements = [
    {
      title: "IITGN Odoo Amalthea Hackathon",
      subtitle: "Mental Wellness App",
      rank: "Top 50",
    },
    {
      title: "AU Ingenium2025 Hackathon",
      subtitle: "AI Trading Assistant",
      rank: "Top 25",
    },
  ];

  const bgClass = darkMode ? "bg-[#354259]" : "bg-[#C2DED1]";
  const textClass = darkMode ? "text-[#ECE5C7]" : "text-[#354259]";
  const textSecondary = darkMode ? "text-[#CDC2AE]" : "text-[#354259]/70";
  const cardBg = darkMode ? "bg-[#354259]" : "bg-[#ECE5C7]";
  const cardBorder = darkMode ? "border-[#CDC2AE]/30" : "border-[#354259]/20";
  const navBg = darkMode ? "bg-[#354259]/95" : "bg-[#ECE5C7]/95";
  const accentColor = darkMode ? "#CDC2AE" : "#354259";
  const buttonBg = darkMode ? "#CDC2AE" : "#354259";
  const buttonText = darkMode ? "#354259" : "#ECE5C7";

  return (
    <div className={`min-h-screen overflow-x-hidden ${bgClass} transition-colors duration-300`}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 ${navBg} backdrop-blur-md shadow-sm transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-lg sm:text-2xl font-bold select-none"
            style={{ color: accentColor }}
          >
            <Code className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: accentColor }} />
            <span className="hidden min-[475px]:inline">Sanket Mehta</span>
            <span className="inline min-[475px]:hidden">SM</span>
          </motion.div>
          <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
            <div className="hidden lg:flex gap-6 xl:gap-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Achievements",
                
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className={`text-sm font-medium transition-colors ${textSecondary}`}
                  style={
                    activeSection === item.toLowerCase()
                      ? { color: accentColor }
                      : {}
                  }
                >
                  {item}
                </motion.a>
              ))}
            </div>
           <motion.button
  whileHover={{ scale: 1.1, rotate: 180 }}
  whileTap={{ scale: 0.9 }}
  onClick={() => setDarkMode(!darkMode)}
  className={`p-1.5 sm:p-2 rounded-full border transition-all duration-300`}
  style={{
    backgroundColor: darkMode ? "#354259" : "rgba(236, 229, 199, 0.95)", // dark mode bg | light mode white
    borderColor: darkMode ? "#CDC2AE" : "#354259",     // consistent border colors
  }}
>
  {darkMode ? (
    <Sun
      className="w-4 h-4 sm:w-5 sm:h-5"
      style={{ color: "#ECE5C7" }} // light icon for dark mode
    />
  ) : (
    <Moon
      className="w-4 h-4 sm:w-5 sm:h-5"
      style={{ color: "#354259" }} // dark icon for light mode
    />
  )}
</motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundColor: buttonBg, color: buttonText }}
            >
              <span className="hidden sm:inline">Reach out</span>
              <span className="inline sm:hidden">Contact</span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6"
        style={{ opacity }}
      >
        <div className="max-w-5xl text-center w-full">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-6 sm:mb-8"
          >
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full flex items-center justify-center text-white text-4xl sm:text-5xl font-bold shadow-2xl"
              style={{ backgroundColor: buttonBg }}
            >
              SM
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 ${textClass} px-4`}
          >
            Hi, I'm <span style={{ color: accentColor }}>Sanket Mehta</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-lg sm:text-xl md:text-2xl ${textSecondary} mb-3 sm:mb-4`}
          >
            Computer Science Student
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-sm sm:text-base md:text-lg ${textSecondary} max-w-3xl mx-auto mb-6 sm:mb-8 px-4`}
          >
            Passionate about Full-Stack Development, Web Applications, and
            Building Innovative Solutions. Driven to create real-world impact
            through clean, maintainable code.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              href="https://drive.google.com/uc?export=download&id=1WpYP7NOFS7K1_WCvf6pIta-vpHxj3dSM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base font-medium"
              style={{ backgroundColor: buttonBg, color: buttonText }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden min-[475px]:inline">Download Resume</span>
              <span className="inline min-[475px]:hidden">Resume</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-3 sm:gap-4 px-4 flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/sanketmehta1724"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 ${cardBg} backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow border ${cardBorder}`}
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: accentColor }} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://linkedin.com/in/sanket-mehta-89456627b"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 ${cardBg} backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow border ${cardBorder}`}
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:sanketmehta1112@gmail.com"
              className={`p-2 sm:p-3 ${cardBg} backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow border ${cardBorder}`}
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: accentColor }} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="tel:+919571144344"
              className={`p-2 sm:p-3 ${cardBg} backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow border ${cardBorder}`}
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            </motion.a>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ color: accentColor }}
            className="mt-8 sm:mt-12"
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center"
            style={{ color: accentColor }}
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className={`${cardBg} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border-2 ${cardBorder}`}
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <GraduationCap
                className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1"
                style={{ color: accentColor }}
              />
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${textClass}`}>
                  Education
                </h3>
                <p className={`${textSecondary} mb-2 text-sm sm:text-base`}>
                  Bachelor of Technology in Computer Science
                </p>
                <p className={`${textSecondary} text-sm sm:text-base`}>
                  LJ University • 2023-2027 • CGPA: 9.16
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <Briefcase
                className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1"
                style={{ color: accentColor }}
              />
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${textClass}`}>
                  Experience
                </h3>
                <p className={`${textSecondary} mb-2 text-sm sm:text-base`}>
                  Full-Stack Developer passionate about creating impactful
                  solutions
                </p>
                <p className={`${textSecondary} text-sm sm:text-base`}>
                  Specialized in modern web technologies, AI integration, and
                  scalable architectures
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center"
            style={{ color: accentColor }}
          >
            {skillsTree.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {skillsTree.children.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`${cardBg} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border-2 ${cardBorder}`}
              >
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${textClass}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      whileHover={{ scale: 1.05 }}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${textSecondary} border ${cardBorder}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen py-16 sm:py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center"
            style={{ color: accentColor }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`${cardBg} backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 ${cardBorder}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-lg sm:text-xl font-bold ${textClass}`}>
                      {project.title}
                    </h3>
                    <span className={`text-xs sm:text-sm ${textSecondary} whitespace-nowrap ml-2`}>
                      {project.year}
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm ${textSecondary} mb-2`}>
                    {project.subtitle}
                  </p>
                  <p className={`text-xs sm:text-sm ${textSecondary} mb-4 line-clamp-3`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className={`px-2 py-0.5 sm:py-1 rounded-full text-xs ${textSecondary} border ${cardBorder}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg"
                      style={{ backgroundColor: buttonBg, color: buttonText }}
                    >
                      View Project <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        id="achievements"
        className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center"
            style={{ color: accentColor }}
          >
            Achievements
          </motion.h2>
          <div className="space-y-4 sm:space-y-6">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className={`${cardBg} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border-2 ${cardBorder} flex flex-col sm:flex-row items-start gap-3 sm:gap-4`}
              >
                <Award
                  className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                  style={{ color: accentColor }}
                />
                <div className="flex-1 min-w-0">
                  <h3 className={`text-base sm:text-lg md:text-xl font-bold ${textClass} break-words`}>
                    {achievement.title}
                  </h3>
                  <p className={`${textSecondary} text-sm sm:text-base`}>{achievement.subtitle}</p>
                </div>
                <span
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${textClass} border-2 whitespace-nowrap self-start sm:self-auto`}
                  style={{ borderColor: accentColor }}
                >
                  {achievement.rank}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center"
            style={{ color: accentColor }}
          >
            Contact Me
          </motion.h2>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className={`${cardBg} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border-2 ${cardBorder} mx-auto max-w-xl`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleFormChange}
                className={`p-2.5 sm:p-3 rounded-lg border ${cardBorder} focus:outline-none bg-transparent ${textClass} text-sm sm:text-base`}
                style={{ outlineColor: accentColor }}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                className={`p-2.5 sm:p-3 rounded-lg border ${cardBorder} focus:outline-none bg-transparent ${textClass} text-sm sm:text-base`}
                style={{ outlineColor: accentColor }}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleFormChange}
              className={`w-full p-2.5 sm:p-3 rounded-lg border ${cardBorder} mb-4 sm:mb-6 focus:outline-none bg-transparent ${textClass} text-sm sm:text-base`}
              style={{ outlineColor: accentColor }}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleFormChange}
              rows="5"
              className={`w-full p-2.5 sm:p-3 rounded-lg border ${cardBorder} mb-4 sm:mb-6 focus:outline-none bg-transparent ${textClass} text-sm sm:text-base resize-none`}
              style={{ outlineColor: accentColor }}
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2.5 sm:py-3 rounded-full font-bold shadow-lg text-sm sm:text-base"
              style={{ backgroundColor: buttonBg, color: buttonText }}
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
            {formStatus === "success" && (
              <p className="mt-4 text-green-500 font-semibold text-center text-sm sm:text-base">
                Message sent successfully!
              </p>
            )}
            {formStatus === "error" && (
              <p className="mt-4 text-red-500 font-semibold text-center text-sm sm:text-base">
                Failed to send. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
}