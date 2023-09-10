'use client'
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="sobre"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Olá, meu nome é Guilherme Ramos e sou um estudante de Análise e
        Desenvolvimento de Sistemas, residente no Rio de Janeiro. Atualmente,
        sou desenvolvedor Front End React na Devex Soluções.
      </p>

      <p>
        Tenho experiência trabalhando em projetos que envolvem React, Nextjs e Tailwind CSS. Além disso, sou familiarizado com
        metodologias ágeis, como Scrum/Kanban, e busco desenvolver sistemas
        seguros e de alta qualidade.
      </p>

      <p>
        Se quiser dar uma olhada em alguns dos meus projetos e códigos, confira
        meu portfólio através do link:{" "}
        <a
          href="https://guilhermejramos.github.io/My-Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://guilhermejramos.github.io/My-Portfolio/
        </a>
        . E se estiver interessado em entrar em contato, pode me ligar no
        telefone (21) 99795-6627 ou me enviar um e-mail em{" "}
        <a href="mailto:guilhermedejesusramos23@gmail.com">
          guilhermedejesusramos23@gmail.com
        </a>
        .
      </p>
    </motion.section>
  );
}
