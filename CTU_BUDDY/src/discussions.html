<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discussions</title>
    <link rel="stylesheet" href="assets/css/discussions.css">
    <style>
        /* Add some basic styling for the posts */
        .post {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <div class="navbar">
        <a href="home.html">Home</a>
        <a href="timetable.html">Timetable</a>
        <a href="discussions.html">Discussions</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact Us</a>
        <a href="share_resources.html">Share Resources</a>
    </div>

    
    <div class="discussions-container">
        <div class="discussions-header">
            <h1>Timetable Forum</h1>
            <button class="new-post-btn" onclick="showPostForm()">New Post</button>
        </div>

        <div class="posts-container" id="posts-container">
            <!-- Posts will be displayed here -->
        </div>

        <!-- Post form -->
        <div id="post-form" style="display: none;">
            <h2>Create a new post</h2>
            <input type="text" id="post-title" placeholder="Post title">
            <textarea id="post-content" placeholder="Post content"></textarea>
            <button onclick="createPost()">Create Post</button>
        </div>

        <small>Collavrative Coders&copy; 2024 All rights reserved </small> 
    </div>

    <script>
        // Array to store all posts
        let posts = [];

        // Function to load posts from local storage
        function loadPosts() {
            const storedPosts = localStorage.getItem('posts');
            if (storedPosts) {
                posts = JSON.parse(storedPosts);
                displayPosts();
            }
        }

        // Function to save posts to local storage
        function savePosts() {
            localStorage.setItem('posts', JSON.stringify(posts));
        }

        // Function to display all posts
        function displayPosts() {
            const postsContainer = document.getElementById('posts-container');
            postsContainer.innerHTML = '';

            posts.forEach((post, index) => {
                const postHTML = `
                    <div class="post">
                        <h2>${post.title}</h2>
                        <p class="post-content">${post.content}</p>
                        <button class="delete-post-btn" onclick="deletePost(${index})">Delete</button>
                    </div>
                `;
                postsContainer.innerHTML += postHTML;
            });
        }

        // Function to create a new post
        function createPost() {
            const postTitle = document.getElementById('post-title').value;
            const postContent = document.getElementById('post-content').value;

            if (postTitle && postContent) {
                const newPost = {
                    title: postTitle,
                    content: postContent
                };
                posts.push(newPost);
                displayPosts();
                savePosts();
                hidePostForm();
            } else {
                alert('Please fill in both title and content');
            }
        }

        // Function to delete a post
        function deletePost(index) {
            posts.splice(index, 1);
            displayPosts();
            savePosts();
        }

        // Function to show the post form
        function showPostForm() {
            document.getElementById('post-form').style.display = 'block';
        }

        // Function to hide the post form
        function hidePostForm() {
            document.getElementById('post-form').style.display = 'none';
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
        }

        // Load posts from local storage when the page loads
        loadPosts();
    </script>
</body>
</html>