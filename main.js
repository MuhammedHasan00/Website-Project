//--------------------SIDEBAR DISPLAY--------------------//

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

//--------------------GLOBAL DEFINITIONS--------------------//
let body = document.body;
let buttonsGlow = document.querySelectorAll(".button-glow");
let mobileNav = document.querySelector(".mobile-nav");
let mobileIcons = document.querySelectorAll(".mobile-nav li");
let mobileLinks = document.querySelectorAll(".mobile-nav li a:link");
let navIcon = document.querySelectorAll(".mobile-nav li a i");

let navbar = document.querySelector(".navbar");
let navbarLinks = document.querySelectorAll(".navbar a:link");
let buttons = document.querySelectorAll(".button");
let textboxes = document.querySelectorAll(".textbox");
let homeTextbox = document.querySelectorAll(".home-textbox");
let cardFront = document.querySelectorAll(".front");
let cardBack = document.querySelectorAll(".back");
let cardFrontLinks = document.querySelectorAll(".front h2 a");
let smallCard = document.querySelector(".small-screen-card");
let projectCard = document.querySelectorAll(".project-card");
let timelineLine = document.querySelector(".timeline");
let contactpage = document.querySelector(".contact-info");
let contactForm = document.querySelector(".form");
let footer = document.getElementById("footer");
//--------------------LIGHTMODE/DARKMODE--------------------//

document.getElementById("toggleMode").addEventListener("click", function () {
  if (body) {
    body.style.backgroundColor =
      body.style.backgroundColor === "white" ? "black" : " white";
    body.style.color = body.style.color === "black" ? "white" : "black";
  }
  if (mobileNav) {
    mobileNav.style.backgroundColor =
      mobileNav.style.backgroundColor === "rgba(0, 0, 0, 0.8)"
        ? "rgba(255, 255, 255, 0.8)"
        : "rgba(0, 0, 0, 0.8)";
  }

  if (mobileIcons) {
    mobileIcons.forEach((icon) => {
      icon.style.color = icon.style.color === "white" ? "black" : "white";
    });
  }
  if (mobileLinks) {
    mobileLinks.forEach((link) => {
      link.style.color = link.style.color === "white" ? "black" : "white";
    });
  }
  if (navbar) {
    navbar.style.color = navbar.style.color === "black" ? "white" : "black";
  }
  if (navbarLinks) {
    navbarLinks.forEach((link) => {
      link.style.color = link.style.color === "black" ? "white" : "black";
    });
  }
  if (buttons) {
    buttons.forEach((button) => {
      button.style.color = button.style.color === "black" ? "white" : "black";
    });
  }
  if (textboxes) {
    textboxes.forEach((textbox) => {
      textbox.style.color = textbox.style.color === "white" ? "black" : "white";
      textbox.style.backgroundColor =
        textbox.style.backgroundColor === "black" ? "white" : "black";
    });
  }
  if (homeTextbox) {
    homeTextbox.forEach((textbox) => {
      textbox.style.color = textbox.style.color === "white" ? "black" : "white";
      textbox.style.backgroundColor =
        textbox.style.backgroundColor === "black" ? "white" : "black";
    });
  }
  if (cardFront) {
    cardFront.forEach((card) => {
      card.style.color = card.style.color === "white" ? "black" : "white";
      card.style.backgroundColor =
        card.style.backgroundColor === "black" ? "white" : "black";
    });
  }
  if (cardBack) {
    cardBack.forEach((card) => {
      card.style.color = card.style.color === "white" ? "black" : "white";
      card.style.backgroundColor =
        card.style.backgroundColor === "black" ? "white" : "black";
    });
  }
  if (cardFrontLinks) {
    cardFrontLinks.forEach((card) => {
      card.style.color = card.style.color === "white" ? "black" : "white";
    });
  }
  if (smallCard) {
    smallCard.style.color =
      smallCard.style.color === "white" ? "black" : "white";

    smallCard.style.backgroundColor =
      smallCard.style.backgroundColor === "black" ? "white" : "black";
  }

  // if (timelineLine) {
  //   timelineLine.style.backgroundColor =
  //     timelineLine.style.backgroundColor === "black" ? "white" : "black";
  // }
  if (projectCard) {
    projectCard.forEach((card) => {
      card.style.color = card.style.color === "white" ? "black" : "white";
      card.style.backgroundColor =
        card.style.backgroundColor === "black" ? "white" : "black";
    });
  }

  if (contactpage) {
    contactpage.style.color =
      contactpage.style.color === "white" ? "black" : "white";

    contactpage.style.backgroundColor =
      contactpage.style.backgroundColor === "black" ? "white" : "black";
  }

  if (form) {
    contactForm.boxShadow =
      contactForm.boxShadow.trim() === "0 0 20px 1px rgba(255, 255, 255, 0.5)"
        ? "0 0 20px 1px rgba(0, 0, 0, 0.5)"
        : "0 0 20px 1px rgba(255, 255, 255, 0.5)";
  }
  if (footer) {
    footer.style.color = footer.style.color === "black" ? "white" : "black";
  }
});

//--------------------LINKS HOVER GLOW--------------------//

buttonsGlow.forEach((button) => {
  button.addEventListener("mouseover", () => {
    if (body.style.backgroundColor === "white") {
      button.style.boxShadow =
        "0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black";
    } else {
      button.style.boxShadow =
        "0 0 10px #ffff, 0 0 10px #ffff, 0 0 10px #ffff, 0 0 10px #ffff, 0 0 10px #ffff";
    }

    button.addEventListener("mouseleave", () => {
      button.style.boxShadow = "none";
    });
  });
});

//--------------------CONTACT PAGE--------------------//

const inputs = document.querySelectorAll(".input");

function inputFocus() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function inputUnFocus() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", inputFocus);
  input.addEventListener("blur", inputUnFocus);
});

//--------------------MOBILE NAV BAR EXPAND--------------------//

// mobileNav.addEventListener("mouseover", ()=>{
//   navIcon[0].classList.remove("hidden");
//   navIcon[1].classList.remove("hidden");
// })

// mobileNav.addEventListener("mouseleave", ()=>{
//   setTimeout(() =>{
//     navIcon[0].classList.add("hidden");
//     navIcon[1].classList.add("hidden");
//   },1000)

// })
