import {tickets} from "../../src/task-5-tickets.js";
import {help} from "../../src/Validator.js";

const assert = chai.assert;

export function task5Tests() {
    (describe('T5. Tickets tests', function () {
        it('should return error msg if invalid range {min:0,max:0}', function () {
            assert.deepEqual(tickets({min: 0, max: 0}), {status: "failed", reason: "Invalid ticket range!"});
        });
        it('should return error msg if invalid range {min:-1,max:999}', function () {
            assert.deepEqual(tickets({min: -1, max: 999}), help('Tickets must be positive integer!'));
        });
        it('should return error msg if invalid range {min:999,max:-1}', function () {
            assert.deepEqual(tickets({min: 999, max: -1}), help('Tickets must be positive integer!'));
        });
        it('should return error msg if invalid range {min:33,max:33}', function () {
            assert.deepEqual(tickets({min: 33, max: 33}), help('Invalid ticket range!'));
        });
        it('should return error msg if invalid range {min:33,max:1000000}', function () {
            assert.deepEqual(tickets({min: 33, max: 1000000}), help('Invalid max, should be less then 1 000 000'));
        });
        it('should return draw if max range {min: 0, max: 999999}', function () {
            assert.deepEqual(tickets({min: 0, max: 999999}), {simpleCheck: 55252, hardCheck: 55252, winner: "draw"})
        });
    }));
}