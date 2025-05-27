import Image from "next/image";
import React from "react";
import { Linkedin } from "./socialMedia/Linkedin";
import { Github } from "./socialMedia/Github";
import { Twitter } from "./socialMedia/Twitter";
import { Mail } from "./socialMedia/Mail";

export const Intro: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start gap-10 mt-10">
      <section className="flex justify-center flex-col w-full ">
        <div className="w-48 h-48 rounded-full flex justify-center items-center border-2 border-solid border-teal-300">
          <Image src="/logo.png" width={100} height={100} alt="logo image" />
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <p className="text-2xl text-center sm:text-left md:text-4xl font-semibold">
          Mohit <span className="text-teal-300">Sharma</span>
        </p>
        <div className="flex flex-col gap-4">
          <p className="p-0 m-0 font-normal text-justify text-[12px] sm:text-sm text-gray-300/80">
            Hey, I'm a passionate Frontend Developer with 2.9 years of
            experience crafting responsive, performant, and accessible web
            applications. I specialize in{" "}
            <span className="text-teal-400 text-medium">React</span>,{" "}
            <span className="text-teal-400 text-medium">Next.js</span>,
            <span className="text-teal-400 text-medium">TypeScript</span>,{" "}
            <span className="text-teal-400 text-medium">Tailwind CSS</span>, and
            building dynamic UIs with clean, modular code. I focus on enhancing
            UX through optimized performance, seamless authentication flows, and
            real-time data handling. Skilled in testing with{" "}
            <span className="text-teal-400 text-medium">Playwright</span>, and
            familiar with backend tools like
            <span className="text-teal-400 text-medium"> Node.js</span> and{" "}
            <span className="text-teal-400 text-medium">MongoDB</span>.
          </p>

          <section className="flex items-center justify-center sm:justify-start gap-3 mt-5 sm:mt-2.5">
            <a
              href="https://www.linkedin.com/in/mohit-sharma13"
              target="_blank"
            >
              <Linkedin width={24} height={24} />
            </a>
            <a href="https://www.github.com/DarkLegend" target="_blank">
              <Github width={24} height={24} />
            </a>
            <a href="https://www.x.com/Dark-Legend36" target="_blank">
              <Twitter width={24} height={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mohit.sharma131401@gmail.com&su=Subject&body=BodyText"
              target="_blank"
            >
              <Mail width={24} height={24} />
            </a>
          </section>
        </div>
      </section>
    </section>
  );
};
