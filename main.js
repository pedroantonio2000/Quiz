// ARQUIVO PRINCIPAL

const startQuiz = document.querySelector('.start-quiz');
const nextQuestion = document.querySelector('.next-question');
const questionText = document.querySelector('.question');
const answers = document.querySelectorAll('.answers');
const questionsContainer = document.querySelector('.questions-container');
const answersContainer = document.querySelector('.answers-container');
const score = document.querySelector('.scores');
const restart = document.querySelector('.restart-question');

let currentIndex = 0
let scores = 0


startQuiz.addEventListener('click', comecarQuiz);
nextQuestion.addEventListener('click', displayQuestion);
restart.addEventListener('click', resetarJogo);



function comecarQuiz() {
    shuffle();
    startQuiz.classList.add('none');
    questionsContainer.classList.remove('none');
    displayQuestion();
}

function shuffle() {
    let positionIndex = questoes.length;
    let randomIndex;

    while(positionIndex !== 0) {
        randomIndex = Math.floor(Math.random() * positionIndex);
        positionIndex--;

        [questoes[positionIndex], questoes[randomIndex]] = [questoes[randomIndex], questoes[positionIndex]];
    }
}

function displayQuestion() {
    if(questoes.length === currentIndex) {
        currentIndex = 0;
        return fimDeJogo();
    }

    while(answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }

    questionText.textContent = questoes[currentIndex].pergunta;
    questoes[currentIndex].opcoes.forEach(op => {
        const novoElemento = document.createElement('button'); // cria um novo elemento do tipo button
        novoElemento.classList.add('button', 'answers'); // add duas classes
        novoElemento.textContent = op.opcao; // add o texto da parte opcao para o elemento button
        answersContainer.appendChild(novoElemento); // faz com  que os elemetos filhos da div principal apareça na tela
        if(op.correto) {
            novoElemento.dataset.correto = op.correto; 
        } // essa condicao faz com que add um dataset com valor de true para o elemento que tenha o valor de true na opcao
        novoElemento.addEventListener('click', clicarNaResposta);
        
    })

    score.classList.add('none');
    nextQuestion.classList.add('none');
}



function clicarNaResposta(event) {

    const clique = event.target;
    console.log(clique)
    if(clique.dataset.correto) {
        scores++
        
    } 
    
    document.querySelectorAll('.answers').forEach(button => {
        
        if(button.dataset.correto) {
            button.classList.add('correct');
            
        }

        else {
            button.classList.add('incorrect');
        }

    
        button.disabled = true;
        
    })   


    nextQuestion.classList.remove('none')
    currentIndex++;
}



function resetarJogo() {
    restart.classList.add('none');
    score.classList.add('none');
    scores = 0;

    while(answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }

    questionText.textContent = questoes[currentIndex].pergunta;
    questoes[currentIndex].opcoes.forEach(op => {
        const novoElemento = document.createElement('button'); // cria um novo elemento do tipo button
        novoElemento.classList.add('button', 'answers'); // add duas classes
        novoElemento.textContent = op.opcao; // add o texto da parte opcao para o elemento button
        answersContainer.appendChild(novoElemento); // faz com  que os elemetos filhos da div principal apareça na tela
        if(op.correto) {
            novoElemento.dataset.correto = op.correto; 
        } // essa condicao faz com que add um dataset com valor de true para o elemento que tenha o valor de true na opcao
        novoElemento.addEventListener('click', clicarNaResposta);
        
    })
}

function quantidadeDeAcertos() {
    switch(scores) {
        case 0:
            score.textContent = `Você acertou nenhuma pergunta, pratique mais!!!`;
            break;
        case 1:
            score.textContent = `Você acertou ${scores} pergunta, pratique mais!!!`;
            break;
        case 2:
            score.textContent = `Você acertou ${scores} perguntas, pratique mais!!!`;
            break;
        case 3:
            score.textContent = `Parabéns!!! Você acertou todas as perguntas`;
           
    }

}

function fimDeJogo() {
    questionText.textContent = 'Fim de jogo';
    score.classList.remove('none');
    nextQuestion.classList.add('none');
    restart.classList.remove('none');
    quantidadeDeAcertos();
}



const questoes = [
    {
        pergunta: 'Em que ano o Python foi criado ?',
        opcoes: [
            {opcao: '1991', correto: true},
            {opcao: '1992', correto: false},
            {opcao: '1993', correto: false},
            {opcao: '1994', correto: false}
        ]
    },
    
    {
        pergunta: 'Em que ano o Java foi criado ?',
        opcoes: [
            {opcao: '1995', correto: true},
            {opcao: '1996', correto: false},
            {opcao: '1997', correto: false},
            {opcao: '1998', correto: false}
        ]
    },

    {
        pergunta: 'Em que ano o Go foi criado ?',
        opcoes: [
            {opcao: '2009', correto: true},
            {opcao: '2008', correto: false},
            {opcao: '2007', correto: false},
            {opcao: '2006', correto: false}
        ]
    }
]



