import {el, setChildren, attrs, setAttr} from 'redom';
import {showName, showNumber, showDate,showCVV} from './module/handler';
const wrapper = el('div', {
    className: 'wrapper',
});

const card = el('.card');

const secure = el('p.secure', {
    textContent: 'Secure Checkout',
});

const creditCard = el('.credit-card');

const cardNumber = el('span.card__number', {
    textContent: 'xxxx xxxx xxxx xxxx',
});

const cardPersonal = el('.card__personal');

const cardName = el('span.card__name', {
    textContent: 'John Doe',
});

const cardDate = el('span.card__date', {
    textContent: '04/24',
});
setChildren(cardPersonal, cardName, cardDate);
setChildren(creditCard, cardNumber, cardPersonal);

const form = el('form.form', {
    id: 'form',
    action: '#',
});

const button = el('button.form__button', {
    textContent: 'CHECK OUT',
});

const cardHolder = el('div');
setAttr(cardHolder, {
    className: 'form__input-wrap form__input-wrap_holder',
});

const cardHolderLabel = el('label');
setAttr(cardHolderLabel, {
    className: 'form__label form__holder-label',
    textContent: 'Card Holder',
    htmlFor: 'name',
});

const cardHolderInput = el('input');
setAttr(cardHolderInput, {
    className: 'input input__holder',
});

const cardNumberForm = el('div');
setAttr(cardNumberForm, {
    className: 'form__input-wrap form__input-wrap_number',
});

const cardNumberLabel = el('label');
setAttr(cardNumberLabel, {
    className: 'form__label form__number-label',
    textContent: 'Card Number',
    htmlFor: 'cardNumber',
});

const cardNumberInput = el('input#cardNumber', {
    className: 'input input__number',
});

const cardExpiry = el('div');
setAttr(cardExpiry, {className: 'form__input-wrap form__input-wrap_date'});

const cardExpiryLabel = el('label');
setAttr(cardExpiryLabel, {
    htmlFor: 'expiry',
    className: 'form__label form__date-label',
    textContent: 'Card Expiry',
});

const cardExpiryInput = el('input', {className: 'input input__date'});

const cardCVV = el('div');
setAttr(cardCVV, {className: 'form__input-wrap form__input-wrap_cvv'});

const cardCVVLabel = el('label', {
    htmlFor: 'CVV',
    className: 'form__label form__cvv-label',
    textContent: 'CVV',
});

const cardCVVInput = el('input', {className: 'input input__cvv'});
setChildren(cardHolder, cardHolderLabel, cardHolderInput);

setChildren(cardNumberForm, cardNumberLabel, cardNumberInput);

setChildren(cardExpiry, cardExpiryLabel, cardExpiryInput);
setChildren(cardCVV, cardCVVLabel, cardCVVInput);
setChildren(form, cardHolder, cardNumberForm, cardExpiry, cardCVV, button);
setChildren(card, secure, creditCard, form);
setChildren(wrapper, card);
setChildren(document.body, wrapper);

showName();
showNumber();
showDate();
showCVV();
/*
TODO:
1) организовать маску для второго инпута
2) при вводе слушать поле и выводить его в верхнем диве. Отдельный модуль
3) сделать ввод даты
*/
