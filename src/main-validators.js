import {Validator} from "./Validator.js";


const btn1 = document.getElementById('t1-apply');
const btn2 = document.getElementById('t2-apply');
const validator = new Validator();

btn1.addEventListener('click', function (event) {
    console.log(event);
    let task1Elems = document.getElementsByClassName('task1');
    let valid = 0;
    for (let i = 0; i < task1Elems.length; i++) {
        if (task1Elems[i].validity.valid) {
            valid++;
        }
    }

    if (valid !== task1Elems.length) {
        alert('Wrong data for task1');
    } else {
        applyT1data();
    }
}, false);

btn2.addEventListener('click', function () {
    // let task2Elems = document.getElementsByClassName('task2');
    let task2Elems = document.querySelectorAll('.task2');
    let valid = 0;
    // for (let i = 0; i < task2Elems.length; i++) {
    //     /*if (task2Elems[i].validity.valid) {
    //         valid++;
    //     }*/
    // }
    task2Elems.forEach(x => {
        if (validator.isNumAndPositive(x.value) && x.value !== '') {
            valid++;
        }
    });

    if (valid !== task2Elems.length) {
        alert('Wrong data for task2');
    } else {
        applyT2data();
    }
}, false);