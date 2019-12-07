const className = 'task1';

function resetStyles(elem) {
    document.getElementById(elem.id).validity.valid = true;
    document.getElementById(`${elem.id}`).value = '';
    document.getElementById(`${elem.id}-hint`).style.display = 'none';
}

function validate(elem) {
    if (elem.value === '') {
        document.getElementById(elem.id).validity.valid = false;
        document.getElementById(`${elem.id}-hint`).style.display = 'block';
    } else {
        document.getElementById(elem.id).validity.valid = true;
        document.getElementById(`${elem.id}-hint`).style.display = 'none';
    }

    validateForm();
}

function validateForm() {
    let elems = document.getElementsByClassName(className);
    let isValid = 0;
    Array.prototype.forEach.call(elems, function (elem) {
        elem.validity.valid ? isValid++ : 0;
    });

    document.getElementById(`${className}-apply`).disabled = isValid !== elems.length;
}