const url = "https://api.pexels.com/v1/search?query=";
const queryUrl = "https://api.pexels.com/v1/search?query=Mountain";
const queryUrl2 = "https://api.pexels.com/v1/search?query=Pizza";
const apiKey = "FIYcS3vrRpfihtMR0JEEE4xMHgje6Q6mMqGR5czOo8rCil03yVmh07ti";
const loadButton = document.querySelector("#load-button");
const loadButton2 = document.querySelector("#load-button2");
const editButtons = document.querySelectorAll(".card-button-2")
const imgIdArea = document.querySelectorAll(".img-id");
const cardImg = document.querySelectorAll(".card-img");



async function loadImages() {
    let res = await fetch(queryUrl, {
        headers: {
            "Authorization": `${apiKey}`
        }
    })
    let data = await res.json();


    imgIdArea.forEach((id, j)=> {
        id.innerText = data.photos[j].id;
    });

    cardImg.forEach((img, i)=> {
        img.src = data.photos[i].src.original;
    })
    
}

async function loadImages2() {
    let res = await fetch(queryUrl2, {
        headers: {
            "Authorization": `${apiKey}`
        }
    })
    let data = await res.json();

    const cardImg = document.querySelectorAll(".card-img");  
    imgIdArea.forEach((id, j)=> {
        id.innerText = data.photos[j].id;
    });

    cardImg.forEach((img, i)=> {
        img.src = data.photos[i].src.original
    })

}

async function loadImagesCustom() {
    let res = await fetch(url + "dogs", {
        headers: {
            "Authorization": `${apiKey}`
        }
    })
    let data = await res.json();

     
    imgIdArea.forEach((id, j)=> {
        id.innerText = data.photos[j].id;
    });

    cardImg.forEach((img, i)=> {
        img.src = data.photos[i].src.original
    })

}
loadButton.addEventListener("click", loadImages);
loadButton2.addEventListener("click", loadImagesCustom);

  
changeElementsContent (editButtons, "Hide");


function changeElementsContent (elements, content) {
    elements.forEach((e) => {
        e.innerHTML = content;
    })
}