 "use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiMail, FiPhoneCall } from "react-icons/fi";

const points = [
  "Responsive Frontend Development",
  "Backend Logic & API Integration",
  "Database Design & Management",
  "Clean UI with Modern User Experience",
];

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="container-custom">
        <div className="glass-card grid items-center gap-8 overflow-hidden p-5 md:grid-cols-2 md:p-8 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-label">About Me</p>

            <h2 className="section-title max-w-2xl">
              Passionate <span className="accent">full stack developer</span>{" "}
              building modern and scalable web solutions
            </h2>

            <p className="paragraph mt-5 max-w-xl">
              I’m a passionate Full Stack Developer focused on building modern,
              fast, and scalable web applications. I enjoy transforming ideas
              into real products using clean code, efficient architecture, and
              modern technologies.
            </p>

            <p className="paragraph mt-4 max-w-xl">
              My main stack includes React, Next.js, Node.js, and modern UI
              tools like Tailwind CSS. I love learning new technologies and
              continuously improving my development skills through real projects.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {points.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <FiCheckCircle className="text-lg text-[#d9ff3f]" />
                  <span className="text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#d9ff3f] text-black">
                  <FiMail className="text-base" />
                </div>
                <p className="text-xs text-white/50">Email Me</p>
                <p className="mt-1 break-all text-sm font-semibold text-white">
                  risirislam1094@gmail.com
                </p>
              </div>

              <div className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#d9ff3f] text-black">
                  <FiPhoneCall className="text-base" />
                </div>
                <p className="text-xs text-white/50">Call Me</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  +94 76 671 1562
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative mx-auto w-full max-w-[480px]"
          >
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111] p-3">
              <div className="relative flex min-h-[420px] items-end justify-center overflow-hidden rounded-[20px] bg-[#101010]">
                <img
                  src="/about-photo.jpg"
                  alt="Developer"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute left-[-10px] top-[20%] rounded-full border border-white/10 bg-white px-4 py-2 text-xs font-semibold text-black shadow-xl">
                Full Stack Developer ↗
              </div>

              <div className="absolute bottom-[15%] left-[-8px] rounded-full border border-white/10 bg-white px-4 py-2 text-xs font-semibold text-black shadow-xl">
                UI + Backend Focus ↗
              </div>

              <div className="absolute right-4 top-4 rounded-xl border border-white/10 bg-black/80 px-3 py-2 backdrop-blur-md">
                <p className="text-[11px] text-white/55">Projects Built</p>
                <p className="mt-1 text-xl font-bold text-[#d9ff3f]">10+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}