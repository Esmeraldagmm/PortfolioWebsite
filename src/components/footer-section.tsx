import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const links = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
];

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32 bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-white block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://github.com/Esmeraldagmm"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl p-2 transition duration-200"
          >
            <FaGithub className="text-muted-foreground hover:text-white block size-6" />
          </a>
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/esmeraldagm/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl p-2 transition duration-200"
          >
            <FaLinkedin className="text-muted-foreground hover:text-white block size-6" />
          </a>
          {/* email */}
          <a
            href="mailto:esmeraldamenera27@gmail.com"
            className="group rounded-xl p-2 transition duration-200"
          >
            <MdEmail className="text-muted-foreground hover:text-white block size-6" />
          </a>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} Esmeralda Gonzalez Menera, All rights
          reserved
        </span>
      </div>
    </footer>
  );
}
