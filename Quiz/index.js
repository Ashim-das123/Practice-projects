const data = [
    {
        id: 1,
        question: "Which of the following is not a primary color in the RGB color model?",
        answers: [
            { answer: "red", isCorrect: true },
            { answer: "green", isCorrect: false },
            { answer: "blue", isCorrect: false },
            { answer: "white", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "What is the chemical symbol for gold?",
        answers: [
            { answer: "Au", isCorrect: true },
            { answer: "Ag", isCorrect: false },
            { answer: "Fe", isCorrect: false },
            { answer: "Cu", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "What is the largest organ in the human body?",
        answers: [
            { answer: "Heart", isCorrect: false },
            { answer: "Liver", isCorrect: false },
            { answer: "Skin", isCorrect: true },
            { answer: "Brain", isCorrect: false },
        ],
    },
    {
        id: 4,
        question: "What is the chemical symbol for water?",
        answers: [
            { answer: "NaCl", isCorrect: false },
            { answer: "CO2", isCorrect: false },
            { answer: "C6H12O6", isCorrect: false },
            { answer: "H2O", isCorrect: true },
        ],
    },
]


const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let questionIdx = 0;
let correctCnt = 0;
let wrongCnt = 0;
let total = 0;
let selectedAnswer;


const playAgain = () => {
    questionIdx = 0;
    correctCnt = 0;
    wrongCnt = 0;
    total = 0;
    selectedAnswer;
    showQuestion(questionIdx)
}
play.addEventListener("click", () => {
    resultScreen.style.display = "none"
    gameScreen.style.display = "block"
    playAgain()
})

const showResult = () => {
    resultScreen.style.display = "block"
    gameScreen.style.display = "none"

    resultScreen.querySelector(".correct").textContent = `Correct Answers : ${correctCnt}`
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers : ${wrongCnt}`
    resultScreen.querySelector(".score").textContent = `Score : ${(correctCnt - wrongCnt) * 5}`
}

const showQuestion = (questionIdx) => {

    if (questionIdx === data.length) {
        return showResult();
    }
    selectedAnswer = null;
    question.textContent = data[questionIdx].question;
    answerContainer.innerHTML = data[questionIdx].answers.map((item, index) =>

        `
        <div class="answer">
        <input type="radio" name="option" id=${index} value=${item.isCorrect}>
        <label for=${index}>${item.answer}</label>
       </div>
        `
    ).join("");

    selectAnswer();
}

const selectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach((ele) => {
        ele.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {

            selectedAnswer === "true" ? correctCnt++ : wrongCnt++;
            questionIdx++;

            showQuestion(questionIdx);
        }
        else {
            alert("please select an option")
        }
    })
}

showQuestion(questionIdx);

submitAnswer();






