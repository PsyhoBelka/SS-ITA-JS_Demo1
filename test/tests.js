import {task1Tests} from "./src/task-1-chessboard_spec.js";
import {task2Tests} from "./src/task-2-envelop_spec.js";
import {task3Tests} from "./src/task-3-triang_spec.js";
import {task4Tests} from "./src/task-4-polindr_spec.js";
import {task5Tests} from "./src/task-5-tickets_spec.js";
import {task6Tests} from "./src/task-6-sequnce_spec.js";
import {task7Tests} from "./src/task-7-fibo_spec.js";

mocha.setup('bdd');

task1Tests();
task2Tests();
task3Tests();
task4Tests();
task5Tests();
task6Tests();
task7Tests();

mocha.run();