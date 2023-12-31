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

/**** DELETE  */

async function deleteProduct(product, tr) {
    return await fetch(API_URL + product._id , {
    method : 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }).then((res) => {
        if (res.status == 200) {
        tr.remove();
        }
    });
  }
  

/**** funzione di rendering prodotti */
async function renderProducts() {

  let products = await getProducts();
  let target = document.querySelector("#list");

  products.forEach((p, i) => {

    let tr = document.createElement('tr');
    let clone = trClone();
    
    let id = clone.querySelector(".id");
    let name = clone.querySelector(".name");
    let brand = clone.querySelector(".brand");
    let description = clone.querySelector(".desc");
    let price = clone.querySelector(".price");
    let editButton = clone.querySelector(".edit");
    let deleteButton = clone.querySelector(".delete");
    let showButton = clone.querySelector(".show");
    let img = clone.querySelector(".img")

    id.innerText = i + 1;
    name.innerText = p.name;
    brand.innerText = p.brand;
    description.innerText = p.description;
    price.innerText = `${p.price} €`;
    editButton.href = `edit-product.html?id=${p._id}`;
    img.src = p.imageUrl;

    showButton.addEventListener("click", () => {
      img.classList.toggle("d-none");
    });

    deleteButton.addEventListener("click", () => {
        Swal.fire({
            title: "Sicuro di voler cancellare questo prodotto ?",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "CANCELLA",
            denyButtonText: `No`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Prodotto Cancellato con successo!", "", "success");
              deleteProduct(p, tr);
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    });

    tr.append(clone);
    document.querySelector("#list").append(tr);
  });
}


/****lancio funzione renderizzazione prodotti product page */
renderProducts();

/**** funzione renderizzazione contenuto prodotto*/

function trClone() {
  let temp = document.getElementsByTagName("template")[0];
  return temp.content.cloneNode(true);
}
