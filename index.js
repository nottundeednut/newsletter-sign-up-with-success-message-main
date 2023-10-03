const form = document.querySelector("form");
const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container-2");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  container1.classList.add("hide");
  container2.classList.remove("hide");
});

const dismiss = document.querySelector(".dismiss");
dismiss.addEventListener("click",()=>{
    container1.classList.remove("hide");
    container2.classList.add("hide");
})