/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { FiInstagram, FiPhone } from "react-icons/fi";
import logoImg from "../assets/logo.png";
import animeImg from "../assets/cute.gif";

import "./styles.css";

function Main() {
  const handleNavigateToTop = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const phone = "84999146203";
  const text = `Olá Clara, gostaria de solicitar um orçamento de uma peça em pixel art.`;

  React.useEffect(() => {
    function hide() {
      const cursor = document.querySelector("div.cursor");
      cursor.classList.add("hide");
    }
    function show() {
      const cursor = document.querySelector("div.cursor");
      cursor.classList.remove("hide");
    }

    const bgs = document.querySelectorAll("div.bg");
    bgs.forEach((bg) => {
      bg.addEventListener("mouseover", hide);
      bg.addEventListener("mouseleave", show);
    });

    const profile = document.querySelector(".person .card img");
    profile.addEventListener("mouseover", hide);
    profile.addEventListener("mouseleave", show);

    const actionButton = document.querySelector("a.to-top");

    actionButton.addEventListener("mouseover", hide);
    actionButton.addEventListener("mouseleave", show);

    return () => {
      bgs.forEach((bg) => {
        bg.removeEventListener("mouseover", hide);
        bg.removeEventListener("mouseleave", show);
      });
      profile.removeEventListener("mouseover", hide);
      profile.removeEventListener("mouseleave", show);

      actionButton.removeEventListener("mouseover", hide);
      actionButton.removeEventListener("mouseleave", show);
    };
  }, []);

  return (
    <div className="container main-section" id="main">
      <header>
        <img src={logoImg} alt="Clara em Pixel" />
      </header>
      <h1>Quem sou eu</h1>
      <section className="about__me">
        <div className="person">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1610642434250-392436bd9fba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
              alt="Clara"
            />
          </div>
        </div>
        <div className="content_text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            deleniti incidunt accusantium quaerat dolores facilis adipisci
            consectetur eius mollitia totam impedit reiciendis nostrum, culpa
            illum earum nisi facere veritatis eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            facere.
          </p>
        </div>
      </section>
      <section className="section-bg"></section>
      <section className="portfolio__container">
        <h1>Alguns trabalhos</h1>
        <div className="item item1">
          <div className="bg"></div>
          <div className="description">
            <p>
              O Joker é um supervilão fictício que aparece nos livros de banda
              desenhada norte-americanos publicados pela editora estadunidense
              DC Comics. O trabalho foi criar um quadro 30cm x 30cm utilizando
              peças de hamma beads de 2mm em 12 cores. Foram utilizadas um total
              de 432 peças.
            </p>

            <a href="#">Ver mais</a>
          </div>
        </div>
        <div className="item item2">
          <div className="description">
            <p>
              The Avengers, um grupo de superherois da Marvel em formato de
              chaveiro com dimensões 10cm x 10cm, as action figures mais em
              conta do mercado. O trabalho mostra a Viúva Negra, Homem Aranha,
              Capitão América, Homem de Ferro, Thor, Loki e Hulk.
            </p>

            <a href="#">Ver mais</a>
          </div>
          <div className="bg"></div>
        </div>
        <div className="item item3">
          <div className="bg"></div>
          <div className="description">
            <p>
              Este foi um dos mais divertidos, principalmente porque Minecraft
              já tem uma pegada pixel art. Mini chaveiros 6cm x 6cm com a cara
              dos personagens e NPC's do game, além de uma espada 10cm x 30cm.
              Peça de colecionador, fala tu?! Foram gastos 300 peças com 48
              cores diferentes.
            </p>

            <a href="#">Ver mais</a>
          </div>
        </div>
      </section>
      <footer>
        <div className="social">
          <a
            href="https://www.instagram.com/clara_empixel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=55${phone}&text=${text}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiPhone />
          </a>
        </div>
        <p>2020 Clara em pixel</p>
        <p>Todos os direitos reservados.</p>
      </footer>
      <a
        href="#main"
        className="to-top"
        onClick={(event) => handleNavigateToTop(event)}
      >
        <img src={animeImg} alt="Anime to top" />
      </a>
    </div>
  );
}

export default Main;
