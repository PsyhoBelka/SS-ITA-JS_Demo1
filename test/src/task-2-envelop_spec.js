import {calc} from "../../src/task-2-envelop.js";

describe('Tests for envelops', function () {
    it('should return number', function () {
        assert.isNumber(calc(2,4,7,3))
    });
});
