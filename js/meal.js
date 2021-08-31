const loadSerachItem = () => {

    const serchField = document.getElementById('searchInput');
    const searchText = serchField.value;
    // console.log(searchText);
    serchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchItem(data.meals))
}

const displaySearchItem = meals => {
  console.log(meals);
 const containerDiv = document.getElementById('card');
 meals.forEach( meal => {
    // console.log(meal);
   const div = document.createElement('col');
   div.classList.add('col');
   div.innerHTML =  `
          <div class="card h-100">
            <img  src=${meal.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text"> ${meal.strInstructions.slice(0-250)}</p>
            </div>
          </div>
           `;
        containerDiv.appendChild(div);

 });
//   console.log(meal);
}