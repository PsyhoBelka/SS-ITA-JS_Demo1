import {printTriag} from "../../src/task-3-triang.js";

describe('test triangles', function () {
    it('should return 2 triang in asc order', function () {
        assert.equal(printTriag([{name: 'qq', a: 2.2, b: 2.4, c: 3}, {name: 'ww', a: 6.4, b: 5, c: 6}]), [{
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