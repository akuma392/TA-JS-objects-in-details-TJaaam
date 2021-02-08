class Question{
    constructor (title,options,correctAnswerIndex){
            this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    };
    isAnswerCorrect (index){
        return this.correctAnswerIndex === index;
    };
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}