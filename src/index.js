import "./styles/index.scss";

import "./assets/fonts/CocoSharp-ExtraLight.ttf";
import "./assets/fonts/icons.ttf";

import Alarm from "./assets/images/alarm_pr.webp";
import Crypter from "./assets/images/crypter.png";
import Music from "./assets/images/music_pr.webp";
import TheWeather from "./assets/images/the-weather.jpg";
import Weather from "./assets/images/weather_pr.png";
import Photo from "./assets/images/photo_pr.jpg";

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
                                            My name's Victoria and I'm a front-end developer. I've been working as a developer for approximately one year. My favourite pastime is coming up with fresh and interesting projects that are both functional and visually stunning. I usually work with JavaScript, React/Redux, and Typescript, but I'm always learning new things and attending courses to improve my skills in this field.
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
                                                        Less
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Scss
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        JavaScript
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Jquery
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
                                                        TypeScript
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Gulp
                                                    </p>
                                                </div>
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Webpack
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
                                                    The Internet Marketing Center
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
                                                    Front-end developer
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
                                                    Front-end developer
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
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-item section__column-item">
                                        <div class="resume__column-row section__column-row">
                                            <div class="resume__row-item section__row-item section__row-item_left">
                                                <p class="resume__item-organization section__item-organization">
                                                    RS Pre School
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
                                                <a href="https://drive.google.com/file/d/1xvGYPDfOPSunNcFEh1m_sEr3nkepVVJe/view?usp=sharing" class="sertificate-link" target="_blank">(see sertificate)</a>
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
                                                    may 2021 - january 2022
                                                </p>
                                            </div>
                                        </div>
                                        <div class="resume__column section__column">
                                            <div class="resume__column-content section__column-content">
                                                <p class="resume__column-content-text section__column-content-text content__column-content-text">
                                                    Front-end development course
                                                </p>
                                                <a href="https://drive.google.com/file/d/1uTGEBPtdflUw_zA2vtZ0mRseDJGg9w7O/view" class="sertificate-link" target="_blank">(see sertificate)</a>
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
                            <div class="resume__row section__row">
                                <div class="resume__column section__column section__column_left">
                                    <div class="resume__column-title section__column-title">
                                        <h3 class="resume__column-title-text section__column-title-text">
                                            Languages
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-item section__column-item">
                                        <div class="resume__column-row section__column-row">
                                            <div class="resume__row-item section__row-item section__row-item_left">
                                                <p class="resume__item-organization section__item-organization">
                                                    Russian
                                                </p>
                                            </div>
                                            <div class="resume__row-item section__row-item section__row-item_right">
                                                <p class="resume__item-period section__item-period content__item-period">
                                                    native
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="resume__column-item section__column-item">
                                        <div class="resume__column-row section__column-row">
                                            <div class="resume__row-item section__row-item section__row-item_left">
                                                <p class="resume__item-organization section__item-organization">
                                                    English
                                                </p>
                                            </div>
                                            <div class="resume__row-item section__row-item section__row-item_right">
                                                <p class="resume__item-period section__item-period content__item-period">
                                                    Advanced (c2)
                                                </p>
                                            </div>
                                        </div>
                                        <div class="resume__column section__column">
                                            <div class="resume__column-content section__column-content">
                                                <a href="https://drive.google.com/file/d/1_B1U-iz_Zm1YSMqRGq6mRW_Jt00fiV2i/view?usp=sharing" class="sertificate-link" target="_blank">(see sertificate)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="resume__link section__link">
                        <a href="https://drive.google.com/file/d/1Z28cX_lSx9ydwWYSwi9_O3a-0AYwaV5W/view?usp=sharing" class="resume__link-text section__link-text" target="_blank">Download PDF</a>
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
                                <a href="#crypter" class="portfolio__grid-link">
                                    <div class="portfolio__grid-item">
                                        <img src="${Crypter}" alt="">
                                        <div class="portfolio__grid-title">
                                            <p class="portfolio__grid-title-text">Crypter</p>
                                            <p class="portfolio__grid-description-text">Cryptocurrency tracker app</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#the-weather" class="portfolio__grid-link">
                                    <div class="portfolio__grid-item">
                                        <img src="${TheWeather}" alt="">
                                        <div class="portfolio__grid-title">
                                            <p class="portfolio__grid-title-text">the.weather</p>
                                            <p class="portfolio__grid-description-text">Weather app</p>
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
                                &copy; Victoria Vysotskaya, 2022
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    </div>
    <div class="popup crypter" id="crypter">
        <div class="popup__body">
            <a href="#" class="popup__close close-popup">
                <span></span>
                <span></span>
            </a>
            <div class="container">
                <div class="popup__content section">
                    <div class="popup__title section__title title">
                        <h2 class="popup__title-text section__title-text title__text">
                            Crypter
                        </h2>
                    </div>
                    <div class="popup__photo-wrapper">
                        <div class="popup__photo">
                            <img src="${Crypter}" alt="Crypter">
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
                                            Crypter is a straightforward app that provides thorough information on the most popular coins.
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
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        SCSS
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        React
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Webpack
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
                                                <a href="https://github.com/vvyysotskaya/crypter" class="contacts__network-link section__network-link" target="_blank">
                                                    <i class="_icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="https://vvyysotskaya-crypter.netlify.app" class="contacts__network-link section__network-link" target="_blank">
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
    <div class="popup the-weather" id="the-weather">
        <div class="popup__body">
            <a href="#" class="popup__close close-popup">
                <span></span>
                <span></span>
            </a>
            <div class="container">
                <div class="popup__content section">
                    <div class="popup__title section__title title">
                        <h2 class="popup__title-text section__title-text title__text">
                            the.weather
                        </h2>
                    </div>
                    <div class="popup__photo-wrapper">
                        <div class="popup__photo">
                            <img src="${TheWeather}" alt="">
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
                                            the.weather is a weather app that simplifies the experience with forecast applications.
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
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        SCSS
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        React
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="resume__skill-column">
                                                <div class="resume__skill-item">
                                                    <p class="resume__skill-text">
                                                        Webpack
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
                                                <a href="https://github.com/vvyysotskaya/the-weather" class="contacts__network-link section__network-link" target="_blank">
                                                    <i class="_icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="https://vvyysotskaya-the-weather.netlify.app" class="contacts__network-link section__network-link" target="_blank">
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
                            <img src="${Music}" alt="">
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
                            <img src="${Photo}" alt="">
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
                            <img src="${Alarm}" alt="">
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
                            <img src="${Weather}" alt="">
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
      if (document.querySelector(".popup.open").classList.contains("crypter")) {
        document.querySelector(".dot_one").classList.add("_crypter");
        document.querySelector(".dot_two").classList.add("_crypter");
        document.querySelector(".dot_three").classList.add("_crypter");
      } else if (document.querySelector(".popup.open").classList.contains("the-weather")) {
        document.querySelector(".dot_one").classList.add("_the-weather");
        document.querySelector(".dot_two").classList.add("_the-weather");
        document.querySelector(".dot_three").classList.add("_the-weather");
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
    if (document.querySelector(".popup.active").classList.contains("crypter")) {
      document.querySelector(".dot_one").classList.remove("_crypter");
      document.querySelector(".dot_two").classList.remove("_crypter");
      document.querySelector(".dot_three").classList.remove("_crypter");
      document.querySelector(".popup.active").classList.remove("active");
    } else if (document.querySelector(".popup.active").classList.contains("the-weather")) {
      document.querySelector(".dot_one").classList.remove("_the-weather");
      document.querySelector(".dot_two").classList.remove("_the-weather");
      document.querySelector(".dot_three").classList.remove("_the-weather");
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
