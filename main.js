let SZAMLALO = 0;
window.addEventListener("load", function () {
  const ARTICLEELEM = document.querySelectorAll("article");
  ARTICLEELEM[0].classList.add("container");
  const lista = [
    "F1Kicsi.jpg",
    "F3Kicsi.jpg",
    "F4Kicsi.jpg",
    "F5Kicsi.jpg",
    "F1Kicsi.jpg",
    "F2Kicsi.jpg",
    "F3Kicsi.jpg",
    "F4Kicsi.jpg",
  ];
  const listaN = [
    "F1Nagy.jpg",
    "F3Nagy.jpg",
    "F4Nagy.jpg",
    "F5Nagy.jpg",
    "F1Nagy.jpg",
    "F2Nagy.jpg",
    "F3Nagy.jpg",
    "F4Nagy.jpg",
  ];
  console.log(lista[0]);

  for (let index = 0; index < 8; index++) {
    ARTICLEELEM[0].innerHTML += `<div class="item"><img src='${lista[index]}'alt='' ></div>`;
    
  }

  const GombJobbra = document.querySelectorAll(".jobb");
  GombJobbra[0].addEventListener("click", function () {
    const NAGYKEP = document.querySelectorAll(".magykep img");
    NAGYKEP[0].style.width = "100%";

    NAGYKEP[0].src = listaN[SZAMLALO];
    if (SZAMLALO >= 7) {
      NAGYKEP[0].src = listaN[0];
      SZAMLALO = 0;
    }
    SZAMLALO += 1;
  });

  const GombBalra = document.querySelectorAll(".bal");
  GombBalra[0].addEventListener("click", function () {
    const NAGYKEP = document.querySelectorAll(".magykep img");
    NAGYKEP[0].style.width = "100%";

    NAGYKEP[0].src = listaN[SZAMLALO ];
    if (SZAMLALO >= 7) {
      NAGYKEP[0].src = listaN[0];
      SZAMLALO = 0;
    }
    SZAMLALO += 1;
  });
});
