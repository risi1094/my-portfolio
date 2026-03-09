 "use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "Bookshop Management System",
    desc: "Java-based desktop system for managing books, categories, and billing operations.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    stack: ["Java", "Swing", "File Handling"],
    github: "https://github.com/yourusername/bookshop",
    demo: "",
  },
  {
    title: "Cricket Score Overlay App",
    desc: "Realtime cricket overlay system with admin control and Firebase realtime database.",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
    stack: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/yourusername/cricket-overlay",
    demo: "",
  },
  {
    title: "Alarm Web Application",
    desc: "Modern alarm scheduling web app with responsive UI and notifications.",
    image:
      "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=1200&q=80",
    stack: ["Next.js", "TypeScript", "UI Design"],
    github: "https://github.com/yourusername/alarm-app",
    demo: "",
  },
  {
    title: "Portfolio Website",
    desc: "Animated premium portfolio website with Next.js, Tailwind CSS and modern layout.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container-custom">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label">Projects</p>

          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>

          <p className="paragraph mt-4">
            Some of the projects that showcase my full stack development skills
            and UI building experience.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[22px] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-[#d9ff3f]/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  {project.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#d9ff3f] hover:text-[#d9ff3f]"
                    >
                      <FiGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full bg-[#d9ff3f] px-4 py-2 text-xs font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}