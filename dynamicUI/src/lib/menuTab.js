import '../template.css';
import '../template.html';
import drinks from './drinks.js';

const appendMenu = (drinkList, content) => {
	const gridContainer = document.createElement('div');
	gridContainer.className = 'gridContainer';
	gridContainer.style.display = 'grid';
	gridContainer.style.paddingBottom = '89vh';
	gridContainer.style.gridTemplateColumns =
		'repeat(auto-fit,minmax(360px,1fr))';
	gridContainer.style.gap = '1rem';
	gridContainer.style.padding = '5vw';
	gridContainer.style.paddingTop = '1vw';

	for (let i = 0; i < drinkList.length; i += 1) {
		const drinkName = drinkList[i][1];
		const drinkNameElement = document.createElement('h3');
		drinkNameElement.textContent = drinkName;
		const drinkDescription = drinkList[i][2];
		const drinkDescriptionElement = document.createElement('p');
		drinkDescriptionElement.textContent = drinkDescription;
		const drinkImage = drinkList[i][0];
		const drinkImageElement = document.createElement('img');
		drinkImageElement.src = drinkImage;
		drinkImageElement.alt = drinkName;

		const drinkCard = document.createElement('div');
		drinkCard.className = 'card';
		drinkCard.appendChild(drinkImageElement);
		drinkCard.appendChild(drinkNameElement);
		drinkCard.appendChild(drinkDescriptionElement);
		gridContainer.appendChild(drinkCard);
	}

	content.appendChild(gridContainer);
};
const addMenuEventListener = (content) => {
	const menuButton = document.getElementById('menuButton');
	menuButton.addEventListener('click', () => {
		content.replaceChildren();
		appendMenu(drinks, content);
	});
};

export { appendMenu, addMenuEventListener };
