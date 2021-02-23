import React, { useRef, useState, useEffect } from "react";
import { FiInstagram, FiPhone } from "react-icons/fi";
import logoImg from "../assets/logo.png";
import animeImg from "../assets/cute.gif";
import AboutMe from "../assets/about_me.jfif";

import data from "../mock";

import { motion, useViewportScroll, useTransform } from "framer-motion";

import PortfolioItem from "./PortfolioItem";

import "./styles.css";

function Main() {
  const ref = useRef(null);

  const { scrollY, scrollYProgress } = useViewportScroll();

  /* -------------------------------------- */
  const [DAboutMe, setDAboutMe] = useState(0);
  const yDAboutMe = useTransform(scrollY, [DAboutMe, DAboutMe + 2], [0, -1], {
    clamp: false,
  });

  const opacityDAboutMe = useTransform(
    scrollY,
    [DAboutMe, DAboutMe + 800],
    [1, 0],
    {
      clamp: true,
    }
  );
  /* -------------------------------------- */
  const [DTitleAboutMe, setDTitleAboutMe] = useState(0);
  const yDTitleAboutMe = useTransform(
    scrollY,
    [DTitleAboutMe, DTitleAboutMe + 1],
    [0, -1],
    {
      clamp: false,
    }
  );

  const opacityDTitleAboutMe = useTransform(
    scrollY,
    [DTitleAboutMe, DTitleAboutMe + 200],
    [1, 0],
    {
      clamp: true,
    }
  );
  /* -------------------------------------- */
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
      if (cursor) {
        cursor.classList.add("hide");
      }
    }
    function show() {
      const cursor = document.querySelector("div.cursor");
      if (cursor) {
        cursor.classList.remove("hide");
      }
    }

    const bgs = document.querySelectorAll("div.bg") || [];
    bgs.forEach((bg) => {
      bg.addEventListener("mouseover", hide);
      bg.addEventListener("mouseleave", show);
    });

    const profile = document.querySelector(".person .card img") || [];
    profile.addEventListener("mouseover", hide);
    profile.addEventListener("mouseleave", show);

    const actionButton = document.querySelector("a.to-top") || [];

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

      <motion.div style={{ y: yDTitleAboutMe, opacity: opacityDTitleAboutMe }}>
        <h1>Quem sou eu</h1>
      </motion.div>

      <motion.div
        style={{ y: yDAboutMe, opacity: opacityDAboutMe }}
        animate={{
          y: 0,
          opacity: 1,
          transitionEnd: {
            opacity: 1,
            y: 0,
          },
        }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <section ref={ref} className="about__me">
          <div className="person">
            <motion.div
              className="card"
              animate={{
                y: 0,
                opacity: 1,
                transitionEnd: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
            >
              <img src={AboutMe} alt="Clara" />
            </motion.div>
          </div>

          <div className="content_text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              deleniti incidunt accusantium quaerat dolores facilis adipisci
              consectetur eius mollitia totam impedit reiciendis nostrum, culpa
              illum earum nisi facere veritatis eos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corporis, facere.
            </p>
          </div>
        </section>
      </motion.div>

      <section className="section-bg"></section>
      <section className="portfolio__container">
        <h1>Alguns trabalhos</h1>

        {data?.map((item) => {
          return item.id % 2 === 0 ? (
            <PortfolioItem
              key={`portfolio-item-${item.id}`}
              className={`item item${item.id}`}
            >
              <div
                className="bg"
                style={{
                  background: `url(${item.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="description">
                <p>{item.description}</p>

                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={item.link_redirect}
                >
                  Ver mais
                </a>
              </div>
            </PortfolioItem>
          ) : (
            <PortfolioItem
              key={`portfolio-item-${item.id}`}
              className={`item item${item.id}`}
            >
              <div className="description">
                <p>{item.description}</p>

                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={item.link_redirect}
                >
                  Ver mais
                </a>
              </div>
              <div
                className="bg"
                style={{
                  background: `url(${item.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </PortfolioItem>
          );
        })}
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
