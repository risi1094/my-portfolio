 "use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiOpenjdk,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import Reveal from "@/components/Reveal";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Java", icon: SiOpenjdk },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Vercel", icon: SiVercel },
];

export default function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="container-custom">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            Tools & <span className="accent">Technologies</span> I Use
          </h2>
          <p className="paragraph mt-4">
            Frontend, backend, database, and deployment tools I use to build
            complete full stack applications.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group rounded-[20px] border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-2 hover:border-[#d9ff3f]/40 hover:bg-white/[0.07] hover:shadow-[0_16px_50px_rgba(0,0,0,0.3)]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover:scale-110 group-hover:bg-[#d9ff3f] group-hover:text-black">
                    <Icon className="text-2xl" />
                  </div>

                  <p className="mt-4 text-sm font-medium text-white/90">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}