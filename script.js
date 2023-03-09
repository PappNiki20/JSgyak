window.addEventListener("load", function () {
  const ARTICLEELEM = document.querySelectorAll("article");
  ARTICLEELEM[0].innerHTML = "<div><img src='acotar.jfif' alt='' ></div>";
  ARTICLEELEM[0].innerHTML += "<button>OK</button>";
  const ButtonELEM = document.querySelectorAll("article button");
  ButtonELEM[0].addEventListener("click", function () {
    const DIVELEM = document.querySelectorAll("article div");
    DIVELEM[0].classList.add("formazas");
  });
  ButtonELEM[0].addEventListener("click", function () {
    const DIVELEM = document.querySelectorAll("article div");
    DIVELEM[0].style.backgroundColor = "white";
  });
  const KEPELEM = document.querySelectorAll("img");
  KEPELEM[0].addEventListener("mouseenter", function () {
    KEPELEM[0].style.backgroundColor = "blue";
    KEPELEM[0].style.padding = "15px";
    KEPELEM[0].style.width = "40%";
  });
  KEPELEM[0].addEventListener("mouseleave", function () {
    KEPELEM[0].style.backgroundColor = "white";
    KEPELEM[0].style.padding = "0";
    KEPELEM[0].style.width = "30%";
  });
});
