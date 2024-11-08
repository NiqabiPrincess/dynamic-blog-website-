import { saveTitle, saveContent, savePic, savePost } from "./savePostModule.js";

//* to display the blog posts
export function displayPost() {
    const postsContainer = document.getElementById('posts-container');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];  

   postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Post image">` : ''}
            <p class="date">${post.date}</p>
        `;

        postsContainer.appendChild(postElement);
    });
}


export function displayPostTitles() {
    const postList = document.getElementById('post-list');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    postList.innerHTML = '';

    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title;
        postList.appendChild(listItem);
    });    
}