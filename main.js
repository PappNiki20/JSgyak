let SZAMLALO = 0;
window.addEventListener("load", function () {
  const ARTICLEELEM = document.querySelectorAll("article");
  ARTICLEELEM[0].classList.add("container");
  const lista = [
    "acotar2.jpg",
    "acotar0.jpg",
    "acotar4.jpg",
    "acotar3.jpg",
    "acotar0.jpg",
    "acotar3.jpg",
    "acotar4.jpg",
    "acotar0.jpg",
  ];
  console.log(lista[0]);

  for (let index = 0; index < 4; index++) {
    ARTICLEELEM[0].innerHTML += `<div><img src='${lista[index]}' alt='' ></div>`;
  }

  const GombJobbra = document.querySelectorAll(".jobb");
  GombJobbra[0].addEventListener("click", function () {
    const NAGYKEP = document.querySelectorAll(".magykep img");
    NAGYKEP[0].style.width = "100%";

    NAGYKEP[0].src = lista[SZAMLALO];
    if (SZAMLALO >= 7) {
      NAGYKEP[0].src = lista[0];
      SZAMLALO = 0;
    }
    SZAMLALO += 1;
  });

  const GombBalra = document.querySelectorAll(".bal");
  GombBalra[0].addEventListener("click", function () {
    const NAGYKEP = document.querySelectorAll(".magykep img");
    NAGYKEP[0].style.width = "100%";

    NAGYKEP[0].src = lista[SZAMLALO ];
    if (SZAMLALO >= 7) {
      NAGYKEP[0].src = lista[0];
      SZAMLALO = 0;
    }
    SZAMLALO += 1;
  });
});
