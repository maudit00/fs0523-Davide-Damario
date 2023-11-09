const queryUrl = "https://api.pexels.com/v1/search?query=Mountain";
const queryUrl2 = "https://api.pexels.com/v1/search?query=Pizza";
const apiKey = "FIYcS3vrRpfihtMR0JEEE4xMHgje6Q6mMqGR5czOo8rCil03yVmh07ti";
const loadButton = document.querySelector("#load-button");
const loadButton2 = document.querySelector("#load-button2");
const editButtons = document.querySelectorAll(".card-button-2")
const imgIdArea = document.querySelectorAll(".img-id");


async function loadImages() {
    let res = await fetch(queryUrl, {
        headers: {
            "Authorization": `${apiKey}`
        }
    })
    let data = await res.json();
    console.log(data)

    const cardImg = document.querySelectorAll(".card-img");
    console.log(cardImg);
    cardImg.forEach((img, i)=> {
        img.src = data.photos[i].src.original;
    })
    changeElementContent (imgIdArea, data.id);
}

async function loadImages2() {
    let res = await fetch(queryUrl2, {
        headers: {
            "Authorization": `${apiKey}`
        }
    })
    let data = await res.json();
    console.log(data.photos[0].src.original);

    const cardImg = document.querySelectorAll(".card-img");
    console.log(cardImg);
    cardImg.forEach((img, i)=> {
        img.src = data.photos[i].src.original
    })
    changeElementContent (imgIdArea, data.id);
}

loadButton.addEventListener("click", loadImages);
loadButton2.addEventListener("click", loadImages2);

  
changeElementContent (editButtons, "Hide");
changeElementContent (imgIdArea, "ciao");

function changeElementContent (buttons, content) {
    buttons.forEach((button) => {
        button.innerHTML = content;
    })
}