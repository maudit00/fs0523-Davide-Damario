
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjcwNDk1ZDRmNjAwMTg1NjI0ZDgiLCJpYXQiOjE2OTk2MDgzMjQsImV4cCI6MTcwMDgxNzkyNH0.AjDfv8LqVS2wCnPKoO24OBFxpUsOl6p1MEr0YSvxpyc";
const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const addButton = document.querySelector("#add-button");
const resetButton = document.querySelector("#reset-button");

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

/***** click sul bottone aggiungi */
addButton.addEventListener("click", async () => {
    /*****controllo riempimento campi*/
    if (!document.querySelector("#name").value || !document.querySelector("#brand").value || !document.querySelector("#desc").value || !document.querySelector("#price").value || !document.querySelector("#imageUrl")){
    new Alert("error", "Ooops..!", "Non hai riempito tutti i campi!").showAlert();
          return;
    }
    /***** creazione oggetto prodotto */
    let product = {
        name: document.querySelector("#name").value,
        brand: document.querySelector("#brand").value,
        description: document.querySelector("#desc").value,
        price: document.querySelector("#price").value,
        imageUrl: document.querySelector("#imageUrl").value
    }
    
    await addProduct();
  

    /**** aggiunta singolo prodotto */
    async function addProduct() {
      return await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify(product),
      })
    }
    new Alert("success", "OK!", "Prodotto aggiunto con successo!").showAlert();
    setTimeout(() => {
    location.href = "back-office.html";
    }, 3000);
});

resetButton.addEventListener("click", ()=> {
    Swal.fire({
        title: "Sicuro di voler resettare i campi?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Reset",
        denyButtonText: `Cancella`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Campi Resettati", "", "success");
          resetForm();
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
});

function resetForm() {
    let inputs = document.querySelectorAll("input")
    inputs.forEach((input) => {
        input.value = "";
    })
}