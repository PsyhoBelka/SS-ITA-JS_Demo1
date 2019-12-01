import {chessBoard} from "./src/task-1-chess.js";
import {calc} from "./src/task-2-envelop.js";
import {printTriag} from "./src/task-3-triang.js";


console.log(chessBoard(3, 4, '*'));
console.log(calc(1, 2, 3, 4));
console.log(printTriag([
    {name: 'tr1', a: 2.2, b: 2.4, c: 3},
    {name: 'tr2', a: 6.4, b: 5, c: 6},
    {name: 'tr3', a: 5.34, b: 2, c: 6},
    {name: 'tr4', a: 12, b: 4, c: 6},
    {name: 'tr5', a: 10, b: 5, c: 8},
    {name: 'tr6', a: 10, b: 1, c: '23'}
]));