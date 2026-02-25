import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Brain, 
  BarChart3, 
  Cloud, 
  GitBranch,
  Terminal,
  Workflow
} from 'lucide-react';

function Skills() {

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={32} />,
      skills: ["Python", "SQL", "JavaScript", "Java"]
    },
    {
      title: "Data Science & ML",
      icon: <Brain size={32} />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart3 size={32} />,
      skills: ["Matplotlib", "Seaborn", "Plotly"]
    },
    {
      title: "Databases",
      icon: <Database size={32} />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Cassandra"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={32} />,
      skills: ["AWS", "GCP", "Docker"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Workflow size={32} />,
      skills: ["Git", "FastAPI", "Spark"]
    },
    {
      title: "Version Control",
      icon: <GitBranch size={32} />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"]
    },
    {
      title: "Development Tools",
      icon: <Terminal size={32} />,
      skills: ["VS Code", "Jupyter", "PyCharm", "Linux", "Bash"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 px-6">
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build data-driven solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              {/* Skill Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 h-full">
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full font-medium hover:bg-orange-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Core Competencies
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { name: "Machine Learning & AI", level: 90 },
              { name: "Data Analysis & Statistics", level: 95 },
              { name: "Python Programming", level: 92 },
              { name: "SQL & Database Management", level: 88 },
              { name: "Cloud Computing (AWS/GCP)", level: 85 },
              { name: "Data Visualization", level: 90 }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">{skill.name}</span>
                  <span className="text-orange-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;