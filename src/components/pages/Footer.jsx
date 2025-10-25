import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-sky-950 py-8 px-6 md:px-40 text-center flex flex-col md:flex-row justify-between items-center border-t border-white/20"
    >
      <p className="text-gray-300 mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} - Feito com <span className="text-red-500">❤️</span> por Vanderlei
      </p>

      <div className="text-gray-400">
        Desenvolvido com <span className="text-cyan-400 font-semibold">React</span> e <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
      </div>
    </motion.footer>
  );
}

export default Footer;

