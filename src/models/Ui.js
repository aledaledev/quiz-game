export class Ui {
  constructor() {}
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
    choices.map((choice) => {
      const button = document.createElement("button");
      button.className = "btn";
      button.innerHTML = choice;
      button.addEventListener("click", () => callback(choice));
      fragment.appendChild(button);
    });
    choicesContainer.appendChild(fragment);
  }
  showProgress(currentProgress) {
    //tambien funciona solo con id
    progress.innerHTML = `Question progress ${currentProgress} of 4`;
  }
  showScore(currentScore) {
    const main = document.getElementById("game");
    main.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.classList.add(
      "text-4xl",
      "text-center",
      "my-64",
      "font-bold",
      "text-teal-800"
    );
    h1.innerHTML = `your score is ${currentScore}!`;
    main.appendChild(h1);
  }
}
