import './template.css';
import './template.html';
import { appendHomepage, addHomeEventListeners } from './lib/homeTab.js';
import {
	appendMenu,
	addMenuEventListener,
	appendMenuButton,
} from './lib/menuTab.js';
import { appendContact, addContactEventListener } from './lib/contactTab.js';

class Dropdown {
	constructor(id, options, onSelect) {
		this.id = id;
		this.options = options;
		this.onSelect = onSelect;
		this.maxWidth = Math.max(...options.map((option) => option.length));
		this.length = options.length;
		this.dropdownElement = this.createDropdown();
	}

	createDropdown() {
		const dropdown = document.createElement('div');
		dropdown.id = this.id;
		dropdown.classList.add('dropdown');
		dropdown.style.height = `${this.length}rem`;
		dropdown.style.width = `calc(${this.maxWidth}ch + 2rem)`;

		dropdown.addEventListener('click', (e) => e.stopPropagation());

		this.options.forEach((option) => {
			const button = document.createElement('button');
			button.textContent = option;
			button.style.textAlign = 'center';
			button.style.alignSelf = 'center';
			button.style.width = `${option.length}ch`;
			button.addEventListener('click', () =>
				this.handleOptionSelect(option),
			);
			dropdown.appendChild(button);
		});
		return dropdown;
	}

	show(x, y) {
		this.hide(); // Ensure only one dropdown is visible
		this.dropdownElement.style.position = 'absolute';
		this.dropdownElement.style.left = `${x}px`;
		this.dropdownElement.style.top = `${y}px`;
		this.dropdownElement.style.zIndex = '1';
		document.body.appendChild(this.dropdownElement);
	}

	hide() {
		if (this.dropdownElement.parentElement) {
			this.dropdownElement.parentElement.removeChild(
				this.dropdownElement,
			);
		}
	}

	handleOptionSelect(option) {
		if (typeof this.onSelect === 'function') {
			this.onSelect(option);
		}
		this.hide();
	}
}

const menuOptions = ['Home', 'Menu', 'Contact', 'About', 'Gallery', 'Events'];

function handleOptionSelected(option) {
	console.log(`Selected option: ${option}`);
	// Implement your navigation logic here
}

const dropdown = new Dropdown('dropdown01', menuOptions, handleOptionSelected);

const optionElements = document.getElementsByClassName('options');
Array.from(optionElements).forEach((element) => {
	element.addEventListener('click', (e) => {
		e.stopPropagation();
		const rect = element.getBoundingClientRect();
		const x = rect.left;
		const y = rect.bottom;
		dropdown.show(x, y);
	});
});

document.addEventListener('click', () => {
	dropdown.hide();
});
