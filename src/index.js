const List = require('prompt-list');
const game = require("./game");


const startGame = async n => {
    for (let i = 0; i < n; i++) {
        await game.choose.run()
            .then(function (userInput) {
                const aiInput = game.aiChoose();
                console.log(`${userInput} : ${aiInput} => ${game.processTurn({
                    userInput,
                    aiInput
                })} \n`);
            });
    }
    game.printWinner();
}

startGame(3)