const containerEL = document.querySelector('.container');


for (let index = 0; index < 100; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEL.appendChild(colorContainerEl)
    let val = randomColor();
    colorContainerEl.textContent = val;
    colorContainerEl.style.backgroundColor = `${colorContainerEl.textContent}`
}
function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);

        colorCode += chars.substring(randomNumber, randomNumber + 1);


    }

    return '#' + colorCode;
}