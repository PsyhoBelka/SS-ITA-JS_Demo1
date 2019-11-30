// export const isNumber = (num) => {
//     return Number.isInteger(num);
// };
//
// export const isString = (str) => {
//     return typeof str === 'string';
// };
//
// export const isNumInPositiveRange = (num) => {
//     return num > 0;
// };

export default class Validator {
    isNumber = (num) => {
        return Number.isInteger(num);
    };
    isString = (str) => {
        return typeof str === 'string';
    };
    isNumInPositiveRange = (num) => {
        return num > 0;
    };
}