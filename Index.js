  // Get references to all the page sections
        const loginPage = document.getElementById('loginPage');
        const homePage = document.getElementById('homePage');
        const createPostPage = document.getElementById('createPostPage');
        const profilePage = document.getElementById('profilePage');
        const singlePostPage = document.getElementById('singlePostPage');

        // Function to show a specific page and hide all others
        function showPage(pageId) {
            const pages = document.querySelectorAll('.page-content, .main-container');
            pages.forEach(page => page.style.display = 'none');
            document.getElementById(pageId).style.display = 'block';
        }

        // --- Event Listeners and Handlers ---

        // Handle Login Form Submission
        document.getElementById('loginForm').addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from actually submitting
            showPage('homePage');
        });

        // Handle Logout Button
        document.getElementById('logoutButton').addEventListener('click', () => {
            showPage('loginPage');
        });

        // Handle Create Post Button
        document.getElementById('createPostButton').addEventListener('click', () => {
            showPage('createPostPage');
        });

        // Handle Share Post Button
        document.getElementById('sharePostButton').addEventListener('click', () => {
            const postTextarea = document.getElementById('postTextarea');
            const postContent = postTextarea.value.trim();
            if (postContent) {
                // Create a new post element
                const newPost = document.createElement('div');
                newPost.className = 'card shadow-sm mb-4 post-card post-content-clickable';
                newPost.dataset.postId = Date.now(); // Unique ID for the new post
                newPost.innerHTML = `
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <img src="https://placehold.co/40x40/000000/ffffff?text=U" alt="Your Profile" class="me-3">
                            <div>
                                <h6 class="mb-0 fw-bold">Your Name</h6>
                                <small class="text-muted">Just now</small>
                            </div>
                        </div>
                        <p class="card-text post-content">${postContent}</p>
                    </div>
                `;
                // Prepend the new post to the feed
                document.getElementById('postFeed').prepend(newPost);
                // Clear the textarea and go back to the home page
                postTextarea.value = '';
                showPage('homePage');
            }
        });

        // Handle Cancel Post Button
        document.getElementById('cancelPostButton').addEventListener('click', () => {
            document.getElementById('postTextarea').value = '';
            showPage('homePage');
        });

        // Handle Profile Link
        document.getElementById('profileLink').addEventListener('click', (event) => {
            event.preventDefault();
            showPage('profilePage');
        });
        
        // Handle Back to Home Button from Profile
        document.getElementById('backToHomeButton').addEventListener('click', () => {
            showPage('homePage');
        });

        // Handle clicking on any post to view it individually
        document.getElementById('postFeed').addEventListener('click', (event) => {
            const postCard = event.target.closest('.post-content-clickable');
            if (postCard) {
                // Get the content from the clicked post
                const userImageSrc = postCard.querySelector('img').src;
                const userName = postCard.querySelector('h6').textContent;
                const postTime = postCard.querySelector('small').textContent;
                const postText = postCard.querySelector('.post-content').textContent;

                // Update the content of the single post page
                document.getElementById('singlePostUserImage').src = userImageSrc;
                document.getElementById('singlePostUserName').textContent = userName;
                document.getElementById('singlePostTime').textContent = postTime;
                document.getElementById('singlePostContent').textContent = postText;
                
                // Show the single post page
                showPage('singlePostPage');
            }
        });

        // Handle Back from Post Button
        document.getElementById('backFromPostButton').addEventListener('click', () => {
            showPage('homePage');
        });