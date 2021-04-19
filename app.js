let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    var letter1 = ['r'];
    var letter2 = ['p'];
    var letter3 = ['s'];

    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}
function win(userChoice , computerChoice) {
const smallUserWord = "user".fontsize(3).sup();
const smallCompWord = "user".fontsize(3).sup();
const userChoice_div = document.getElementById(userChoice);
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win!`;
userChoice_div.classList.add('green-glow');
setTimeout(function() { userChoice_div.classList.remove('green-glow')} , 300);
}




function lose(userChoice , computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    computerScore++;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "user".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} . You Lost...!`;
    userChoice_div.classList.add('red-glow');
setTimeout(function() { userChoice_div.classList.remove('red-glow')} , 300);

}

function draw(userChoice , computerChoice) {

    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "user".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} . It's a draw !`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() { userChoice_div.classList.remove('gray-glow')} , 300);

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice , computerScore);
        break;

         case "rp":
         case "ps":
         case "sr":
            lose(userChoice , computerScore);
         break;

          case "rr":
          case "pp":
          case "ss":
              draw(userChoice , computerScore);
        break;  
        
    }

 
    if(userChoice==r && computerScore==s)
    {
        win(userChoice , computerScore);

    }
    else if(userChoice==s && computerScore==r){

        lose(userChoice , computerScore);
    }
    else{
        draw(userChoice , computerScore);
    }


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}


main();
/*
// Document is ready 
$(document).ready(function () { 
	
    
    // Validate Email 
        const email = 
            document.getElementById('email'); 
        email.addEventListener('blur', ()=>{ 
        let regex = 
    /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
        let s = email.value; 
        if(regex.test(s)){ 
            email.classList.remove( 
                    'is-invalid'); 
            emailError = true; 
            } 
            else{ 
                email.classList.add( 
                    'is-invalid'); 
                emailError = false; 
            } 
        }) 
        
    // Validate Password 
        $('#passcheck').hide(); 
        let passwordError = true; 
        $('#password').keyup(function () { 
            validatePassword(); 
        }); 
        function validatePassword() { 
            let passwrdValue = 
                $('#password').val(); 
            if (passwrdValue.length == '') { 
                $('#passcheck').show(); 
                passwordError = false; 
                return false; 
            } 
            if ((passwrdValue.length < 3)|| 
                (passwrdValue.length > 10)) { 
                $('#passcheck').show(); 
                $('#passcheck').html 
    ("**length of your password must be between 3 and 10"); 
                $('#passcheck').css("color", "red"); 
                passwordError = false; 
                return false; 
            } else { 
                $('#passcheck').hide(); 
            } 
        } 
        
    // Submitt button 
        $('#submitbtn').click(function () { 
          
            validatePassword(); 
            validateEmail(); 
            if ((usernameError == true) && 
                (passwordError == true) && 
                (confirmPasswordError == true) && 
                (emailError == true)) { 
                return true; 
            } else { 
                return false; 
            } 
        }); 
    }); 
    */