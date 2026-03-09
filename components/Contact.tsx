 "use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Reveal from "@/components/Reveal";

const contactLinks = [
  {
    title: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    icon: FaLinkedin,
  },
  {
    title: "Email",
    value: "yourmail@gmail.com",
    href: "mailto:yourmail@gmail.com",
    icon: FiMail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-space">
      <div className="container-custom">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label">Contact</p>

          <h2 className="section-title">
            Let&apos;s <span className="accent">Connect</span>
          </h2>

          <p className="paragraph mt-4">
            Interested in working together or have a project idea? Reach out
            through the platforms below.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 rounded-[18px] border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1.5 hover:border-[#d9ff3f]/50 hover:bg-white/[0.07]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover:scale-110 group-hover:bg-[#d9ff3f] group-hover:text-black">
                  <Icon />
                </div>

                <div>
                  <p className="text-xs text-white/50">{item.title}</p>
                  <p className="text-sm font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}