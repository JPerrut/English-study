// Lista estática de capítulos
const CHAPTER_LIST = [
  { id: 1, title: "Uma Nova Jornada" },
  { id: 2, title: "Primeiros Passos" },
  { id: 3, title: "O Primeiro Dia" },
  { id: 4, title: "Um Encontro Casual" },
  { id: 5, title: "Amizade Crescente" },
  { id: 6, title: "Desafios no Trabalho" },
  { id: 7, title: "Uma Noite Especial" },
  { id: 8, title: "Momento de Dúvida" },
  { id: 9, title: "Recomeçar com Força" },
  { id: 10, title: "Lar é Onde o Coração Está" }
];

// Banco de palavras distratoras em português (categorizadas)
const DISTRACTOR_BANK = {
  pronouns: ['Eu', 'Você', 'Ele', 'Ela', 'Nós', 'Eles', 'Elas', 'Meu', 'Minha', 'Seu', 'Sua', 'Nosso', 'Nossa'],
  verbs: ['sou', 'é', 'está', 'estou', 'era', 'estava', 'será', 'foi', 'fui', 'vou', 'vai', 'vamos', 'podem', 'posso', 'deve', 'devo', 'quero', 'quer', 'precisa', 'tenho', 'tem', 'fazer', 'faz', 'tomar', 'pegar', 'colocar', 'tirar', 'ver', 'olhar', 'ouvir', 'falar', 'dizer', 'pensar', 'achar', 'gostar', 'amar', 'odiar'],
  nouns: ['dia', 'noite', 'manhã', 'tarde', 'tempo', 'hora', 'minuto', 'casa', 'lugar', 'trabalho', 'escola', 'pessoa', 'coisa', 'problema', 'solução', 'modo', 'jeito', 'vida', 'mundo', 'gente'],
  adjectives: ['bom', 'boa', 'mau', 'ruim', 'grande', 'pequeno', 'novo', 'velho', 'bonito', 'feio', 'feliz', 'triste', 'rápido', 'lento', 'fácil', 'difícil', 'certo', 'errado', 'claro', 'escuro'],
  prepositions: ['em', 'de', 'para', 'por', 'com', 'sem', 'sobre', 'entre', 'contra', 'até', 'desde', 'durante'],
  articles: ['o', 'a', 'os', 'as', 'um', 'uma', 'uns', 'umas'],
  adverbs: ['não', 'sim', 'muito', 'pouco', 'mais', 'menos', 'bem', 'mal', 'sempre', 'nunca', 'hoje', 'ontem', 'amanhã', 'agora', 'depois', 'antes', 'aqui', 'ali', 'lá'],
  conjunctions: ['e', 'ou', 'mas', 'porque', 'que', 'se', 'quando', 'como', 'onde']
};

let currentState = {
  currentChapter: null,
  currentMode: null,
  currentQuestions: [],
  wrongAnswers: [],
  currentQuestionIndex: 0,
  correctCount: 0,
  wrongCount: 0,
  isReviewMode: false,
  selectedWords: [], 
  wordPositions: {}   
};

const elements = {
  mainMenu: document.getElementById('main-menu'),
  chaptersMenu: document.getElementById('chapters-menu'),
  practiceModeMenu: document.getElementById('practice-mode-menu'),
  quizScreen: document.getElementById('quiz-screen'),
  resultsScreen: document.getElementById('results-screen'),
  storyModeBtn: document.getElementById('story-mode-btn'),
  backToMain: document.getElementById('back-to-main'),
  backToChapters: document.getElementById('back-to-chapters'),
  backToPractice: document.getElementById('back-to-practice'),
  backToChaptersFromResults: document.getElementById('back-to-chapters-from-results'),
  chapterPracticeTitle: document.getElementById('chapter-practice-title'),
  quizTitle: document.getElementById('quiz-title'),
  quizSubtitle: document.getElementById('quiz-subtitle'),
  questionNumber: document.getElementById('question-number'),
  questionStats: document.getElementById('question-stats'),
  progressBar: document.getElementById('progress-bar'),
  questionText: document.getElementById('question-text'),
  answerArea: document.getElementById('answer-area'),
  answerPlaceholder: document.getElementById('answer-placeholder'),
  selectedWords: document.getElementById('selected-words'),
  wordsGrid: document.getElementById('words-grid'),
  shuffleWords: document.getElementById('shuffle-words'),
  clearAnswer: document.getElementById('clear-answer'),
  submitAnswer: document.getElementById('submit-answer'),
  skipButton: document.getElementById('skip-button'),
  feedbackArea: document.getElementById('feedback-area'),
  feedbackIcon: document.getElementById('feedback-icon'),
  feedbackTitle: document.getElementById('feedback-title-text'),
  correctAnswer: document.getElementById('correct-answer'),
  vocabTable: document.getElementById('vocab-table'),
  nextQuestion: document.getElementById('next-question'),
  resultsSubtitle: document.getElementById('results-subtitle'),
  scoreCircle: document.getElementById('score-circle'),
  scoreValue: document.getElementById('score-value'),
  completionMessage: document.getElementById('completion-message'),
  correctAnswers: document.getElementById('correct-answers'),
  wrongAnswers: document.getElementById('wrong-answers'),
  completionRate: document.getElementById('completion-rate'),
  restartPractice: document.getElementById('restart-practice'),
  chaptersGrid: document.getElementById('chapters-grid'),
  easyPracticeBtn: document.getElementById('easy-practice-btn'),
  hardPracticeBtn: document.getElementById('hard-practice-btn'),
  themeToggle: document.getElementById('theme-toggle'),
  themeIcon: document.getElementById('theme-icon')
};

// Carrega um capítulo específico por ID
async function loadChapterById(chapterId) {
  try {
    const response = await fetch(`/chapters/chapter_${chapterId}.json`);
    if (!response.ok) throw new Error(`Capítulo ${chapterId} não encontrado`);
    return await response.json();
  } catch (error) {
    console.error('Erro ao carregar capítulo:', error);
    alert('Erro ao carregar o capítulo. Verifique se o arquivo existe.');
    showChaptersMenu();
    return null;
  }
}

// Gera palavras distratoras inteligentes
function generateDistractors(correctWords, count = 4) {
  const distractors = [];
  const allDistractors = Object.values(DISTRACTOR_BANK).flat();
  
  // Remove palavras que já estão na resposta correta
  const availableDistractors = allDistractors.filter(word => 
    !correctWords.includes(word) && 
    !correctWords.some(w => w.toLowerCase() === word.toLowerCase())
  );
  
  // Embaralha e pega as primeiras 'count' palavras
  const shuffled = availableDistractors.sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < Math.min(count, shuffled.length); i++) {
    distractors.push(shuffled[i]);
  }
  
  return distractors;
}

function hideAllScreens() {
  elements.mainMenu.classList.add('hidden');
  elements.chaptersMenu.classList.add('hidden');
  elements.practiceModeMenu.classList.add('hidden');
  elements.quizScreen.classList.add('hidden');
  elements.resultsScreen.classList.add('hidden');
}

function showMainMenu() {
  hideAllScreens();
  elements.mainMenu.classList.remove('hidden');
}

function showChaptersMenu() {
  hideAllScreens();
  elements.chaptersMenu.classList.remove('hidden');
}

function renderChaptersGrid() {
  elements.chaptersGrid.innerHTML = CHAPTER_LIST.map(ch => `
    <div class="chapter-card" data-chapter-id="${ch.id}">
      <div class="chapter-number">Capítulo ${ch.id.toString().padStart(3, '0')}</div>
      <div class="chapter-title">${ch.title}</div>
      <div class="chapter-stats">
        <span>15 frases</span>
        <span><i class="fas fa-star"></i> ${ch.id}.0</span>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', async () => {
      const chapterId = parseInt(card.getAttribute('data-chapter-id'));
      const chapter = await loadChapterById(chapterId);
      if (chapter) {
        showPracticeModeMenu(chapter);
      }
    });
  });
}

function showPracticeModeMenu(chapter) {
  hideAllScreens();
  currentState.currentChapter = chapter;
  elements.chapterPracticeTitle.textContent = `Capítulo ${chapter.id.toString().padStart(3, '0')} - ${chapter.description}`;
  elements.practiceModeMenu.classList.remove('hidden');
  updateChapterStatsPreview(chapter); // Passamos o objeto chapter agora
}

function updateChapterStatsPreview(chapter) {
  const stats = getChapterStats(chapter.id); // Usamos chapter.id aqui
  
  document.getElementById('preview-correct').textContent = stats.correct;
  document.getElementById('preview-wrong').textContent = stats.wrong;
  
  const total = stats.correct + stats.wrong;
  const percentage = total > 0 ? Math.round((stats.correct / total) * 100) : 0;
  document.getElementById('preview-percentage').textContent = percentage + '%';
}

function getChapterStats(chapterId) {
  // Recuperar estatísticas do localStorage
  const stats = JSON.parse(localStorage.getItem(`chapter_${chapterId}_stats`)) || {
    correct: 0,
    wrong: 0
  };
  return stats;
}

function startPractice(mode) {
  currentState.currentMode = mode;
  currentState.currentQuestions = [...currentState.currentChapter.phrases];
  currentState.wrongAnswers = [];
  currentState.currentQuestionIndex = 0;
  currentState.correctCount = 0;
  currentState.wrongCount = 0;
  currentState.isReviewMode = false;
  currentState.selectedWords = [];
  currentState.wordPositions = {}; // Usamos isso agora
  showQuizScreen();
  loadQuestion();
}

function showQuizScreen() {
  hideAllScreens();
  elements.quizScreen.classList.remove('hidden');
  const modeName = currentState.currentMode === 'easy' ? 'Fácil' : 'Difícil';
  elements.quizTitle.textContent = `Prática ${modeName}`;
  elements.quizSubtitle.textContent = 'Clique nas palavras para montar a tradução';
}

function loadQuestion() {
  const question = currentState.currentQuestions[currentState.currentQuestionIndex];
  const totalQuestions = currentState.currentQuestions.length;
  
  elements.questionNumber.textContent = `Questão ${currentState.currentQuestionIndex + 1} de ${totalQuestions}`;
  elements.questionStats.textContent = `Acertos: ${currentState.correctCount} | Erros: ${currentState.wrongCount}`;
  
  const progress = (currentState.currentQuestionIndex / totalQuestions) * 100;
  elements.progressBar.style.width = `${progress}%`;
  
  // Define qual texto mostrar baseado no modo
  elements.questionText.textContent = currentState.currentMode === 'easy'
    ? question.english
    : question.portuguese;
  
  // Gera as palavras corretas
  const correctWords = question.words;
  // Gera as palavras distratoras
  const distractors = generateDistractors(correctWords, 4);
  // Combina todas as palavras
  const allWords = [...correctWords, ...distractors];
  
  // Embaralha todas as palavras (incluindo distratoras)
  const shuffledWords = [...allWords].sort(() => Math.random() - 0.5);
  
  // Cria um objeto que mapeia cada palavra para seu estado atual
  currentState.wordPositions = {};
  currentState.selectedWords = [];
  
  shuffledWords.forEach((word, index) => {
    currentState.wordPositions[word] = {
      index: index,
      available: true,
      selected: false
    };
  });
  
  renderWords();
  renderSelectedWords();
  
  elements.feedbackArea.classList.add('hidden');
}

function renderWords() {
  // Ordena as palavras pela posição original (índice)
  const sortedWords = Object.keys(currentState.wordPositions)
    .sort((a, b) => currentState.wordPositions[a].index - currentState.wordPositions[b].index);
  
  // Desabilita animações temporariamente para evitar flickering
  elements.wordsGrid.classList.add('no-animations');
  
  // Usamos DocumentFragment para atualização em lote (mais eficiente)
  const fragment = document.createDocumentFragment();
  const tempDiv = document.createElement('div');
  
  tempDiv.innerHTML = sortedWords
    .map((word) => {
      const wordState = currentState.wordPositions[word];
      
      if (wordState.selected) {
        // Palavra já selecionada - mostramos como "usada"
        return `
          <button class="word-button word-used" data-word="${word}" disabled>
            ${word}
            <span class="word-checkmark"><i class="fas fa-check"></i></span>
          </button>
        `;
      } else if (wordState.available) {
        // Palavra disponível para selecionar
        return `
          <button class="word-button" data-word="${word}">
            ${word}
          </button>
        `;
      } else {
        // Palavra não disponível
        return `
          <button class="word-button word-missing" data-word="${word}" disabled>
            ${word}
          </button>
        `;
      }
    })
    .join('');
  
  // Transfere os nós para o fragmento
  while (tempDiv.firstChild) {
    fragment.appendChild(tempDiv.firstChild);
  }
  
  // Substitui todo o conteúdo de uma vez
  elements.wordsGrid.innerHTML = '';
  elements.wordsGrid.appendChild(fragment);
  
  // Remove a classe de não-animações após um pequeno delay
  setTimeout(() => {
    elements.wordsGrid.classList.remove('no-animations');
  }, 10);
  
  // Adiciona event listeners apenas aos botões disponíveis
  document.querySelectorAll('.word-button:not(.word-used):not(.word-missing)').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const word = btn.getAttribute('data-word');
      // Adiciona classe ativa para animação apenas neste botão
      btn.classList.add('word-active');
      selectWord(word);
      
      // Remove a classe após a animação (usando evento CSS)
      setTimeout(() => {
        btn.classList.remove('word-active');
      }, 200); // Isso é apenas para limpeza, não afeta o clique
    });
  });
}

function selectWord(word) {
  if (currentState.wordPositions[word]) {
    currentState.wordPositions[word].selected = true;
    currentState.wordPositions[word].available = false;
    currentState.selectedWords.push(word);
    
    // Atualiza apenas a palavra específica
    updateWordButton(word);
    renderSelectedWords();
  }
}

function unselectWord(index) {
  const word = currentState.selectedWords[index];
  
  if (currentState.wordPositions[word]) {
    currentState.wordPositions[word].selected = false;
    currentState.wordPositions[word].available = true;
    currentState.selectedWords.splice(index, 1);
    
    // Atualiza apenas a palavra específica
    updateWordButton(word);
    renderSelectedWords();
  }
}

function updateWordButton(word) {
  const wordState = currentState.wordPositions[word];
  if (!wordState) return;
  
  // Encontra o botão da palavra específica
  const button = document.querySelector(`.word-button[data-word="${word}"]`);
  if (!button) return;
  
  // Atualiza apenas este botão
  if (wordState.selected) {
    button.className = 'word-button word-used';
    button.disabled = true;
    button.innerHTML = `${word}<span class="word-checkmark"><i class="fas fa-check"></i></span>`;
    // Remove event listener deste botão
    button.replaceWith(button.cloneNode(true));
  } else if (wordState.available) {
    button.className = 'word-button';
    button.disabled = false;
    button.textContent = word;
    // Adiciona event listener novamente
    const newButton = button.cloneNode(true);
    button.replaceWith(newButton);
    newButton.addEventListener('click', (e) => {
      newButton.classList.add('word-active');
      selectWord(word);
      setTimeout(() => {
        newButton.classList.remove('word-active');
      }, 200);
    });
  }
}

function renderSelectedWords() {
  if (currentState.selectedWords.length === 0) {
    elements.answerPlaceholder.style.display = 'block';
    elements.selectedWords.innerHTML = '';
  } else {
    elements.answerPlaceholder.style.display = 'none';
    elements.selectedWords.innerHTML = currentState.selectedWords
      .map((word, index) => `
        <button class="selected-word-button" data-selected-index="${index}">
          ${word}
        </button>
      `)
      .join('');
    
    // Adiciona event listeners para remover palavras
    document.querySelectorAll('.selected-word-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-selected-index'));
        unselectWord(index);
      });
    });
  }
}

function shuffleAvailableWords() {
  // Pega todas as palavras
  const allWords = Object.keys(currentState.wordPositions);
  
  // Embaralha as palavras
  const shuffled = [...allWords].sort(() => Math.random() - 0.5);
  
  // Atualiza os índices para manter a nova ordem
  shuffled.forEach((word, index) => {
    if (currentState.wordPositions[word]) {
      currentState.wordPositions[word].index = index;
    }
  });
  
  // Usa renderWords normal para reordenar tudo
  renderWords();
}

function clearSelectedWords() {
  // Animação para todas as palavras que estavam selecionadas
  const selectedWords = [...currentState.selectedWords];
  
  selectedWords.forEach(word => {
    if (currentState.wordPositions[word]) {
      currentState.wordPositions[word].selected = false;
      currentState.wordPositions[word].available = true;
      updateWordButton(word);
    }
  });
  
  currentState.selectedWords = [];
  renderSelectedWords();
}

function skipQuestion() {
  currentState.wrongCount++;
  currentState.currentQuestionIndex++;
  
  if (currentState.currentQuestionIndex < currentState.currentQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function checkAnswer() {
  if (currentState.selectedWords.length === 0) {
    alert('Selecione pelo menos uma palavra!');
    return;
  }
  
  const question = currentState.currentQuestions[currentState.currentQuestionIndex];
  const userAnswer = currentState.selectedWords.join(' ');
  
  // Pega a resposta correta baseado no modo
  const correctAnswer = currentState.currentMode === 'easy' 
    ? question.portuguese 
    : question.english;
  
  // Remove pontuação para comparação
  const normalizeForComparison = (text) => {
    return text.replace(/[.,!?;:]/g, '').trim();
  };
  
  const isCorrect = normalizeForComparison(userAnswer) === normalizeForComparison(correctAnswer);
  
  showFeedback(isCorrect, correctAnswer, question);
  
  if (isCorrect) {
    currentState.correctCount++;
  } else {
    currentState.wrongCount++;
    if (!currentState.isReviewMode) {
      currentState.wrongAnswers.push(question);
    }
  }
  
  elements.questionStats.textContent = `Acertos: ${currentState.correctCount} | Erros: ${currentState.wrongCount}`;
}

function showFeedback(isCorrect, correctAnswer, question) {
  if (isCorrect) {
    elements.feedbackIcon.className = 'fas fa-check-circle';
    elements.feedbackTitle.textContent = 'Resposta Correta! 🎉';
    elements.feedbackIcon.style.color = 'var(--success)';
  } else {
    elements.feedbackIcon.className = 'fas fa-times-circle';
    elements.feedbackTitle.textContent = 'Resposta Incorreta';
    elements.feedbackIcon.style.color = 'var(--error)';
  }
  
  elements.correctAnswer.textContent = correctAnswer;
  
  // Gera a tabela de vocabulário palavra por palavra
  generateVocabTable(question);
  
  elements.feedbackArea.classList.remove('hidden');
}

function generateVocabTable(question) {
  let html = '';
  
  // Se existir wordByWord no JSON, usa ele (tradução correta por expressões)
  if (question.wordByWord && question.wordByWord.length > 0) {
    question.wordByWord.forEach(pair => {
      html += `<tr>
        <td><strong>${pair.english}</strong></td>
        <td>${pair.portuguese}</td>
      </tr>`;
    });
  } else {
    // Fallback: mapeia palavra por palavra literalmente
    const englishWords = question.english.replace(/[.,!?;:]/g, '').split(' ');
    const portugueseWords = question.portuguese.replace(/[.,!?;:]/g, '').split(' ');
    
    const maxLength = Math.max(englishWords.length, portugueseWords.length);
    
    for (let i = 0; i < maxLength; i++) {
      const en = englishWords[i] || '-';
      const pt = portugueseWords[i] || '-';
      
      html += `<tr>
        <td><strong>${en}</strong></td>
        <td>${pt}</td>
      </tr>`;
    }
  }
  
  elements.vocabTable.innerHTML = html;
}

function nextQuestion() {
  currentState.currentQuestionIndex++;
  
  if (currentState.currentQuestionIndex < currentState.currentQuestions.length) {
    loadQuestion();
  } else {
    if (!currentState.isReviewMode && currentState.wrongAnswers.length > 0) {
      currentState.isReviewMode = true;
      currentState.currentQuestions = [...currentState.wrongAnswers];
      currentState.currentQuestionIndex = 0;
      currentState.wrongAnswers = [];
      loadQuestion();
    } else {
      showResults();
    }
  }
}

function showResults() {
  hideAllScreens();
  elements.resultsScreen.classList.remove('hidden');
  
  const total = currentState.currentChapter.phrases.length;
  const totalAttempts = currentState.correctCount + currentState.wrongCount;
  const correctPerc = totalAttempts ? Math.round((currentState.correctCount / totalAttempts) * 100) : 0;
  const completionPerc = Math.round((currentState.correctCount / total) * 100);
  
  elements.scoreCircle.style.background = `conic-gradient(var(--primary) ${correctPerc}%, var(--dark) 0%)`;
  elements.scoreValue.textContent = `${correctPerc}%`;
  
  if (completionPerc === 100) {
    elements.completionMessage.textContent = 'Parabéns! Domínio Total! 🎉';
    elements.completionMessage.style.color = 'var(--success)';
  } else if (completionPerc >= 80) {
    elements.completionMessage.textContent = 'Excelente! Quase Perfeito! 👏';
    elements.completionMessage.style.color = 'var(--success)';
  } else if (completionPerc >= 60) {
    elements.completionMessage.textContent = 'Bom Trabalho! Continue Assim! 💪';
    elements.completionMessage.style.color = 'var(--warning)';
  } else {
    elements.completionMessage.textContent = 'Continue Praticando! Você Consegue! 📚';
    elements.completionMessage.style.color = 'var(--error)';
  }
  
  elements.correctAnswers.textContent = currentState.correctCount;
  elements.wrongAnswers.textContent = currentState.wrongCount;
  elements.completionRate.textContent = `${completionPerc}%`;
  elements.resultsSubtitle.textContent = `Capítulo ${currentState.currentChapter.id.toString().padStart(3, '0')} - ${currentState.currentChapter.description}`;
}

function attachEventListeners() {
  elements.storyModeBtn.addEventListener('click', showChaptersMenu);
  elements.backToMain.addEventListener('click', showMainMenu);
  elements.backToChapters.addEventListener('click', showChaptersMenu);
  elements.backToPractice.addEventListener('click', () => {
    showPracticeModeMenu(currentState.currentChapter);
  });
  elements.backToChaptersFromResults.addEventListener('click', showChaptersMenu);
  elements.easyPracticeBtn.addEventListener('click', () => startPractice('easy'));
  elements.hardPracticeBtn.addEventListener('click', () => startPractice('hard'));
  elements.submitAnswer.addEventListener('click', checkAnswer);
  elements.skipButton.addEventListener('click', skipQuestion);
  elements.nextQuestion.addEventListener('click', nextQuestion);
  elements.shuffleWords.addEventListener('click', shuffleAvailableWords);
  elements.clearAnswer.addEventListener('click', clearSelectedWords);
  elements.restartPractice.addEventListener('click', () => {
    startPractice(currentState.currentMode);
  });
  
  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);
}

// Função para alternar tema
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Atualiza o ícone
  if (newTheme === 'dark') {
    elements.themeIcon.className = 'fas fa-sun';
  } else {
    elements.themeIcon.className = 'fas fa-moon';
  }
}

// Carrega o tema salvo
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  if (savedTheme === 'dark') {
    elements.themeIcon.className = 'fas fa-sun';
  } else {
    elements.themeIcon.className = 'fas fa-moon';
  }
}

function init() {
  loadTheme(); // Carrega o tema salvo
  hideAllScreens();
  elements.mainMenu.classList.remove('hidden');
  renderChaptersGrid();
  attachEventListeners();
}

document.addEventListener('DOMContentLoaded', init);