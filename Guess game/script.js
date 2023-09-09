let score, highScore, guessNumber, answer, check, again, bad, boy;

boy = [];

again = document.querySelector(".again");
answer = Math.floor(Math.random() * 20) + 1;
console.log("first: " + answer);





score = 20;
check = document.querySelector(".check");
function reStart () {
   check.addEventListener("click", function() {
      guessNumber = parseInt(document.querySelector(".check-number").value);
      if (!guessNumber) {
         document.querySelector(".reply").innerText = "NO guess number yet";
         document.querySelector(".reply").style.color = "white";
         document.querySelector(".reply").style.backgroundColor = "brown";
      }
      else {

         if (guessNumber === answer) {
            console.log("second: " + answer + "guess: " + guessNumber);
            document.querySelector(".green").classList.add("win"); 
            document.querySelector(".reply").innerText = "Your guess is correct !!!";
            document.querySelector(".reply").style.color = "white"
            document.querySelector(".number").innerText = answer;
            boy.push(score); 
            highScore = boy[0];
            // highScore = Math.max(...boy);
            // document.querySelector(".high").innerText = highScore;
            for (let i = 0; i < boy.length; i++) {
               if (boy[i] >= highScore) {
                  highScore = boy[i];
                  document.querySelector(".high").innerText = highScore;
               }
               
            }
   
         }
         else if (guessNumber < answer) {
            score -=  1;
            if (score < 1) {
               document.querySelector(".green").classList.remove("win");
               document.querySelector(".reply").innerText = "Lost the game !!!";
               document.querySelector(".reply").style.color = "red";
               document.querySelector(".number").innerText = "?";
               document.querySelector(".scor").innerText = 0;
               score = 0;
            }
            else {
               document.querySelector(".green").classList.remove("win");
               document.querySelector(".reply").innerText = "Less than answer !!!";
               document.querySelector(".reply").style.color = "red";
               document.querySelector(".number").innerText = "?";

            }
            
            
         }
         else {
            score -=  1;

            if (score < 1) {
               document.querySelector(".body").classList.remove("win");
               document.querySelector(".reply").innerText = "Lost the game !!!";
               document.querySelector(".reply").style.color = "red";
               document.querySelector(".number").innerText = "?";
               document.querySelector(".scor").innerText = 0;
               score = 0;
            }
            else {
               document.querySelector(".body").classList.remove("win");
               document.querySelector(".reply").innerText = "Greater than answer !!!";
               document.querySelector(".reply").style.color = "red";
               document.querySelector(".number").innerText = "?";

            }
            
         }
         document.querySelector(".scor").innerText = score;
         console.log(boy);
         if (guessNumber === answer || score === 0) {
            again.addEventListener("click", function () {
               answer = Math.floor(Math.random() * 20) + 1;
               document.querySelector(".check-number").value = "";
               document.querySelector(".body").classList.remove("win");
               document.querySelector(".reply").innerText = "Enter your guess!!!";
               document.querySelector(".reply").style.backgroundColor = "black";
               document.querySelector(".number").innerText = "?";
               score = 20;
               document.querySelector(".scor").innerText = score;
               guessNumber = 0;
               // highScore = Math.max(...boy);
               // document.querySelector(".high").innerText = highScore;
            })
         }

      }

   })
}
reStart();
