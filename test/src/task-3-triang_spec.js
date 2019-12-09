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
            assert.deepEqual(triangles([{name: 'wsd', a: 0, b: 3, c: 4}]), help('Triangle WSD is invalid!'))
        });
        it('should return 2 triangles ordered by square in desc order', function () {
            assert.deepEqual(triangles(
                [
                    {name: 'qws', q: 2.2, w: 2.4, s: 3},
                    {name: 'wed', w: 6.4, e: 5, d: 6}
                ]),
                [
                    {name: "WED", w: 6.4, e: 5, d: 6, square: 14.14},
                    {name: "QWS", q: 2.2, w: 2.4, s: 3, square: 2.61}
                ])
        });
        it('should return error msg if duplicate side name', function () {
            assert.deepEqual(triangles(
                [
                    {name: 'qww', a: 2.2, b: 2.4, c: 3},
                    {name: 'wed', a: 6.4, b: 5, c: 6}
                ]
            ), help(`Triangle QWW is invalid!`))
        });
    });
}