import {chessBoard} from "./src/task-1-chess.js";
import {envelop} from "./src/task-2-envelop.js";
import {printTriang} from "./src/task-3-triang.js";
import {calcPoli} from "./src/task-4-polindr.js";
import {tickets} from "./src/task-5-tickets.js";
import {posled} from "./src/task-6-posled.js";
import {fibo} from "./src/task-7-fibo.js";


window.chessBoard = chessBoard;
window.envelop = envelop;
window.printTriang = printTriang;
window.calcPoli = calcPoli;
window.tickets = tickets;
window.posled = posled;
window.fibo = fibo;

function a1() {
    console.log('form output');
    let btn=document.getElementById('t1b').innerText;
    switch (btn) {
        case 'show':{btn='hide';break;}
        case 'hide':{btn='show';break;}
    }
    document.getElementById('t1b').innerText=btn;
    document.getElementById('t1p').hidden = 'true';
}

// document.getElementById('t1-form').onclick=a1;
document.getElementById('t1b').onclick = a1;
// console.log(chessBoard(3, 4, '*'));
// console.log(envelop(1, 2, 3, 4));
// console.log(printTriang([
//     {name: 'tr1', a: 2.2, b: 2.4, c: 3},
//     {name: 'tr2', a: 6.4, b: 5, c: 6},
//     {name: 'tr3', a: 5.34, b: 2, c: 6},
//     {name: 'tr4', a: 12, b: 4, c: 6},
//     {name: 'tr5', a: 10, b: 5, c: 8},
//     {name: 'tr6', a: 10, b: 1, c: '23'}
// ]));