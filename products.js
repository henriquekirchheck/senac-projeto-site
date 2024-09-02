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

const brl = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

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
        image: "/senac-projeto-site/assets/acessories/ataricontroller.webp",
        name: "Controle Atari",
        price: 80,
      },
      {
        image: "/senac-projeto-site/assets/acessories/joycongrip.png",
        name: "Switch JoyCon Grip",
        price: 140,
      },
      {
        image: "/senac-projeto-site/assets/acessories/kinect.png",
        name: "Kinect Xbox 360",
        price: 120,
      },
      {
        image: "/senac-projeto-site/assets/acessories/megadrivecontroller.webp",
        name: "Controle MegaDrive",
        price: 150,
      },
      {
        image: "/senac-projeto-site/assets/acessories/nesadvantage.png",
        name: "Controle NES Advantage",
        price: 120,
      },
      {
        image: "/senac-projeto-site/assets/acessories/ps2memory.png",
        name: "Memory Card PS2",
        price: 60,
      },
      {
        image: "/senac-projeto-site/assets/acessories/pulse3d.webp",
        name: "Headset Pulse 3D",
        price: 500,
      },
      {
        image: "/senac-projeto-site/assets/acessories/wiiwheel.webp",
        name: "Controle Wii Wheel",
        price: 25,
      },
    ],
  },
  {
    category: "consoles",
    productList: [
      {
        image: "/senac-projeto-site/assets/consoles/atari2600.png",
        name: "Atari 2600",
        price: 450,
      },
      {
        image: "/senac-projeto-site/assets/consoles/dsixl.png",
        name: "Nintendo DSi XL",
        price: 450,
      },
      {
        image: "/senac-projeto-site/assets/consoles/megadrive.png",
        name: "Sega MegaDrive",
        price: 299,
      },
      {
        image: "/senac-projeto-site/assets/consoles/ps2.png",
        name: "Playstation 2",
        price: 500,
      },
      {
        image: "/senac-projeto-site/assets/consoles/ps5.png",
        name: "Playstation 5",
        price: 3500,
      },
      {
        image: "/senac-projeto-site/assets/consoles/snes.png",
        name: "Super Nintendo",
        price: 650,
      },
      {
        image: "/senac-projeto-site/assets/consoles/switch-oled.webp",
        name: "Nintendo Switch OLED",
        price: 2099,
      },
      {
        image: "/senac-projeto-site/assets/consoles/wii.png",
        name: "Nintendo Wii",
        price: 599,
      },
      {
        image: "/senac-projeto-site/assets/consoles/xboxseriesx.png",
        name: "Xbox Series X",
        price: 4000,
      },
    ],
  },
  {
    category: "games",
    productList: [
      {
        image: "/senac-projeto-site/assets/games/godofwarragnarok.jpg",
        name: "God of War Ragnarok",
        price: 250,
      },
      {
        image: "/senac-projeto-site/assets/games/haloreach.jpg",
        name: "Halo Reach",
        price: 112,
      },
      {
        image: "/senac-projeto-site/assets/games/mariokart8deluxe.jpg",
        name: "Mario Kart 8 Deluxe",
        price: 300,
      },
      {
        image: "/senac-projeto-site/assets/games/pacman2600.jpg",
        name: "Pacman Atari 2600",
        price: 220,
      },
      {
        image: "/senac-projeto-site/assets/games/sonic2.png",
        name: "Sonic the Hedgehog 2",
        price: 60,
      },
      {
        image: "/senac-projeto-site/assets/games/spiderman2.jpg",
        name: "Spider-man 2",
        price: 350,
      },
      {
        image: "/senac-projeto-site/assets/games/supermarioworld.jpg",
        name: "Super Mario World",
        price: 150,
      },
      {
        image: "/senac-projeto-site/assets/games/wiisports.png",
        name: "Wii Sports",
        price: 110,
      },
    ],
  },
];

addProducts(products);
