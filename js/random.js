
const getRandomData =() => {
 fetch('https://randomuser.me/api/?results=10')
 .then(res => res.json())
 .then(data => displayRandaom(data))

}
getRandomData();

const displayRandaom = data =>{

    const random = data.results;
    const containerDiv = document.getElementById('random');
    for( const data of random){
        const div = document.createElement('div');
        div.innerHTML = `<h4> Name: ${data.name.first} ${data.name.last} </h4>
        <h4> Email: ${data.email}</h4>
        
        `;
       
       containerDiv.appendChild(div);

        console.log(data);
    }

}