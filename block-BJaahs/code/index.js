


// }
// const testData = {
//     title: 'Where is the capital of Jordan',
//     options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     correctAnswerIndex: 1,


let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctANswerIndex = 1;

function isAnswerCorrect(index){
    if(correctANswerIndex == index){
        return true;
    }
    else{
        return false;
    }
}
function getCorrectANswer(){
    return options[correctANswerIndex];
}

let quiz ={
    title: 'Where is the capital of Jordan',
    options:['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctANswerIndex:1,
    isAnswerCorrect(index){
        if(quiz.correctANswerIndex == index){
            return true;
        }
        else{
            return false;
        }
    },
    getCorrectANswer(){
        return quiz.options[quiz.correctANswerIndex];
    }
}

function createQuiz(title,options,correctIndex){
    let quiz = {};
    quiz.title = title;
    quiz.options = options;
    quiz.correctANswerIndex = correctIndex;
    quiz.isAnswerCorrect = function(index){
        return quiz.correctANswerIndex ===index;
    }
    quiz.getCorrectANswer = function(){
        return quiz.options[quiz.correctANswerIndex];
    }
    return quiz;
}

function createQuiz(title,options,correctIndex){
    let quiz = {};
    quiz.title = title;
    quiz.options = options;
    quiz.correctANswerIndex = correctIndex;
    quiz.isAnswerCorrect = function(index){
        return this.correctANswerIndex ===index;
    }
    quiz.getCorrectANswer = function(){
        return this.options[this.correctANswerIndex];
    }
    return quiz;
}


let firstQuestion = createQuiz('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);

let secondQuestion = createQuiz('Where is the capital of Australia',['Canberra', 'Sydney', 'Kuwait City', 'Melbourne'],0)