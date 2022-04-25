import "./styles/index.scss";
import "./styles/light-theme.scss";

import "./assets/fonts/CocoSharp-ExtraLight.ttf";
import "./assets/fonts/icons.ttf";

const app = document.getElementById("app");

app.innerHTML = `
    <div class="animated-background__wrapper">
        <header class="header _lock">
            <div class="container">
                <div class="header__menu menu">
                    <div class="header__theme">
                        <div class="inticator"></div>
                    </div>
                    <div class="menu__icon icon-menu">
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
                                        <div class="resume__skill-grid resume__skill-grid_m">
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
                            <div class="resume__row section__row">
                                <div class="resume__column section__column section__column_left">
                                    <div class="resume__column-title section__column-title">
                                        <h3 class="resume__column-title-text section__column-title-text">
                                            Soft skills
                                        </h3>
                                    </div>
                                </div>
                                <div class="resume__column section__column section__column_right">
                                    <div class="resume__column-content section__column-content">
                                        <div class="resume__skill-grid">
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Adaptability
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Organization
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Open-mindedness
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Patience
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Problem solving
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Dependability
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Teamwork
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Active listening
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Critical thinkig
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Persistence
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Empathy
                                                </p>
                                            </div>
                                            <div class="resume__skill-item">
                                                <p class="resume__skill-text">
                                                    Desire to learn
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
                                                    RS School
                                                </p>
                                            </div>
                                            <div class="resume__row-item section__row-item section__row-item_right">
                                                <p class="resume__item-period section__item-period content__item-period">
                                                    march 2022 - present
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
                                                    RS Pre School
                                                </p>
                                            </div>
                                            <div class="resume__row-item section__row-item section__row-item_right">
                                                <p class="resume__item-period section__item-period content__item-period">
                                                    december 2021 - march 2022
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
                                                    Advanced (c1)
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
                            <div class="portfolio__grid-wrapper"></div>
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
                                            Location
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    class="contacts__column section__column contacts__column_right section__column_right">
                                    <div class="contacts__column-content section__column-content">
                                        <div class="contacts__column-content-link section__column-content-link">
                                            <p class="contacts__column-content-info">Minsk, Belarus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                <div class="contacts__column section__column contacts__column_right section__column_right">
                                    <div class="contacts__column-content section__column-content">
                                        <div class="contacts__network-wrapper section__network-wrapper">
                                            <div class="contacts__network section__network">
                                                <a href="https://github.com/vvyysotskaya" class="contacts__network-link section__network-link">
                                                    <i class="_icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="https://www.linkedin.com/in/vvyysotskaya/" class="contacts__network-link section__network-link">
                                                    <i class="_icon-linkedin"></i>
                                                </a>
                                            </div>
                                            <div class="contacts__network section__network">
                                                <a href="https://t.me/vvyysotskaya" class="contacts__network-link section__network-link">
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
`;

let page = document.querySelector(".page"),
  header = document.querySelector(".header"),
  portfolioWrapper = document.querySelector(".portfolio__grid-wrapper"),
  iconMenu = document.querySelector(".icon-menu"),
  menuBody = document.querySelector(".menu__body"),
  body = document.querySelector("body"),
  menuLink = document.querySelectorAll(".menu__link"),
  btnTheme = document.querySelector(".header__theme");

window.onload = function () {
  setTimeout(function () {
    page.classList.remove("_lock");
    header.classList.remove("_lock");
  }, 1000);

  if (localStorage.getItem("light-theme") !== null) {
    btnTheme.classList.toggle("active");
    body.classList.toggle("light-theme");
  }
};

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

btnTheme.addEventListener("click", function () {
  btnTheme.classList.toggle("active");
  page.classList.add("_lock");

  setTimeout(() => {
    body.classList.toggle("light-theme");
  }, 1000);

  setTimeout(() => {
    page.classList.remove("_lock");
  }, 2500);

  if (localStorage.getItem("light-theme") !== null) {
    localStorage.removeItem("light-theme");
  } else {
    localStorage.setItem("light-theme", 1);
  }
});

fetch("./projects.json")
  .then((response) => response.json())
  .then((data) => {

    for (let i = 0; i < data.length; i++) {
      cardRender(data[i].img, data[i].title, data[i].subtitle, data[i].id);
    }

    let cards = document.querySelectorAll(".portfolio__grid-link");

    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function () {
        body.classList.add("_lock");
        page.classList.add("_lock");
        header.classList.add("_lock");

        for (let j = 0; j < data.length; j++) {
          if (cards[i].id == data[j].id) {
            setTimeout(() => {
              popupRender(
                data[j].title,
                data[j].img,
                data[j].description,
                data[j].technologies,
                data[j].deploy,
                data[j].source
              );
              setTimeout(() => {
                document.querySelector(".popup").classList.add("open");
                document.querySelector(".dot_one").style.background = data[j].dotOne;
                document.querySelector(".dot_two").style.background = data[j].dotTwo;
                document.querySelector(".dot_three").style.background = data[j].dotThree;
              }, 1000);
              let close = document.querySelector(".close-popup");
              close.addEventListener("click", function () {
                document.querySelector(".popup").classList.remove("open");
                setTimeout(() => {
                  document.querySelector(".popup").remove();
                }, 1000);
                setTimeout(() => {
                  body.classList.remove("_lock");
                  page.classList.remove("_lock");
                  header.classList.remove("_lock");
                  document.querySelector(".dot_one").style.background = "#bce7d9";
                  document.querySelector(".dot_two").style.background = "#4c5175";
                  document.querySelector(".dot_three").style.background = "#c6cbce";
                }, 2000);
              });
            }, 1000);
          }
        }
      });
    }
  })
  .catch((err) => console.log("Error: ", err));

function cardRender(image, title, subtitle, id) {
  let card = document.createElement("div");
  card.className = "portfolio__grid-link";
  card.id = id;
  card.innerHTML = `
        <div class="portfolio__grid-item">
            <img src="${image}" alt="">
            <div class="portfolio__grid-title">
                <p class="portfolio__grid-title-text">${title}</p>
                <p class="portfolio__grid-description-text">${subtitle}</p>
            </div>
        </div>
    `;
  portfolioWrapper.append(card);
}

function popupRender(title, image, description, technologies, deploy, source) {
  let popup = document.createElement("div");
  popup.className = `popup`;
  let content = "";
  content = `
    <div class="popup__body">
    <div class="popup__close close-popup">
        <span></span>
        <span></span>
    </div>
    <div class="container">
        <div class="popup__content section">
            <div class="popup__title section__title title">
                <h2 class="popup__title-text section__title-text title__text">
                    ${title}
                </h2>
            </div>
            <div class="popup__photo-wrapper">
                <div class="popup__photo">
                    <img src="${image}" alt="">
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
                                    ${description}
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
                                <div class="resume__skill-grid resume__skill-grid_m">
  `;

  let techStack = "";
  for (let i = 0; i < technologies.length; i++) {
    techStack += `
        <div class="resume__skill-column">
            <div class="resume__skill-item">
                <p class="resume__skill-text">
                    ${technologies[i]}
                </p>
            </div>
        </div>
    `;
  }

  content += techStack;
  content += `
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
                                            <a href=${source} class="contacts__network-link section__network-link" target="_blank">
                                                <i class="_icon-github"></i>
                                            </a>
                                        </div>
                                        <div class="contacts__network section__network">
                                            <a href="${deploy}" class="contacts__network-link section__network-link" target="_blank">
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
  `;

  popup.innerHTML = content;
  document.body.prepend(popup);
}
