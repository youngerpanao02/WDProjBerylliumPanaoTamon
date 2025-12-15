const quizData = [
    {
      question: "Where was Shakespeare born?",
      options: ["Paris", "Stratford-upon-Avon", "Venice", "New York"],
      answer: "Stratford-upon-Avon"
    },
    {
      question: "What year was Shakespeare born?",
      options: ["May 1564", "May 1563", "April 1564", "April 1563"],
      answer: "April 1564"
    },
    {
      question: "When did Shakespeare die?",
      options: ["1620", "1619", "1616", "1613"],
      answer: "1616"
    },
    {
      question: "How many words did Shakespeare invent?",
      options: ["83", "709", "420", "154"],
      answer: "420"
    },
    {
      question: "How many plays did Shakespeare write?",
      options: ["39", "51", "67", "27"],
      answer: "39"
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