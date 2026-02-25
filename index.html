<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Islamic Quiz Pro</title>
<style>
body{
font-family: Arial;
background: linear-gradient(135deg,#0f2027,#203a43,#2c5364);
color:white;
text-align:center;
padding:20px;
}
.quiz-box{
background: rgba(255,255,255,0.1);
padding:20px;
border-radius:15px;
max-width:450px;
margin:auto;
box-shadow:0 0 20px rgba(0,0,0,0.6);
}
button{
display:block;
width:100%;
margin:8px 0;
padding:10px;
border:none;
border-radius:8px;
background:#00c9a7;
color:white;
font-size:15px;
cursor:pointer;
}
button:hover{ background:#00b894; }
#result{ margin-top:10px; font-weight:bold; }
#score,#level,#timer{ margin-top:10px; font-size:18px; color:#ffd700; }
input{
padding:8px;
border-radius:6px;
border:none;
margin-bottom:10px;
}
.leaderboard{
margin-top:20px;
background:rgba(0,0,0,0.3);
padding:10px;
border-radius:10px;
}
</style>
</head>
<body>

<h2>🌙 ইসলামিক কুইজ প্রো</h2>

<div class="quiz-box">

<div id="startScreen">
<input type="text" id="playerName" placeholder="আপনার নাম লিখুন">
<button onclick="startGame()">গেম শুরু করুন</button>
</div>

<div id="gameScreen" style="display:none;">
<h3 id="level">Level 1</h3>
<div id="timer">সময়: 10</div>
<p id="question"></p>
<div id="options"></div>
<div id="result"></div>
<div id="score">পয়েন্ট: 0</div>
</div>

<div id="gameOver" style="display:none;">
<h3>❌ গেম ওভার!</h3>
<p id="finalScore"></p>
<button onclick="restartGame()">আবার খেলুন</button>
</div>

<div class="leaderboard">
<h3>🏆 লিডারবোর্ড</h3>
<div id="leaderboardList"></div>
</div>

</div>

<audio id="correctSound" src="https://www.soundjay.com/buttons/sounds/button-4.mp3"></audio>
<audio id="wrongSound" src="https://www.soundjay.com/buttons/sounds/button-10.mp3"></audio>

<script>

let score=0;
let level=1;
let questionCount=3;
let currentQuestion=0;
let timerInterval;
let timeLeft=10;
let playerName="";

const questions=[
{q:"কুরআনের প্রথম সূরা কোনটি?",o:["সূরা বাকারা","সূরা ফাতিহা","সূরা নাস","সূরা ইখলাস"],a:1},
{q:"ইসলামের প্রথম খলিফা কে?",o:["উমর (রা:)","আবু বকর (রা:)","আলী (রা:)","উসমান (রা:)"],a:1},
{q:"নবীজি (সা:) কোথায় জন্মগ্রহণ করেন?",o:["মদিনা","মক্কা","তাইফ","কুফা"],a:1},
{q:"রোজা কত হিজরিতে ফরজ হয়?",o:["২","৩","১","৫"],a:0},
{q:"বদর যুদ্ধ কত হিজরিতে?",o:["২","৩","১","৫"],a:0}
];

let currentData;

function startGame(){
playerName=document.getElementById("playerName").value;
if(playerName===""){ alert("নাম লিখুন"); return; }
document.getElementById("startScreen").style.display="none";
document.getElementById("gameScreen").style.display="block";
loadQuestion();
}

function loadQuestion(){
if(currentQuestion>=questionCount){ levelUp(); return; }

currentData=questions[Math.floor(Math.random()*questions.length)];
document.getElementById("question").innerText=currentData.q;

let optHTML="";
currentData.o.forEach((opt,index)=>{
optHTML+=`<button onclick="checkAnswer(${index})">${opt}</button>`;
});
document.getElementById("options").innerHTML=optHTML;

startTimer();
}

function startTimer(){
timeLeft=10;
document.getElementById("timer").innerText="সময়: "+timeLeft;
clearInterval(timerInterval);
timerInterval=setInterval(()=>{
timeLeft--;
document.getElementById("timer").innerText="সময়: "+timeLeft;
if(timeLeft<=0){
clearInterval(timerInterval);
gameOver();
}
},1000);
}

function checkAnswer(index){
clearInterval(timerInterval);
if(index===currentData.a){
score+=20;
document.getElementById("correctSound").play();
document.getElementById("result").innerHTML="✅ সঠিক!";
currentQuestion++;
setTimeout(()=>{
document.getElementById("result").innerHTML="";
loadQuestion();
},800);
}else{
document.getElementById("wrongSound").play();
gameOver();
}
document.getElementById("score").innerText="পয়েন্ট: "+score;
}

function levelUp(){
level++;
if(level>20){
saveScore();
document.getElementById("gameScreen").style.display="none";
document.getElementById("gameOver").style.display="block";
document.getElementById("finalScore").innerText="🎉 অভিনন্দন! মোট পয়েন্ট: "+score;
return;
}
questionCount+=2;
currentQuestion=0;
document.getElementById("level").innerText="Level "+level;
alert("🎉 লেভেল আপ!");
loadQuestion();
}

function gameOver(){
saveScore();
document.getElementById("gameScreen").style.display="none";
document.getElementById("gameOver").style.display="block";
document.getElementById("finalScore").innerText="আপনার পয়েন্ট: "+score;
}

function restartGame(){
location.reload();
}

function saveScore(){
let data=JSON.parse(localStorage.getItem("quizLeaderboard"))||[];
data.push({name:playerName,score:score});
data.sort((a,b)=>b.score-a.score);
localStorage.setItem("quizLeaderboard",JSON.stringify(data.slice(0,5)));
loadLeaderboard();
}

function loadLeaderboard(){
let data=JSON.parse(localStorage.getItem("quizLeaderboard"))||[];
let html="";
data.forEach((p,i)=>{
html+=`${i+1}. ${p.name} - ${p.score}<br>`;
});
document.getElementById("leaderboardList").innerHTML=html;
}

loadLeaderboard();

</script>
</body>
</html>
