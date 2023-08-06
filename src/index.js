//---------------------- import SASS files ----------------------//
import './sass/style.scss';

//---------------------- DOM elements ----------------------//
const emailImage = document.querySelector('.FAQ__box svg > g');
const faqWrapper = document.querySelector('.FAQ');
const emailContainer = document.querySelector('.FAQ__box');

//---------------------- click event ----------------------//
emailImage.addEventListener('click', () => {
    if(!emailContainer.classList.contains('boxMove')) {
        faqWrapper.classList.add('FAQMove');
        emailContainer.classList.add('boxMove');
    } else {
        faqWrapper.classList.remove('FAQMove');
        emailContainer.classList.remove('boxMove');
    }
})