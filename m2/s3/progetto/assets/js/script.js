const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjcwNDk1ZDRmNjAwMTg1NjI0ZDgiLCJpYXQiOjE2OTk2MDgzMjQsImV4cCI6MTcwMDgxNzkyNH0.AjDfv8LqVS2wCnPKoO24OBFxpUsOl6p1MEr0YSvxpyc";
const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const spinner = document.getElementById("spinner");
const editModeButton = document.querySelector("#show-edit-buttons");

/*** GET FETCH */
async function getProducts() {
  spinner.removeAttribute("hidden");
  return await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  }).then((res) => res.json())
}

/**** funzione di rendering prodotti */
async function renderProducts() {
  let products = await getProducts();
  spinner.setAttribute("hidden", "");
  let target = document.querySelector(".product-container");

  products.forEach((p) => {
    let clone = cardClone();
    let img = clone.querySelector(".product-img");
    let title = clone.querySelector(".product-name");
    let brand = clone.querySelector(".product-brand");
    let desc = clone.querySelector(".product-desc");
    let price = clone.querySelector(".product-price");
    let moreButton = clone.querySelector(".more");


    
    img.src = p.imageUrl;
    title.textContent = p.name;
    brand.textContent = p.brand;
    desc.textContent = p.description;
    price.textContent = `${p.price} €`;
    moreButton.href = `product-detail.html?id=${p._id}`;

    target.appendChild(clone);
  });
}


/****lancio funzione renderizzazione prodotti product page */
renderProducts();

/**** funzione renderizzazione contenuto prodotto*/

function cardClone() {
  let temp = document.getElementsByTagName("template")[0];
  return temp.content.cloneNode(true);
}
/***** gestione del click della modalità  */

editModeButton.addEventListener("click", () => {
  showEditButtons();
let editSpan = document.querySelector("#edit-mode-span");
let viewSpan = document.querySelector("#view-mode-span");
editSpan.classList.toggle("d-none");
viewSpan.classList.toggle("d-none");

});

/***** funzione toggle modalità home page */
function showEditButtons () {
  let editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((b) => {
    b.classList.toggle("d-none");
  });
}