const url = "https://striveschool-api.herokuapp.com/books";


fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((book) => {
    
      let clone = cardClone();
      let target = document.getElementById("target");

      let image = clone.querySelector(".card-img-top");
      console.log(image);
      let title = clone.querySelector(".card-title");
      let price = clone.querySelector(".card-text");

      image.src = book.img;
      title.innerText = book.title;
      price.innerText = `${book.price} €`;

      target.append(clone);
    });
  });




function cardClone() {
  let temp = document.getElementsByTagName("template")[0];
  return temp.content.cloneNode(true);
}
