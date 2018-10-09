const List = require('prompt-list');

const choices = {
    0: "ROCK",
    1: "PAPER",
    2: "SCISSORS",
};

const choose = new List({
    name: 'choose',
    message: 'Rock, Paper or Scissors ?',
    choices: Object.values(choices)
});

let score = {
    YOU: 0,
    AI: 0,
}

const resetScore = () => score = {YOU:0,AI:0};

const aiChoose = () => choices[Math.floor(Math.random() * 3)];

const gameEngine = ({
    userInput,
    aiInput
}) => {
    if (userInput === aiInput) return "draw";
    switch (userInput) {
        case choices[0]:
            return aiInput === choices[2];
        case choices[1]:
            return aiInput === choices[0];
        case choices[2]:
            return aiInput === choices[1];
        default:
            return false;
    }
}

const calcWinner = result => {
    result !== "draw" ? (result ? score.YOU++ : score.AI++) : null;
    return result !== "draw" ? (result ? "WIN" : "LOSE") : "DRAW";
}

const printWinner = () => {
    console.log(`\n -------------- \n${score.YOU} : ${score.AI}\n > ${score.YOU===score.AI ? "DRAW" : (score.YOU>score.AI ? "YOU" : "AI")} < \n --------------`);
}

const processTurn = ({
    userInput,
    aiInput
}) => {
    const result = gameEngine({
        userInput,
        aiInput
    });
    return calcWinner(result);
}


module.exports.processTurn = processTurn;
module.exports.aiChoose = aiChoose;
module.exports.choose = choose;
module.exports.printWinner = printWinner;
module.exports.score = score;
module.exports.resetScore = resetScore;