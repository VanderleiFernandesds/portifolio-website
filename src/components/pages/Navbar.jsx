import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-white/10 backdrop-blur-md border-b border-white/20" : "bg-transparent"
      }`}
    >
      <ul className="flex justify-center gap-6 p-4 rounded-b-xl">
        <li>
          <a
            href="#about"
            className="text-white hover:text-cyan-400 transition-colors duration-300"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-white hover:text-cyan-400 transition-colors duration-300"
          >
            Habilidades
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-white hover:text-cyan-400 transition-colors duration-300"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white hover:text-cyan-400 transition-colors duration-300"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

