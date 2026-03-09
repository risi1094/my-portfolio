 "use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone, FiX } from "react-icons/fi";

type SidebarMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const socialLinks = [
  {
    href: "https://facebook.com/",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://instagram.com/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/",
    icon: FaGithub,
    label: "GitHub",
  },
];

export default function SidebarMenu({
  isOpen,
  onClose,
}: SidebarMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed right-0 top-0 z-[80] flex h-screen w-full max-w-[320px] flex-col border-l border-white/10 bg-[#0f0f0f] px-5 py-5 shadow-2xl md:max-w-[340px] md:px-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-[#171717]">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-bold leading-none text-white">
                    RISI
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-[#d9ff3f] transition hover:scale-105 hover:bg-[#181818]"
                aria-label="Close menu"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-1">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[15px] leading-8 text-white/72">
                  I build modern full stack web applications with premium UI,
                  clean architecture, and scalable backend solutions.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-[15px] font-semibold uppercase tracking-[0.14em] text-white/55">
                  Contact Info
                </h3>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-4 rounded-[18px] border border-white/8 bg-white/[0.02] p-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[#d9ff3f]">
                      <FiMapPin className="text-lg" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                        Location
                      </p>
                      <p className="mt-1 text-[15px] text-white/85">
                        Anuradhapura, Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-[18px] border border-white/8 bg-white/[0.02] p-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[#d9ff3f]">
                      <FiMail className="text-lg" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                        Email
                      </p>
                      <p className="mt-1 break-all text-[15px] text-white/85">
                        risirislam1094@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-[18px] border border-white/8 bg-white/[0.02] p-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[#d9ff3f]">
                      <FiPhone className="text-lg" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                        Phone
                      </p>
                      <p className="mt-1 text-[15px] text-white/85">
                        +94 76 671 1562
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-[15px] font-semibold uppercase tracking-[0.14em] text-white/55">
                  Follow Me
                </h3>

                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#171717] text-[#d9ff3f] transition duration-300 hover:-translate-y-1 hover:border-[#d9ff3f]/50 hover:bg-[#d9ff3f] hover:text-black"
                      >
                        <Icon className="text-sm" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}