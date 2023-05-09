
const colorBars = document.querySelectorAll(".deactive");

const decreamentBtn = document.querySelector(".prevBtn");
const increamentBtn = document.querySelector(".nextBtn");
let totalElement = colorBars.length;

increamentBtn.addEventListener("click", addProgress);
decreamentBtn.addEventListener("click", reduceProgress);

let pointer = -1;
function addProgress(event) {
    // clg
    if (pointer >= totalElement - 1) {
        pointer = totalElement - 1;
        return 0;
    }
    pointer++;
    const whichElment = colorBars[pointer];
    whichElment.classList.add("active");
    whichElment.children[0].classList.add("active");
}

function reduceProgress() {
    if (pointer <= 0) {
        pointer = 0;

    }
    const whichElment = colorBars[pointer];
    whichElment.classList.remove("active");
    // whichElment.classList.add("active");
    whichElment.children[0].classList.remove("active");
    pointer--;
}