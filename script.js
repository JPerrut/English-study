// script.js

// --- DADOS DO APLICATIVO ---
const VOCAB_DATA = [
  { word: "old lady", class: "Substantivo", meaning: "Senhora idosa" },
  { word: "will have", class: "Verbo (Futuro)", meaning: "Terá" },
  { word: "hard time", class: "Expressão Idiomática", meaning: "Dificuldade, trabalho duro" },
  { word: "fighting through", class: "Phrasal Verb", meaning: "Superar, aguentar" },
  { word: "cold", class: "Substantivo", meaning: "Frio" },
  { word: "tramp", class: "Substantivo", meaning: "Andarilho, Vagabundo" },
  { word: "intoxicated", class: "Adjetivo", meaning: "Embriagado, Intoxicado" },
  { word: "proud", class: "Adjetivo", meaning: "Orgulhoso" },
  { word: "threw up", class: "Verbo (Passado)", meaning: "Vomitou (Passado de 'throw up')" },
  { word: "baronet", class: "Substantivo", meaning: "Barão, Cavaleiro" },
  { word: "eye contact", class: "Substantivo", meaning: "Contato visual" },
  { word: "miserable", class: "Adjetivo", meaning: "Miserável, Infeliz, Sombrio" },
  { word: "apologize", class: "Verbo", meaning: "Pedir desculpas" },
  { word: "wipe off", class: "Phrasal Verb", meaning: "Limpar, Apagar (reputação)" },
  { word: "yet", class: "Advérbio", meaning: "Ainda (em frases negativas/interrogativas)" },
  { word: "heir", class: "Substantivo", meaning: "Herdeiro" },
  { word: "drowning in debt", class: "Expressão Idiomática", meaning: "Afogando em dívidas (muitas dívidas)" },
  { word: "settle", class: "Verbo", meaning: "Quitar, Pagar, Resolver" },
  { word: "dreary", class: "Adjetivo", meaning: "Sombrio, Monótono, Desolador" },
  { word: "entire", class: "Adjetivo", meaning: "Inteiro, Completo" },
  { word: "fireplace", class: "Substantivo", meaning: "Lareira" },
  { word: "blood, sweat, and money", class: "Expressão", meaning: "Sangue, suor e dinheiro (grande esforço)" },
  { word: "breakthrough", class: "Substantivo", meaning: "Avanço, Descoberta" },
  { word: "before then", class: "Advérbio", meaning: "Antes disso, Antes de então" },
  { word: "contact", class: "Substantivo", meaning: "Contato" },
];

const LESSON_DATA = [
  { id: 1, english: "The old lady will have a hard time fighting through the cold.", portuguese: "A senhora idosa terá dificuldade em suportar o frio.", vocab_keys: ["old lady", "will have", "hard time", "fighting through", "cold"] },
  { id: 2, english: "Lloyd became a tramp and drank until he was intoxicated.", portuguese: "Lloyd se tornou um andarilho e bebeu até ficar embriagado.", vocab_keys: ["tramp", "intoxicated"] },
  { id: 3, english: "Shouldn't they feel proud about that?", portuguese: "Eles não deveriam se sentir orgulhosos disso?", vocab_keys: ["proud"] },
  { id: 4, english: "He threw up blood and died.", portuguese: "Ele vomitou sangue e morreu.", vocab_keys: ["threw up"] },
  { id: 5, english: "What's the use of me being a baronet?", portuguese: "Qual a utilidade de eu ser um barão?", vocab_keys: ["baronet"] },
  { id: 6, english: "Don't make eye contact.", portuguese: "Não faça contato visual.", vocab_keys: ["eye contact", "contact"] },
  { id: 7, english: "It's just as miserable as being in Korea.", portuguese: "É tão miserável quanto estar na Coréia.", vocab_keys: ["miserable"] },
  { id: 8, english: "Please make sure you go and apologize this time.", portuguese: "Por favor, certifique-se de ir e pedir desculpas desta vez.", vocab_keys: ["apologize"] },
  { id: 9, english: "I'm going to have to wipe off my image.", portuguese: "Eu vou ter que limpar/apagar minha imagem.", vocab_keys: ["wipe off"] },
  { id: 10, english: "Tramps only get a grain of rice in the end anyway.", portuguese: "Andarilhos só ganham um grão de arroz no final, de qualquer forma.", vocab_keys: ["tramp"] },
  { id: 11, english: "They haven't been discovered yet.", portuguese: "Eles não foram descobertos ainda.", vocab_keys: ["yet"] },
  { id: 12, english: "Since I'm the heir to the country's lord.", portuguese: "Já que eu sou o herdeiro do senhor do país.", vocab_keys: ["heir"] },
  { id: 13, english: "I am drowning in debt.", portuguese: "Eu estou afogando em dívidas.", vocab_keys: ["drowning in debt"] },
  { id: 14, english: "Even though I apologized, the owner didn't seem pleased.", portuguese: "Mesmo que eu tenha pedido desculpas, o proprietário não pareceu satisfeito.", vocab_keys: ["apologize"] },
  { id: 15, english: "No, if I just settle the house debt before then.", portuguese: "Não, se eu apenas quitar a dívida da casa antes disso.", vocab_keys: ["settle", "before then"] },
  { id: 16, english: "What's the use of that?", portuguese: "Qual a utilidade disso?", vocab_keys: ["use"] },
  { id: 17, english: "It was already pretty dreary in the tavern.", portuguese: "Já estava bastante sombrio na taverna.", vocab_keys: ["dreary"] },
  { id: 18, english: "You can't warm the entire place with just one fireplace.", portuguese: "Você não consegue aquecer o lugar inteiro com apenas uma lareira.", vocab_keys: ["entire", "fireplace"] },
  { id: 19, english: "There's no sort of heating system here.", portuguese: "Não há nenhum tipo de sistema de aquecimento aqui.", vocab_keys: ["sort of"] },
  { id: 20, english: "They were all bought with the owner's blood, sweat, and money.", portuguese: "Todos eles foram comprados com o suor, sangue e dinheiro do proprietário.", vocab_keys: ["blood, sweat, and money"] },
  { id: 21, english: "I guess there are.", portuguese: "Eu acho que tem/existe.", vocab_keys: ["guess"] },
  { id: 22, english: "I found a major breakthrough.", portuguese: "Eu encontrei um grande avanço.", vocab_keys: ["breakthrough"] },
  { id: 23, english: "He will become a good ruler one day.", portuguese: "Ele se tornará um bom governante um dia.", vocab_keys: ["ruler"] },
  { id: 24, english: "The challenge lies in the grammar.", portuguese: "O desafio reside na gramática.", vocab_keys: ["challenge", "lies in"] },
  { id: 25, english: "She always carries a spare key.", portuguese: "Ela sempre carrega uma chave sobressalente.", vocab_keys: ["carries", "spare key"] },
  { id: 26, english: "We need to discuss this immediately.", portuguese: "Precisamos discutir isso imediatamente.", vocab_keys: ["discuss", "immediately"] },
  { id: 27, english: "The price of the goods has skyrocketed.", portuguese: "O preço das mercadorias disparou.", vocab_keys: ["goods", "skyrocketed"] },
  { id: 28, english: "They denied all accusations.", portuguese: "Eles negaram todas as acusações.", vocab_keys: ["denied", "accusations"] },
  { id: 29, english: "His persistence paid off in the end.", portuguese: "A persistência dele valeu a pena no final.", vocab_keys: ["persistence", "paid off"] },
  { id: 30, english: "It's time to face the consequences.", portuguese: "É hora de enfrentar as consequências.", vocab_keys: ["face", "consequences"] },
  { id: 31, english: "I wonder if they will arrive on time.", portuguese: "Eu me pergunto se eles chegarão a tempo.", vocab_keys: ["wonder", "on time"] },
  { id: 32, english: "She whispered a secret in his ear.", portuguese: "Ela sussurrou um segredo no ouvido dele.", vocab_keys: ["whispered", "secret"] },
  { id: 33, english: "The fog obscured the view completely.", portuguese: "A neblina obscureceu a vista completamente.", vocab_keys: ["fog", "obscured"] },
  { id: 34, english: "We should prioritize our most urgent tasks.", portuguese: "Devemos priorizar nossas tarefas mais urgentes.", vocab_keys: ["prioritize", "urgent"] },
  { id: 35, english: "This monument commemorates the fallen soldiers.", portuguese: "Este monumento comemora os soldados caídos.", vocab_keys: ["monument", "commemorates"] },
  { id: 36, english: "He is known for his witty remarks.", portuguese: "Ele é conhecido por seus comentários espirituosos.", vocab_keys: ["witty", "remarks"] },
  { id: 37, english: "The sudden turn was quite alarming.", portuguese: "A virada repentina foi bastante alarmante.", vocab_keys: ["sudden", "alarming"] },
  { id: 38, english: "I hope you seize this opportunity.", portuguese: "Espero que você agarre esta oportunidade.", vocab_keys: ["seize", "opportunity"] },
];

// --- Estado e Referências DOM ---
const state = {
  mode: null,
  level: null,
  currentQuestion: null,
  questionIndex: 0,
  initialQueue: [],
  errorQueue: [],
  totalAnswered: 0,
  score: 0,
};

const $ = (sel) => document.querySelector(sel);

const els = {
  mainMenu: $('#main-menu'),
  quiz: $('#quiz-container'),
  feedback: $('#feedback-area'),
  score: $('#score-area'),
  questionText: $('#question-text'),
  optionsArea: $('#options-area'),
  submitBtn: $('#submit-button'),
  nextBtn: $('#next-button'),
  feedbackMsg: $('#feedback-message'),
  correctAns: $('#correct-answer-display'),
  vocabDisplay: $('#vocab-display'),
  finalScore: $('#final-score'),
  modeLevel: $('#current-mode-level'),
  qIndex: $('#question-index'),
};

// Botões de voltar
$('#back-to-menu-1').addEventListener('click', renderMenu);
$('#back-to-menu-2').addEventListener('click', renderMenu);
$('#back-to-menu-3').addEventListener('click', renderMenu);
$('#restart-button').addEventListener('click', renderMenu);

// --- Funções de Utilidade ---
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function normalizeText(text) {
  if (!text) return '';
  return text.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, '')
    .trim();
}

// --- Renderização ---
function renderMenu() {
  els.mainMenu.innerHTML = `
    <h2>Selecione o Modo</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <button onclick="selectMode('story')" class="option-button">📖 Modo História (Capítulo 1)</button>
      <button onclick="selectMode('vocab')" class="option-button">🔤 Tradução de Palavras</button>
    </div>
    <h2 id="level-title" class="hidden">Selecione o Nível</h2>
    <div id="level-selection" class="grid grid-cols-3 gap-3 hidden">
      <button onclick="startQuiz('easy')" class="option-button">Fácil (Múltipla Escolha)</button>
      <button onclick="startQuiz('intermediate')" class="option-button">Intermediário (Inglês → Português)</button>
      <button onclick="startQuiz('hard')" class="option-button">Difícil (Português → Inglês)</button>
    </div>
  `;
  els.mainMenu.classList.remove('hidden');
  els.quiz.classList.add('hidden');
  els.feedback.classList.add('hidden');
  els.score.classList.add('hidden');
}

window.selectMode = function(mode) {
  state.mode = mode;
  $('#level-title').classList.remove('hidden');
  $('#level-selection').classList.remove('hidden');
};

window.startQuiz = function(level) {
  state.level = level;
  state.questionIndex = 0;
  state.totalAnswered = 0;
  state.score = 0;
  state.errorQueue = [];

  els.mainMenu.classList.add('hidden');
  els.quiz.classList.remove('hidden');

  if (state.mode === 'story') {
    state.initialQueue = [...LESSON_DATA];
  } else {
    const allVocab = VOCAB_DATA.map(v => ({
      word: v.word,
      english: v.word,
      portuguese: v.meaning,
      vocab_keys: [v.word]
    }));
    shuffleArray(allVocab);
    state.initialQueue = allVocab;
  }

  els.modeLevel.textContent = `${state.mode === 'story' ? 'MODO HISTÓRIA' : 'TRADUÇÃO DE PALAVRAS'} - NÍVEL: ${level.toUpperCase()}`;
  loadNextQuestion();
};

function loadNextQuestion() {
  els.feedback.classList.add('hidden');
  els.nextBtn.classList.add('hidden');
  els.submitBtn.classList.add('hidden');
  els.optionsArea.innerHTML = '';
  els.correctAns.classList.add('hidden');

  const q = state.errorQueue.shift() || state.initialQueue.shift();
  if (!q) {
    showResults();
    return;
  }

  state.currentQuestion = q;
  state.totalAnswered++;
  const total = state.initialQueue.length + state.errorQueue.length + 1;
  els.qIndex.textContent = state.mode === 'story'
    ? `Frase ${q.id} (Questão ${state.totalAnswered})`
    : `Questão ${state.totalAnswered} de ${total}`;

  renderQuestion(q);
}

function renderQuestion(q) {
  const isStory = state.mode === 'story';
  let questionText, correctAnswer, placeholder;

  if (state.level === 'hard') {
    questionText = isStory ? q.portuguese : q.portuguese;
    correctAnswer = isStory ? q.english : q.english;
    placeholder = isStory ? 'Escreva a frase em Inglês...' : 'Escreva a palavra em Inglês...';
  } else {
    questionText = isStory ? q.english : q.english;
    correctAnswer = isStory ? q.portuguese : q.portuguese;
    placeholder = isStory ? 'Escreva a tradução em Português...' : 'Escreva a tradução em Português...';
  }

  const prefix = state.level === 'hard' ? 'Traduza para o INGLÊS:' : 'Traduza para o PORTUGUÊS:';
  els.questionText.textContent = `${prefix} "${questionText}"`;

  if (state.level === 'easy') {
    renderMultipleChoice(q, correctAnswer);
  } else {
    renderInputBox(correctAnswer, placeholder);
  }
}

function renderMultipleChoice(q, correctAnswer) {
  let options = [];
  if (state.mode === 'story') {
    const allPhrases = LESSON_DATA.map(f => f.portuguese);
    const wrong = allPhrases.filter(p => p !== correctAnswer).sort(() => 0.5 - Math.random()).slice(0, 3);
    options = [correctAnswer, ...wrong];
  } else {
    const allMeanings = VOCAB_DATA.map(v => v.meaning);
    const wrong = allMeanings.filter(m => m !== correctAnswer).sort(() => 0.5 - Math.random()).slice(0, 3);
    options = [correctAnswer, ...wrong];
  }
  shuffleArray(options);
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-button';
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, correctAnswer, btn);
    els.optionsArea.appendChild(btn);
  });
}

function renderInputBox(correctAnswer, placeholder) {
  els.optionsArea.innerHTML = `<input type="text" id="answer-input" placeholder="${placeholder}" class="option-button" />`;
  els.submitBtn.classList.remove('hidden');
  els.submitBtn.onclick = () => {
    const val = $('#answer-input').value;
    checkAnswer(val, correctAnswer, els.submitBtn);
  };
}

function checkAnswer(userAns, correctAns, sourceEl) {
  const allBtns = els.optionsArea.querySelectorAll('.option-button');
  allBtns.forEach(b => b.classList.add('disabled'));
  els.submitBtn.disabled = true;

  const normUser = normalizeText(userAns);
  const normCorrect = normalizeText(correctAns);
  const isCorrect = state.level === 'easy'
    ? normUser === normCorrect
    : normCorrect.includes(normUser) && normUser.length > 0;

  els.feedbackMsg.textContent = isCorrect
    ? '✅ Correto! Excelente trabalho!'
    : '❌ Incorreto. Reveja o vocabulário.';
  els.feedback.classList.remove('correct', 'incorrect');
  els.feedback.classList.add(isCorrect ? 'correct' : 'incorrect');

  if (isCorrect) {
    state.score++;
    if (state.level === 'easy' && sourceEl) sourceEl.classList.add('correct');
  } else {
    els.correctAns.textContent = `A resposta correta era: "${correctAns}"`;
    els.correctAns.classList.remove('hidden');
    if (state.level === 'easy' && sourceEl) sourceEl.classList.add('incorrect');
    if (state.mode === 'story' && !state.errorQueue.some(q => q.id === state.currentQuestion.id)) {
      state.errorQueue.push(state.currentQuestion);
    }
  }

  if (state.level === 'easy') {
    allBtns.forEach(btn => {
      if (normalizeText(btn.textContent) === normCorrect) {
        btn.classList.add('correct');
      }
      btn.onclick = null;
    });
  } else {
    const inp = $('#answer-input');
    if (inp) inp.disabled = true;
  }

  renderVocabTable(state.currentQuestion.vocab_keys);
  els.feedback.classList.remove('hidden');
  els.nextBtn.classList.remove('hidden');
}

function renderVocabTable(keys) {
  if (!keys || keys.length === 0) {
    els.vocabDisplay.innerHTML = '<p>Nenhuma palavra chave definida para esta questão.</p>';
    return;
  }

  const vocab = keys.map(k => VOCAB_DATA.find(v => v.word === k)).filter(Boolean);
  let html = `<h3>Vocabulário Chave</h3><table class="vocab-table"><thead><tr><th>Palavra em Inglês</th><th>Classe Gramatical</th><th>Significado</th></tr></thead><tbody>`;
  vocab.forEach(v => {
    html += `<tr><td>${v.word}</td><td>${v.class}</td><td>${v.meaning}</td></tr>`;
  });
  html += `</tbody></table>`;
  els.vocabDisplay.innerHTML = html;
}

function showResults() {
  els.quiz.classList.add('hidden');
  els.feedback.classList.add('hidden');
  els.score.classList.remove('hidden');

  const total = state.totalAnswered;
  const score = state.score;
  const pct = ((score / total) * 100).toFixed(0);
  const errorMsg = state.errorQueue.length > 0
    ? `<p class="error-msg">⚠️ Você errou ${state.errorQueue.length} questões. Volte e pratique mais!</p>`
    : `<p class="success-msg">🎉 Parabéns! Você acertou todas!</p>`;

  els.finalScore.innerHTML = `
    <p>Modo: ${state.mode === 'story' ? 'História' : 'Palavras'}</p>
    <p>Nível: ${state.level.toUpperCase()}</p>
    <p class="score-big">${score} / ${total}</p>
    <p>Aproveitamento: ${pct}%</p>
    ${errorMsg}
  `;
}

// Eventos
els.nextBtn.addEventListener('click', loadNextQuestion);

// Iniciar
document.addEventListener('DOMContentLoaded', renderMenu);