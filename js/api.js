

function loadToDo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data=>displayToDo(data))
}

loadToDo();

function displayToDo(todo){
    const toDoContainer = document.getElementById('todo');
    console.log (todo);

    for(const todos of todo){
        const div = document.createElement('div');
        div.classList.add('todo')
        div.innerHTML = `
        <h2> UserId: ${todos.userId}</h2>
        <h2> ID:${todos.id}</h2>
        <h2> Title: ${todos.title}</h2>
        <p> Complete: ${todos.completed}</p>

        `;
        toDoContainer.appendChild(div);


        // console.log(todos.title);
    }


}