window.addEventListener("load", function () {
    const ARTICLEELEM = document.querySelectorAll("article");
    const lista=["acotar2, acotar3, acotar4, acotar5, acotar, acotar2, acotar3"];
    for (let index = 0; index < 8; index++) {
        ARTICLEELEM.innerHTML = `<div><img src="${lista[index]}.jpg" alt='' ></div>`;
        
    }
});