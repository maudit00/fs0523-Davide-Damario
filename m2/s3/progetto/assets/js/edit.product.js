let url = new URLSearchParams(location.search);
let id = url.get("id");
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjcwNDk1ZDRmNjAwMTg1NjI0ZDgiLCJpYXQiOjE2OTk2MDgzMjQsImV4cCI6MTcwMDgxNzkyNH0.AjDfv8LqVS2wCnPKoO24OBFxpUsOl6p1MEr0YSvxpyc";
const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const editButton = document.querySelector("#edit-button");


/**** get singolo prodotto */
async function getSingleProduct(id) {
    return await fetch(API_URL + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }).then((res) => res.json());
}


/****modifica prodotto */



/****** renderizzazione prodotto sul form */

async function renderSingleProduct(id) {
    let product = await getSingleProduct(id);
    
    let name = document.querySelector("#name");
    let brand = document.querySelector("#brand");
    let desc = document.querySelector("#desc");
    let imageUrl = document.querySelector("#imageUrl");
    let price = document.querySelector("#price");

    
    name.value = product.name;
    brand.value = product.brand;
    desc.value = product.description;
    imageUrl.value = product.imageUrl;
    price.value = product.price;
}
  
renderSingleProduct(id);

    editButton.addEventListener("click", () => {
            
        let product = {
            name: document.querySelector("#name").value,
            brand: document.querySelector("#brand").value,
            description: document.querySelector("#desc").value,
            price: document.querySelector("#price").value,
            imageUrl: document.querySelector("#imageUrl").value
        }

        async function editProduct(id) {
            return await fetch(API_URL + id, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
              },
              body: JSON.stringify(product),
            }).then((res) => res.json());
          }
        alert("modifica prodotto");
        //   Swal.fire({
        //       icon: "success",
        //       title: "Prodotto modificato con successo!",
        //       text: "verrai reindirizzato alla Home!",
        //     });
          setTimeout(() => {
          window.location.href = "back-office.html";
          }, 3000);

        editProduct(id);
    });

  



