// AQUI ESTÃO SUAS 35 PERGUNTAS EXPANDIDAS!
// 'type': 'mc' (Múltipla Escolha), 'tf' (Tradução de Frase), 'tp' (Tradução de Palavra/Expressão)
const quizQuestions = [
    // ----------------------------------------------------
    // PERGUNTAS INICIAIS (baseadas na conversa)
    // ----------------------------------------------------
    {
        type: 'mc',
        question: "O que a expressão 'have a hard time' significa na frase: 'will have a hard time fighting through the cold'?",
        options: [
            "Ter um tempo difícil para lutar.",
            "Ter dificuldade em fazer algo.", 
            "Ter um momento de dureza.",
            "Lutar por um tempo duro."
        ],
        answer: "Ter dificuldade em fazer algo.",
        explanation: "O idioma 'to have a hard time (doing something)' significa 'ter dificuldade' ou 'achar difícil fazer algo'."
    },
    {
        type: 'tf',
        english: "Lloyd became a tramp and drank until he was intoxicated.",
        correctOption: "Lloyd se tornou um andarilho e bebeu até ficar embriagado.",
        wrongOptions: [
            "O Lloyd se tornou um vagabundo e bebeu até ficar sóbrio.",
            "O Lloyd virou um trem e bebeu até ficar doente.",
            "Lloyd ficou tonto e bebeu até ficar cansado."
        ]
    },
    {
        type: 'tp',
        word: "proud",
        context: "Shouldn't they feel **proud** about that?",
        correctOption: "Orgulhoso",
        wrongOptions: ["Preocupado", "Poderoso", "Contentes"]
    },
    {
        type: 'mc',
        question: "Qual a conjugação correta de 'throw up' (vomitar) no Passado Simples, como na frase: 'he **threw up** blood and died'?",
        options: [
            "throwed up",
            "thrown up",
            "threw up", 
            "throw up"
        ],
        answer: "threw up",
        explanation: "O passado de 'to throw' é 'threw'. 'Thrown' é o particípio passado."
    },
    {
        type: 'tf',
        english: "What's the use of me being a baronet?",
        correctOption: "Qual a utilidade de eu ser um barão?",
        wrongOptions: [
            "O que está usando meu barão?",
            "Para que serve meu ser um cavalheiro?",
            "Qual o uso do barão para mim?"
        ]
    },
    {
        type: 'mc',
        question: "Qual a tradução mais comum para 'Don't make **eye contact**'?",
        options: [
            "Não olhe para ele.",
            "Não faça contato visual.", 
            "Não use óculos de contato.",
            "Não olhe nos olhos." // Ambas estão certas, mas a primeira é mais literal/formal
        ],
        answer: "Não faça contato visual.",
        explanation: "'Eye contact' é contato visual, e 'Don't make' é o imperativo negativo (Não faça)."
    },
    {
        type: 'tp',
        word: "miserable",
        context: "it's just as **miserable** as being in Korea.",
        correctOption: "Miserável/Infaliz/Sombrio",
        wrongOptions: ["Místico", "Impossível", "Maldoso"]
    },
    {
        type: 'tf',
        english: "Please make sure you go and apologize this time.",
        correctOption: "Por favor, certifique-se de ir e pedir desculpas desta vez.",
        wrongOptions: [
            "Por favor, certifique que você vá e desculpe-se no momento.",
            "Você deve ir e se desculpar agora.",
            "Por favor, tenha certeza de ir e apologizar desta vez."
        ]
    },
    {
        type: 'mc',
        question: "A frase 'I guess I'm going to have to **wipe off** my image...' significa que ele irá...",
        options: [
            "Esfregar sua imagem.",
            "Desenhar sua imagem.",
            "Limpar/apagar sua reputação.", 
            "Se envergonhar da sua aparência."
        ],
        answer: "Limpar/apagar sua reputação.",
        explanation: "O phrasal verb 'wipe off' significa remover, e no contexto de 'imagem', sugere limpar a reputação."
    },
    {
        type: 'tp',
        word: "Tramps",
        context: "**Tramps** only get a grain of rice in the end anyway.",
        correctOption: "Andarilhos/Vagabundos",
        wrongOptions: ["Trens", "Viagens", "Trapaceiros"]
    },
    {
        type: 'mc',
        question: "Qual a ideia do advérbio '**yet**' na frase negativa: 'haven't been discovered... **yet**'?",
        options: [
            "Indica que algo aconteceu antes.",
            "Indica o resultado final de algo.",
            "Indica que algo não aconteceu 'até agora' (ainda).", 
            "Indica uma ênfase no verbo."
        ],
        answer: "Indica que algo não aconteceu 'até agora' (ainda).",
        explanation: "'Yet' é tipicamente usado com o Present Perfect em frases negativas ou interrogativas para falar de algo que se espera que aconteça."
    },
    {
        type: 'tf',
        english: "Since I'm the heir to the country's lord.",
        correctOption: "Já que eu sou o herdeiro do senhor do país.",
        wrongOptions: [
            "Desde que eu sou o herdeiro para o senhor do país.",
            "Se eu fosse o herdeiro do país.",
            "Eu sou o herdeiro do senhor, de qualquer modo."
        ]
    },
    // ----------------------------------------------------
    // PERGUNTAS AVANÇADAS E DE GRAMÁTICA
    // ----------------------------------------------------
    {
        type: 'mc',
        question: "Qual o significado da expressão '**drowning in debt**'?",
        options: [
            "Nadar na dívida.",
            "Estar com muitas dívidas.", 
            "Pedir um empréstimo.",
            "Pagar a dívida."
        ],
        answer: "Estar com muitas dívidas.",
        explanation: "Drowning in debt (afogando em dívidas) é um idioma que descreve uma situação de endividamento extremo e opressor."
    },
    {
        type: 'tp',
        word: "apologized",
        context: "Even though I **apologized**, the owner didn't seem pleased.",
        correctOption: "Pedi desculpas/Desculpei-me",
        wrongOptions: ["Argumentei", "Agradeci", "Desagradei"]
    },
    {
        type: 'tf',
        english: "No, if I just settle the house debt before then.",
        correctOption: "Não, se eu apenas quitar a dívida da casa antes disso.",
        wrongOptions: [
            "Não, eu assentei a dívida da casa antes disso.",
            "Não, se eu assinar a casa antes.",
            "Não, eu apenas arrumei a dívida antes."
        ]
    },
    {
        type: 'mc',
        question: "Na frase 'What's the **use** of me being a baronet?', o que **'use'** significa neste contexto?",
        options: [
            "Uso.",
            "Qualidade.",
            "Utilidade/Propósito.", 
            "Ocupação."
        ],
        answer: "Utilidade/Propósito.",
        explanation: "A expressão idiomática 'What's the use of...' pergunta sobre a utilidade ou o propósito de algo."
    },
    {
        type: 'tp',
        word: "dreary",
        context: "it was already pretty **dreary** in the tavern.",
        correctOption: "Sombrio/Monótono/Desolador",
        wrongOptions: ["Agradável", "Animado", "Molhado"]
    },
    {
        type: 'tf',
        english: "You can't warm the entire place with just one fireplace.",
        correctOption: "Você não consegue aquecer o lugar inteiro com apenas uma lareira.",
        wrongOptions: [
            "Você não pode fazer aquecer todo o lugar com um fogo.",
            "Ninguém vai esquentar o local com uma fogueira.",
            "Você não pode ligar a lareira inteira sozinho."
        ]
    },
    {
        type: 'tp',
        word: "entire",
        context: "warm the **entire** place",
        correctOption: "Inteiro/Completo",
        wrongOptions: ["Melhor", "Frio", "Largo"]
    },
    {
        type: 'mc',
        question: "A frase 'There's **no sort of** heating system here' enfatiza o quê?",
        options: [
            "Que o sistema está ruim.",
            "Que o sistema está desorganizado.",
            "A falta completa de qualquer tipo de sistema.", 
            "Que o sistema é de uma espécie diferente."
        ],
        answer: "A falta completa de qualquer tipo de sistema.",
        explanation: "A expressão 'no sort of' (nenhum tipo de) é usada para negar a existência de algo com ênfase."
    },
    {
        type: 'tf',
        english: "The old lady will have a hard time fighting through the cold.",
        correctOption: "A senhora idosa terá dificuldade em suportar o frio.",
        wrongOptions: [
            "A velha mulher vai ter um tempo pesado lutando através do frio.",
            "A dama antiga lutará duramente contra o frio.",
            "A senhora terá um tempo forte para lutar contra o frio."
        ]
    },
    {
        type: 'tp',
        word: "already",
        context: "it was **already** pretty dreary in the tavern",
        correctOption: "Já",
        wrongOptions: ["Ainda", "Antes", "Sempre"]
    },
    {
        type: 'tf',
        english: "Even though I apologized, the owner didn't seem that pleased about it.",
        correctOption: "Mesmo que eu tenha pedido desculpas, o proprietário não pareceu tão satisfeito com isso.",
        wrongOptions: [
            "Apesar de eu ter me desculpado, o dono não parecia feliz.",
            "Embora me desculpei, o dono não gostou nada disso.",
            "Até que eu me desculpei, o proprietário não estava contente."
        ]
    },
    {
        type: 'mc',
        question: "Qual o erro na frase original que você pediu: 'i guess there are'?",
        options: [
            "O uso de 'guess'.",
            "O uso de 'are'.",
            "A falta de capitalização no pronome 'I'.", 
            "A frase é gramaticalmente perfeita."
        ],
        answer: "A falta de capitalização no pronome 'I'.",
        explanation: "O pronome 'I' (Eu) é sempre escrito em letra maiúscula em inglês."
    },
    {
        type: 'tp',
        word: "settle",
        context: "if I just **settle** the house debt before then",
        correctOption: "Quitar/Pagar/Resolver",
        wrongOptions: ["Assinar", "Mudar", "Arrumar"]
    },
    {
        type: 'tf',
        english: "They were all bought with the owner's blood, sweat, and money.",
        correctOption: "Todos eles foram comprados com o suor, sangue e dinheiro do proprietário.",
        wrongOptions: [
            "Eles foram comprados com sangue, suor e lágrimas do dono.",
            "Eles foram obtidos com o dinheiro, suor e sangue do dono.",
            "Todos eles se deram bem com o dinheiro e esforço do proprietário."
        ]
    },
    {
        type: 'tp',
        word: "fireplace",
        context: "with just one **fireplace**",
        correctOption: "Lareira",
        wrongOptions: ["Fogão", "Fogueira", "Lenha"]
    },
    {
        type: 'mc',
        question: "Qual o termo mais comum para 'De qualquer forma/De todo modo' em inglês padrão?",
        options: [
            "anyways",
            "anyway", 
            "anyhow",
            "anyplace"
        ],
        answer: "anyway",
        explanation: "Embora 'anyways' seja usado informalmente nos EUA, 'anyway' é a forma padrão e mais comum."
    },
    {
        type: 'tf',
        english: "I guess there are.",
        correctOption: "Eu acho que tem/existe.",
        wrongOptions: [
            "Eu adivinhei que eles são.",
            "Eu suponho que estão.",
            "Acho que eles estão lá."
        ]
    },
    {
        type: 'tp',
        word: "heir",
        context: "Since I'm the **heir** to the country's lord.",
        correctOption: "Herdeiro",
        wrongOptions: ["Aqui", "Ar", "Herói"]
    },
    {
        type: 'mc',
        question: "A frase 'It's **just as miserable as** being in Korea' usa qual estrutura de comparação?",
        options: [
            "Comparativo de Inferioridade (menos... que).",
            "Superlativo (o mais... de).",
            "Comparativo de Igualdade (tão... quanto).", 
            "Comparativo de Superioridade (mais... que)."
        ],
        answer: "Comparativo de Igualdade (tão... quanto).",
        explanation: "A estrutura 'as [adjetivo] as' significa 'tão [adjetivo] quanto'."
    },
    {
        type: 'tf',
        english: "Shouldn't they feel proud about that?",
        correctOption: "Eles não deveriam se sentir orgulhosos disso?",
        wrongOptions: [
            "Não deveriam se sentir fortes sobre isso?",
            "Não deveriam ter orgulho sobre eles?",
            "Eles deveriam ter orgulho sobre isso?"
        ]
    },
    {
        type: 'tp',
        word: "before then",
        context: "settle the house debt **before then**",
        correctOption: "Antes disso/Antes de então",
        wrongOptions: ["Antes de você", "Antes de tudo", "Desde então"]
    },
    {
        type: 'mc',
        question: "Qual a palavra que estava errada em 'a **breah throught**'?",
        options: [
            "A ortografia da palavra composta 'breakthrough'.",
            "O artigo 'a' no começo.",
            "A palavra 'through' não existe.", 
            "O uso de duas palavras em vez de uma."
        ],
        answer: "A ortografia da palavra composta 'breakthrough'.",
        explanation: "A palavra 'breakthrough' (avanço) estava escrita incorretamente como 'breah throught'."
    },
    {
        type: 'tp',
        word: "contact",
        context: "Don't make eye **contact**",
        correctOption: "Contato",
        wrongOptions: ["Contratar", "Concerto", "Olho"]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questionArea = document.getElementById('question-area');
const nextButton = document.getElementById('next-button');
const feedbackArea = document.getElementById('feedback');
const scoreArea = document.getElementById('score-area');

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Inicializa o Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleArray(quizQuestions); // Embaralha a ordem das perguntas
    showQuestion();
}

// Exibe a pergunta atual
function showQuestion() {
    answered = false;
    feedbackArea.textContent = '';
    nextButton.classList.add('hidden');
    scoreArea.classList.add('hidden');

    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    const currentQ = quizQuestions[currentQuestionIndex];
    questionArea.innerHTML = '';
    
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    
    let optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';
    
    let options = [];

    // Lógica para diferentes tipos de pergunta
    if (currentQ.type === 'mc') {
        questionText.textContent = `[MÚLTIPLA ESCOLHA] ${currentQ.question}`;
        options = currentQ.options;
    } else if (currentQ.type === 'tf') {
        questionText.textContent = `[TRADUÇÃO DE FRASE] Traduza a frase: "${currentQ.english}"`;
        options = [currentQ.correctOption, ...currentQ.wrongOptions];
        shuffleArray(options); // Embaralha as opções de tradução
    } else if (currentQ.type === 'tp') {
        questionText.innerHTML = `[TRADUÇÃO DE PALAVRA] Qual a tradução correta para a palavra/expressão destacada: <br><br> ${currentQ.context.replace(currentQ.word, `<b>${currentQ.word}</b>`)}`;
        options = [currentQ.correctOption, ...currentQ.wrongOptions];
        shuffleArray(options); // Embaralha as opções de tradução de palavra
    }

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        // O corretor será o próprio texto da resposta correta (answer ou correctOption)
        const correctAnswer = currentQ.answer || currentQ.correctOption;
        button.addEventListener('click', () => checkAnswer(button, option, correctAnswer, currentQ.explanation));
        optionsContainer.appendChild(button);
    });

    questionArea.appendChild(questionText);
    questionArea.appendChild(optionsContainer);
}

// Verifica a resposta
function checkAnswer(selectedButton, selectedOption, correctAnswer, explanation) {
    if (answered) return; 
    answered = true;
    
    const allButtons = questionArea.querySelectorAll('.option-button');
    
    allButtons.forEach(button => {
        button.classList.add('disabled');
        // Verifica se a opção do botão é a resposta correta
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } 
        // Se for o botão selecionado, mas incorreto
        else if (button === selectedButton) {
            button.classList.add('incorrect');
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        feedbackArea.innerHTML = 'Correto! 🎉';
        feedbackArea.style.color = '#28a745';
    } else {
        feedbackArea.innerHTML = `Incorreto. 😔 A resposta correta era: <b>"${correctAnswer}"</b>`;
        feedbackArea.style.color = '#dc3545';
    }
    
    if (explanation) {
         feedbackArea.innerHTML += `<br><br> **Explicação:** ${explanation}`;
    }

    nextButton.classList.remove('hidden');
}

// Exibe os resultados finais
function showResults() {
    questionArea.innerHTML = '';
    feedbackArea.textContent = '';
    nextButton.classList.add('hidden');
    scoreArea.classList.remove('hidden');
    
    const percentage = ((score / quizQuestions.length) * 100).toFixed(0);
    
    scoreArea.innerHTML = `
        <h2>Fim do Quiz!</h2>
        <p>Sua Pontuação: ${score} de ${quizQuestions.length} (${percentage}%)</p>
        <button onclick="startQuiz()">Recomeçar</button>
    `;
    scoreArea.querySelector('button').style.marginTop = '15px';
}

// Listener para o botão 'Próxima Pergunta'
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

// Inicia o quiz quando a página carrega
startQuiz();