import homepageImage from '../images/zetong-li-knd7VOzW_bQ-unsplash.jpg';
import '../template.css';
import '../template.html';

function appendHomepage(content) {
	const homepage = document.createElement('div');
	homepage.id = 'homepage';
	homepage.style.display = 'flex';
	homepage.style.flexDirection = 'row';

	const homepageContent = document.createElement('div');
	homepageContent.style.display = 'flex';
	homepageContent.style.flexDirection = 'column';
	homepageContent.style.justifyContent = 'center';
	homepageContent.style.alignItems = 'center';
	homepageContent.style.width = '50vw';
	homepageContent.style.backgroundColor = '#805031';
	homepageContent.style.paddingBottom = '22vh';

	const img = document.createElement('img');
	img.src = homepageImage;
	img.alt = 'Alcohol served at our restaurant';
	img.style.display = 'inherit';
	img.style.objectFit = 'cover';
	img.style.width = '50vw';
	img.style.height = '95vh';
	img.classList.add('homepageImage');

	const restaurantName = document.createElement('p');
	restaurantName.id = 'restaurantName';
	restaurantName.style.paddingBottom = '8vh';
	restaurantName.style.fontFamily = '"Windsong",cursive';
	restaurantName.style.fontSize = '3.5rem';
	restaurantName.style.textDecoration = 'underline';
	restaurantName.style.textDecorationColor = '#000000';
	restaurantName.style.color = '#f2c695';
	restaurantName.textContent = 'Velvet Ember';

	const restaurantTagline = document.createElement('p');
	restaurantTagline.id = 'restaurantTagline';
	restaurantTagline.style.color = '#f2c695';
	restaurantTagline.style.fontSize = '1.75rem';
	restaurantTagline.textContent = 'Where Elegance Meets Indulgence';

	// homepageContent.appendChild(img);

	homepageContent.appendChild(restaurantName);
	homepageContent.appendChild(restaurantTagline);

	homepage.appendChild(img);
	homepage.appendChild(homepageContent);
	content.appendChild(homepage);
}

const addHomeEventListeners = (content) => {
	const homeButton = document.getElementById('homeButton');
	homeButton.addEventListener('click', () => {
		// clear the content
		content.replaceChildren();
		appendHomepage(content);
	});
};

export { appendHomepage, addHomeEventListeners };
