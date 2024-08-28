// @ts-check

/**
 * @typedef {Object} ProductList
 * @property {string} name
 * @property {number} price
 * @property {string} image
 */

/** @typedef {"games" | "consoles" | "acessories"} Category */

/**
 * @typedef {Object} Product
 * @property {Category} category
 * @property {ProductList[]} productList
 */

const brl = Intl.NumberFormat('pt-BR', {
  style: "currency",
  currency: "BRL"
})

/** @type {Record<Category, HTMLUListElement>} */
const categories = {
  games: /** @type {HTMLUListElement} */ (document.querySelector(".games")),
  consoles: /** @type {HTMLUListElement} */ (
    document.querySelector(".consoles")
  ),
  acessories: /** @type {HTMLUListElement} */ (
    document.querySelector(".acessories")
  ),
};

/**
 * @param {ProductList} productList
 * @returns {HTMLLIElement}
 */
function constructProductElement(productList) {
  const root = document.createElement("li");
  root.classList.add("product");

  const title = document.createElement("h3");
  title.innerText = productList.name;

  const price = document.createElement("span");
  price.innerText = brl.format(productList.price);

  const img = document.createElement("img");
  img.src = productList.image;
  img.alt = productList.name;

  const desc = document.createElement("div");

  root.appendChild(img);
  desc.appendChild(title);
  desc.appendChild(price);
  root.appendChild(desc);

  return root;
}

/**
 * @param {Product[]} products
 * @returns {void}
 */
function addProducts(products) {
  for (let productCatList of products) {
    for (let product of productCatList.productList) {
      categories[productCatList.category].appendChild(
        constructProductElement(product)
      );
    }
  }
}

/** @satisfies {Product[]} */
const products = [
  {
    category: "acessories",
    productList: [
      {
        image: "/assets/acessories/ataricontroller.webp",
        name: "Controle Atari",
        price: 80,
      },
      {
        image: "/assets/acessories/joycongrip.png",
        name: "Switch JoyCon Grip",
        price: 140,
      },
      {
        image: "/assets/acessories/kinect.png",
        name: "Kinect Xbox 360",
        price: 120,
      },
      {
        image: "/assets/acessories/megadrivecontroller.webp",
        name: "Controle MegaDrive",
        price: 150,
      },
      {
        image: "/assets/acessories/nesadvantage.png",
        name: "Controle NES Advantage",
        price: 120,
      },
      {
        image: "/assets/acessories/ps2memory.png",
        name: "Memory Card PS2",
        price: 60,
      },
      {
        image: "/assets/acessories/pulse3d.webp",
        name: "Headset Pulse 3D",
        price: 500,
      },
      {
        image: "/assets/acessories/wiiwheel.webp",
        name: "Controle Wii Wheel",
        price: 25,
      },
    ],
  },
  {
    category: "consoles",
    productList: [
      {
        image: "/assets/consoles/atari2600.png",
        name: "Atari 2600",
        price: 450,
      },
      {
        image: "/assets/consoles/dsixl.png",
        name: "Nintendo DSi XL",
        price: 450,
      },
      {
        image: "/assets/consoles/megadrive.png",
        name: "Sega MegaDrive",
        price: 299,
      },
      {
        image: "/assets/consoles/ps2.png",
        name: "Playstation 2",
        price: 500,
      },
      {
        image: "/assets/consoles/ps5.png",
        name: "Playstation 5",
        price: 3500,
      },
      {
        image: "/assets/consoles/snes.png",
        name: "Super Nintendo",
        price: 650,
      },
      {
        image: "/assets/consoles/switch-oled.webp",
        name: "Nintendo Switch OLED",
        price: 2099,
      },
      {
        image: "/assets/consoles/wii.png",
        name: "Nintendo Wii",
        price: 599,
      },
      {
        image: "/assets/consoles/xboxseriesx.png",
        name: "Xbox Series X",
        price: 4000,
      },
    ],
  },
  {
    category: "games",
    productList: [
      {
        image: "/assets/games/godofwarragnarok.jpg",
        name: "God of War Ragnarok",
        price: 250,
      },
      {
        image: "/assets/games/haloreach.jpg",
        name: "Halo Reach",
        price: 112,
      },
      {
        image: "/assets/games/mariokart8deluxe.jpg",
        name: "Mario Kart 8 Deluxe",
        price: 300,
      },
      {
        image: "/assets/games/pacman2600.jpg",
        name: "Pacman Atari 2600",
        price: 220,
      },
      {
        image: "/assets/games/sonic2.png",
        name: "Sonic the Hedgehog 2",
        price: 60,
      },
      {
        image: "/assets/games/spiderman2.jpg",
        name: "Spider-man 2",
        price: 350,
      },
      {
        image: "/assets/games/supermarioworld.jpg",
        name: "Super Mario World",
        price: 150,
      },
      {
        image: "/assets/games/wiisports.png",
        name: "Wii Sports",
        price: 110,
      },
    ],
  },
];

addProducts(products);
