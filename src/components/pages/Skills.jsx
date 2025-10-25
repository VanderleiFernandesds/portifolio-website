import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, level: 95 },
  { name: "CSS", icon: FaCss3Alt, level: 90 },
  { name: "JavaScript", icon: SiJavascript, level: 85 },
  { name: "React", icon: FaReact, level: 80 },
  { name: "Tailwind", icon: SiTailwindcss, level: 85 },
  { name: "Node.js", icon: FaNodeJs, level: 70 },
  { name: "TypeScript", icon: SiTypescript, level: 20 },
  { name: "Git", icon: FaGitAlt, level: 90 },
  { name: "Figma", icon: FaFigma, level: 80 },
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 md:px-32 bg-sky-900 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-14"
      >
        Habilidades
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center"
      >
        {skills.map(({ name, icon: Icon, level }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl cursor-pointer hover:shadow-xl"
          >
            <Icon className="text-gray-200 text-5xl mb-3" />
            <span className="text-white font-medium mb-3">{name}</span>

            {/* Barra de progresso */}
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.2 }}
                className="h-3 bg-cyan-400 rounded-full"
              />
            </div>
            <span className="text-sm text-gray-200 mt-1">{level}%</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;



