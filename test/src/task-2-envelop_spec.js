import {envelop} from "../../src/task-2-envelop.js";

const assert = chai.assert;

export function task2Tests() {
    describe('T2. Envelops tests', function () {
        it('should return number', function () {
            assert.isNumber(envelop(2, 4, 7, 3))
        });
        it('should return 1 if ab fit cd', function () {
            assert.equal(envelop(2, 3, 4, 2), 1);
        });
        it('should return 2 if cd fit ab', function () {
            assert.equal(envelop(4, 2, 2, 3), 2);
        });
        it('should return 0 if not fitted', function () {
            assert.equal(envelop(2, 2, 2, 2), 0);
        });
    });
}
