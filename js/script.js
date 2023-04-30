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
    amount: 1,
  },
  {
    id: 3,
    title: "Rayban Glass",
    image: "/images/rayban-glass.avif",
    price: 100,
    amount: 1,
  },
  {
    id: 4,
    title: "Black T-Shirt",
    image: "/images/black-shirt.avif",
    price: 30,
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
];

// Elements:
const basket = document.getElementById("basket");
const openBasket = document.getElementById("openBasket");
const closeBasket = document.getElementById("closeBasket");
const clearBasketBtn = document.getElementById("clearBasket");
const basketItems = document.getElementById("basket-items");
const basketItemLength = document.getElementById("basketItemLength");
const totalAmount = document.getElementById("totalAmount");
const basketLength = document.getElementById("basket-length");
const productsContainer = document.getElementById("products-container");

let cart = [];

const renderProducts = () => {
  let renderProduct = "";

  products.forEach((product) => {
    renderProduct += `
        <div class="product-item">
        <div class="product-image">
          <img
            src=${product.image}
            alt=${product.title}
          />
        </div>
        <div class="product-info">
          <h2>${product.title}</h2>
          <p>&dollar;${product.price}</p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
      `;
  });
  productsContainer.innerHTML = renderProduct;

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      addToCart(products[index]);
      renderCartProducts();
    });
  });

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.amount += 1;
    } else {
      cart.push(product);
      renderCartProducts();
    }
  };
};

const renderCartProducts = () => {
  let renderProduct = "";
  let cartAmount = 0;

  if (cart.length > 0) {
    cart.forEach((cartItem) => {
      cartAmount += cartItem.price * cartItem.amount;
      renderProduct += `
            <div class="basket-item">
            <div class="item-image">
              <img
                src=${cartItem.image}
                alt=${cartItem.title}
              />
            </div>
            <div class="item-info">
              <h2>${cartItem.title}t</h2>
              <p>&dollar;${cartItem.price}</p>
              <div class="inc-dec">
                <span>
                  <i class="fa-solid fa-plus"></i>
                </span>
                <span class="item-quantity">${cartItem.amount}</span>
                <span>
                  <i class="fa-solid fa-minus"></i>
                </span>
              </div>
              <span id="removeItem class="">
                <i class="fa-sharp fa-solid fa-xmark fa-2x remove-item"></i>
              </span>
            </div>
          </div>
            `;
    });
  } else {
    renderProduct = `<p class="basket-warning">There is nothing in your basket!</p>`;
  }

  basketItems.innerHTML = renderProduct;
  totalAmount.innerText = `Total Amount: $${cartAmount}`;

  if (cart.length > 0) {
    basketLength.innerText = cart.length;
    basketItemLength.innerText = `Total Items: ${cart.length}`;
  } else {
    basketLength.innerText = "0";
    basketItemLength.innerText = "Total Items: 0";
  }

  const removeItemBtn = document.querySelectorAll(".remove-item");

  removeItemBtn.forEach((removeItemButton, index) => {
    removeItemButton.addEventListener("click", () => {
      for (let i = 0; i < cart.length; i++) {
        const cartItem = cart[i];
        removeItemFromBasket(cartItem);
      }
    });
  });

  const removeItemFromBasket = (index) => {
    cart.splice(index, 1);
    renderCartProducts();
  };
};

clearBasketBtn.addEventListener("click", (id) => {
  if (cart.length > 0) {
    cart = cart.filter((item) => item.id === id);
    renderCartProducts();
  } else {
    alert("Your cart is empty! Add some product!");
  }
});

openBasket.addEventListener("click", () => {
  basket.classList.add("active");
});

closeBasket.addEventListener("click", () => {
  basket.classList.remove("active");
});

renderProducts();
renderCartProducts();
