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
//--------------------LIGHTMODE/DARKMODE--------------------//

document.getElementById("toggleMode").addEventListener("click", function () {
  let navbar = document.querySelector(".navbar");
  let navbarLinks = document.querySelectorAll(".navbar a:link");
  let buttons = document.querySelectorAll(".button");
  let textboxes = document.querySelectorAll(".textbox");

  body.style.backgroundColor =
    body.style.backgroundColor === "white" ? "black" : " white";
  body.style.color = body.style.color === "black" ? "white" : "black";

  mobileNav.style.backgroundColor =
    mobileNav.style.backgroundColor === "rgba(0, 0, 0, 0.8)"
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(0, 0, 0, 0.8)";

  mobileIcons.forEach((icon) => {
    icon.style.color = icon.style.color === "white" ? "black" : "white";
  });

  mobileLinks.forEach((link) => {
    link.style.color = link.style.color === "white" ? "black" : "white";
  });

  navbar.style.color = navbar.style.color === "black" ? "white" : "black";

  navbarLinks.forEach((link) => {
    link.style.color = link.style.color === "black" ? "white" : "black";
  });

  buttons.forEach((button) => {
    button.style.color = button.style.color === "black" ? "white" : "black";
  });

  textboxes.forEach((textbox) => {
    textbox.style.color = textbox.style.color === "white" ? "black" : "white";
    textbox.style.backgroundColor =
      textbox.style.backgroundColor === "black" ? "white" : "black";
  });

  let footer = document.getElementById("footer");
  footer.style.color = footer.style.color === "black" ? "white" : "black";
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
  if (this.value == ""){
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
