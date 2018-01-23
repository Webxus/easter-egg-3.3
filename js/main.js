'use strict';
/*
Задача 3. «Пасхалка»
В рамках домашнего задания к лекции «Объект события»
Описание
Реализовать открытие и закрытие скрытой панели навигации с помощью комбинации клавиш CTRL+ALT+T.

Реализовать функционал «пасхалки» — секрета, который откроется пользователю при наборе последовательности букв «нетология»:

"Пасхалка"

Интерфейс
Открытие и закрытие панели навигации осуществляется с помощью добавления и удаления класса visible для тега nav.

Секретный код «нетология» должен вводиться независимо от регистра и языковой раскладки.

Если при вводе секретного кода нарушить последовательность букв, то код будет считаться неверно введённым, после чего необходимо начинать вводить код заново.

После успешного введения секретного кода следует установить класс visible для тега <div class="secret">, чтобы показать секрет.

Для отслеживания всех клавиш следует использовать событие keydown.
*/

const nav = document.getElementsByTagName('nav')[0];
const secretCode = document.getElementsByClassName('secret')[0];
const keysLib = [];
keysLib.length = 9;

function showMenu(event) {
	if (!event.repeat) {
		if (event.altKey) {
			if (event.ctrlKey) {
				if (event.code === 'KeyT') {
					nav.classList.toggle('visible');
				}
			}
		}
	}
}

document.addEventListener('keydown', showMenu);

function showSecretMessage(event) {
	keysLib.push(event.code);
	keysLib.shift();
	if (keysLib[0] === 'KeyY' &&
		keysLib[1] === 'KeyT' &&
		keysLib[2] === 'KeyN' &&
		keysLib[3] === 'KeyJ' &&
		keysLib[4] === 'KeyK' &&
		keysLib[5] === 'KeyJ' &&
		keysLib[6] === 'KeyU' &&
		keysLib[7] === 'KeyB' &&
		keysLib[8] === 'KeyZ') {
		if (!secretCode.classList.contains('visible')) {
			secretCode.classList.add('visible');
		}
	}
}

document.addEventListener('keydown', showSecretMessage);