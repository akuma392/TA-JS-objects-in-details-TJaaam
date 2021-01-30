// let user1 = "Arya";
// let user1Score = 0;

// function increaseScore(value =1){
//     user1Score = user1Score + value;
//     return user1Score;
// }

// function decreaseScore(value =1){
//     user1Score = user1Score - value;
//     return user1Score;
// }

// function usernameChange(name){
//     user1 = name;
//     return user1;
// }

// let user2 = {
//     name: "John",
//     sore: 0,
//     increaseScore(value =1){
//         user2.score = user2.score + value;
//         return user2.score;
//     },
//     decreaseScore(value=1){
//         user2.score = user2.score - value;
//         return user2.score;
//     },
//     usernameChange(name){
//         user2.name = name;
//         return user2.name;
//     }


// }


let title = "";
let options = [];
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
    title: "",
    options:[],
    correctANswerIndex:1,
    isAnswerCorrect(index){
        if(correctANswerIndex == index){
            return true;
        }
        else{
            return false;
        }
    },
    getCorrectANswer(){
        return options[correctANswerIndex];
    }
}