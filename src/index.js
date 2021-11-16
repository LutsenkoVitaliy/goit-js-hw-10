import './css/styles.css';
import Notiflix from 'notiflix';
import API from './js/fetchCounties'
import getRefs from './js/get-refs';
import countryInfo from './templates/country-info.hbs';
import countryList from './templates/country-list.hbs';
import { debounce } from 'lodash';

const DEBOUNCE_DELAY = 300;
const refs = getRefs()

refs.searchForm.addEventListener('input', debounce(onSearch,DEBOUNCE_DELAY));

function onSearch(e) {
    e.preventDefault();
    
  const inputCountry = e.path[0].value.trim()
  console.log(inputCountry);

    API.fetchCountryByName(inputCountry)
    .then(renderCountryCard)
    .catch(error => console.log(error));
    
};


function renderCountryCard(country) {
  const markupList = countryList(country)
  const markupCard = countryInfo(country)
    
    // refs.cardInfo.innerHTML = markupCard
    // refs.cardList.innerHTML = markupList
 
      if (country.length > 1 && country.length < 10) {
        refs.cardInfo.innerHTML = ''
        refs.cardList.innerHTML = markupList
    };
      
      if (country.length === 1) {
        refs.cardInfo.innerHTML = markupCard
        refs.cardList.innerHTML = ''
      };
      
      if (country.length > 10) {
        Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
    };
    
    }

    