import {sequence} from "../../src/task-6-sequence.js";
import {help} from "../../src/Validator.js";

const assert = chai.assert;

export function task6Tests() {
    describe('T6. Sequence tests', function () {
        it('should return error msg if input have negative number', function () {
            assert.deepEqual(sequence(-1, 4), help('Input must be a positive number!'))
        });
        it('should return error msg if input have negative number', function () {
            assert.deepEqual(sequence(4, -3), help('Input must be a positive number!'))
        });
        it('should return error msg if input have 0', function () {
            assert.deepEqual(sequence(0, 3), help('Input must be a bigger than 0!'))
        });
        it('should return error msg if input have 0', function () {
            assert.deepEqual(sequence(4, 0), help('Input must be a bigger than 0!'))
        });
        it('should return string', function () {
            assert.isString(sequence(24, 5))
        });
        it('should return valid string', function () {
            assert.isString(sequence(24,6),'5, 6, 7, 8, 9, 10')
        });
    });
}