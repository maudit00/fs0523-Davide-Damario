let url = new URLSearchParams(location.search);
let id = url.get("id");
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjcwNDk1ZDRmNjAwMTg1NjI0ZDgiLCJpYXQiOjE2OTk2MDgzMjQsImV4cCI6MTcwMDgxNzkyNH0.AjDfv8LqVS2wCnPKoO24OBFxpUsOl6p1MEr0YSvxpyc";
const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const editButton = document.querySelector("#edit-button");



class Alert {
    constructor(icon, message, text) {
        this.icon = icon;
        this.message = message;
        this.text = text;
    }

    showAlert() {
        Swal.fire({
            icon: this.icon,
            title: this.message,
            text: this.text,
          });
        }
}


/**** get singolo prodotto */
async function getSingleProduct(id) {
    return await fetch(API_URL + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }).then((res) => res.json());
}


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
        /**** selezione campi */
        let name = document.querySelector("#name").value;
        let brand = document.querySelector("#brand").value;
        let desc = document.querySelector("#desc").value;
        let imageUrl = document.querySelector("#imageUrl").value;
        let price = document.querySelector("#price").value;

        /*****controllo riempimento campi*/
         if (!name ||!brand ||!desc ||!imageUrl ||!price){
            new Alert("error", "Ooops..!", "Non hai riempito tutti i campi!").showAlert();
                return;
        }
        /***** creazione oggetto prodotto */
            
        let product = {
         name,
         brand,
         desc,
         price,
         imageUrl
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
          new Alert("success", "OK!", "Prodotto modificato con successo!").showAlert();
          setTimeout(() => {
          window.location.href = "back-office.html";
          }, 3000);

        editProduct(id);
    });

  



