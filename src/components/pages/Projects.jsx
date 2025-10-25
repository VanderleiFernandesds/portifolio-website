import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Array de projetos - Atualize com seus próprios projetos
const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description:
      "Descrição detalhada do projeto 1. Explique as tecnologias utilizadas e os desafios superados.",
    image: "/path/to/project1-image.jpg", // Adicione o caminho da imagem
    tags: ["React", "TailwindCSS", "Node.js"],
    githubUrl: "https://github.com/seu-usuario/projeto1",
    liveUrl: "https://projeto1.com",
  },
  {
    id: 2,
    title: "Projeto 2",
    description:
      "Descrição detalhada do projeto 2. Destaque as principais funcionalidades e aprendizados.",
    image: "/path/to/project2-image.jpg", // Adicione o caminho da imagem
    tags: ["Next.js", "TypeScript", "MongoDB"],
    githubUrl: "https://github.com/seu-usuario/projeto2",
    liveUrl: "https://projeto2.com",
  },
  // Adicione mais projetos conforme necessário
   {
    id: 3,
    title: "Projeto 2",
    description:
      "Descrição detalhada do projeto 2. Destaque as principais funcionalidades e aprendizados.",
    image: "/path/to/project2-image.jpg", // Adicione o caminho da imagem
    tags: ["Next.js", "TypeScript", "MongoDB"],
    githubUrl: "https://github.com/seu-usuario/projeto2",
    liveUrl: "https://projeto2.com",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-sky-950 py-20 px-6 md:px-32"
    >
      {/* Cabeçalho da seção */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-100">
          Meus Projetos
        </h2>
        <p className="text-lg text-sky-200/90 max-w-2xl mx-auto">
          Uma seleção dos meus projetos mais recentes e relevantes.
          Cada projeto representa um desafio único e uma oportunidade de aprendizado.
        </p>
      </motion.div>

      {/* Grid de projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sky-500/20"
          >
            {/* Imagem do projeto */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={`Screenshot do projeto ${project.title}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Conteúdo do projeto */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-sky-100 mb-2">
                {project.title}
              </h3>
              <p className="text-sky-200/90 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-sky-900/50 text-sky-200 rounded-full text-sm font-medium border border-sky-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sky-200/90 hover:text-sky-400 transition-colors"
                >
                  <FiGithub className="text-lg" />
                  <span>Código</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sky-200/90 hover:text-sky-400 transition-colors"
                >
                  <FiExternalLink className="text-lg" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
