// protypal pattern

// let questionMethod = {
//     isAnswerCorrect: function(index){
//             return this.correctAnswerIndex === index
//     },
//     getCorrectAnswer: function(){
//         return this.options[this.correctAnswerIndex];
//     }
// }

// function createQuestion(title,options,correctAnswerIndex){
//     let question = Object.create(questionMethod);
//     question.title = title;
//     question.options = options;
//     question.correctAnswerIndex = correctAnswerIndex;

//     return question;
// };

// Pseudoclassical Pattern

// function CreateQuestion(title,options,correctAnswerIndex){
//     // let question = Object.create(questionMethod);
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;

   
// };


//  CreateQuestion.prototype = {
//     isAnswerCorrect: function(index){
//             return this.correctAnswerIndex === index
//     },
//     getCorrectAnswer: function(){
//         return this.options[this.correctAnswerIndex];
//     }
// };

// class pattern

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

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );