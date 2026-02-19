import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src='singapore-background.jpg'
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-amber-800/70 to-yellow-700/80"></div>
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left side - Glassmorphism card with text content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glassmorphism Card */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Akshat Atul Bhargava
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl text-orange-200 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Data Scientist | Analyst | Engineer
              </motion.h2>
              
              <motion.p 
                className="text-base text-gray-100 mb-8 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Data Science graduate student at NUS with 2+ years at Mastercard. Building scalable data-driven systems and turning business challenges into actionable insights through machine learning and analytics.              </motion.p>

              {/* Buttons and social links */}
              <motion.div 
                className="flex items-center gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <button className="bg-white text-orange-900 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all flex items-center gap-2 shadow-lg hover:scale-105 transform">
                  <Download size={20} />
                  Download CV
                </button>
                
                <div className="flex gap-3">
                  <a href="https://github.com/akshatbhargava2906" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all text-white hover:scale-110 transform">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/bhargavaakshat2906/" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all text-white hover:scale-110 transform">
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Profile image with warm glow effect */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Warm glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              
              {/* Profile image container with warm gradient border */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img 
                    src="profile.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
