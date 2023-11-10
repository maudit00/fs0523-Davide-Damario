let url = new URLSearchParams(location.search);
let id = url.get("id");
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjcwNDk1ZDRmNjAwMTg1NjI0ZDgiLCJpYXQiOjE2OTk2MDgzMjQsImV4cCI6MTcwMDgxNzkyNH0.AjDfv8LqVS2wCnPKoO24OBFxpUsOl6p1MEr0YSvxpyc";
const API_URL = "https://striveschool-api.herokuapp.com/api/product/";


/**** get singolo prodotto */
async function getSingleProduct(id) {
    return await fetch(API_URL + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }).then((res) => res.json());
}

/****** prove renderizzazione prodotto singolo  */
async function renderSingleProduct(id) {
    let product = await getSingleProduct(id);
    let target = document.querySelector(".product-container");

    let clone = cardClone();
    let img = clone.querySelector(".product-img");
    let title = clone.querySelector(".product-name");
    let brand = clone.querySelector(".product-brand");
    let desc = clone.querySelector(".product-desc");
    let price = clone.querySelector(".product-price");

    document.title = product.name;
    img.src = product.imageUrl;
    title.textContent = product.name;
    brand.textContent = product.brand;
    desc.textContent = product.description;
    price.textContent = `${product.price} €`;

    target.appendChild(clone);
}

renderSingleProduct(id);

/**** funziona clona template */
function cardClone() {
    let temp = document.getElementsByTagName("template")[0];
    return temp.content.cloneNode(true);
  }
  

