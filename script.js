const questions = [
  {
    question: "প্রথম নবী কে?",
    options: ["হযরত আদম (আঃ)", "হযরত নূহ (আঃ)", "হযরত ইবরাহিম (আঃ)", "হযরত মুহাম্মদ (সাঃ)"],
    answer: 0
  },
  {
    question: "কুরআন কত বছরে নাজিল হয়?",
    options: ["১০ বছর", "২৩ বছর", "৫ বছর", "৪০ বছর"],
    answer: 1
  },
  {
    question: "ইসলামের শেষ নবী কে?",
    options: ["হযরত ঈসা (আঃ)", "হযরত মূসা (আঃ)", "হযরত মুহাম্মদ (সাঃ)", "হযরত ইব্রাহিম (আঃ)"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

function startQuiz() {
  document.getElementById("start-screen").classList.remove("active");
  document.getElementById("quiz-screen").classList.add("active");
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  document.getElementById("time").textContent = timeLeft;

  const q = questions[currentQuestion];
  document.getElementById("question-number").textContent =
    `Question ${currentQuestion + 1}/${questions.length}`;
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft === 0) {
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  clearInterval(timer);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").classList.remove("active");
  document.getElementById("result-screen").classList.add("active");
  document.getElementById("score").textContent =
    `Your Score: ${score} / ${questions.length}`;
}