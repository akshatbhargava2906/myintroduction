import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Your projects data - easily update later
  const projects = [
    {
      id: 1,
      title: "Face Recognition using Deep Learning",
      description: "Building an application based on the paper \"Siamese Neural Networks for One-shot Image Recognition\" using Tensorflow ",
      image: "${import.meta.env.BASE_URL}face_recog_p1.jpeg",
      technologies: ["Python", "Deep Learning", "TensorFlow", "DQN"],
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "" // Optional: leave empty if no live demo
    },
    {
      id: 2,
      title: "Project Name 2",
      description: "Brief description of your project. What problem did it solve? What technologies did you use? What was the impact?",
      image: "https://via.placeholder.com/600x400/fb923c/ffffff?text=Project+2",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      githubLink: "https://github.com/yourusername/project2",
      liveLink: ""
    },
    {
      id: 3,
      title: "Project Name 3",
      description: "Brief description of your project. What problem did it solve? What technologies did you use? What was the impact?",
      image: "https://via.placeholder.com/600x400/fdba74/ffffff?text=Project+3",
      technologies: ["Pandas", "Scikit-learn", "FastAPI", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/project3",
      liveLink: ""
    },
    {
      id: 4,
      title: "Project Name 4",
      description: "Brief description of your project. What problem did it solve? What technologies did you use? What was the impact?",
      image: "https://via.placeholder.com/600x400/fed7aa/ffffff?text=Project+4",
      technologies: ["PyTorch", "Flask", "Redis", "Kubernetes"],
      githubLink: "https://github.com/yourusername/project4",
      liveLink: ""
    },
    {
      id: 5,
      title: "Project Name 5",
      description: "Brief description of your project. What problem did it solve? What technologies did you use? What was the impact?",
      image: "https://via.placeholder.com/600x400/ffedd5/ffffff?text=Project+5",
      technologies: ["Apache Spark", "Airflow", "Tableau", "GCP"],
      githubLink: "https://github.com/yourusername/project5",
      liveLink: ""
    }
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentIndex * projectsPerPage,
    (currentIndex + 1) * projectsPerPage
  );

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my latest work in data science, machine learning, and software engineering
          </p>
        </motion.div>

        {/* Projects Carousel Container */}
        <div className="relative overflow-hidden">
          
          {/* Projects Grid with AnimatePresence for smooth transitions */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div 
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.3 },
                opacity: { duration: 0.2 }
                }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  {/* Project Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                    
                    {/* Project Image */}
                    <div className="relative overflow-hidden h-56">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-800 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110"
                        >
                          <Github size={20} />
                        </a>
                        {project.liveLink && (
                          <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-800 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="bg-white p-4 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'bg-orange-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white p-4 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === totalPages - 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;