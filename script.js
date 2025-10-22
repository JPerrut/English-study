// script.js

// --- DADOS DO APLICATIVO ---
const VOCAB_DATA = [
  { word: "I'm", class: "Contração (Pronome + Verbo)", meaning: "Eu estou (Contração de 'I am')" },
  { word: "only", class: "Advérbio", meaning: "Apenas, somente" },
  { word: "stating", class: "Verbo (Gerúndio)", meaning: "Declarando, afirmando" },
  { word: "facts", class: "Substantivo (Plural)", meaning: "Fatos" },
  { word: "Who", class: "Pronome Interrogativo", meaning: "Quem" },
  { word: "doesn't", class: "Contração (Verbo Auxiliar)", meaning: "Não (Contração de 'does not')" },
  { word: "know", class: "Verbo", meaning: "Saber, conhecer" },
  { word: "what", class: "Pronome Interrogativo", meaning: "O que, como (Neste contexto, 'como')" },
  { word: "he's", class: "Contração (Pronome + Verbo)", meaning: "Ele é (Contração de 'he is')" },
  { word: "like", class: "Preposição / Adjetivo", meaning: "Como (Usado em 'What he's like' = Como ele é)" },
  { word: "The", class: "Artigo Definido", meaning: "O, a, os, as" },
  { word: "broadcasting", class: "Adjetivo / Gerúndio", meaning: "De transmissão, de radiodifusão" },
  { word: "companies", class: "Substantivo (Plural)", meaning: "Empresas, companhias" },
  { word: "already", class: "Advérbio", meaning: "Já" },
  { word: "but", class: "Conjunção", meaning: "Mas, porém" },
  { word: "they're", class: "Contração (Pronome + Verbo)", meaning: "Eles/Elas estão (Contração de 'they are')" },
  { word: "still", class: "Advérbio", meaning: "Ainda" },
  { word: "allowing", class: "Verbo (Gerúndio)", meaning: "Permitindo" },
  { word: "it", class: "Pronome Pessoal (Objeto)", meaning: "Isso, isto, o" },
  { word: "I", class: "Pronome Pessoal (Sujeito)", meaning: "Eu" },
  { word: "want", class: "Verbo", meaning: "Querer, desejar" },
  { word: "to", class: "Partícula", meaning: "Para (Forma o infinitivo 'to be')" },
  { word: "be", class: "Verbo", meaning: "Ser, estar" },
  { word: "Flame Emperor", class: "Substantivo (Nome Próprio)", meaning: "Imperador das Chamas" },
  { word: "too", class: "Advérbio", meaning: "Também" },
  { word: "don't", class: "Contração (Verbo Auxiliar)", meaning: "Não (Contração de 'do not')" },
  { word: "how", class: "Advérbio Interrogativo", meaning: "Como" },
  { word: "saint", class: "Substantivo", meaning: "Santa, santo" },
  { word: "can", class: "Verbo Modal", meaning: "Pode, consegue" },
  { word: "date", class: "Verbo", meaning: "Namorar, sair com" },
  { word: "him", class: "Pronome Pessoal (Objeto)", meaning: "Ele (Objeto; em português, 'o', 'dele')" },
  { word: "with", class: "Preposição", meaning: "Com" },
  { word: "his", class: "Pronome Possessivo", meaning: "Dele, seu" },
  { word: "personality", class: "Substantivo", meaning: "Personalidade" },
  { word: "is", class: "Verbo (Presente)", meaning: "É / Está (Verbo to be)" },
  { word: "that", class: "Pronome Demonstrativo", meaning: "Isso, aquilo" },
  { word: "why", class: "Advérbio Interrogativo", meaning: "Por que, o motivo pelo qual" },
  { word: "she's", class: "Contração (Pronome + Verbo)", meaning: "Ela é / Ela está (Contração de 'she is')" },
  { word: "called", class: "Verbo (Passado/Particípio)", meaning: "Chamada, nomeada" },
  { word: "What", class: "Pronome Interrogativo", meaning: "O quê, Qual" },
  { word: "Saint", class: "Substantivo", meaning: "Santa, Santo" },
  { word: "dating", class: "Verbo (Gerúndio)", meaning: "Namorando, saindo (romanticamente)" },
  { word: "Yeah", class: "Interjeição", meaning: "Sim (Informal)" },
  { word: "my", class: "Pronome Possessivo", meaning: "Meu, minha" },
  { word: "friend's", class: "Contração (Substantivo + Verbo)", meaning: "Amigo é (Contração de 'friend is')" },
  { word: "a", class: "Artigo Indefinido", meaning: "Um, uma" },
  { word: "hunter", class: "Substantivo", meaning: "Caçador(a)" },
  { word: "and", class: "Conjunção", meaning: "E" },
  { word: "he", class: "Pronome Pessoal (Sujeito)", meaning: "Ele" },
  { word: "said", class: "Verbo (Passado)", meaning: "Disse, falou (Passado do verbo 'to say')" },
  { word: "saw", class: "Verbo (Passado)", meaning: "Viu (Passado do verbo 'to see')" },
  { word: "them", class: "Pronome Pessoal (Objeto)", meaning: "Eles, elas, os, as" },
  { word: "together", class: "Advérbio", meaning: "Juntos, em conjunto" },
  { word: "are", class: "Verbo", meaning: "Está (Verbo to be com you)" },
  { word: "you", class: "Pronome Pessoal (Sujeito)", meaning: "Você, tu" },
  { word: "talking", class: "Verbo (Gerúndio)", meaning: "Falando" },
  { word: "about", class: "Preposição", meaning: "Sobre, a respeito de" },
  { word: "Saint's", class: "Contração (Substantivo + Verbo)", meaning: "Saint é / Santa é (Contração de 'Saint is')" },
  { word: "friend", class: "Substantivo", meaning: "Amigo(a)" },
  { word: "she", class: "Pronome Pessoal (Sujeito)", meaning: "Ela" },
  { word: "it's", class: "Contração (Pronome + Verbo)", meaning: "Isso é (Contração de 'it is')" },
  { word: "not", class: "Advérbio", meaning: "Não" },
  { word: "true", class: "Adjetivo", meaning: "Verdadeiro(a), certo(a)" },
  { word: "Who's", class: "Contração (Pronome + Verbo)", meaning: "Quem tem (Contração de 'Who has')" },
  { word: "been", class: "Verbo (Particípio)", meaning: "Estado, sido, estado (Parte do Present Perfect Continuous)" },
  { word: "saying", class: "Verbo (Gerúndio)", meaning: "Dizendo, falando" },
  { word: "the", class: "Artigo Definido", meaning: "O, a, os, as" },
  { word: "same", class: "Adjetivo", meaning: "Mesmo, igual" },
  { word: "thing", class: "Substantivo", meaning: "Coisa" },
  { word: "Then", class: "Advérbio", meaning: "Então, Em seguida" },
  { word: "Mr.", class: "Abreviação", meaning: "Sr. (Senhor)" },
  { word: "must", class: "Verbo Modal", meaning: "Deve (Expressa dedução/probabilidade)" },
  { word: "nice", class: "Adjetivo", meaning: "Bom, agradável, legal" },
  { word: "have", class: "Verbo", meaning: "Ter" },
  { word: "everyone", class: "Pronome Indefinido", meaning: "Todos, todo mundo" },
  { word: "interested", class: "Adjetivo / Particípio", meaning: "Interessado(a)" },
  { word: "in", class: "Preposição", meaning: "Em, na, no" },
  { word: "every", class: "Adjetivo", meaning: "Cada, todo" },
  { word: "word", class: "Substantivo", meaning: "Palavra" },
  { word: "says", class: "Verbo (Presente)", meaning: "Diz (Terceira pessoa do singular do verbo 'to say')" },
  { word: "heard", class: "Verbo (Passado)", meaning: "Ouvi, fiquei sabendo (Passado de 'to hear')" },
  { word: "has", class: "Verbo (Presente)", meaning: "Tem (Terceira pessoa do singular de 'to have')" },
  { word: "a lot of", class: "Quantificador", meaning: "Muitos, muitas" },
  { word: "assets", class: "Substantivo (Plural)", meaning: "Bens, ativos, patrimônio" },
  { word: "so", class: "Advérbio", meaning: "Tão, muito" },
  { word: "jealous", class: "Adjetivo", meaning: "Invejoso(a), com inveja" },
  { word: "If", class: "Conjunção", meaning: "Se, caso" },
  { word: "this", class: "Pronome Demonstrativo", meaning: "Este, esta" },
  { word: "world", class: "Substantivo", meaning: "Mundo" },
  { word: "was / would", class: "Verbo (Passado/Modal)", meaning: "Fosse / Seria (Forma o condicional)" },
  { word: "novel", class: "Substantivo", meaning: "Romance, livro, novela" },
  { word: "person", class: "Substantivo", meaning: "Pessoa" },
  { word: "definitely", class: "Advérbio", meaning: "Definitivamente, com certeza" },
  { word: "main", class: "Adjetivo", meaning: "Principal, central" },
  { word: "character", class: "Substantivo", meaning: "Personagem" },
  { word: "just", class: "Advérbio", meaning: "Apenas, somente, só" },
  { word: "an", class: "Artigo Indefinido", meaning: "Um, uma (Usado antes de som vocálico)" },
  { word: "extra", class: "Substantivo", meaning: "Figurante, extra" },
  { word: "there are", class: "Estrutura Verbal", meaning: "Há, existem" },
  { word: "many", class: "Quantificador", meaning: "Muitos(as)" },
  { word: "aspiring", class: "Adjetivo / Verbo", meaning: "Aspirante, ambicioso(a)" },
  { word: "hunters", class: "Substantivo (Plural)", meaning: "Caçadores(as)" },
  { word: "look up to", class: "Phrasal Verb", meaning: "Admirar, respeitar, espelhar-se em" },
  { word: "your", class: "Pronome Possessivo", meaning: "Seu, sua" },
  { word: "try", class: "Verbo", meaning: "Tentar" },
  { word: "their", class: "Pronome Possessivo", meaning: "Deles, delas, seus" },
  { word: "best", class: "Adjetivo / Substantivo", meaning: "Melhor" },
  { word: "Awakening", class: "Verbo (Gerúndio/Particípio)", meaning: "Despertando, acordando (No sentido de ganhar um poder)" },
  { word: "soon", class: "Advérbio", meaning: "Logo, em breve" },
  { word: "after", class: "Preposição / Advérbio", meaning: "Depois, após" },
  { word: "entering", class: "Verbo (Gerúndio)", meaning: "Entrando" },
  { word: "tower", class: "Substantivo", meaning: "Torre" },
  { word: "early-20's", class: "Substantivo", meaning: "Início dos seus 20 e poucos anos" },
  { word: "Defeating", class: "Verbo (Gerúndio/Particípio)", meaning: "Derrotando, vencendo" },
  { word: "boss monster", class: "Substantivo Composto", meaning: "Chefe monstro" },
  { word: "that", class: "Pronome Relativo", meaning: "Que" },
  { word: "Black Dragon", class: "Substantivo (Nome Próprio)", meaning: "Dragão Negro" },
  { word: "has tried", class: "Verbo (Present Perfect)", meaning: "Tentou, tem tentado" },
  { word: "to defeat", class: "Verbo (Infinitivo)", meaning: "Derrotar, vencer" },
  { word: "for 10 years", class: "Preposição + Substantivo", meaning: "Há 10 anos, durante 10 anos" },
  { word: "less than", class: "Comparativo", meaning: "Menos que" },
  { word: "a month", class: "Substantivo", meaning: "Um mês" },
  { word: "literally", class: "Advérbio", meaning: "Literalmente" },
  { word: "writes", class: "Verbo (Presente)", meaning: "Escreve (Terceira pessoa do singular do verbo 'to write')" },
  { word: "legends", class: "Substantivo (Plural)", meaning: "Lendas" },
  { word: "Please", class: "Advérbio / Interjeição", meaning: "Por favor" },
  { word: "tell", class: "Verbo", meaning: "Dizer, contar" },
  { word: "fans", class: "Substantivo (Plural)", meaning: "Fãs, admiradores" },
  { word: "key", class: "Substantivo", meaning: "Chave" },
  { word: "to", class: "Preposição", meaning: "Para, de (Neste contexto, 'a chave para o sucesso')" },
  { word: "success", class: "Substantivo", meaning: "Sucesso" },
  { word: "one", class: "Numeral", meaning: "Um, uma" },
  { word: "phrase", class: "Substantivo", meaning: "Frase" },
  { word: "really", class: "Advérbio", meaning: "Realmente, de verdade" },
  { word: "gonna", class: "Contração (Auxiliar)", meaning: "Vou (Contração informal de 'going to')" },
  { word: "say", class: "Verbo", meaning: "Dizer, falar" },
  { word: "a few", class: "Quantificador", meaning: "Poucos, algumas" },
  { word: "words", class: "Substantivo (Plural)", meaning: "Palavras" },
  { word: "so", class: "Conjunção", meaning: "Para que, assim" },
  { word: "you guys", class: "Pronome + Gíria", meaning: "Vocês, pessoal, galera" },
  { word: "figure out", class: "Phrasal Verb", meaning: "Descobrir, desvendar, entender" },
  { word: "Those", class: "Pronome Demonstrativo", meaning: "Aqueles, aquelas" },
  { word: "will", class: "Verbo Modal", meaning: "Vão, irão (Forma o futuro)" },
  { word: "succeed", class: "Verbo", meaning: "Ter sucesso, vencer" },
  { word: "But", class: "Conjunção", meaning: "Mas, porém" },
  { word: "get in my way", class: "Expressão Idiomática", meaning: "Entrar no meu caminho, me atrapalhar" },
  { word: "even if", class: "Conjunção", meaning: "Mesmo se, ainda que" },
  { word: "Or", class: "Conjunção", meaning: "Ou" },
  { word: "I'll", class: "Contração (Pronome + Verbo Modal)", meaning: "Eu vou (Contração de 'I will')" },
  { word: "kill", class: "Verbo", meaning: "Matar" },
  { word: "did", class: "Verbo Auxiliar", meaning: "(Usado para formar perguntas no passado)" },
  { word: "mean", class: "Verbo", meaning: "Querer dizer, significar, ter a intenção" },
  { word: "by", class: "Preposição", meaning: "Por, com, através de (Neste contexto, 'com relação a')" },
  { word: "with", class: "Preposição", meaning: "Com" },
  { word: "we", class: "Pronome Pessoal (Sujeito)", meaning: "Nós" },
  { word: "now", class: "Advérbio", meaning: "Agora" },
  { word: "end", class: "Verbo", meaning: "Encerrar, finalizar, terminar" },
  { word: "broadcast", class: "Substantivo", meaning: "Transmissão, programa, radiodifusão" },
  { word: "To", class: "Preposição", meaning: "A, Para" },
  { word: "our", class: "Pronome Possessivo", meaning: "Nosso, nossos, nossa, nossas" },
  { word: "viewers", class: "Substantivo (Plural)", meaning: "Telespectadores, público" },
  { word: "are", class: "Verbo (Presente)", meaning: "Estão (Verbo to be no plural)" },
  { word: "watching", class: "Verbo (Gerúndio)", meaning: "Assistindo, olhando" },
  { word: "mad", class: "Adjetivo", meaning: "Bravo(a), irritado(a), furioso(a)" },
  { word: "okay", class: "Adjetivo", meaning: "Certo, bem, aceitável" },
  { word: "ignore", class: "Verbo", meaning: "Ignorar, desconsiderar" },
  { word: "people", class: "Substantivo (Plural)", meaning: "Pessoas" },
  { word: "when", class: "Advérbio / Conjunção", meaning: "Quando" },
  { word: "become", class: "Verbo", meaning: "Tornar-se, vir a ser" },
  { word: "that", class: "Advérbio", meaning: "Tão, assim (Usado para intensificar)" },
  { word: "great", class: "Adjetivo", meaning: "Grandioso(a), ótimo(a), poderoso(a)" },
  { word: "It", class: "Pronome Pessoal", meaning: "Isto, isso, ele, ela" },
  { word: "was", class: "Verbo (Passado)", meaning: "Era, estava (Passado do verbo 'to be')" },
  { word: "reporter", class: "Substantivo", meaning: "Repórter, jornalista" },
  { word: "being ignored", class: "Verbo (Passado Contínuo Passivo)", meaning: "Sendo ignorado" },
  { word: "felt", class: "Verbo (Passado)", meaning: "Sentiu, parecia (Passado de 'to feel' = sentir/parecer)" },
  { word: "had", class: "Verbo (Passado)", meaning: "Tivesse (Passado de 'to have' = ter)" },
  { word: "decent", class: "Adjetivo", meaning: "Decente, razoável, bom" },
  { word: "skill", class: "Substantivo", meaning: "Habilidade, competência" },
  { word: "then", class: "Advérbio", meaning: "Então, em seguida" },
  { word: "wouldn't", class: "Contração (Verbo Modal)", meaning: "Não precisaria / Não seria (Contração de 'would not')" },
  { word: "need", class: "Verbo", meaning: "Precisar" },
  { word: "to live", class: "Verbo (Infinitivo)", meaning: "Viver, morar" },
  { word: "damned", class: "Adjetivo", meaning: "Maldito(a), detestável" },
  { word: "studio", class: "Substantivo", meaning: "Estúdio (Apartamento pequeno de um cômodo)" },
  { word: "be looked down on", class: "Phrasal Verb (Passiva)", meaning: "Ser menosprezado, olhado com desdém" },
  { word: "for being", class: "Preposição + Gerúndio", meaning: "Por ser, devido a ser" },
  { word: "lowest", class: "Adjetivo (Superlativo)", meaning: "Mais baixo, pior" },
  { word: "F-class", class: "Adjetivo", meaning: "Classe F" },
  { word: "without", class: "Preposição", meaning: "Sem" },
  { word: "a single", class: "Artigo + Adjetivo", meaning: "Um único(a), sequer um" },
  { word: "to become", class: "Verbo (Infinitivo)", meaning: "Tornar-se, vir a ser" },
  { word: "to succeed", class: "Verbo (Infinitivo)", meaning: "Ter sucesso, vencer" },
  { word: "own", class: "Adjetivo", meaning: "Próprio(a) (Enfatiza a posse)" },
  { word: "skills", class: "Substantivo (Plural)", meaning: "Habilidades, talentos" },
  { word: "How", class: "Advérbio Interrogativo", meaning: "Quão, como" },
  { word: "would", class: "Verbo Modal", meaning: "Seria (Forma o condicional)" },
  { word: "Flame Emperor's", class: "Substantivo (Possessivo)", meaning: "Do Imperador das Chamas" },
  { word: "mine", class: "Pronome Possessivo", meaning: "Meu, minha" },
  { word: "scene", class: "Substantivo", meaning: "Cena, cenário" },
  { word: "I've", class: "Contração (Pronome + Verbo)", meaning: "Eu tenho (Contração de 'I have')" },
  { word: "seen", class: "Verbo (Particípio)", meaning: "Visto (Particípio de 'to see')" },
  { word: "a thousand", class: "Numeral", meaning: "Mil" },
  { word: "times", class: "Substantivo (Plural)", meaning: "Vezes" },
  { word: "videos", class: "Substantivo (Plural)", meaning: "Vídeos" },
  { word: "Could", class: "Verbo Modal", meaning: "Poderia, seria, será que" },
  { word: "card", class: "Substantivo", meaning: "Carta, cartão" },
  { word: "An", class: "Artigo Indefinido", meaning: "Um, uma" },
  { word: "unsightly", class: "Adjetivo", meaning: "Desagradável, feio, nojento, inestético" },
  { word: "envy", class: "Substantivo", meaning: "Inveja" },
  { word: "yet to be found", class: "Expressão Formal", meaning: "Ainda por ser encontrado, que ainda não foi encontrado" },
  { word: "history", class: "Substantivo", meaning: "História" },
  { word: "is moved", class: "Verbo (Voz Passiva)", meaning: "É movida, é tocada, é influenciada" },
  { word: "by", class: "Preposição", meaning: "Por, pelo(a)" },
  { word: "determination", class: "Substantivo", meaning: "Determinação, empenho, garra" },
  { word: "rewards", class: "Verbo (Presente)", meaning: "Recompensa, premia" },
  { word: "for", class: "Preposição", meaning: "Por, pelo(a), devido a" },
  { word: "honest", class: "Adjetivo", meaning: "Honesto(a), sincero(a)" },
  { word: "efforts", class: "Substantivo (Plural)", meaning: "Esforços, tentativas, dedicação" },
  { word: "praises", class: "Verbo (Presente)", meaning: "Elogia, parabeniza, exalta" },
  { word: "achievements", class: "Substantivo (Plural)", meaning: "Conquistas, feitos, realizações" },
  { word: "different", class: "Adjetivo", meaning: "Diferente" },
  { word: "from", class: "Preposição", meaning: "De, do, da" },
  { word: "Nah", class: "Interjeição (Informal)", meaning: "Não, Nah" },
  { word: "should", class: "Verbo Modal", meaning: "Deveria" },
  { word: "care", class: "Verbo", meaning: "Me importar, me preocupar" },
  { word: "its", class: "Pronome Possessivo", meaning: "Dele, dela (Refere-se a algo não humano, como o tom)" },
  { word: "tone", class: "Substantivo", meaning: "Tom" },
  { word: "just", class: "Advérbio", meaning: "Acabei de, apenas" },
  { word: "received", class: "Verbo (Passado)", meaning: "Recebi" },
  { word: "skill card", class: "Substantivo Composto", meaning: "Carta de habilidade" },
  { word: "moment", class: "Substantivo", meaning: "Momento" },
  { word: "I've been waiting", class: "Contração (Verbo)", meaning: "Eu estava/tenho esperado (Present Perfect Continuous)" },
  { word: "for", class: "Preposição", meaning: "Por" },
  { word: "ever since", class: "Conjunção/Advérbio", meaning: "Desde que, a partir de" },
  { word: "got", class: "Verbo (Passado)", meaning: "Cheguei, peguei (Passado de 'to get')" },
  { word: "here", class: "Advérbio", meaning: "Aqui" },
  { word: "On top of that", class: "Expressão Idiomática", meaning: "Além disso, para completar" },
  { word: "gold", class: "Adjetivo", meaning: "Dourado(a), de ouro" },
  { word: "S-rank", class: "Adjetivo Composto", meaning: "Rank S, Nível S" },
  { word: "Card", class: "Substantivo", meaning: "Carta, Cartão" },
  { word: "Effect", class: "Substantivo", meaning: "Efeito" },
  { word: "Activates", class: "Verbo (Presente)", meaning: "Ativa" },
  { word: "automatically", class: "Advérbio", meaning: "Automaticamente" },
  { word: "upon death", class: "Preposição + Substantivo", meaning: "Após a morte" },
  { word: "After dying to", class: "Preposição + Verbo", meaning: "Depois de morrer para" },
  { word: "enemy", class: "Substantivo", meaning: "Inimigo" },
  { word: "copy", class: "Verbo", meaning: "Copiar" },
  { word: "make it your own", class: "Expressão", meaning: "Torná-la sua, se apropriar dela" },
  { word: "cannot", class: "Verbo Modal (Negativo)", meaning: "Não pode" },
  { word: "targets", class: "Substantivo (Plural)", meaning: "Alvos" },
  { word: "already", class: "Advérbio", meaning: "Já" },
  { word: "killed", class: "Verbo (Passado)", meaning: "Mataram" },
  { word: "previously", class: "Advérbio", meaning: "Anteriormente" },
  { word: "randomly", class: "Advérbio", meaning: "Aleatoriamente" },
  { word: "of someone", class: "Preposição + Pronome", meaning: "De alguém" },
  { word: "make it yours", class: "Expressão", meaning: "Torná-la sua" },
  { word: "However", class: "Advérbio Conjuntivo", meaning: "No entanto, porém, contudo" },
  { word: "die", class: "Verbo", meaning: "Morrer" },
  { word: "kind", class: "Substantivo", meaning: "Tipo, espécie, gênero" },
  { word: "of", class: "Preposição", meaning: "De, do, da" }
];

const CHAPTERS = [
  {
    id: 1,
    title: "Compilação de Frases Praticadas",
    phrases: [
      {
        english: "I'm only stating facts. Who doesn't know what he's like? The broadcasting companies already know but they're still allowing it.",
        portuguese: "Eu só estou declarando fatos. Quem não sabe como ele é? As emissoras de TV já sabem, mas ainda estão permitindo isso."
      },
      {
        english: "I want to be like flame emperor too",
        portuguese: "Eu também quero ser como o Imperador das Chamas."
      },
      {
        english: "I don't know how saint can date him with his personality... is that why she's called the saint?",
        portuguese: "Eu não sei como a santa consegue namorar ele com a personalidade dele... será que é por isso que ela é chamada de santa?"
      },
      {
        english: "What?!?! Saint is dating Flame Emperor?!?!",
        portuguese: "O quê?!?! A Santa está namorando o Imperador das Chamas?!?!"
      },
      {
        english: "Yeah my friend's a hunter and he said he saw them together",
        portuguese: "Sim, meu amigo é um caçador e ele disse que viu os dois juntos."
      },
      {
        english: "What are you talking about. Saint's my friend and she said it's not true.",
        portuguese: "O que você está falando? / Do que você está falando? A Santa é minha amiga e ela disse que não é verdade."
      },
      {
        english: "Who's Been saying the same thing",
        portuguese: "Quem tem dito a mesma coisa? / Quem andou dizendo a mesma coisa?"
      },
      {
        english: "Then, Mr. Flame emperor... must be nice to have everyone interested in every word he says",
        portuguese: "Então, Sr. Imperador das Chamas... deve ser bom ter todo mundo interessado em cada palavra que ele diz."
      },
      {
        english: "And I heard he has a lot of assets... I'm so jealous.",
        portuguese: "E eu ouvi dizer que ele tem muitos bens/ativos... Eu estou com tanta inveja."
      },
      {
        english: "If this world was a novel a person like him would definitely be the main character. And I would just be an extra.",
        portuguese: "Se este mundo fosse um romance, uma pessoa como ele seria definitivamente o personagem principal. E eu seria apenas um figurante."
      },
      {
        english: "Mr. Flame Emperor, there are many aspiring hunters who look up to you and try their best.",
        portuguese: "Sr. Imperador das Chamas, há muitos caçadores aspirantes que admiram você e dão o seu melhor."
      },
      {
        english: "Awakening soon after entering the tower in his early-20's, defeating a boss monster that Black Dragon has tried to defeat for 10 years, less than a month after.",
        portuguese: "Despertando logo após entrar na torre no início dos seus 20 e poucos anos, (ele) derrotou um chefe monstro que o Dragão Negro tentava derrotar há 10 anos, menos de um mês depois."
      },
      {
        english: "A hunter who literally writes legends.",
        portuguese: "Um caçador que literalmente escreve lendas."
      },
      {
        english: "Please tell your aspiring fans the key to success in one phrase!",
        portuguese: "Por favor, diga aos seus fãs aspirantes (ou 'que almejam o sucesso') a chave para o sucesso em uma frase!"
      },
      {
        english: "I'm really just gonna say a few words so you guys figure it out.",
        portuguese: "Eu vou dizer só algumas palavras mesmo para que vocês descubram (ou 'entendam' / 'desvendem')."
      },
      {
        english: "Those who will succeed will succeed. But, don't get in my way even if you succeed. Or I'll kill you.",
        portuguese: "Aqueles que terão sucesso terão sucesso. Mas, não entre no meu caminho mesmo que você tenha sucesso. Ou eu vou te matar."
      },
      {
        english: "What did you mean by that?!",
        portuguese: "O que você quis dizer com isso?! / O que você quis dizer com aquilo?!"
      },
      {
        english: "... with this we will now end the broadcast. To our viewers who are watching.",
        portuguese: "... com isso, nós encerraremos a transmissão agora. Aos nossos telespectadores que estão assistindo."
      },
      {
        english: "I'm so mad",
        portuguese: "Eu estou tão bravo(a). / Eu estou com tanta raiva."
      },
      {
        english: "Is it okay to just ignore people when you become that great?",
        portuguese: "É certo / É aceitável apenas ignorar as pessoas quando você se torna tão grandioso(a)?"
      },
      {
        english: "It was the reporter who was being ignored but it felt like I was...",
        portuguese: "Era o repórter que estava sendo ignorado, mas parecia que era eu (quem estava sendo ignorado)..."
      },
      {
        english: "If I just had one decent skill like the Flame Emperor then I wouldn't need to live in this damned studio... and I wouldn't be looked down on for being the lowest F-class hunter without a single skill...",
        portuguese: "Se eu tivesse apenas uma habilidade decente como a do Imperador das Chamas, então eu não precisaria viver neste estúdio maldito... e eu não seria menosprezado por ser o caçador de classe F mais baixo sem uma única habilidade..."
      },
      {
        english: "I want to become just like the flame emperor",
        portuguese: "Eu quero me tornar exatamente como o Imperador das Chamas."
      },
      {
        english: "I want to succeed with my own skills too",
        portuguese: "Eu também quero ter sucesso com as minhas próprias habilidades."
      },
      {
        english: "How great would it be if the Flame Emperor's skill was mine...?",
        portuguese: "Quão incrível seria se a habilidade do Imperador das Chamas fosse minha...?"
      },
      {
        english: "This is a scene that I've only seen a thousand times in videos...",
        portuguese: "Esta é uma cena que eu só vi mil vezes em vídeos..."
      },
      {
        english: "Could it be... a 'skill card'",
        portuguese: "Será que é... uma 'carta de habilidade'?"
      },
      {
        english: "An unsightly envy that is yet to be found in history!",
        portuguese: "Uma inveja desagradável/nojenta que ainda não se encontra na história!"
      },
      {
        english: "The tower is moved by your determination",
        portuguese: "A torre é movida pela sua determinação"
      },
      {
        english: "The tower rewards you for your honest efforts.",
        portuguese: "A torre recompensa você pelos seus esforços honestos."
      },
      {
        english: "The tower praises you for your achievements.",
        portuguese: "A torre te elogia/parabeniza pelas suas conquistas."
      },
      {
        english: "This is different from what I saw in the videos!?",
        portuguese: "Isto é diferente do que eu vi nos vídeos!?"
      },
      {
        english: "Nah. Why should I care about its tone when I just received a skill card.",
        portuguese: "Nah. Por que eu deveria me importar com o tom disso (da torre) quando eu acabei de receber uma carta de habilidade?"
      },
      {
        english: "This is the moment I've been waiting for ever since I got here...",
        portuguese: "Este é o momento que eu estava esperando desde que cheguei aqui..."
      },
      {
        english: "On top of that, a gold card is an S-rank skill...!",
        portuguese: "Além disso, um cartão dourado é uma habilidade de rank S...!"
      },
      {
        english: "Card: I want to become like you. Effect: Activates automatically upon death. After dying to the enemy, you can copy one of their skills and make it your own. You cannot copy a skill from targets that have already killed you previously. Skills are randomly copied.",
        portuguese: "Carta: Eu quero me tornar como você. Efeito: Ativa automaticamente após a morte. Depois de morrer para o inimigo, você pode copiar uma das habilidades dele e torná-la sua. Você não pode copiar uma habilidade de alvos que já o mataram anteriormente. As habilidades são copiadas aleatoriamente."
      },
      {
        english: "You can copy one of the skills of someone who kills you and make it yours. However, you die!",
        portuguese: "Você pode copiar uma das habilidades de alguém que te mata e torná-la sua. No entanto, você morre!"
      },
      {
        english: "What kind of skill is this?!",
        portuguese: "Que tipo de habilidade é essa?!?!"
      }
    ]
  }
];

const QUIZ_TYPES = [
  { id: "en-pt", name: "Inglês → Português", description: "Traduza do inglês para o português" },
  { id: "pt-en", name: "Português → Inglês", description: "Traduza do português para o inglês" },
  { id: "vocabulary", name: "Vocabulário", description: "Teste seu conhecimento de palavras" }
];

// --- ESTADO DO APLICATIVO ---
let currentState = {
  currentChapter: null,
  currentQuizType: null,
  currentQuestionIndex: 0,
  score: 0,
  selectedOption: null,
  questions: [],
  isAnswerChecked: false
};

// --- ELEMENTOS DO DOM ---
const elements = {
  mainMenu: document.getElementById('main-menu'),
  quizContainer: document.getElementById('quiz-container'),
  feedbackArea: document.getElementById('feedback-area'),
  scoreArea: document.getElementById('score-area'),
  
  currentModeLevel: document.getElementById('current-mode-level'),
  questionIndex: document.getElementById('question-index'),
  questionText: document.getElementById('question-text'),
  optionsArea: document.getElementById('options-area'),
  submitButton: document.getElementById('submit-button'),
  nextButton: document.getElementById('next-button'),
  
  feedbackMessage: document.getElementById('feedback-message'),
  correctAnswerDisplay: document.getElementById('correct-answer-display'),
  vocabDisplay: document.getElementById('vocab-display'),
  
  finalScore: document.getElementById('final-score'),
  
  backToMenu1: document.getElementById('back-to-menu-1'),
  backToMenu2: document.getElementById('back-to-menu-2'),
  backToMenu3: document.getElementById('back-to-menu-3'),
  restartButton: document.getElementById('restart-button')
};

// --- FUNÇÕES DO APLICATIVO ---

// Inicialização
function init() {
  showMainMenu();
  attachEventListeners();
}

// Anexar event listeners
function attachEventListeners() {
  elements.backToMenu1.addEventListener('click', showMainMenu);
  elements.backToMenu2.addEventListener('click', showMainMenu);
  elements.backToMenu3.addEventListener('click', showMainMenu);
  elements.restartButton.addEventListener('click', showMainMenu);
  elements.submitButton.addEventListener('click', checkAnswer);
  elements.nextButton.addEventListener('click', nextQuestion);
}

// Mostrar menu principal
function showMainMenu() {
  hideAllSections();
  elements.mainMenu.classList.remove('hidden');
  
  elements.mainMenu.innerHTML = `
    <h2>Selecione o Capítulo e Modo de Estudo</h2>
    <div class="menu-options">
      ${CHAPTERS.map(chapter => `
        <div class="chapter-section">
          <h3>${chapter.title}</h3>
          <div class="quiz-types">
            ${QUIZ_TYPES.map(quizType => `
              <button class="menu-button" 
                      onclick="startQuiz(${chapter.id}, '${quizType.id}')">
                <strong>${quizType.name}</strong>
                <span>${quizType.description}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Iniciar quiz
function startQuiz(chapterId, quizTypeId) {
  const chapter = CHAPTERS.find(c => c.id === chapterId);
  const quizType = QUIZ_TYPES.find(q => q.id === quizTypeId);
  
  if (!chapter || !quizType) return;
  
  currentState = {
    currentChapter: chapter,
    currentQuizType: quizType,
    currentQuestionIndex: 0,
    score: 0,
    selectedOption: null,
    questions: generateQuestions(chapter, quizType),
    isAnswerChecked: false
  };
  
  showQuiz();
}

// Gerar perguntas
function generateQuestions(chapter, quizType) {
  const questions = [];
  
  if (quizType.id === 'vocabulary') {
    // Para vocabulário, usar palavras únicas
    const usedWords = new Set();
    
    VOCAB_DATA.forEach(vocab => {
      if (usedWords.has(vocab.word)) return;
      usedWords.add(vocab.word);
      
      const otherOptions = VOCAB_DATA
        .filter(v => v.word !== vocab.word)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v => v.meaning);
      
      const options = [
        vocab.meaning,
        ...otherOptions
      ].sort(() => Math.random() - 0.5);
      
      questions.push({
        type: 'vocabulary',
        question: `Qual o significado de "${vocab.word}"?`,
        correctAnswer: vocab.meaning,
        options: options,
        vocabWord: vocab.word,
        vocabClass: vocab.class
      });
    });
  } else {
    // Para traduções, usar frases do capítulo
    chapter.phrases.forEach(phrase => {
      const isEnToPt = quizType.id === 'en-pt';
      const question = isEnToPt ? phrase.english : phrase.portuguese;
      const correctAnswer = isEnToPt ? phrase.portuguese : phrase.english;
      
      // Gerar opções incorretas baseadas em outras frases
      const otherPhrases = chapter.phrases
        .filter(p => p !== phrase)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      
      const incorrectOptions = otherPhrases.map(p => 
        isEnToPt ? p.portuguese : p.english
      );
      
      const options = [
        correctAnswer,
        ...incorrectOptions
      ].sort(() => Math.random() - 0.5);
      
      questions.push({
        type: 'translation',
        question: question,
        correctAnswer: correctAnswer,
        options: options,
        originalPhrase: isEnToPt ? phrase.portuguese : phrase.english
      });
    });
  }
  
  return questions.sort(() => Math.random() - 0.5);
}

// Mostrar quiz
function showQuiz() {
  hideAllSections();
  elements.quizContainer.classList.remove('hidden');
  
  const { currentChapter, currentQuizType, currentQuestionIndex, questions } = currentState;
  const currentQuestion = questions[currentQuestionIndex];
  
  elements.currentModeLevel.textContent = 
    `${currentChapter.title} - ${currentQuizType.name}`;
  
  elements.questionIndex.textContent = 
    `Questão ${currentQuestionIndex + 1} de ${questions.length}`;
  
  elements.questionText.textContent = currentQuestion.question;
  
  // Renderizar opções
  elements.optionsArea.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-button';
    button.textContent = option;
    button.addEventListener('click', () => selectOption(index));
    elements.optionsArea.appendChild(button);
  });
  
  // Resetar botões
  elements.submitButton.classList.add('hidden');
  elements.nextButton.classList.add('hidden');
  currentState.selectedOption = null;
  currentState.isAnswerChecked = false;
}

// Selecionar opção
function selectOption(optionIndex) {
  if (currentState.isAnswerChecked) return;
  
  // Remover seleção anterior
  const options = elements.optionsArea.querySelectorAll('.option-button');
  options.forEach(option => option.classList.remove('selected'));
  
  // Selecionar nova opção
  options[optionIndex].classList.add('selected');
  currentState.selectedOption = optionIndex;
  
  // Mostrar botão de verificar
  elements.submitButton.classList.remove('hidden');
}

// Verificar resposta
function checkAnswer() {
  if (currentState.selectedOption === null || currentState.isAnswerChecked) return;
  
  const { currentQuestionIndex, questions, selectedOption } = currentState;
  const currentQuestion = questions[currentQuestionIndex];
  const options = elements.optionsArea.querySelectorAll('.option-button');
  const selectedAnswer = currentQuestion.options[selectedOption];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  
  // Marcar opções
  options.forEach((option, index) => {
    option.classList.add('disabled');
    
    if (currentQuestion.options[index] === currentQuestion.correctAnswer) {
      option.classList.add('correct');
    } else if (index === selectedOption) {
      option.classList.add('incorrect');
    }
  });
  
  // Atualizar pontuação
  if (isCorrect) {
    currentState.score++;
  }
  
  // Mostrar feedback
  elements.submitButton.classList.add('hidden');
  elements.nextButton.classList.remove('hidden');
  currentState.isAnswerChecked = true;
  
  // Mostrar área de feedback se for questão de vocabulário
  if (currentQuestion.type === 'vocabulary') {
    showVocabularyFeedback(currentQuestion);
  } else if (currentQuestion.type === 'translation') {
    showTranslationFeedback(currentQuestion);
  }
}

// Mostrar feedback de vocabulário
function showVocabularyFeedback(question) {
  elements.feedbackMessage.textContent = 
    question.options[currentState.selectedOption] === question.correctAnswer 
      ? "✅ Correto! Parabéns!" 
      : "❌ Incorreto. Veja a explicação:";
  
  elements.correctAnswerDisplay.textContent = `Resposta correta: ${question.correctAnswer}`;
  elements.correctAnswerDisplay.classList.remove('hidden');
  
  elements.vocabDisplay.innerHTML = `
    <h3>Detalhes da Palavra</h3>
    <table class="vocab-table">
      <tr><th>Palavra</th><td>${question.vocabWord}</td></tr>
      <tr><th>Classe Gramatical</th><td>${question.vocabClass}</td></tr>
      <tr><th>Significado</th><td>${question.correctAnswer}</td></tr>
    </table>
  `;
}

// Mostrar feedback de tradução
function showTranslationFeedback(question) {
  const isEnToPt = currentState.currentQuizType.id === 'en-pt';
  
  elements.feedbackMessage.textContent = 
    question.options[currentState.selectedOption] === question.correctAnswer 
      ? "✅ Correto! Excelente tradução!" 
      : "❌ Tradução incorreta. Veja a correta:";
  
  elements.correctAnswerDisplay.innerHTML = `
    <strong>Resposta correta:</strong> ${question.correctAnswer}
    ${!isEnToPt ? `<br><strong>Original:</strong> ${question.originalPhrase}` : ''}
  `;
  elements.correctAnswerDisplay.classList.remove('hidden');
  
  // Mostrar palavras do vocabulário relevantes
  const relevantVocab = getRelevantVocabulary(question.question);
  if (relevantVocab.length > 0) {
    elements.vocabDisplay.innerHTML = `
      <h3>Palavras Relacionadas</h3>
      <table class="vocab-table">
        <tr>
          <th>Palavra</th>
          <th>Classe</th>
          <th>Significado</th>
        </tr>
        ${relevantVocab.map(vocab => `
          <tr>
            <td><strong>${vocab.word}</strong></td>
            <td>${vocab.class}</td>
            <td>${vocab.meaning}</td>
          </tr>
        `).join('')}
      </table>
    `;
  } else {
    elements.vocabDisplay.innerHTML = '';
  }
}

// Obter vocabulário relevante
function getRelevantVocabulary(phrase) {
  const words = phrase.toLowerCase().split(/\W+/).filter(word => word.length > 2);
  const relevant = VOCAB_DATA.filter(vocab => 
    words.some(word => vocab.word.toLowerCase().includes(word) || 
                      vocab.meaning.toLowerCase().includes(word))
  ).slice(0, 5); // Limitar a 5 palavras
  
  return relevant;
}

// Próxima questão
function nextQuestion() {
  currentState.currentQuestionIndex++;
  
  if (currentState.currentQuestionIndex < currentState.questions.length) {
    showQuiz();
  } else {
    showFinalScore();
  }
}

// Mostrar pontuação final
function showFinalScore() {
  hideAllSections();
  elements.scoreArea.classList.remove('hidden');
  
  const { score, questions } = currentState;
  const percentage = Math.round((score / questions.length) * 100);
  
  let message = '';
  if (percentage === 100) message = '🎉 Perfeito! Dominou completamente!';
  else if (percentage >= 80) message = '👏 Excelente! Quase lá!';
  else if (percentage >= 60) message = '👍 Bom trabalho! Continue praticando!';
  else if (percentage >= 40) message = '💪 Foi um bom começo! Revise e tente novamente!';
  else message = '📚 Hora de estudar! Você consegue melhorar!';
  
  elements.finalScore.innerHTML = `
    <p class="score-percentage">${percentage}% de acerto</p>
    <p class="score-detail">${score} de ${questions.length} questões corretas</p>
    <p class="score-message">${message}</p>
  `;
}

// Esconder todas as seções
function hideAllSections() {
  elements.mainMenu.classList.add('hidden');
  elements.quizContainer.classList.add('hidden');
  elements.feedbackArea.classList.add('hidden');
  elements.scoreArea.classList.add('hidden');
}

// Inicializar aplicativo quando a página carregar
document.addEventListener('DOMContentLoaded', init);