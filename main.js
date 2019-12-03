import {chessBoard} from "./src/task-1-chess.js";
import {calc} from "./src/task-2-envelop.js";
import {printTriang} from "./src/task-3-triang.js";
import {calcPoli} from "./src/task-4-polindr.js";
import {tickets} from "./src/task-5-tickets.js";
import {posled} from "./src/task-6-posled.js";
import {fibo} from "./src/task-7-fibo.js";


// window.chessBoard = chessBoard;
window.calc = calc;
window.printTriang = printTriang;
window.calcPoli = calcPoli;
window.tickets = tickets;
window.posled = posled;
window.fibo = fibo;

document.getElementById('task1').onclick = chessBoard;
// console.log(chessBoard(3, 4, '*'));
// console.log(calc(1, 2, 3, 4));
// console.log(printTriang([
//     {name: 'tr1', a: 2.2, b: 2.4, c: 3},
//     {name: 'tr2', a: 6.4, b: 5, c: 6},
//     {name: 'tr3', a: 5.34, b: 2, c: 6},
//     {name: 'tr4', a: 12, b: 4, c: 6},
//     {name: 'tr5', a: 10, b: 5, c: 8},
//     {name: 'tr6', a: 10, b: 1, c: '23'}
// ]));