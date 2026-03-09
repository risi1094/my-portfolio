 "use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiMail, FiPhoneCall } from "react-icons/fi";

const points = [
  "Responsive Frontend Development",
  "REST API Integration",
  "Backend Logic & Authentication",
  "Database Design & Management",
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
              Building <span className="accent">full stack products</span> with
              clean design and practical functionality
            </h2>

            <p className="paragraph mt-5 max-w-xl">
              I&apos;m a full stack developer focused on creating complete web
              applications from attractive frontend interfaces to secure backend
              systems and database integration. I enjoy building fast, usable,
              and scalable digital products.
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
                <p className="mt-1 text-sm font-semibold text-white">
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
              <div className="relative flex min-h-[420px] items-end justify-center overflow-hidden rounded-[20px] bg-[#e9e9e9]">
                 <img
  src="/about-photo.jpg"
  alt="Developer"
  className="h-full w-full object-cover"
             />
              </div>

              <div className="absolute left-[-10px] top-[20%] rounded-full border border-white/10 bg-white px-4 py-2 text-xs font-semibold text-black shadow-xl">
                Frontend Developer ↗
              </div>

              <div className="absolute bottom-[15%] left-[-8px] rounded-full border border-white/10 bg-white px-4 py-2 text-xs font-semibold text-black shadow-xl">
                Backend Developer ↗
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