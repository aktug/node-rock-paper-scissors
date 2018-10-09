require('mocha');

var assert = require('assert');
var game = require('../game');

describe('module exports', function () {
    it('should export a object', function () {
        assert.equal(typeof game, 'object');
    });
    it('should export a function - aiChoose', function () {
        assert.equal(typeof game.aiChoose, 'function');
    });
    it('should export a function - processTurn', function () {
        assert.equal(typeof game.processTurn, 'function');
    });
    it('should export a object - choose', function () {
        assert.equal(typeof game.choose, 'object');
    });
    it('should export a function - printWinner', function () {
        assert.equal(typeof game.printWinner, 'function');
    });
});

describe('random', function () {
    game.resetScore();
    it('calcWinner should be run properly - AI', function () {
        const result = game.processTurn({
            userInput: "ROCK",
            aiInput: "PAPER"
        });
        assert.equal(result, "LOSE");
    });
    game.resetScore();
    it('calcWinner should be run properly - USER', function () {
        const result = game.processTurn({
            userInput: "PAPER",
            aiInput: "ROCK"
        });
        assert.equal(result, "WIN");
    });
    game.resetScore();
    it('calcWinner should be run properly - DRAW', function () {
        const result = game.processTurn({
            userInput: "ROCK",
            aiInput: "ROCK"
        });
        assert.equal(result, "DRAW");
    });
    game.resetScore();
});