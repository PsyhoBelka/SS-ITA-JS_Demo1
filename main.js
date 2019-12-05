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

//---Init controls---
window.showTaskControls = showTaskControls;
window.clearOutput = clearOutput;

window.applyT1data = applyT1data;
window.applyT2data = applyT2data;
window.applyT3data = applyT3data;
window.applyT4data = applyT4data;
//-------------------

const outputBox = document.getElementById('output-box');

function showTaskControls(ctr) {
    const ctrId = `${ctr.id}-box`;
    console.log(`show ${ctrId}`);
    let status = document.getElementById(ctrId).hidden;
    switch (status) {
        case true: {
            document.getElementById(ctrId).hidden = false;
            break;
        }
        case false: {
            document.getElementById(ctrId).hidden = true;
            break;
        }
    }
}

function clearOutput() {
    document.getElementById('output-box').value = '';
}

function applyT1data() {
    const width = document.getElementById('t1-width').value;
    const height = document.getElementById('t1-height').value;
    const symbol = document.getElementById('t1-symbol').value;
    console.log(width, height, symbol);
    outputBox.value = chessBoard(Number(width), Number(height), symbol);
}

function applyT2data() {
    const a = document.getElementById('t2-a').value;
    const b = document.getElementById('t2-b').value;
    const c = document.getElementById('t2-c').value;
    const d = document.getElementById('t2-d').value;
    console.log(a, b, c, d);
    outputBox.value = JSON.stringify(envelop(Number(a), Number(b), Number(c), Number(d)));
}

function applyT3data() {
    const trNum = 3;
    let data = [];
    let a, b, c;
    let name;
    for (let i = 1; i <= trNum; i++) {
        name = document.getElementById(`t3-tr${i}-name`).value;
        [a, b, c] = document.getElementById(`t3-tr${i}-sides`).value.split(',');
        data.push({name: name, a: Number(a), b: Number(b), c: Number(c)});
    }
    console.log(data);
    outputBox.value = JSON.stringify(printTriang(data));
}

function applyT4data() {
    const pal = document.getElementById('t4-palindrome').value;
    console.log(pal);
    outputBox.value = JSON.stringify(calcPoli(Number(pal)));
}