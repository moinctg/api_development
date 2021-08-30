const loadSerachItem = () => {

    const serchField = document.getElementById('searchInput');
    const searchText = serchField.value;
    console.log(searchText);
    serchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySerchItem(data))
}

const displaySerchItem = meals => {
 const containerDiv = document.getElementById('card');
 meals.forEach( meal => {
   const div = document.createElement('col');
   div.classList.add('col');
   div.innerHTML =  `
          <div class="card h-100">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
           `;
        containerDiv.appendChild(div);

 })
  console.log(meal);
}