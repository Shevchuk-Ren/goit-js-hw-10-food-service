import menuCards from '.././templates/menu-cards.hbs';
import menu from '../js/menu.json';
import 'material-icons/iconfont/material-icons.css';
// import { create } from 'handlebars';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const containerSite = document.querySelector('body')
const switchToggle = document.querySelector('#theme-switch-toggle');

switchToggle.addEventListener('change', changeColorTheme);





function currentColorOnTheme() {

     const currentColor =localStorage.theme;
   
    if (currentColor === Theme.DARK) {
    
    switchToggle.setAttribute('checked', true);
      containerSite.classList.toggle(Theme.DARK);
       console.log(containerSite)
      return;
    } 
   
  containerSite.classList.toggle(Theme.LIGHT);
  console.log(containerSite)
}  

currentColorOnTheme()




function changeColorTheme(evt) {
     evt.preventDefault();
  
    if (!switchToggle) {
        return;
  }

  
    colorThemeContainer();
   
}


function colorThemeContainer() {
   if (!switchToggle.checked) {
           containerSite.classList.remove(Theme.DARK);
        containerSite.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
       switchToggle.setAttribute('checked', false);
       
    } else if (switchToggle.checked) {
        containerSite.classList.add(Theme.DARK);
          containerSite.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
       switchToggle.setAttribute('checked', true);    
       
   }
   switchToggle.setAttribute('checked', switchToggle.checked); 

}