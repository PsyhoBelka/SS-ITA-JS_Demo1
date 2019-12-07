import {chessBoard} from "../../src/task-1-chess.js";
import {help} from "../../src/Validator.js";

const assert = chai.assert;

export function task1Tests() {
    describe("T1. Chessboard tests", function () {
        it("should return a string", function () {
            assert.isString(chessBoard(3, 4, '*'));
        });
        it('should return valid string for 3*4 board', function () {
            assert.equal(chessBoard(3, 4, '*'), '* * * \n * * *\n* * * \n * * *');
        });
        it('should error msg if height negative', function () {
            assert.deepEqual(chessBoard(-2, 4, '*'), help('-2 is not a number or not positive!'));
        });
        it('should error msg if width negative', function () {
            assert.deepEqual(chessBoard(2, -2, '*'), help('-2 is not a number or not positive!'));
        });
        it('should return error msg if symbol not single', function () {
            assert.deepEqual(chessBoard(2, 2, '**'), help('\'**\' is not a string or more then 1 symbol!'));
        });
    });
}