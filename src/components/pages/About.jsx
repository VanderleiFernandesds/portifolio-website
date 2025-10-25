import { motion } from "framer-motion";
import fotoVanderlei from "../../assets/foto-vanderlei.jpg";

function About() {
  const sections = [
    {
      title: "Olá! Sou Vanderlei Fernandes",
      text: "Sou um desenvolvedor web apaixonado por criar soluções digitais inovadoras e eficientes. Adoro transformar ideias em experiências interativas e funcionais, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.",
    },
    {
      title: "Minha Jornada",
      text: "Minha jornada no desenvolvimento web começou há alguns anos, explorando o mundo do HTML, CSS e JavaScript. Com o tempo, aprofundei meus conhecimentos em frameworks modernos e desenvolvi projetos que uniram design, performance e boas práticas de código.",
    },
    {
      title: "O que me Motiva",
      text: "O que me motiva é a possibilidade de resolver problemas reais através da tecnologia. Cada linha de código é uma oportunidade de impactar pessoas, melhorar processos e criar algo que faça diferença no mundo digital.",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-sky-950 min-h-screen text-slate-100 py-20 px-6 md:px-32 flex flex-col items-center "
    >
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2
          id="about-title"
          className="text-4xl md:text-5xl font-bold mb-4 tracking-wide text-sky-300"
        >
          Sobre Mim
        </h2>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Conheça um pouco mais sobre minha trajetória e paixão pelo
          desenvolvimento web.
        </p>
      </motion.div>

      {/* Conteúdo principal */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Foto */}
        <motion.img
          src={fotoVanderlei}
          alt="Retrato profissional de Vanderlei Fernandes"
          width={350}
          height={350}
          loading="lazy"
          className="w-72 sm:w-80 md:w-[22rem] rounded-2xl shadow-2xl object-cover border border-sky-500/30"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-[60%] p-6 md:p-10 text-left rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20"
        >
          <div className="space-y-8">
            {sections.map(({ title, text }) => (
              <div key={title}>
                <h3 className="text-2xl font-semibold mb-3 text-sky-300 tracking-wide">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-200">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
