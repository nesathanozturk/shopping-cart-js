// Data:
const products = [
  {
    id: 1,
    title: "Red Lipstick",
    image: "/images/lipstick.avif",
    price: 20,
    amount: 1,
  },
  {
    id: 2,
    title: "White Watch",
    image: "/images/white-watch.avif",
    price: 50,
    salePrice: 40,
    amount: 1,
  },
  {
    id: 3,
    title: "Rayban Glass",
    image: "/images/rayban-glass.avif",
    price: 100,
    salePrice: 60,
    amount: 1,
  },
  {
    id: 4,
    title: "Black T-Shirt",
    image: "/images/black-shirt.avif",
    price: 30,
    salePrice: 10,
    amount: 1,
  },
  {
    id: 5,
    title: "Out Cast T-Shirt",
    image: "/images/out-cast.avif",
    price: 40,
    amount: 1,
  },
  {
    id: 6,
    title: "Gray Jacket",
    image: "/images/gray-suit.avif",
    price: 60,
    amount: 1,
  },
  {
    id: 7,
    title: "Blue Jacket",
    image: "/images/blue-jacket.avif",
    price: 50,
    amount: 1,
  },
  {
    id: 8,
    title: "Brown Coat",
    image: "/images/brown-coat.avif",
    price: 80,
    amount: 1,
  },
  {
    id: 9,
    title: "White T-Shirt",
    image: "/images/white-tshirt.avif",
    price: 20,
    amount: 1,
  },
  {
    id: 10,
    title: "Black T-Shirt",
    image: "/images/black-tshirt2.avif",
    price: 15,
    amount: 1,
  },
  {
    id: 11,
    title: "White Shirt",
    image: "/images/white-shirt.avif",
    price: 45,
    amount: 1,
  },
  {
    id: 12,
    title: "Black Shirt",
    image: "/images/black-shirt.avif",
    price: 42,
    amount: 1,
  },
  {
    id: 13,
    title: "Gray Suit",
    image: "/images/gray-suit.avif",
    price: 150,
    amount: 1,
  },
];

// Elements:
const basket = document.getElementById("basket");
const openBasket = document.getElementById("openBasket");
const closeBasket = document.getElementById("closeBasket");

openBasket.addEventListener("click", () => {
  basket.classList.toggle("active");
});

closeBasket.addEventListener("click", () => {
  basket.classList.remove("active");
});
