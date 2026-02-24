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
  },
  {
    question: "ইসলামের প্রথম খলিফা কে?",
    options: ["হযরত উমর (রা.)", "হযরত আবু বকর (রা.)", "হযরত উসমান (রা.)", "হযরত আলী (রা.)"],
    answer: 1
  },
  {
    question: "কুরআনে মোট কতটি সূরা আছে?",
    options: ["১১০", "১১৪", "১২০", "১০০"],
    answer: 1
  },
  {
    question: "বদর যুদ্ধ কত হিজরিতে হয়েছিল?",
    options: ["১ হিজরি", "২ হিজরি", "৩ হিজরি", "৫ হিজরি"],
    answer: 1
  },
  {
    question: "রমজান মাস কত নম্বর মাস?",
    options: ["৭ম", "৮ম", "৯ম", "১০ম"],
    answer: 2
  },
  {
    question: "হজ কত সালে ফরজ হয়?",
    options: ["১ হিজরি", "৫ হিজরি", "৯ হিজরি", "১০ হিজরি"],
    answer: 2
  },
  {
    question: "সবচেয়ে বড় সূরা কোনটি?",
    options: ["সূরা ফাতিহা", "সূরা বাকারাহ", "সূরা ইয়াসিন", "সূরা ইখলাস"],
    answer: 1
  },
  {
    question: "সূরা ইখলাস কয় আয়াত?",
    options: ["৩", "৪", "৫", "৬"],
    answer: 1
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
