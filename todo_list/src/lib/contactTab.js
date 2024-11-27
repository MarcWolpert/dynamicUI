import '../template.css';
import '../template.html';

const appendContact = (content) => {
	const contactContainer = document.createElement('div');
	contactContainer.className = 'contactContainer';

	const locationCard = document.createElement('div');
	locationCard.className = 'card';
	const locationCardh2 = document.createElement('h2');
	const locationCardspan = document.createElement('span');
	locationCardh2.textContent = 'Location';
	locationCardspan.textContent =
		'123 Velvet Lane, Suite 8\nCityscape Heights, NY 10001';
	locationCard.appendChild(locationCardh2);
	locationCard.appendChild(locationCardspan);

	contactContainer.appendChild(locationCard);

	const hoursCard = document.createElement('div');
	hoursCard.className = 'card';
	const hoursCardh2 = document.createElement('h2');
	hoursCardh2.textContent = 'Hours of Operation';
	const hoursCardUl = document.createElement('ul');
	const hoursCardLi1 = document.createElement('li');
	hoursCardLi1.textContent = 'Monday: Closed';
	const hoursCardLi2 = document.createElement('li');
	hoursCardLi2.textContent = 'Tuesday-Thursday: 5:00 PM - 12:00 AM';
	const hoursCardLi3 = document.createElement('li');
	hoursCardLi3.textContent = 'Friday-Saturday: 6:00 PM - 2:00 AM';
	const hoursCardLi4 = document.createElement('li');
	hoursCardLi4.textContent = 'Sunday: 5:00 PM - 11:00 PM';
	hoursCardUl.appendChild(hoursCardLi1);
	hoursCardUl.appendChild(hoursCardLi2);
	hoursCardUl.appendChild(hoursCardLi3);
	hoursCardUl.appendChild(hoursCardLi4);
	hoursCard.appendChild(hoursCardh2);
	hoursCard.appendChild(hoursCardUl);

	contactContainer.appendChild(hoursCard);

	const contactCard = document.createElement('div');
	contactCard.className = 'card';
	const contactCardh2 = document.createElement('h2');
	contactCardh2.textContent = 'Contact Information';
	const contactCardUl = document.createElement('ul');
	const contactCardLi1 = document.createElement('li');
	contactCardLi1.textContent = 'General Inquiries: (212)-555-1930';
	const contactCardLi2 = document.createElement('li');
	contactCardLi2.textContent = 'Email: contact@velvetember.com';
	contactCardUl.appendChild(contactCardLi1);
	contactCardUl.appendChild(contactCardLi2);
	contactCard.appendChild(contactCardh2);
	contactCard.appendChild(contactCardUl);

	contactContainer.appendChild(contactCard);

	const managerCard = document.createElement('div');
	managerCard.className = 'card';
	const managerCardh2 = document.createElement('h2');
	managerCardh2.textContent = 'Manager';
	const managerP1 = document.createElement('p');
	managerP1.textContent = "Charlotte 'Charlie' Harrington";
	const managerP2 = document.createElement('p');
	managerP2.textContent = 'Direct Line: (212)-555-1950';
	const managerP3 = document.createElement('p');
	managerP3.textContent = 'Email: charlie.harrington@velvetember.com';
	managerCard.appendChild(managerCardh2);
	managerCard.appendChild(managerP1);
	managerCard.appendChild(managerP2);
	managerCard.appendChild(managerP3);

	contactContainer.appendChild(managerCard);

	content.appendChild(contactContainer);
};

const addContactEventListener = (content) => {
	const contactButton = document.getElementById('contactButton');
	contactButton.addEventListener('click', () => {
		content.replaceChildren();
		appendContact(content);
	});
};

export { appendContact, addContactEventListener };
