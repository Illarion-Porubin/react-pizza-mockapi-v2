import React from "react";
import s from "./About.module.scss";
import js from "./skills/js.svg";
import ts from "./skills/typescript.svg";
import react from "./skills/react.svg";
import redux from "./skills/redux.svg";
import html from "./skills/html-5.svg";
import css from "./skills/css3.svg";
import sass from "./skills/sass.svg";
import github from "./skills/github.svg";
import mysql from "./skills/mysql.svg";
import postgresql from "./skills/postgresql.svg";
import mongodb from "./skills/mongodb.svg";
import materialui from "./skills/material-ui.svg";
import node from "./skills/node.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export const About: React.FC = React.memo(() => {
  const icons = [
    js,
    ts,
    react,
    redux,
    html,
    css,
    sass,
    github,
    mysql,
    postgresql,
    mongodb,
    materialui,
    node,
  ];
  
  return (
    <div className={s.bg}>
      <div className="container">
        <section className={s.about}>
          <div className={s.mainInfo}>
            <div className={s.me}>
              <div className={s.info}>
                <div className={s.headrTitle}>
                  <h1 className={s.title}>Информация обо мне</h1>
                  <Link className={s.homeLink} to="/">
                    На главную
                  </Link>
                </div>
                <div className={s.mainInfoWrap}>
                  <div className={s.infoText}>
                    <p className={s.text}>
                      Здравствуйте! Меня зовут Илларион, мне 28 и я fullstack
                      developer.
                      <br />
                      Закончил (Новороссийский колледж радиоэлектронного
                      приборостроения) - НКРП, получил среднее специальное
                      образование.
                    </p>
                    <p className={s.text}>
                      Вот уже 4 года я занимаюсь веб разработкой, за это время
                      было создано много проектов различной сложности начиная от
                      одностраничника с использованием Gulp и заканчивая
                      интернет магазином с применением: React, Redux,
                      Redux-toolkit, Redux-persist, React-router-dom, Axios,
                      MySql, Sequelize, Passport-google-oauth20 и т.д.
                    </p>
                    <p className={s.text}>
                      Не пугаюсь таких аббревиатур как: OOP, SOLID, KISS, DRY, SPA, PWA, SSR.
                    </p>
                    <p className={s.text}>
                      Могу рассказать про: React, Redux, Redux Toolkit, Axios, SQL, MongoDB,
                      Sequelize и ещё много полезных штук.
                    </p>
                    <p className={s.text}>Буду рад с вами сотрудничать.</p>
                  </div>
                  <img
                    className={s.photo}
                    src="https://sun9-3.userapi.com/impf/Y0lTAQylHIiXm5He-TDsCjo_PzpEjkDiCQ4GLA/A-hmEYsL8yo.jpg?size=524x604&quality=96&sign=ef7651edd7d63b6f581122adacf32f52&c_uniq_tag=kH4tYsw_-Ko5R4aePQlW0KUbV2CulNdX0Lan5Yv2R9Q&type=album"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className={s.links}>
              <div className={s.feedback}>
                <h1 className={s.title}>Обратная связь</h1>
                <a
                  className={s.link}
                  href="https://github.com/Illarion-Porubin"
                  target="blank"
                >
                  {` → Больше проектов на GitHub `}
                </a>
                <a
                  className={s.link}
                  href="mailto:lars.mywork@gmail.com&body=Привет!?subject=Хочу с вами сотрудничать"
                >
                  {` → Пиши мне на почту`} <span>lars.mywork@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className={s.dopInfo}>
            <h1 className={s.title}>Технологии которые я использую </h1>
            <div className={s.skills}>
              <Swiper
                effect="fade"
                modules={[Scrollbar, Autoplay]}
                spaceBetween={34}
                slidesPerView={8}
                autoplay={true}
                loop={true}
                breakpoints={{
                  720: {
                    slidesPerView: 8,
                  },
                  620: {
                    slidesPerView: 7,
                  },
                  520: {
                    slidesPerView: 5,
                  },
                  420: {
                    slidesPerView: 4,
                  },
                  320: {
                    slidesPerView: 3,
                  },
                  220: {
                    slidesPerView: 2,
                  },
                }}
              >
                {
                  icons.map((item, id: number) => (
                    <SwiperSlide className={s.slider} key={id}>
                      <img className={s.slide} src={item} alt={item} key={id} />
                    </SwiperSlide>
                   )
                  )
                }
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});
