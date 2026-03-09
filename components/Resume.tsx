 "use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode } from "react-icons/fi";

const resumeData = [
  {
    year: "2025 - Present",
    title: "Full Stack Developer",
    desc: "Personal / Freelance Projects",
  },
  {
    year: "2024 - 2025",
    title: "Frontend Developer",
    desc: "React / Next.js Projects",
  },
  {
    year: "2023 - 2024",
    title: "Backend Developer Learner",
    desc: "Node.js / Express / Database Practice",
  },
  {
    year: "2022 - 2023",
    title: "Web Development Foundation",
    desc: "HTML / CSS / JavaScript Learning",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="relative py-20">
      <div className="container-custom">

        {/* Header */}
        <div className="mb-12 grid gap-10 md:grid-cols-[200px_1fr] items-center">

          {/* Left Circle Icon */}
          <div className="flex items-center justify-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-[#111] text-[#d9ff3f] shadow-lg">
              <FiCode className="text-5xl" />
            </div>
          </div>

          {/* Title */}
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-white/60">
              MY RESUME
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Real <span className="text-[#d9ff3f]">development growth</span>{" "}
              through practice and projects
            </h2>
          </div>
        </div>

        {/* Resume Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {resumeData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d9ff3f]/40 hover:bg-[#121212]"
            >

              {/* Arrow Icon */}
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <FiArrowUpRight />
              </div>

              {/* Year */}
              <p className="mb-2 text-sm text-white/60">{item.year}</p>

              {/* Title */}
              <h3 className="mb-2 text-xl font-semibold">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/60">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}