const loadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            displayUser(data);
        })
}
const displayUser = (users) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
        })
}