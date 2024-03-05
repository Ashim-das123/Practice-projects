const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".second");



let slideNumber = 1;
let imageWidth = 600;
let length = images.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div)
}


const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent"
    })
}

buttons.forEach((button, idx) => {
    button.addEventListener("click", () => {
        resetBg()
        button.style.backgroundColor = "white"
        slider.style.transform = `translate(-${idx * imageWidth}px)`
        slideNumber = idx + 1

    })
})



next.addEventListener("click", () => {

    if (slideNumber < length) {

        slider.style.transform = `translateX(-${slideNumber * imageWidth}px)`;
        slideNumber++
        resetBg();
        buttons[slideNumber - 1].style.backgroundColor = "White"
    }
    else {
        slider.style.transform = `translateX(0px)`;
        slideNumber = 1;
        resetBg();
        buttons[slideNumber - 1].style.backgroundColor = "White"
    }

})


prev.addEventListener("click", () => {

    if (slideNumber > 1) {
        slider.style.transform = `translateX(-${(slideNumber - 2) * imageWidth}px)`;
        slideNumber--;
        resetBg();
        buttons[slideNumber - 1].style.backgroundColor = "White"
    }
    else {
        slider.style.transform = `translate(-${(length - 1) * imageWidth}px)`;
        slideNumber = length
        resetBg();
        buttons[slideNumber - 1].style.backgroundColor = "White"
    }


})


