import {fibo} from "../../src/task-7-fibo.js";
import {help} from "../../src/Validator.js";

const assert = chai.assert;

export function task7Tests() {
    describe('T7. Fibonacci tests', function () {
        it('should return error msg if no req fields min/max', function () {
            assert.deepEqual(fibo({a: 2, d: 4}), help('bad input!'))
        });
        it('should return error msg if one of req fields missed', function () {
            assert.deepEqual(fibo({min: 2, d: 4}), help('bad input!'))
        });
        it('should return error msg if one of req fields missed', function () {
            assert.deepEqual(fibo({a: 2, max: 4}), help('bad input!'))
        });
        it('should return error msg if all fields present', function () {
            assert.deepEqual(fibo({min: 2, max: 4, length: 3}), help('bad input!'))
        });
        it('should return error msg if params are wrong min=-2', function () {
            assert.deepEqual(fibo({min: -2, max: 3}), help('min and max should be a positive number!'))
        });
        it('should return error msg if params are wrong max=-2', function () {
            assert.deepEqual(fibo({min: 34, max: -2}), help('min and max should be a positive number!'))
        });
        it('should return error msg if min>max', function () {
            assert.deepEqual(fibo({min: 34, max: 2}), help('min should be less then max!'))
        });
        it('should return sequence in range 2-345', function () {
            assert.deepEqual(fibo({min: 2, max: 345}), [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233])
        });
        it('should return sequence with elements\' length 6', function () {
            assert.deepEqual(fibo({length: 6}), [121393, 196418, 317811, 514229, 832040])
        });
    });
}