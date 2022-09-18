export class Quiz {
  score = 0;
  questionIndex = 0;
  constructor(questions) {
    this.questions = questions;
  }
  getQuestion() {
    return this.questions[this.questionIndex];
  }
  guess(answer) {
    //metodo llamado desde afuera modifica a su objeto
    if (this.getQuestion().correctAnswer(answer)) this.score++;
    this.questionIndex++;
  }
  isEnded() {
    return this.questions.length === this.questionIndex;
  }
}
