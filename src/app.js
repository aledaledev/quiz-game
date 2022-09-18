import { Quiz } from "./models/Quiz.js";
import { Ui } from "./models/Ui.js";
import { getData } from "./getData.js";

function renderQuiz(quiz, ui) {
  if (quiz.isEnded()) {
    ui.showScore(quiz.score)
  } else {
    ui.showQuestion(quiz.getQuestion().question);
    ui.showChoices(quiz.getQuestion().choices, (selectedChoice) => {
      quiz.guess(selectedChoice);
      renderQuiz(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex)
  } 
}
const renderData = async () => {
  const newData = await getData();
  const quiz = new Quiz(newData);
  const ui = new Ui();
  renderQuiz(quiz, ui);
};
renderData();