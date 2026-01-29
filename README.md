# Live Demo

[https://khanmahfuj34.github.io/Json-Api/](https://khanmahfuj34.github.io/Json-Api/)

---

# JSON API Practice Project

This project is a simple, beginner-friendly demonstration of how to fetch and display data from a public JSON API using JavaScript. The UI is built with Tailwind CSS for a modern and responsive look.

## Features

- **Responsive UI**: Built with Tailwind CSS for a clean and modern look.
- **Multiple Data Fetch Examples**: Demonstrates fetching users, todos, and posts from the JSONPlaceholder API.
- **Console Logging**: All fetched data is logged to the browser console for learning and debugging purposes.
- **Dynamic List Rendering**: User and post data are dynamically rendered as lists in the UI.

## How It Works

### 1. `api.js`
- Contains `loadUser()` which fetches a list of users from the API and logs them to the console.
- Calls `displayUser()` which fetches a todo and logs it as well.

### 2. `fetch.js`
- Contains `fatchHandel()` which fetches a single todo from the API and logs it to the console.

### 3. `index.js`
- Contains `dataLoad()` which fetches all users and displays their names in the UI under the "user" list.
- Uses `showUser()` to create and append list items for each user.

### 4. `post.js`
- Contains `postdataLoad()` which fetches all posts and displays their titles in the UI under the "postContainer" list.
- Uses `displayPost()` to create and append list items for each post.

## How to Use

1. Open the live demo link at the top of this file.
2. Click any of the four buttons:
   - **Load User (api.js)**: Fetches users and logs them to the console.
   - **Fetch Todo (fetch.js)**: Fetches a todo and logs it to the console.
   - **Load Users Data (index.js)**: Fetches users and displays their names in the UI.
   - **Load Users Post Data (post.js)**: Fetches posts and displays their titles in the UI.
3. Open your browser console to see the logged data for each action.

## Technologies Used
- HTML5
- Tailwind CSS (via CDN)
- JavaScript (Vanilla)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

Feel free to explore and modify the code to learn more about working with APIs and dynamic DOM manipulation!
