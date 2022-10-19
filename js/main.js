const collapsibles = document.querySelectorAll(".collapsible");

 collapsibles.forEach((items) =>
 items.addEventListener("click",function () {
    this.classList.toggle("collapsible--expanded");
 })
 );