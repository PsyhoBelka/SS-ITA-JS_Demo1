import {chessBoard} from "../../src/task-1-chess.js";

describe("Chessboard tests", function () {

    it("shoud return a string", function () {
        assert.isString(chessBoard(3,4,'*'))
    });

    it('should return valid string for 3*4 board', function () {
        assert.equal(chessBoard(3,4,'*'),'* * * \n * * *\n* * * \n * * *')
    });
});