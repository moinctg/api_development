
const countriesAll= () => {

    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then (data => displayCountris(data))
}

countriesAll();

const displayCountris = data => {
console.log(data);
// for(const getData of data){

//     console.log(getData.name);
// }
const countryDiv = document.getElementById('country');
data.forEach(country => {
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML = `
    <h3> Country Name: ${country.name} </h3>
    <h5> Capital: ${country.capital} </h5>
    <h5> Languages: ${country.languages} </h5>
    <h5> Population: ${country.population} </h5>
    <h5> Region: ${country.region} </h5>
    <h5> Native Name: ${country.nativeName} </h5>
    <button onclick="loadCountryByName('${country.name}')"> Deatails </button>


    
    `;
    countryDiv.appendChild(div);



     console.log(country);


});

}


const loadCountryByName = name => {
    // console.log(name);

    const url = 'https://restcountries.eu/rest/v2/name/${name}';
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail (data[0]))

}

const displayCountryDetail = country => {
    const containerDiv = document.getElementById('details');
    containerDiv.innerHTML = `
    <h4> ${country.name} </h4>
    <img src="${country.flag}"
    `;
    console.log(country);
}