const btn = document.querySelector(".fa-bag-shopping");
const x = document.querySelector(".fa-x");
const changeElement = document.querySelector(".side_bar");

btn.addEventListener("click", function () {
  changeElement.style.transform = "translate(0px, 0px)";
});
x.addEventListener("click", function () {
  changeElement.style.transform = "translate(341px, 0px)";
});

const toggle_container=document.querySelector(".toggle_container")
const bar=document.querySelector(".fa-bars")

bar.addEventListener("click",function(){
    toggle_container.classList.toggle("show")
})
