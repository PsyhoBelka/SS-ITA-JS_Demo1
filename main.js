import {chessBoard} from "./src/task-1-chess.js";
import {envelop} from "./src/task-2-envelop.js";
import {triangles} from "./src/task-3-triang.js";
import {calcPoli} from "./src/task-4-polindr.js";
import {tickets} from "./src/task-5-tickets.js";
import {sequence} from "./src/task-6-sequence.js";
import {fibo} from "./src/task-7-fibo.js";


window.chessBoard = chessBoard;
window.envelop = envelop;
window.printTriang = triangles;
window.calcPoli = calcPoli;
window.tickets = tickets;
window.posled = sequence;
window.fibo = fibo;

//---Init controls---
window.showTaskControls = showTaskControls;
window.clearOutput = clearOutput;

window.applyT1data = applyT1data;
window.applyT2data = applyT2data;
window.applyT3data = applyT3data;
window.applyT4data = applyT4data;
window.applyT5data = applyT5data;
window.applyT6data = applyT6data;
window.applyT7data = applyT7data;

//-------------------

const outputBox = document.getElementById('output-box');
const hiddenClass = 'unhidden';

function showTaskControls(ctr) {
    const ctrId = `${ctr.id}-box`;
    console.log(`show ${ctrId}`);
    // let status = document.getElementById(ctrId).hidden;
    let status = document.getElementById(ctrId).classList.contains(hiddenClass);
    switch (status) {
        case false: {
            document.getElementById(ctrId).classList.add(hiddenClass);
            break;
        }
        case true: {
            document.getElementById(ctrId).classList.remove(hiddenClass);
            break;
        }
    }
    clearOutput();
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
    outputBox.value = JSON.stringify(triangles(data));
}

function applyT4data() {
    const pal = document.getElementById('t4-palindrome').value;
    console.log(pal);
    outputBox.value = JSON.stringify(calcPoli(Number(pal)));
}

function applyT5data() {
    const min = document.getElementById('t5-min').value;
    const max = document.getElementById('t5-max').value;
    console.log([min, max]);
    outputBox.value = JSON.stringify(tickets({min: Number(min), max: Number(max)}));
}

function applyT6data() {
    const n = document.getElementById('t6-n').value;
    const m = document.getElementById('t6-m').value;
    console.log([n, m]);
    outputBox.value = JSON.stringify(sequence(Number(m), Number(n)));
}

function applyT7data() {
    const min = document.getElementById('t7-min').value;
    const max = document.getElementById('t7-max').value;
    const length = document.getElementById('t7-length').value;
    console.log([min, max, length]);
    let data = {};
    if (min.length !== 0 && max.length !== 0) {
        data.min = Number(min);
        data.max = Number(max);
    } else if (length.length !== 0) {
        data.length = Number(length);
    }
    console.log(data);
    outputBox.value = JSON.stringify(fibo(data));
}