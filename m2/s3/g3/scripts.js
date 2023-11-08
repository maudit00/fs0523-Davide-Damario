const url =  "https://striveschool-api.herokuapp.com/books";
let booksArray = [];

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(book => {
    booksArray.push(new Book(book.id, book.category, book.img,book.price, book.title));
    });
    console.log(booksArray);
    booksArray.forEach(book => {
        new BookCard("#app.book-grid").cardMaker(book);
    });
})  

class BookCard {
    constructor(appAreaSelector,) {
        this.appArea = document.querySelector(appAreaSelector);
        this.cardWrapper = null;
        this.cardImg = null;
        this.cardBody = null;
        this.cardTitle = null;
        this.cardTabContentArea = null;
        this.scartaButton = null;
        this.HTMLinit();
        this.cardClassSetter();

    }

    HTMLinit() {
        this.cardWrapper = document.createElement("div");
        this.cardImg = document.createElement("img");
        this.cardBody = document.createElement("div");
        this.cardTitle = document.createElement("h5");
        this.cardTabContent = document.createElement("div");
        this.scartaButton = document.createElement("button");
        this.appArea.append(this.cardWrapper,this.cardImg,this.cardBody,this.cardTitle,this.cardTabContent,this.scartaButton);
    }

    cardClassSetter() {
        this.cardWrapper.classList.add("card");
        this.cardWrapper.classList.add("col");
        this.cardImg.classList.add("card-img-top");
        this.cardImg.classList.add("img-fluid");
        this.cardBody.classList.add("card-body");
        this.cardTitle.classList.add("card-title");
        this.cardTabContent.classList.add("card-text");
        this.scartaButton.classList.add("btn");
        this.scartaButton.classList.add("btn-primary");
    }

    cardContentSetter() {


}

new BookCard("#app .book-grid");

class Book {
    constructor(id, category, img, price, title){
        this.id = id;
        this.category = category;
        this.img = img;
        this.price = price;
        this.title = title;
    }
}