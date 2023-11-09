const url = "https://striveschool-api.herokuapp.com/books";

let cartStorage = (localStorage.getItem("cart"));
let cartArray = cartStorage ? JSON.parse(cartStorage) : [];

fetch(url)
  .then((res) => res.json())
  .then((data) => {
      let target = document.getElementById("target");
    data.forEach((book) => {
      let clone = cardClone();
      let image = clone.querySelector(".card-img-top");
      let title = clone.querySelector(".card-title");
      let price = clone.querySelector(".card-text");

      let delBtn = clone.querySelector(".delete-button");
      let addToCartBtn = clone.querySelector(".add-to-cart-button");

      delBtn.addEventListener("click", delCard);

      addToCartBtn.addEventListener("click", () => {
        addToCart(book);
    });

      image.src = book.img;
      title.innerText = book.title;
      price.innerText = `${book.price} €`;
      
      target.append(clone);
    });
  });


function delCard() {
  this.parentElement.parentElement.parentElement.remove();
}

function addToCart(libro) {
    cartArray.push(libro);
    localStorage.setItem("cart", JSON.stringify(cartArray));
}


function cardClone() {
  let temp = document.getElementsByTagName("template")[0];
  return temp.content.cloneNode(true);
}
