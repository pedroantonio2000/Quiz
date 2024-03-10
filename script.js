// ARQUIVO DE TESTE


const $startGameButton = document.querySelector('.start-quiz');
const $questionsContainer = document.querySelector('.questions-container');
const $nextQuestion = document.querySelector('.next-question');
const $answersContainer = document.querySelector('.answers-container');
const $questionText = document.querySelector('.question');


let perguntaAtualIndex = 0;

$startGameButton.addEventListener('click', startGame);




function startGame() {
    $startGameButton.classList.add('none');
    $questionsContainer.classList.remove('none');
    displayNextQuestion();

}

function displayNextQuestion() {
    while($answersContainer.firstChild) {
         $answersContainer.removeChild($answersContainer.firstChild)
        }
     

    // $questionText.textContent = questions[perguntaAtualIndex].question;
    // questions[perguntaAtualIndex].answers.forEach(answer => {
    //     const newAnswer = document.createElement('button');
    //     newAnswer.classList.add('button', 'answers');
    //     newAnswer.textContent = answer.text;
    //     if(answer.correct) {
    //         newAnswer.dataset.correct = answer.correct;
    //     }
    //     $answersContainer.appendChild(newAnswer);
        
    //     newAnswer.addEventListener('click', selectAnswer);
    // })

}



function selectAnswer(event) {
    const answerClicked = event.target;

    if(answerClicked.dataset.correct) {
        document.body.classList.add('correct');
        
        
    } else {
        document.body.classList.add('incorrect');
    }


    document.querySelectorAll('.answers').forEach(button => {
        if(button.dataset.correct) {
            button.classList.add('correct');

        } else {
            button.classList.add('incorrect');

        }
        button.disabled = true;
    })

}



const questions = [ 
    {
        question: 'Qual a capital de Minas Gerais ?',
        answers: [
            {text: 'Belo Horizonte', correct: true},
            {text: 'Salvador', correct: false},
            {text: 'Pernambuco', correct: false},
            {text: 'Manaus', correct: false}
        ]
    },

]