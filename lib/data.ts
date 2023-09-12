import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import devexImg from "@/public/devex.png";
import digitalCineImg from "@/public/digitalcine.png";
import movieEvelImg from "@/public/movievel.png";
import Link from "next/link";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Faculdade de Análise e Desenvolvimento de Sistemas",
    location: "Descomplica, BR",
    description:
      "Estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Descomplica, onde estou aprendendo sobre desenvolvimento de sistemas, e também sobre desenvolvimento web.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2025",
  },
  {
    title: "Desenvolvedor Freelancer",
    location: "Brasil",
    description:
      "Trabalhei como desenvolvedor freelancer, onde desenvolvi sites e sistemas para clientes.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Desenvolvedor Front-End",
    location: "Rio de Janeiro, RJ",
    description:
      "Atualmente trabalho como desenvolvedor front-end na Devex Soluções, onde desenvolvo sites e sistemas para clientes utilizando tecnologias como HTML, CSS, JavaScript, Jquery, Tailwind, React e NextJS.",
    icon: React.createElement(FaReact),
    date: "2023 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Devex Soluções",
    description:
      "Feito para empresa em que trabalho atualmente, com o intuito de mostrar os serviços que a empresa oferece, e também para treinar minhas habilidades com React e Next.js.",
    tags: ["React", "Next.js","Tailwind",],
    imageUrl: devexImg,
    link: "devex.com.vc"
  },
  {
    title: "MovieEvel",
    description:
      "Site de filmes, onde você pode ver os filmes mais populares, os mais bem avaliados e os que estão em cartaz. Feito para treinar minhas habilidades com React e Next.js.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: movieEvelImg,
  },
  {
    title: "DigitalCine",
    description:
      "Site de Streaming de televisao, onde você pode ver os filmes mais populares, os mais bem avaliados e os que estão em cartaz. Feito para treinar minhas habilidades com React e Next.js.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: digitalCineImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "PostgreSQL",
  "Framer Motion",
] as const;
