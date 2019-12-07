import {triangles} from "../../src/task-3-triang.js";
import {help} from "../../src/Validator.js";

const assert = chai.assert;

export function task3Tests() {
    describe('T3. Triangles tests', function () {
        it('should return error msg if no params', function () {
            assert.deepEqual(triangles(), help('no data!'))
        });
        it('should return error msg if no data', function () {
            assert.deepEqual(triangles([]), help('no data!'))
        });
        it('should return error msg if invalid triangle', function () {
            assert.deepEqual(triangles([{name:'qq',a:0,b:3,c:4}]),help('Triangle qq is invalid!'))
        });
        it('should return 2 triangles ordered by square in desc order', function () {
            assert.deepEqual(triangles(
                [
                    {name: 'qq', a: 2.2, b: 2.4, c: 3},
                    {name: 'ww', a: 6.4, b: 5, c: 6}
                ]),
                [
                    {"a": 6.4, "b": 5, "c": 6, "name": 'ww', "square": 14.14},
                    {"a": 2.2, "b": 2.4, "c": 3, "name": "qq", "square": 2.61}
                ])
        });
    });
}