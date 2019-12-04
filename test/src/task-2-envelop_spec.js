import {envelop} from "../../src/task-2-envelop.js";

describe('Tests for envelops', function () {
    it('should return number', function () {
        assert.isNumber(envelop(2,4,7,3))
    });
});
