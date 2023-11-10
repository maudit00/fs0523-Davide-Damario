const url = "https://api.pexels.com/v1/search?query=";
const apiKey = "FIYcS3vrRpfihtMR0JEEE4xMHgje6Q6mMqGR5czOo8rCil03yVmh07ti";
const loadButton = document.querySelector("#load-button");
const loadButton2 = document.querySelector("#load-button2");
const searchButton = document.querySelector("#search-button");
const hideButtons = document.querySelectorAll(".card-button-2")
const imgIdArea = document.querySelectorAll(".img-id");
const cardImg = document.querySelectorAll(".card-img");
const userQuery = document.querySelector("#user-query");
const cards = document.querySelectorAll(".card");


async function loadImages(query) {
    const url = "https://api.pexels.com/v1/search?query=";
    const apiKey = "FIYcS3vrRpfihtMR0JEEE4xMHgje6Q6mMqGR5czOo8rCil03yVmh07ti";
    return fetch(url+query, {
        headers: {
            Authorization: `${apiKey}`
        }
    })
    .then(res => res.json())
}


[loadButton, loadButton2].forEach((button) => {
 button.addEventListener("click", getAndReplace);
});


async function getAndReplace(){
    let query = this.getAttribute('data-query');
    let immagini = await loadImages(query);
    replaceImages(immagini.photos)
}

function replaceImages(imagesArr){
    let cardImages = document.querySelectorAll('.card img');
    cardImages.forEach((img,i) => {
        img.src = imagesArr[i].src.tiny
    }) 

}

// function replacesId(idArray){
//     idArray.forEach((id, j)=> {
//         id.innerText = data.photos[j].id;
//     });
// }
    
//     cards.forEach((card, i)=> {
//         card.style.backgroundColor = data.photos[i].avg_color;
//     });

//     cardImg.forEach((img, i)=> {
//         img.src = data.photos[i].src.original;
//     })

// async function loadImages2() {
//     let res = await fetch(queryUrl2, {
//         headers: {
//             "Authorization": `${apiKey}`
//         }
//     })
//     let data = await res.json();

//     const cardImg = document.querySelectorAll(".card-img");  
//     imgIdArea.forEach((id, j)=> {
//         id.innerText = data.photos[j].id;
//     });

//     cards.forEach((card, i)=> {
//         card.style.backgroundColor = data.photos[i].avg_color;
//     });

//     cardImg.forEach((img, i)=> {
//         img.src = data.photos[i].src.original
//     })

// }

async function loadImagesCustom() {
    let res = await fetch(url +userQuery.value+"?=avg_color", {
        headers: {
            "Authorization":`${apiKey}`
        }
    })
    let data = await res.json();
    console.log(data);

     
    imgIdArea.forEach((id, j)=> {
        id.innerText = data.photos[j].id;
    });

    cards.forEach((card, i)=> {
        card.style.backgroundColor = data.photos[i].avg_color;
    });

    cardImg.forEach((img, i)=> {
        img.src = data.photos[i].src.original
    })

}


// loadButton.addEventListener("click", loadImages);
// loadButton2.addEventListener("click", loadImages2);
searchButton.addEventListener("click", loadImagesCustom);

  
changeElementsContent (hideButtons, "Hide");

hideButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let cardArea = button.parentElement.parentElement.parentElement.parentElement
        removeElement(cardArea);
    });
});

function removeElement (e) {
    e.remove();
}

function changeElementsContent (elements, content) {
    elements.forEach((e) => {
        e.innerHTML = content;
    })
}


cards.forEach((card) => {
    card.addEventListener("click", (e) => {
        window.location.href = "index2.html"
    });
});


