import './template.css';
import './template.html';
import { appendHomepage, addHomeEventListeners } from './lib/homeTab.js';
import {
	appendMenu,
	addMenuEventListener,
	appendMenuButton,
} from './lib/menuTab.js';
import { appendContact, addContactEventListener } from './lib/contactTab.js';

const dropdown = (id) => {
	const dropdown = document.createElement('div');
	dropdown.id = id;
	dropdown.classList.add('dropdown');
	const createButton = (text) => {
		const button = document.createElement('button');
		button.textContent = text;
		return button;
	};
	const buttonCount = 10;
	const buttons = [];
	for (let i = 0; i < buttonCount; i += 1) {
		const button = createButton(`Button ${i}`);
		button.style.textAlign = 'center';
		button.style.flexGrow = 1;
		buttons.push(button);
	}
	for (let i = 0; i < buttons.length; i += 1) {
		dropdown.appendChild(buttons[i]);
	}
	dropdown.style.height = buttonCount * 2 + 'rem';
	return dropdown;
};

const dropdownOnClick = (elementId, dropdownID) => {
	let currentClick = { x: 0, y: 0 };
	const dropdownElement = dropdown(dropdownID);
	elementId.addEventListener('click', (e) => {
		console.log(e.clientX, e.clientY);
		currentClick.x = e.clientX;
		currentClick.y = e.clientY;
		dropdownElement.style.position = 'absolute';
		dropdownElement.style.left = currentClick.x + 'px';
		dropdownElement.style.top = currentClick.y + 'px';
		dropdownElement.style.zIndex = 1;
		elementId.appendChild(dropdownElement);
	});
	console.log('dropdownElement', dropdownElement);
	return dropdownElement;
};

const card01 = document.getElementById('card01');
const dropdown01 = dropdownOnClick(card01, 'dropdown01');

//add body event listener to remove dropdown
const body = document.getElementsByTagName('body')[0];
body.addEventListener('click', (e) => {
	if (e.target !== dropdown01) {
		//remove dropdown01 from the DOM
		console.log('removing dropdown01');
		card01.removeChild(dropdown01);
	}
});
