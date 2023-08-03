// restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


//create and append image element 
const image = document.createElement('img');
image.src = 'img/mikita-yo-oJUiZL2M2aA-unsplash.jpg'
image.height = '300';
pageContent.appendChild(image);

//create and append headline element 
const headLine = document.createElement('h1');
headLine.textContent = 'welcome to our restaurant!';
pageContent.appendChild(headLine);

//create and append copy element 
const copy = document.createElement('p')
copy.textContent = 'we serve the best food in town. come check it out';
pageContent.appendChild(copy);
content.appendChild(pageContent);

}

export default createRestaurantHomePage;


