import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, MapPin, Send, Menu, X, Code, Palette, Smartphone } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: 'Frontend', icon: Code, color: 'from-purple-500 to-pink-500' },
    { name: 'UI/UX', icon: Palette, color: 'from-blue-500 to-purple-500' },
    { name: 'Mobile', icon: Smartphone, color: 'from-green-500 to-blue-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 text-gray-900 dark:text-white transition-all duration-500">
      {/* Enhanced Header */}
<header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  scrolled 
    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-purple-500/10 border-b border-purple-100 dark:border-purple-800/30' 
    : 'bg-transparent'
}`}>
  <nav className="container mx-auto px-4 sm:px-6 py-3">
    <div className="flex justify-between items-center h-16">
  {/* Logo */}
  <div className="relative flex items-center">
    <img 
      src="/logo.svg" 
      alt="Logo Mahalia Pires"
      className="h-20 sm:h-24 md:h-28 w-auto object-contain"
    />
  </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {['about', 'education', 'projects', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group"
          >
            <span className="relative z-10 capitalize">
              {item === 'about' ? 'À propos' : 
               item === 'education' ? 'Formation' : 
               item === 'projects' ? 'Projets' : 'Contact'}
            </span>
            <div className="absolute inset-0 bg-purple-100 dark:bg-purple-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button>
        ))}
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="relative p-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800/50 dark:hover:to-pink-800/50 transition-all duration-300 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          {darkMode ? (
            <Sun className="w-5 h-5 text-purple-600 dark:text-purple-400 relative z-10" />
          ) : (
            <Moon className="w-5 h-5 text-purple-600 dark:text-purple-400 relative z-10" />
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
        >
          {darkMode ? <Sun className="w-5 h-5 text-purple-600" /> : <Moon className="w-5 h-5 text-purple-600" />}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-purple-600" /> : <Menu className="w-6 h-6 text-purple-600" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden transition-all duration-300 overflow-hidden ${
      mobileMenuOpen ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0'
    }`}>
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-purple-100 dark:border-purple-800/30 p-4 space-y-2">
        {['about', 'education', 'projects', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-all duration-200"
          >
            {item === 'about' ? 'À propos' : 
             item === 'education' ? 'Formation' : 
             item === 'projects' ? 'Projets' : 'Contact'}
          </button>
        ))}
      </div>
    </div>
  </nav>
</header>

      {/* Enhanced Hero Section */}
      <section id="about" className="pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                    <div className="w-full h-full rounded-3xl overflow-hidden">
                      <img 
                        src="/moi.jpg" 
                        alt="Mahalia Pires" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                    👋 Bonjour, je suis
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Mahalia
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Pires</span>
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <h2 className="text-2xl lg:text-3xl text-purple-600 dark:text-purple-400 font-semibold">
                    Développeuse Web
                  </h2>
                  <div className="flex space-x-2">
                    {skills.map((skill, index) => (
                      <div key={index} className={`px-3 py-1 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm font-medium flex items-center space-x-1`}>
                        <skill.icon className="w-3 h-3" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Passionnée par la création d'expériences numériques exceptionnelles, je transforme vos idées en applications web modernes et performantes. Spécialisée dans les technologies React, TypeScript et les dernières innovations du développement frontend.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Me Contacter</span>
                  </span>
                </a>
                
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/mahalia-pires-330593223/"
                    className="group p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100 dark:border-purple-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors" />
                  </a>
                  <a
                    href="https://github.com/mahanunu"
                    className="group p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100 dark:border-purple-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
              <Github className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors" />
  </a>
                </div>
              </div>
            </div>
            
            {/* Enhanced Profile Image */}
            <div className="flex-shrink-0 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10"></div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Mon Parcours
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une formation solide et progressive dans le domaine du développement web
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
                {
                period: "2025 - 2027",
                title: "Master Développement Fullstack",
                school: "IIM Digital School Paris",
                description: "Poursuite de mon cursus en développement web avec un approfondissement des compétences techniques. Cette année marque une étape clé vers l'intégration d’un Master Développeur Fullstack en 2025, dans le but de me spécialiser dans la conception d'applications web complètes et performantes.",
                image: "/iim.png" // URL de l'image correspondante
              },
              {
                period: "2024 - 2025",
                title: "Bachelor Développement Web",
                school: "IIM Digital School Paris",
                description: "Poursuite de mon cursus en développement web avec un approfondissement des compétences techniques. Cette année marque une étape clé vers l'intégration d’un Master Développeur Fullstack en 2025, dans le but de me spécialiser dans la conception d'applications web complètes et performantes.",
                image: "/iim.png" // URL de l'image correspondante
              },
              {
                period: "2022 - 2024",
                title: "Bachelor Développement Web",
                school: "Supdeweb",
                description: "Formation pluridisciplinaire axée sur les bases du développement web (front-end & back-end), les fondamentaux DevOps et la sécurité informatique. J’y ai également participé à plusieurs hackathons en équipe, mêlant développement, marketing et communication, pour créer des projets complets (sites web, applications). Expérience pratique renforcée par l’utilisation de WordPress pour un projet concret pour un vrai client.",
                image: "/sdw.png" // URL de l'image correspondante
              },
              {
                period: "2018 - 2022",
                title: "Licence LLCER Coréen",
                school: "Institut National des Langues et Civilisations Orientales (INALCO)",
                description: "L’apprentissage de la langue, de la culture et de l’histoire coréennes m’a permis de développer une forte rigueur syntaxique et une capacité d’analyse fine, des atouts précieux que je mobilise aujourd’hui dans l’apprentissage de nouveaux langages de programmation.",
                image: "/inalco.png" // URL de l'image correspondante
              }
            ].map((edu, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover-from-purple-800 hover-via-purple-900 hover-to-purple-800">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-transparent rounded-md mr-2">
                      <img 
                        src={edu.image} 
                        alt={`${edu.title} Logo`} 
                        className="w-16 h-16 rounded-md object-cover"
                      />
                    </div>
                    <span className="text-purple-400 font-semibold text-lg">{edu.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{edu.title}</h3>
                  <p className="text-purple-400 mb-4 font-medium">{edu.school}</p>
                  <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Mes Réalisations
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une sélection de projets qui démontrent mes compétences et ma créativité
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                      P{project}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Projet Innovant {project}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Application web moderne développée avec les dernières technologies. Interface intuitive et expérience utilisateur optimisée.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind'].map((tech, techIndex) => (
                      <span key={techIndex} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Travaillons Ensemble
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Prêt à donner vie à votre projet ? Contactez-moi pour une collaboration créative
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-purple-100 dark:border-purple-800/30">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Discutons de votre vision</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Chaque projet est unique. Je prends le temps de comprendre vos besoins pour créer des solutions sur mesure qui dépassent vos attentes.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                      <p className="text-purple-600 dark:text-purple-400">mahalia.pires@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Localisation</p>
                      <p className="text-purple-600 dark:text-purple-400">Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-purple-100 dark:border-purple-800/30 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-4 rounded-2xl border border-purple-200 dark:border-purple-700 bg-purple-50/50 dark:bg-purple-900/20 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-4 rounded-2xl border border-purple-200 dark:border-purple-700 bg-purple-50/50 dark:bg-purple-900/20 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-4 rounded-2xl border border-purple-200 dark:border-purple-700 bg-purple-50/50 dark:bg-purple-900/20 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-4 rounded-2xl border border-purple-200 dark:border-purple-700 bg-purple-50/50 dark:bg-purple-900/20 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Parlez-moi de votre projet..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-8 rounded-2xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto max-w-6xl text-center relative">
          <div className="mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Mahalia Pires
            </h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Développeuse web passionnée, créatrice d'expériences numériques exceptionnelles
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/mahalia-pires-330593223/", color: "hover:text-blue-400" },
              { icon: Github, href: "https://github.com/mahanunu", color: "hover:text-gray-300" },
              { icon: Mail, href: "mahalia.pires@gmail.com", color: "hover:text-purple-400" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/20 hover:-translate-y-1`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Mahalia Pires. Conçu avec ❤️ et beaucoup de café ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;