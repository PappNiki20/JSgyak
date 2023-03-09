window.addEventListener("load", function () {
  const ARTICLEELEM = document.querySelectorAll("article");
  const lista = [
    "acotar",
    "acotar2 ",
    "acotar3",
    "acotar",
    "acotar2 ",
    "acotar3",
  ];
  console.log(lista[0]);
 
  for (let index = 0; index < 8; index++) {
    ARTICLEELEM[0].innerHTML += `<div><img src='${lista[index]}.jpg' alt='' ></div>`;
  }
});
