/*document.querySelector('.message').textContent= 'Hey There!';
document.querySelector('.guess').value= 19;
var val= document.querySelector('.guess').value;
console.log(val);
*/
let secretNum= Math.trunc(Math.random()*21);
let score= 20;
let highScore=0;
const checkNum= document.querySelector('.check');
const bodyColor= document.querySelector('body');
const playAgain= document.querySelector('.again');
checkNum.addEventListener('click', function(){
    const guess= Number(document.querySelector('.guess').value);
    if (!guess){
        document.querySelector('.message').textContent='Type a number between 1 and 20';
    }else if (guess === secretNum){
        document.querySelector('.message').textContent= 'Congratulations';
        bodyColor.style.backgroundColor= '#aff201';
        document.querySelector('.number').textContent= secretNum;
        document.querySelector('.guess').value= secretNum;
        document.querySelector('.number').style.width= '30rem';
        if (score> highScore){
            highScore= score;
            document.querySelector('.highscore').textContent= highScore;
        }
        
    }else if (guess> secretNum){
        if (score>1){
            document.querySelector('.message').textContent= 'Too high';
            score--;
            document.querySelector('.score').textContent= score;
        }else {
            document.querySelector('.message').textContent= 'You lose the game';      
            document.querySelector('.score').textContent= 0;
        }
    }else if (guess< secretNum){
        if (score>1){
            document.querySelector('.message').textContent= 'Too low';
            score--;
            document.querySelector('.score').textContent= score;
        }else {
            document.querySelector('.message').textContent= 'You lose the game';
            document.querySelector('.score').textContent= 0;
        }
    }
})
playAgain.addEventListener('click',function(){
    score= 20;
    document.querySelector('.score').textContent= score;
    secretNum= Math.trunc(Math.random()*21);
    document.querySelector('.message').textContent= 'Start guessing...';
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value= '';
    document.querySelector('.number').style.width= '15rem';
    document.querySelector('body').style.backgroundColor= '#222';
    
})
