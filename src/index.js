import './css/styles.css';
import getRefs from './get-refs';
import API from './js/fetchCounties'
import countryInfo from './templates/country-info.hbs';
import countryList from './templates/country-list.hbs'

const DEBOUNCE_DELAY = 300;
const refs = getRefs()

refs.searchForm.addEventListener('input', onSearch);

function onSearch(e) {
   e.preventDefault();
  
  
};


function renderCountryCard(searchName) {
  const markupList = countryList(searchName)
  const markupCard = countryInfo(searchName)
    
    refs.cardInfo.innerHTML = markupCard
    refs.cardList.innerHTML = markupList

        
      if (searchName.length > 1 && searchName.length < 10) {

        refs.cardInfoList.innerHTML = '';
        refs.cardInfoContainer.innerHTML = '';
        
      }
      
      if (searchName.length === 1) {
        refs.countryInfo.innerHTML = '';
          refs.cardInfoContainer.innerHTML = '';
      };
      
      if (searchName.length > 10) {

        
      }
    }
