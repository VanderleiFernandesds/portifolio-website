import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col py-20 px-6 md:px-32 bg-sky-900 text-center items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-12"
      >
        Contato
      </motion.h2>

      <div className="flex flex-col md:flex-row md:space-x-12 w-full max-w-4xl gap-10">
        {/* Formulário */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col text-lg bg-white/10 backdrop-blur-md p-6 rounded-2xl w-full shadow-xl border border-white/20"
        >
          <h3 className="mb-4 text-xl font-semibold text-white">Envie uma mensagem</h3>

          <label htmlFor="nome" className="mb-2 text-left text-gray-200">Nome:</label>
          <input
            id="nome"
            type="text"
            className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/20 text-white placeholder-gray-200"
            placeholder="Nome completo"
          />

          <label htmlFor="email" className="mb-2 text-left text-gray-200">Email:</label>
          <input
            id="email"
            type="email"
            className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/20 text-white placeholder-gray-200"
            placeholder="Email"
          />

          <label htmlFor="mensagem" className="mb-2 text-left text-gray-200">Mensagem:</label>
          <textarea
            id="mensagem"
            className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/20 text-white placeholder-gray-200"
            rows="5"
            placeholder="Sua mensagem"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold mt-2"
          >
            Enviar
          </button>

          {/* Redes Sociais */}
          <h3 className="mt-8 mb-4 text-xl font-semibold text-white">Redes Sociais</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-400 transition-colors"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/in/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:seuemail@gmail.com"
              aria-label="E-mail"
              className="hover:text-orange-500 transition-colors"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;


