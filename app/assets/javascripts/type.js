$(document).on('turbolinks:load', function () {


  "use strict";
  function TypeStart() {
  {
    
  
  const words = [
    "function",
    "console.log",
    "this",
    "setTimeout",
    "keydown",
    "mouseover",
    "mouseout",
    "addEventListener",
    "document.getElementById",
    "textContent",
    "railsroutes",
  ];
  let word;
  let loc;
  let score;
  let miss;
  const timeLimit = 3 * 1000;
  let startTime;
  let isPlaying = false;
  
  const target = document.getElementById("target");
  const scoreLabel = document.getElementById("score");
  const missLabel = document.getElementById("miss");
  const timerLabel = document.getElementById("timer");
  const btn = document.getElementById('startbtn');
  const result = document.getElementById('result');
  
  
  
  
  function updateTarget(){
    let placeholder = "";
    for (let i = 0; i<loc;i++){
        placeholder +="_";
      }
      target.textContent = placeholder + word.substring(loc);
      
      
    }
    function updateTimer(){
      const timeLeft = startTime + timeLimit - Date.now();
      timerLabel.textContent = (timeLeft /1000).toFixed(2);
      
      const timeoutId = setTimeout(() =>{
        updateTimer();
      },10);
      if(timeLeft < 0){
        isPlaying = false;
        
        clearTimeout(timeoutId);
        timerLabel.textContent = "0.00";
        setTimeout(() => {
          showResult();
        }, 100);
        target.textContent = "click to replay";
      }
    }
    function showResult(){
      const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
      const point = score - miss;
      result.textContent = (`今回のスコアは${point}点、正解率は${accuracy.toFixed(1)}% でした！`);
      const form = document.getElementById
        
      ('score-form').value = point;
    }
    
    btn.addEventListener("click",() =>{
      if (isPlaying === true){
        return;
      }
      isPlaying = true;
      
      loc = 0;
      score = 0;
      miss = 0;
      scoreLabel.textContent = score;
      missLabel.textContent = miss;
      word = words[Math.floor(Math.random()*words.length)];
      
      target.textContent = word;
      startTime = Date.now();
      updateTimer();
      
    });
    window.addEventListener("keydown", e =>{
      if (isPlaying !== true){
        return;
      }
      if(e.key === word[loc]){
        loc++;
        if(loc ===word.length){
          word = words[Math.floor(Math.random()*words.length)];
          loc = 0;
          
        }
        updateTarget();
        score++;
        scoreLabel.textContent = score;
        
        
      }else{
        miss++;
        missLabel.textContent = miss;
      }
      
    });
    
  
    
    
    
    
    
    
  }
}

window.onload = TypeStart
});