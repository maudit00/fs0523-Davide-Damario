const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjcwNDk1ZDRmNjAwMTg1NjI0ZDgiLCJpYXQiOjE2OTk2MDgzMjQsImV4cCI6MTcwMDgxNzkyNH0.AjDfv8LqVS2wCnPKoO24OBFxpUsOl6p1MEr0YSvxpyc";
const API_URL = "https://striveschool-api.herokuapp.com/api/product/";

/*** GET FETCH */
async function getProducts() {
  return await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  }).then((res) => res.json());
}

/**** funzione di rendering prodotti */
async function renderProducts() {
  let products = await getProducts();
  let target = document.querySelector(".product-container");

  products.forEach((p) => {
    let clone = cardClone();
    let img = clone.querySelector(".product-img");
    let title = clone.querySelector(".product-name");
    let brand = clone.querySelector(".product-brand");
    let desc = clone.querySelector(".product-desc");
    let price = clone.querySelector(".product-price");
    let moreButton = clone.querySelector("#more");
    let editButton = clone.querySelector("#edit");

    
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
