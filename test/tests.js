import {describe} from "mocha";
import {assert} from "chai";

import {chessBoard} from "../src/task-1-chess.js";
import {printTriang} from "../src/task-3-triang.js";
import {polindrom} from "../src/task-4-polindr.js";


describe('test chessBoard printing', function () {
    it('should print chessboard 3*4 ', function () {
        assert.equal(chessBoard(4, 3, '*'), '* * * * \n * * * *\n* * * *')
    });
    it('should return error', function () {
        assert.equal(chessBoard(4, '5', '*'), {status: 'failed', reason: `5 is not a number!`})
    });
});

describe('test triangles', function () {
    it('should return 2 triang in asc order', function () {
        assert.equal(printTriang([{name: 'qq', a: 2.2, b: 2.4, c: 3}, {name: 'ww', a: 6.4, b: 5, c: 6}]), [{
            "a": 6.4,
            "b": 5,
            "c": 6,
            "name": 'ww',
            "square": 14.14
        }, {
            "a": 2.2,
            "b": 2.4,
            "c": 3,
            "name": "qq",
            "square": 2.61
        }]);
    });
});

describe('test polindrom func', function () {
    it('should return 0 if no polindroms', function () {
        assert.equal(polindrom(123456), 0);
    });

    it('should return list of polindroms if found', function () {
        assert.isArray(polindrom(1223435))
    });
});