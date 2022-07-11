import Inputmask from 'inputmask';

export const showName = () => {
    const inputHolder = document.querySelector('.input__holder');
    const cardName = document.querySelector('.card__name');

    inputHolder.addEventListener('input', () => {
        cardName.textContent = inputHolder.value;
    });
};

export const showNumber = () => {
    const inputNumber = document.querySelector('.input__number');
    const cardNumber = document.querySelector('.card__number');

    const im = new Inputmask('9999 9999 9999 9999');
    im.mask(inputNumber);

    inputNumber.addEventListener('input', () => {
        cardNumber.textContent = inputNumber.value;
    });
};

export const showDate = () => {
    const inputDate = document.querySelector('.input__date');
    const cardDate = document.querySelector('.card__date');

    const im = new Inputmask('99/99');
    im.mask(inputDate);

    inputDate.addEventListener('input', () => {
        cardDate.textContent = inputDate.value;
    });
};

export const showCVV = () => {
    const inputCVV = document.querySelector('.input__cvv');

    const im = new Inputmask('999');
    im.mask(inputCVV);
};
