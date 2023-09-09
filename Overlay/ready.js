let btn = document.querySelectorAll(".btn");
for (let i = 0; i < btn.length; i++) {
   btn[i].addEventListener("click", function () {
      document.querySelector(".header").classList.add("blur");
      document.querySelector(".aside").classList.remove("hide");
   })
}

document.querySelector(".icon").addEventListener("click", function () {
   document.querySelector(".aside").classList.add("hide");
   document.querySelector(".header").classList.remove("blur");
   
})
document.querySelector(".div").addEventListener("click", function () {
   document.querySelector(".aside").classList.add("hide");
   document.querySelector(".header").classList.remove("blur");
})
