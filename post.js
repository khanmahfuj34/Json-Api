const postdataLoad = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            displayPost(data);
        })
}
const displayPost = (post) => {
    const postContainer = document.getElementById('postContainer');

    for (const posts of post) {
        const li = document.createElement('li');
        li.innerText = posts.title;
        postContainer.appendChild(li);
        console.log(posts);
    }

}