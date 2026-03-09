 "use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    desc: "Modern responsive UI using React, Next.js, Tailwind CSS, and smooth user interactions.",
  },
  {
    number: "02",
    title: "Backend Development",
    desc: "Server-side logic, authentication, routing, and structured application architecture.",
  },
  {
    number: "03",
    title: "REST API Development",
    desc: "Clean API integration and development with scalable data flow for web applications.",
  },
  {
    number: "04",
    title: "Database Design",
    desc: "Efficient schema design and data handling with MySQL, MongoDB, PostgreSQL, or Firebase.",
  },
  {
    number: "05",
    title: "Full Stack Web Apps",
    desc: "Complete end-to-end applications from frontend interface to backend and deployment.",
  },
  {
    number: "06",
    title: "Performance & Deployment",
    desc: "Optimization, responsiveness, hosting, and production-ready deployment workflows.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-space">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-label">What I Do</p>
          <h2 className="section-title">
            Services for <span className="accent">modern full stack</span>{" "}
            development needs
          </h2>
        </motion.div>

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              className="group rounded-[22px] border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-[#d9ff3f]/50 hover:bg-white/[0.07]"
            >
              <div className="flex items-start gap-4">
                <div className="min-w-[42px] text-2xl font-semibold text-white/70">
                  {service.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/55">
                    {service.desc}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition group-hover:bg-[#d9ff3f] group-hover:text-black">
                  <FiArrowUpRight className="text-base" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}