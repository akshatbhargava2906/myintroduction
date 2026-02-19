import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      id: 1,
      type: "education",
      title: "Master's in Data Science & Machine Learning",
      organization: "National University of Singapore (NUS)",
      location: "Singapore",
      period: "August 2025 - Present",
      description: "Pursuing advanced studies in Data Science and Machine Learning, focusing on statistical modeling, deep learning, and AI applications.",
      icon: <GraduationCap size={24} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      type: "work",
      title: "Software Engineer II",
      organization: "Mastercard",
      location: "Pune, India",
      period: "March 2024 - July 2025",
      description: "Led the development of scalable backend systems and microservices using Java and Spring Boot.",
      responsibilities: [
        "Developed microservices using Java and Spring Boot to support modular, maintainable architectures",
        "Developed automated unit and integration tests for functionality and end-to-end transaction flows",
        "Conducted performance testing (load and spike) to ensure system reliability under stress",
        "Set up data monitoring and dashboards (e.g., Datadog) to track metrics and system health",
        "Implemented regression testing to maintain stability across releases",
        "Collaborated cross-functionally on deployment, API design, and integration",
        "Actively contributed to code reviews and mentored junior developers"
      ],
      icon: <Briefcase size={24} />,
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 3,
      type: "work",
      title: "Software Engineer I",
      organization: "Mastercard",
      location: "Pune, India",
      period: "July 2022 - March 2024",
      description: "Contributed across the full development lifecycle, from feature design to production support.",
      responsibilities: [
        "Developed scalable backend features using Java and Spring Boot",
        "Optimized existing systems to boost performance and reduce technical debt",
        "Refactored code for improved readability, maintainability, and best practice compliance",
        "Wrote unit tests to validate business logic and ensure reliability",
        "Automated API testing and regression checks using Postman to improve test coverage"
      ],
      icon: <Briefcase size={24} />,
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in software engineering and data science
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-amber-500 to-orange-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 
                    ? 'md:flex-row' 
                    : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-white border-4 border-orange-500 z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 
                    ? 'md:pr-16 pl-20 md:pl-0' 
                    : 'md:pl-16 pl-20 md:pr-0'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-orange-100"
                  >
                    {/* Card Header */}
                    <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                          <p className="text-white/90 text-lg font-semibold mb-1">
                            {exp.organization}
                          </p>
                          <div className="flex flex-wrap gap-3 text-sm text-white/80">
                            <span className="flex items-center gap-1">
                              <Calendar size={16} />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={16} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                          {exp.icon}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      {exp.responsibilities && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li 
                                key={idx}
                                className="flex items-start gap-2 text-gray-600"
                              >
                                <span className="text-orange-500 mt-1.5">▸</span>
                                <span className="flex-1">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional: Skills gained section */}
        <motion.div 
          className="mt-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Technologies & Tools Used
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Java", "Spring Boot", "Microservices", "REST APIs",
              "Postman", "Datadog", "Unit Testing", "Integration Testing",
              "Performance Testing", "Code Review", "Git", "CI/CD",
              "Python", "Machine Learning", "Data Analysis", "SQL"
            ].map((tech, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-white text-orange-700 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;