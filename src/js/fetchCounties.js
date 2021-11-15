const BASE_URL = 'https://restcountries.com/v3.1'

function fetchCountryByName(searchName) {
    return fetch(`${BASE_URL}/name/${searchName}`)
        .then((response) => {
            if (!response.ok) {
                Notiflix.Notify.failure("Oops, there is no country with that name");
                refs.cardInfo.innerHTML = '';
                refs.cardList.innerHTML = '';
                throw new Error(response.status);
            }
            return response.json();
        })
}

export default { fetchCountryByName }