import "./styles/index.scss";

import "./assets/fonts/CocoSharp-ExtraLight.ttf";
import "./assets/fonts/icons.ttf";

import Alarm from "./assets/images/alarm_pr.webp";
import Museum from "./assets/images/museum_pr.webp";
import Music from "./assets/images/music_pr.webp";
import Space from "./assets/images/space_pr.jpg";
import Weather from "./assets/images/weather_pr.png";
import Photo from "./assets/images/photo_pr.jpg";
import AlarmGif from "./assets/images/alarm.gif";
import MuseumGif from "./assets/images/museum.gif";
import MusicGif from "./assets/images/music.gif";
import SpaceGif from "./assets/images/space.gif";
import WeatherGif from "./assets/images/weather.gif";
import PhotoGif from "./assets/images/photo.gif";

const app = document.getElementById("app");

app.innerHTML = `
    <div class="animated-background__wrapper">
        <header class="header _lock">
            <div class="container">
                <div class="header__menu menu">
                    <div class="menu__icon icon-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav class="menu__body">
                        <ul class="menu__list">
                            <li class="menu__item"><a href="#resume" class="menu__link">Resume</a></li>
                            <li class="menu__item"><a href="#portfolio" class="menu__link">Portfolio</a></li>
                            <li class="menu__item"><a href="#contacts" class="menu__link">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <div class="dot dot_one"></div>
        <div class="dot dot_two"></div>
        <div class="dot dot_three"></div>
        <main class="page _lock">
            <section class="main-screen">
                <div class="container">
                    <div class="main-screen__title-wrapper">
                        <div class="main-screen__title">
                            <h1 class="main-screen__title-text">
                                Victoria Vysotskaya
                            </h1>
                        </div>
                        <div class="main-screen__subtitle">
                            <p class="main-screen__subtitle-text">
                                A front-end developer
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="resume section" id="resume">
                <div class="container">
                    <div class="resume__title section__title title">
                        <h2 class="resume__title-text section__title-text title__text">
                            Resume
                        </h2>
                    </div>
                    <div class="resume__content section__content">
                        <div class="resume__content-wrapper section__content-wrapper">
                            <div class="resume__row section__row">
                                <div class="resume__column section__column section__column_left">
                                    <div class="resume__column-title section__column-title">
                                        <h3 class="resume__column-title-text section__column-title-text">
                                            About
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-content section__column-content">
                                        <p class="resume__column-content-text section__column-content-text content__column-content-text">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur landitiis accusantium 
                                            reiciendis voluptas ad, illo quas animi illum reprehenderit non deleniti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="resume__row section__row">
                                <div class="resume__column section__column section__column_left">
                                    <div class="resume__column-title section__column-title">
                                        <h3 class="resume__column-title-text section__column-title-text">
                                            Hard skills
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-content section__column-content">
                                        <div class="resume__skill-row">
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        HTML
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        CSS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        SCSS
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        LESS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        JS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        jQuery
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        React
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Redux
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Vue.js
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Angular
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Php
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        MySQL
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="resume__row section__row">
                                <div class="resume__column section__column section__column_left">
                                    <div class="resume__column-title section__column-title">
                                        <h3 class="resume__column-title-text section__column-title-text">
                                            Experience
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-item section__column-item">
                                        <div class="resume__column-row section__column-row">
                                            <div class="resume__row-item section__row-item section__row-item_left">
                                                <p class="resume__item-organization section__item-organization">
                                                    The Internet Marleting Center
                                                </p>
                                            </div>
                                            <div class="resume__row-item section__row-item section__row-item_right">
                                                <p class="resume__item-period section__item-period content__item-period">
                                                    august 2021 - present
                                                </p>
                                            </div>
                                        </div>
                                        <div class="resume__column section__column">
                                            <div class="resume__column-content section__column-content">
                                                <p class="resume__column-content-text section__column-content-text content__column-content-text">
                                                    HTML developer position. Developed internet-shop websites
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="resume__column-item section__column-item">
                                        <div class="resume__column-row section__column-row">
                                            <div class="resume__row-item section__row-item section__row-item_left">
                                                <p class="resume__item-organization section__item-organization">
                                                    Freelance
                                                </p>
                                            </div>
                                            <div class="resume__row-item section__row-item section__row-item_right">
                                                <p class="resume__item-period section__item-period content__item-period">
                                                    august 2021 - present
                                                </p>
                                            </div>
                                        </div>
                                        <div class="resume__column section__column">
                                            <div class="resume__column-content section__column-content">
                                                <p class="resume__column-content-text section__column-content-text content__column-content-text">
                                                    HTML developer / Front-end developer position
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="resume__row section__row">
                                <div class="resume__column section__column section__column_left">
                                    <div class="resume__column-title section__column-title">
                                        <h3 class="resume__column-title-text section__column-title-text">
                                            Education
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    class="resume__column section__column section__column_right section__column_right_m">
                                    <div class="resume__column-item section__column-item">
                                        <div class="resume__column-row section__column-row">
                                            <div class="resume__row-item section__row-item section__row-item_left">
                                                <p class="resume__item-organization section__item-organization">
                                                    RS School
                                                </p>
                                            </div>
                                            <div class="resume__row-item section__row-item section__row-item_right">
                                                <p class="resume__item-period section__item-period content__item-period">
                                                    december 2021 - july 2022
                                                </p>
                                            </div>
                                        </div>
                                        <div class="resume__column section__column">
                                            <div class="resume__column-content section__column-content">
                                                <p class="resume__column-content-text section__column-content-text content__column-content-text">
                                                    Front-end development course
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="resume__column-item section__column-item">
                                        <div class="resume__column-row section__column-row">
                                            <div class="resume__row-item section__row-item section__row-item_left">
                                                <p class="resume__item-organization section__item-organization">
                                                    TeachMeSkills
                                                </p>
                                            </div>
                                            <div class="resume__row-item section__row-item section__row-item_right">
                                                <p class="resume__item-period section__item-period content__item-period">
                                                    may - december 2021
                                                </p>
                                            </div>
                                        </div>
                                        <div class="resume__column section__column">
                                            <div class="resume__column-content section__column-content">
                                                <p class="resume__column-content-text section__column-content-text content__column-content-text">
                                                    Front-end development course
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="resume__column-item section__column-item">
                                        <div class="resume__column-row section__column-row">
                                            <div class="resume__row-item section__row-item section__row-item_left">
                                                <p class="resume__item-organization section__item-organization">
                                                    Belarassian State Academy of Communication
                                                </p>
                                            </div>
                                            <div class="resume__row-item section__row-item section__row-item_right">
                                                <p class="resume__item-period section__item-period content__item-period">
                                                    2015-2019
                                                </p>
                                            </div>
                                        </div>
                                        <div class="resume__column section__column">
                                            <div class="resume__column-content section__column-content">
                                                <p class="resume__column-content-text section__column-content-text content__column-content-text">
                                                    Telecommunications network software
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="resume__link section__link">
                        <a href="" class="resume__link-text section__link-text">Download PDF</a>
                    </div>
                </div>
            </section>
            <section class="portfolio section" id="portfolio">
                <div class="container">
                    <div class="portfolio__title section__title title">
                        <h2 class="portfolio__title-text section__title-text title__text">
                            Portfolio
                        </h2>
                    </div>
                    <div class="portfolio__content section__content">
                        <div class="portfolio__content-wrapper section__content-wrapper">
                            <div class="portfolio__grid-wrapper">
                                <a href="#museum" class="portfolio__grid-link">
                                    <div class="portfolio__grid-item">
                                        <img src="${Museum}" alt="">
                                        <div class="portfolio__grid-title">
                                            <p class="portfolio__grid-title-text">Virtual museum</p>
                                            <p class="portfolio__grid-description-text">Virtual museum site concept</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#space" class="portfolio__grid-link">
                                    <div class="portfolio__grid-item">
                                        <img src="${Space}" alt="">
                                        <div class="portfolio__grid-title">
                                            <p class="portfolio__grid-title-text">Blue dot</p>
                                            <p class="portfolio__grid-description-text">Space trip app</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#music" class="portfolio__grid-link">
                                    <div class="portfolio__grid-item">
                                        <img src="${Music}" alt="">
                                        <div class="portfolio__grid-title">
                                            <p class="portfolio__grid-title-text">Pathfinder</p>
                                            <p class="portfolio__grid-description-text">Music app</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#photo" class="portfolio__grid-link">
                                    <div class="portfolio__grid-item">
                                        <img src="${Photo}" alt="">
                                        <div class="portfolio__grid-title">
                                            <p class="portfolio__grid-title-text">Project name</p>
                                            <p class="portfolio__grid-description-text">Photo edit app</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#alarm" class="portfolio__grid-link">
                                    <div class="portfolio__grid-item">
                                        <img src="${Alarm}" alt="">
                                        <div class="portfolio__grid-title">
                                            <p class="portfolio__grid-title-text">Pillow</p>
                                            <p class="portfolio__grid-description-text">Alarm app</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#weather" class="portfolio__grid-link">
                                    <div class="portfolio__grid-item">
                                        <img src="${Weather}" alt="">
                                        <div class="portfolio__grid-title">
                                            <p class="portfolio__grid-title-text">Project name</p>
                                            <p class="portfolio__grid-description-text">Film app</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contacts section" id="contacts">
                <div class="container">
                    <div class="contacts__title section__title title">
                        <h2 class="contacts__title-text section__title-text title__text">
                            Contacts
                        </h2>
                    </div>
                    <div class="contacts__content section__content">
                        <div class="contacts__content-wrapper section__content-wrapper">
                            <div class="contacts__row section__row">
                                <div class="contacts__column section__column contacts__column_left section__column_left">
                                    <div class="contacts__column-title section__column-title">
                                        <h3 class="contacts__column-title-text section__column-title-text">
                                            E-mail
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    class="contacts__column section__column contacts__column_right section__column_right">
                                    <div class="contacts__column-content section__column-content">
                                        <div class="contacts__column-content-link section__column-content-link">
                                            <a href="mailto: vvyysotskaya@gmail.com" class="contacts__column-content-email">vvyysotskaya@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="contacts__row section__row">
                                <div class="contacts__column section__column contacts__column_left section__column_left">
                                    <div class="contacts__column-title section__column-title">
                                        <h3 class="contacts__column-title-text section__column-title-text">
                                            Phone
                                        </h3>
                                    </div>
                                </div>
                                <div class="contacts__column section__column contacts__column_right section__column_right">
                                    <div class="contacts__column-content section__column-content">
                                        <div class="contacts__column-content-link section__column-content-link">
                                            <a href="tel: +375336027040" class="contacts__column-content-phone">+375 (33) 602 70 40</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="contacts__row section__row">
                                <div class="contacts__column section__column contacts__column_left section__column_left">
                                    <div class="contacts__column-title section__column-title">
                                        <h3 class="contacts__column-title-text section__column-title-text">
                                            Social
                                        </h3>
                                    </div>
                                </div>
                                <div class="contacts__column section__column contacts__column_right section__column_right section__column_right_m">
                                    <div class="contacts__column-content section__column-content">
                                        <div class="contacts__network-wrapper section__network-wrapper">
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-linkedin"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-telegram"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer section">
                <div class="container">
                    <div class="footer__row">
                        <div class="footer__item">
                            <p class="footer__item-text">
                                &copy; Victoria Vysotskaya, 2021
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    </div>
    <div class="popup museum" id="museum">
        <div class="popup__body">
            <a href="#" class="popup__close close-popup">
                <span></span>
                <span></span>
            </a>
            <div class="container">
                <div class="popup__content section">
                    <div class="popup__title section__title title">
                        <h2 class="popup__title-text section__title-text title__text">
                            Virtual museum
                        </h2>
                    </div>
                    <div class="popup__photo-wrapper">
                        <div class="popup__photo">
                            <img src="${MuseumGif}" alt="">
                        </div>
                    </div>
                    <div class="popup__content section__content">
                        <div class="popup__content-wrapper section__content-wrapper">
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            About
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right">
                                    <div class="popup__column-content section__column-content">
                                        <p class="popup__column-content-text section__column-content-text content__column-content-text">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur landitiis accusantium 
                                            reiciendis voluptas ad, illo quas animi illum reprehenderit non deleniti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            tech stack
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-content section__column-content">
                                        <div class="resume__skill-row">
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        HTML
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        CSS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        SCSS
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        LESS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        JS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        jQuery
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        React
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Redux
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Vue.js
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Angular
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Php
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        MySQL
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            Links
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right section__column_right_m">
                                    <div class="popup__column-content section__column-content">
                                        <div class="contacts__network-wrapper section__network-wrapper">
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-global"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup space" id="space">
        <div class="popup__body">
            <a href="#" class="popup__close close-popup">
                <span></span>
                <span></span>
            </a>
            <div class="container">
                <div class="popup__content section">
                    <div class="popup__title section__title title">
                        <h2 class="popup__title-text section__title-text title__text">
                            Blue dot
                        </h2>
                    </div>
                    <div class="popup__photo-wrapper">
                        <div class="popup__photo">
                            <img src="${SpaceGif}" alt="">
                        </div>
                    </div>
                    <div class="popup__content section__content">
                        <div class="popup__content-wrapper section__content-wrapper">
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            About
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right">
                                    <div class="popup__column-content section__column-content">
                                        <p class="popup__column-content-text section__column-content-text content__column-content-text">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur landitiis accusantium 
                                            reiciendis voluptas ad, illo quas animi illum reprehenderit non deleniti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            tech stack
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-content section__column-content">
                                        <div class="resume__skill-row">
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        HTML
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        CSS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        SCSS
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        LESS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        JS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        jQuery
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        React
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Redux
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Vue.js
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Angular
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Php
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        MySQL
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            Links
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right section__column_right_m">
                                    <div class="popup__column-content section__column-content">
                                        <div class="contacts__network-wrapper section__network-wrapper">
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-global"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup music" id="music">
        <div class="popup__body">
            <a href="#" class="popup__close close-popup">
                <span></span>
                <span></span>
            </a>
            <div class="container">
                <div class="popup__content section">
                    <div class="popup__title section__title title">
                        <h2 class="popup__title-text section__title-text title__text">
                            Pathfinder
                        </h2>
                    </div>
                    <div class="popup__photo-wrapper">
                        <div class="popup__photo">
                            <img src="${MusicGif}" alt="">
                        </div>
                    </div>
                    <div class="popup__content section__content">
                        <div class="popup__content-wrapper section__content-wrapper">
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            About
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right">
                                    <div class="popup__column-content section__column-content">
                                        <p class="popup__column-content-text section__column-content-text content__column-content-text">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur landitiis accusantium 
                                            reiciendis voluptas ad, illo quas animi illum reprehenderit non deleniti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            tech stack
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-content section__column-content">
                                        <div class="resume__skill-row">
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        HTML
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        CSS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        SCSS
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        LESS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        JS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        jQuery
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        React
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Redux
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Vue.js
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Angular
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Php
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        MySQL
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            Links
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right section__column_right_m">
                                    <div class="popup__column-content section__column-content">
                                        <div class="contacts__network-wrapper section__network-wrapper">
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-global"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup photo" id="photo">
        <div class="popup__body">
            <a href="#" class="popup__close close-popup">
                <span></span>
                <span></span>
            </a>
            <div class="container">
                <div class="popup__content section">
                    <div class="popup__title section__title title">
                        <h2 class="popup__title-text section__title-text title__text">
                            Project name
                        </h2>
                    </div>
                    <div class="popup__photo-wrapper">
                        <div class="popup__photo">
                            <img src="${PhotoGif}" alt="">
                        </div>
                    </div>
                    <div class="popup__content section__content">
                        <div class="popup__content-wrapper section__content-wrapper">
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            About
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right">
                                    <div class="popup__column-content section__column-content">
                                        <p class="popup__column-content-text section__column-content-text content__column-content-text">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur landitiis accusantium 
                                            reiciendis voluptas ad, illo quas animi illum reprehenderit non deleniti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            tech stack
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-content section__column-content">
                                        <div class="resume__skill-row">
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        HTML
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        CSS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        SCSS
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        LESS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        JS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        jQuery
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        React
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Redux
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Vue.js
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Angular
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Php
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        MySQL
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            Links
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right section__column_right_m">
                                    <div class="popup__column-content section__column-content">
                                        <div class="contacts__network-wrapper section__network-wrapper">
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-global"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup alarm" id="alarm">
        <div class="popup__body">
            <a href="#" class="popup__close close-popup">
                <span></span>
                <span></span>
            </a>
            <div class="container">
                <div class="popup__content section">
                    <div class="popup__title section__title title">
                        <h2 class="popup__title-text section__title-text title__text">
                            Pillow
                        </h2>
                    </div>
                    <div class="popup__photo-wrapper">
                        <div class="popup__photo">
                            <img src="${AlarmGif}" alt="">
                        </div>
                    </div>
                    <div class="popup__content section__content">
                        <div class="popup__content-wrapper section__content-wrapper">
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            About
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right">
                                    <div class="popup__column-content section__column-content">
                                        <p class="popup__column-content-text section__column-content-text content__column-content-text">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur landitiis accusantium 
                                            reiciendis voluptas ad, illo quas animi illum reprehenderit non deleniti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            tech stack
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-content section__column-content">
                                        <div class="resume__skill-row">
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        HTML
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        CSS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        SCSS
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        LESS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        JS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        jQuery
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        React
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Redux
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Vue.js
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Angular
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Php
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        MySQL
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            Links
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right section__column_right_m">
                                    <div class="popup__column-content section__column-content">
                                        <div class="contacts__network-wrapper section__network-wrapper">
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-global"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup weather" id="weather">
        <div class="popup__body">
            <a href="#" class="popup__close close-popup">
                <span></span>
                <span></span>
            </a>
            <div class="container">
                <div class="popup__content section">
                    <div class="popup__title section__title title">
                        <h2 class="popup__title-text section__title-text title__text">
                            Project name
                        </h2>
                    </div>
                    <div class="popup__photo-wrapper">
                        <div class="popup__photo">
                            <img src="${WeatherGif}" alt="">
                        </div>
                    </div>
                    <div class="popup__content section__content">
                        <div class="popup__content-wrapper section__content-wrapper">
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            About
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right">
                                    <div class="popup__column-content section__column-content">
                                        <p class="popup__column-content-text section__column-content-text content__column-content-text">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur landitiis accusantium 
                                            reiciendis voluptas ad, illo quas animi illum reprehenderit non deleniti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            tech stack
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-content section__column-content">
                                        <div class="resume__skill-row">
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        HTML
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        CSS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        SCSS
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        LESS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        JS
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        jQuery
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        React
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Redux
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Vue.js
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Angular
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Php
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        MySQL
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__row section__row">
                                <div class="popup__column section__column section__column_left">
                                    <div class="popup__column-title section__column-title">
                                        <h3 class="popup__column-title-text section__column-title-text">
                                            Links
                                        </h3>
                                    </div>
                                </div>
                                <div class="popup__column section__column section__column_right section__column_right_m">
                                    <div class="popup__column-content section__column-content">
                                        <div class="contacts__network-wrapper section__network-wrapper">
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="#" class="contacts__network-link section__network-link">
                                                    <i class="_icon-global"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

let page = document.querySelector(".page"),
  header = document.querySelector(".header");

window.onload = function () {
  setTimeout(function () {
    page.classList.remove("_lock");
    header.classList.remove("_lock");
  }, 1000);
};

let iconMenu = document.querySelector(".icon-menu"),
  menuBody = document.querySelector(".menu__body"),
  body = document.querySelector("body"),
  menuLink = document.querySelectorAll(".menu__link");

iconMenu.onclick = function () {
  iconMenu.classList.toggle("_menu-active");

  body.classList.toggle("_lock");
  if (menuBody.classList.contains("_menu-active")) {
    menuBody.classList.toggle("_menu-active");
    setTimeout(() => {
      page.classList.toggle("_lock");
    }, 2000);
  } else {
    page.classList.toggle("_lock");
    setTimeout(() => {
      menuBody.classList.toggle("_menu-active");
    }, 2000);
  }
};

menuLink.forEach(function (item) {
  item.addEventListener("click", function () {
    iconMenu.classList.toggle("_menu-active");
    menuBody.classList.toggle("_menu-active");
    page.classList.toggle("_lock");
    body.classList.toggle("_lock");
  });
});

const popupLinks = document.querySelectorAll(".portfolio__grid-link");

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");

if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive);
    }
    document.body.classList.toggle("_lock");
    document.querySelector(".page").classList.toggle("_lock");
    document.querySelector(".header").classList.toggle("_lock");
    setTimeout(() => {
      curentPopup.classList.add("open");
      curentPopup.classList.add("active");
      if (document.querySelector(".popup.open").classList.contains("museum")) {
        document.querySelector(".dot_one").classList.add("_museum");
        document.querySelector(".dot_two").classList.add("_museum");
        document.querySelector(".dot_three").classList.add("_museum");
      } else if (document.querySelector(".popup.open").classList.contains("space")) {
        document.querySelector(".dot_one").classList.add("_space");
        document.querySelector(".dot_two").classList.add("_space");
        document.querySelector(".dot_three").classList.add("_space");
      } else if (document.querySelector(".popup.open").classList.contains("music")) {
        document.querySelector(".dot_one").classList.add("_music");
        document.querySelector(".dot_two").classList.add("_music");
        document.querySelector(".dot_three").classList.add("_music");
      } else if (document.querySelector(".popup.open").classList.contains("photo")) {
        document.querySelector(".dot_one").classList.add("_photo");
        document.querySelector(".dot_two").classList.add("_photo");
        document.querySelector(".dot_three").classList.add("_photo");
      } else if (document.querySelector(".popup.open").classList.contains("alarm")) {
        document.querySelector(".dot_one").classList.add("_alarm");
        document.querySelector(".dot_two").classList.add("_alarm");
        document.querySelector(".dot_three").classList.add("_alarm");
      } else if (document.querySelector(".popup.open").classList.contains("weather")) {
        document.querySelector(".dot_one").classList.add("_weather");
        document.querySelector(".dot_two").classList.add("_weather");
        document.querySelector(".dot_three").classList.add("_weather");
      }
    }, 2000);
  }
}

function popupClose(popupActive) {
  popupActive.classList.remove("open");
  setTimeout(() => {
    document.body.classList.toggle("_lock");
    document.querySelector(".page").classList.toggle("_lock");
    document.querySelector(".header").classList.toggle("_lock");
    if (document.querySelector(".popup.active").classList.contains("museum")) {
      document.querySelector(".dot_one").classList.remove("_museum");
      document.querySelector(".dot_two").classList.remove("_museum");
      document.querySelector(".dot_three").classList.remove("_museum");
      document.querySelector(".popup.active").classList.remove("active");
    } else if (document.querySelector(".popup.active").classList.contains("space")) {
      document.querySelector(".dot_one").classList.remove("_space");
      document.querySelector(".dot_two").classList.remove("_space");
      document.querySelector(".dot_three").classList.remove("_space");
      document.querySelector(".popup.active").classList.remove("active");
    } else if (document.querySelector(".popup.active").classList.contains("music")) {
      document.querySelector(".dot_one").classList.remove("_music");
      document.querySelector(".dot_two").classList.remove("_music");
      document.querySelector(".dot_three").classList.remove("_music");
      document.querySelector(".popup.active").classList.remove("active");
    } else if (document.querySelector(".popup.active").classList.contains("photo")) {
      document.querySelector(".dot_one").classList.remove("_photo");
      document.querySelector(".dot_two").classList.remove("_photo");
      document.querySelector(".dot_three").classList.remove("_photo");
      document.querySelector(".popup.active").classList.remove("active");
    } else if (document.querySelector(".popup.active").classList.contains("alarm")) {
      document.querySelector(".dot_one").classList.remove("_alarm");
      document.querySelector(".dot_two").classList.remove("_alarm");
      document.querySelector(".dot_three").classList.remove("_alarm");
      document.querySelector(".popup.active").classList.remove("active");
    } else if (document.querySelector(".popup.active").classList.contains("weather")) {
      document.querySelector(".dot_one").classList.remove("_weather");
      document.querySelector(".dot_two").classList.remove("_weather");
      document.querySelector(".dot_three").classList.remove("_weather");
      document.querySelector(".popup.active").classList.remove("active");
    }
  }, 2000);
}
