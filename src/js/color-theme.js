import menu from '../js/menu.json';
import menuCards from '../templates/menu-cards.hbs';
import 'material-icons/iconfont/material-icons.css';
// import { create } from 'handlebars';




const containerSite = document.querySelector('body')
 const menuList = document.querySelector('.js-menu');


const cardsMarkup = createCardMarkup(menu);
menuList.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardMarkup(menu) {
    return menuCards(menu);
}


