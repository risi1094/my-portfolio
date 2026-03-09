 "use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-6 md:pt-10">
      <div className="blur-orb left-[-80px] top-[60px]" />
      <div className="blur-orb bottom-[-60px] right-[-80px]" />

      <div className="container-custom">
        <div className="grid min-h-[calc(90vh-80px)] items-center gap-10 py-6 md:grid-cols-[1fr_1.05fr_0.62fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-3 text-lg text-white/55 md:text-2xl">
              Hello, I&apos;m
            </p>

            <h1 className="mb-3 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[#d9ff3f] md:text-6xl">
              RISLAM
            </h1>

            <h2 className="mb-5 text-3xl font-semibold leading-[1.02] text-white md:text-5xl">
              Full Stack <br /> Developer
            </h2>

            <p className="paragraph max-w-[500px]">
              I build modern, responsive, and scalable web applications with
              clean UI, powerful backend logic, and efficient databases.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="neon-btn transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_18px_rgba(217,255,63,0.22)]"
              >
                Hire Me <FiArrowRight />
              </a>

              <a
                href="#projects"
                className="outline-btn transition duration-300 hover:-translate-y-1"
              >
                View Projects <FiArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.7 },
              scale: { duration: 0.7 },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative mx-auto"
          >
            <div className="relative flex h-[340px] w-[340px] items-center justify-center md:h-[500px] md:w-[500px]">
              {/* Green ring */}

<div className="absolute inset-[36px] rounded-full border-[16px] border-[#d9ff3f]/30" />

{/* Inner teal background */}

<div className="absolute inset-[90px] rounded-full bg-gradient-to-b from-[#0f6f72] to-[#0a4d50]" />

{/* Photo frame */}

<div className="absolute inset-[105px] overflow-hidden rounded-full border border-white/10">
  <img
    src="/profile.png"
    alt="Profile"
    className="absolute bottom-0 left-1/2 h-[112%] w-auto max-w-none -translate-x-1/2 object-contain"
  />
</div>
              <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9ff3f]/12 blur-[70px] md:h-[290px] md:w-[290px]" />

              <div className="absolute inset-[98px] rounded-full bg-gradient-to-b from-[#0d6f73] to-[#0a4d50]" />

              <div className="absolute inset-[110px] overflow-hidden rounded-full border border-white/10 bg-transparent">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="absolute bottom-0 left-1/2 h-[112%] w-auto max-w-none -translate-x-1/2 object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="glass-card p-5 md:p-6"
          >
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-5">
                <h3 className="text-4xl font-bold text-[#d9ff3f]">2+</h3>
                <p className="mt-1 text-sm text-white/70">Years Of Learning</p>
              </div>

              <div className="border-b border-white/10 pb-5">
                <h3 className="text-4xl font-bold text-[#d9ff3f]">10+</h3>
                <p className="mt-1 text-sm text-white/70">Projects Built</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#d9ff3f]">100%</h3>
                <p className="mt-1 text-sm text-white/70">
                  Passion & Dedication
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}