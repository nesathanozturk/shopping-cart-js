const basket = document.getElementById("basket");
const openBasket = document.getElementById("openBasket");
const closeBasket = document.getElementById("closeBasket");

openBasket.addEventListener("click", () => {
  basket.classList.toggle("active");
});

closeBasket.addEventListener("click", () => {
  basket.classList.remove("active");
});
