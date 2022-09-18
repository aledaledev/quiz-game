export class Question {
    constructor({question,choices,answer}){
        this.question=question,
        this.choices=choices,
        this.answer=answer
    }
    correctAnswer(response){
        return response === this.answer
    }
}