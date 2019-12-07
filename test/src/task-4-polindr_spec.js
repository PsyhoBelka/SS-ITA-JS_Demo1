import {palindrome} from "../../src/task-4-polindr.js";
import {help} from "../../src/Validator.js";

const assert = chai.assert;

export function task4Tests() {
    describe('T4. Palindrome tests', function () {
        it('should return error msg if input not a number', function () {
            assert.deepEqual(palindrome('3333'), help('Input must be a number and positive!'));
        });
        it('should return error msg if input is negative', function () {
            assert.deepEqual(palindrome(-1),help('Input must be a number and positive!'))
        });
        it('should return founded polindromes', function () {
            assert.deepEqual(palindrome(12332133),["33", "2332", "123321"])
        });
    });
}