const quizData = [
    {
      question: "In the Merchant of Venice, what are the three caskets Portia has for her suitors?",
      options: ["Gold, Silver, Bronze", "Wood, Stone, Gold", "Gold, Silver, Lead", "Silver, Bronze, Clay"],
      answer: "Gold, Silver, Lead"
    },
    {
      question: "Where is the quote 'To be or not to be' from?",
      options: ["Romeo and Juliet", "Hamlet", "King Lear", "Ophelia"],
      answer: "Hamlet"
    },
    {
      question: "Which of the following is NOT a comedy?",
      options: ["A Midsummer Night's Dream", "Othello", "As You Like It", "Much Ado About Nothing"],
      answer: "Othello"
    },
    {
      question: "What is Shakespeare's longest play?",
      options: ["Hamlet", "Antony and Cleopatra", "Julius Caesar", "The Merchant of Venice"],
      answer: "Paris"
    },
    {
      question: "Which of the following is not wriiten by Shakespeare?",
      options: ["Cymbeline", "King John", "Love's Labours Lost", "The White Devil"],
      answer: "Paris"
    },

    document.getElementById("question").style.fontSize = "x-large"
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();