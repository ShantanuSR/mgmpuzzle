const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");

const myQuestions = [
  {
    question:
      "The pyruvate formed during glycolysis enters mitochondria and is converted to Acetyl CoA . The enzyme in this Link reaction is",
    answers: {
      a: "pyruvic acid dehydrogenase",
      b: "Acetate dehydrogenase",
      c: "Isocitrate dehydrogenase ",
      d: "Aconitase",
    },
    correctAnswer: "a",
  },
  {
    question:
      " In first step of Krebs cycle , Acetyl CoA( C2) is added to Oxaloacetate ( C4) to form citrate ( C6 ) . the enzyme 1 involved in this step is ",
    answers: {
      a: "Aconitase",
      b: "Citrate synthase",
      c: "Acetate dehydrogenase",
      d: "Isocitrate dehydrogenase",
    },
    correctAnswer: "b",
  },
  {
    question:
      "The second step of Krebs cycle is the conversion of Citrate (C6) to isocitrate (C6). The enzyme 2 involve in this step is",
    answers: {
      a: "Isocitrate dehydrogenase",
      b: "Citrate synthase",
      c: "Acetate dehydrogenase",
      d: "Aconitase",
    },
    correctAnswer: "d",
  },
  {
    question:
      "In the third step of Krebs cycle, Isocitrate (C6) is converted into alpha ketoglutarate (C5) by dehydrogenation and decarboxylation. The enzyme 3 involved in this step is",
    answers: {
      a: "Citrate dehydrogenase",
      b: "Isocitrate dehydrogenase",
      c: "Alpha-ketoglutarate dehydrogenase",
      d: "Acetate dehydrogenase",
    },
    correctAnswer: "b",
  },
  {
    question:
      "In the Fourth step of Krebs cycle, alpha-ketoglutarate (C5) is oxidatively decarboxylated to form succinyl- COA (C4), a high energy compound. The enzyme 4 involved in this step is",
    answers: {
      a: "Alpha ketoglutarate dehydrogenase",
      b: "Isocitrate dehydrogenase",
      c: "Acetate dehydrogenase",
      d: "Aconitase",
    },
    correctAnswer: "a",
  },
  {
    question:
      "The Fifth step of Krebs cycle is the conversion of Succinyl CoA(C4) to succinate (C4) by substrate level phosphorylation. The enzyme 5 involved in this step is",
    answers: {
      a: "Succinyl-CoA synthetase",
      b: "Succinyl-CoA dehydrogenase",
      c: "Fumarase",
      d: "Isocitrate dehydrogenase",
    },
    correctAnswer: "a",
  },
  {
    question:
      "In the sixth step of Krebs cycle, Succinate(C4) is converted to fumarate (C4) by dehydrogenation. The enzyme 6, located in the inner mitochondrial membrane is",
    answers: {
      a: "Succinyl-CoA dehydrogenase",
      b: "Succinate synthase",
      c: "Succinate dehydrogenase",
      d: "Fumarase",
    },
    correctAnswer: "c",
  },
  {
    question:
      "In the seventh step of Krebs cycle, Fumarate(C4) is converted to malate(C4) with the addition of water. The enzyme 7, involved in this step is ",
    answers: {
      a: "Fumarase",
      b: "Aconitase",
      c: "Malate dehydrogenase",
      d: "Malate synthase",
    },
    correctAnswer: "a",
  },
  {
    question:
      "In the final eighth step, Malate (C4) is converted to oxaloacetate(C4) with NADH synthesis. The enzyme involved is",
    answers: {
      a: "Malate dehydrogenase",
      b: "Malate synthase",
      c: "Oxaloacetate synthase",
      d: "Oxaloacetate dehydrogenase",
    },
    correctAnswer: "a",
  },
  {
    question: "Krebs cycle is also called as",
    answers: {
      a: "Citric acid cycle",
      b: "TCA cycle",
      c: "Both a and b",
      d: "None of these",
    },
    correctAnswer: "c",
  },
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
      );
    }

    output.push(
      `<div class="question">${currentQuestion.question}</div>
            <div class="options">${answers.join("")}</div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".options");
  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });

  const score = numCorrect / myQuestions.length;
  const message =
    score >= 0.5
      ? `You answered ${numCorrect} out of ${myQuestions.length} questions correctly. Well done!`
      : `You answered ${numCorrect} out of ${myQuestions.length} questions correctly. Better luck next time!`;

  quizContainer.innerHTML = `<div>${message}</div>`;
}

buildQuiz();

submitButton.addEventListener("click", showResults);
