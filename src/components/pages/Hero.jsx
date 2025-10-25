import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Github, Linkedin, Code } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-40 overflow-hidden text-white"
    >
      {/* ==== GRADIENTE ANIMADO ==== */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(to right bottom, #0369a1, #0c4a6e)",
            "linear-gradient(to left top, #075985, #082f49)",
            "linear-gradient(to right top, #0369a1, #0c4a6e)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* ==== TEXTO ==== */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center w-full max-w-[90%] sm:max-w-2xl lg:max-w-3xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-400 block mb-2">
            Olá, sou
          </span>
          Vanderlei Fernandes
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-full sm:max-w-xl leading-relaxed"
        >
          Formado em Análise e Desenvolvimento de Sistemas, sou desenvolvedor
          Front-End com experiência em <strong>HTML</strong>,{" "}
          <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
          <strong>React</strong> e <strong>Tailwind CSS</strong>. Crio
          interfaces modernas, responsivas e focadas na melhor experiência do
          usuário.
        </motion.p>

        {/* ==== BOTÕES ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center"
        >
          <a
            href="#projects"
            aria-label="Ver meus projetos"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-cyan-700 rounded-lg text-base sm:text-lg font-semibold hover:bg-cyan-600 transition-colors duration-300 flex items-center gap-2"
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5" /> Ver Projetos
          </a>
          <a
            href="https://wa.me/5511999999999?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato via WhatsApp"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-green-500 rounded-lg text-base sm:text-lg font-semibold flex items-center gap-2 hover:bg-green-600 transition-colors duration-300"
          >
            <FaWhatsapp className="text-xl" /> Contato
          </a>
        </motion.div>

        {/* ==== ÍCONES SOCIAIS ==== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 flex gap-4 sm:gap-6"
        >
          <a
            href="https://github.com/VanderleiFernandesds"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar GitHub"
            className="hover:text-gray-400 transition-colors"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>

          <a
            href="www.linkedin.com/in/vanderleifernandesds"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar LinkedIn"
            className="hover:text-blue-500 transition-colors"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>

          <a
            href="mailto:vanderleifds.9000@gmail.com"
            aria-label="Enviar e-mail"
            className="hover:text-gray-300 transition-colors"
          >
            <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </motion.div>
      </motion.header>

      {/* ==== SCROLL DOWN ==== */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        <a href="#about" aria-label="Ir para a próxima seção">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
            <div className="w-2 h-2 bg-white rounded-full mb-1 animate-bounce"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
