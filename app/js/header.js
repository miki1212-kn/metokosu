{
  const ham = document.querySelector(".ham");
  const nav = document.querySelector("#nav");
  // console.log(ham);
  ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
  });
}
