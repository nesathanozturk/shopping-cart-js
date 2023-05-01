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

let cart = JSON.parse(localStorage.getItem("cart")) || [];

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
      alert("This product is already in your basket!");
    } else {
      cart.push(product);
      Toastify({
        text: "Product added to cart!",
        duration: 3000,
        newWindow: true,
        class: "toastify",
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
      }).showToast();
      saveToLocalStorage();
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
              <h2>${cartItem.title}</h2>
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
                <i id="remove-item" class="fa-sharp fa-solid fa-xmark fa-2x"></i>
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

  const removeItemBtn = document.querySelectorAll("#remove-item");
  const increaseBtn = document.querySelectorAll(".fa-plus");
  const decreaseBtn = document.querySelectorAll(".fa-minus");

  removeItemBtn.forEach((removeItemButton, index) => {
    removeItemButton.addEventListener("click", () => {
      cart.forEach((cartItem) => {
        if (cartItem.id === cart[index].id) {
          cart.splice(index, 1);
          cartItem.amount = 1;
          saveToLocalStorage();
          renderCartProducts();
        }
      });
    });
  });

  increaseBtn.forEach((increaseButton, index) => {
    increaseButton.addEventListener("click", () => {
      cart.forEach((product) => {
        if (product.id === cart[index].id) {
          const existingProduct = cart.find((item) => item.id === product.id);

          existingProduct.amount += 1;
          renderCartProducts();
        }
      });
    });
  });

  decreaseBtn.forEach((decreaseButton, index) => {
    decreaseButton.addEventListener("click", () => {
      cart.forEach((cartItem) => {
        if (cartItem.id === cart[index].id) {
          decreaseAmount(cartItem);
          renderCartProducts();
        }
      });
    });
  });

  const decreaseAmount = (cartItem) => {
    const existingProduct = cart.find((item) => item.id === cartItem.id);

    if (existingProduct.amount === 1) {
      existingProduct.amount = 1;
    } else {
      existingProduct.amount -= 1;
    }
  };
};

clearBasketBtn.addEventListener("click", (id) => {
  if (cart.length > 0) {
    cart.forEach((cartItem) => {
      cart = cart.filter((item) => item.id === id);
      cartItem.amount = 1;
      saveToLocalStorage();
      renderCartProducts();
    });
  } else {
    alert("Your cart is empty! Add some product!");
  }
});

const saveToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

openBasket.addEventListener("click", () => {
  basket.classList.add("active");
});

closeBasket.addEventListener("click", () => {
  basket.classList.remove("active");
});

renderProducts();
renderCartProducts();
