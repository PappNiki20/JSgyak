window.addEventListener("load", function () {
  const ARTICLEELEM = document.querySelectorAll("article");
  ARTICLEELEM[0].classList.add("container");
  const lista = [
    "acotar5",
    "acotar4",
    "acotar2",
    "acotar3",
    "acotar2",
    "acotar5",
    "acotar3",
    "acotar",
  ];
  console.log(lista[0]);
  
  for (let index = 0; index < 8; index++) {
    ARTICLEELEM[0].innerHTML += `<div><img src='${lista[index]}.jpg' alt='' ></div>`;
  
  }
  
  const DIVELEM = document.querySelectorAll("div");
  for (let index = 0; index < lista.length; index++) {
    DIVELEM[index].classList.add("kep");
  }
 
});
