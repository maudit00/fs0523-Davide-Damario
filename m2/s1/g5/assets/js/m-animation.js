let firstGroup = document.querySelectorAll('g[transform]');


console.log(firstGroup);


const matrixSwap = () => matrix.forEach(e => {
    e.style.display = "none"
})

setInterval(matrixSwap, 5000)