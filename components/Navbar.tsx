 "use client";

import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaAsterisk } from "react-icons/fa";
import SidebarMenu from "@/components/SidebarMenu";

const navItems = [
  "Home",
  "About",
  "Resume",
  "Services",
  "Projects",
  "Skills",
  "Contact",
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );

      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        if (!section) continue;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <div className="container-custom flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            
            <span className="text-lg font-bold tracking-tight text-white">
              RISI
            </span>
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`group relative pb-1 text-[13px] font-medium transition duration-300 ${
                    isActive
                      ? "text-[#d9ff3f]"
                      : "text-white/80 hover:text-[#d9ff3f]"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#d9ff3f] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden text-[12px] font-semibold uppercase tracking-[0.14em] text-white/90 transition hover:text-[#d9ff3f] md:block"
            >
              Let&apos;s Talk
            </a>

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9ff3f] text-black transition hover:scale-105"
              aria-label="Open menu"
            >
              <HiOutlineMenuAlt3 className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      <SidebarMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}