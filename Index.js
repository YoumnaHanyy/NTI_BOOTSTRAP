 
        const loginPage = document.getElementById('loginPage');
        const homePage = document.getElementById('homePage');
        const createPostPage = document.getElementById('createPostPage');
        const profilePage = document.getElementById('profilePage');
        const singlePostPage = document.getElementById('singlePostPage');


        function showPage(pageId) {
            const pages = document.querySelectorAll('.page-content, .main-container');
            pages.forEach(page => page.style.display = 'none');
            document.getElementById(pageId).style.display = 'block';
        }


        document.getElementById('loginForm').addEventListener('submit', (event) => {
            event.preventDefault(); 
            showPage('homePage');
        });

     
        document.getElementById('logoutButton').addEventListener('click', () => {
            showPage('loginPage');
        });


        document.getElementById('createPostButton').addEventListener('click', () => {
            showPage('createPostPage');
        });

      
        document.getElementById('sharePostButton').addEventListener('click', () => {
            const postTextarea = document.getElementById('postTextarea');
            const postContent = postTextarea.value.trim();
            if (postContent) {
             
                const newPost = document.createElement('div');
                newPost.className = 'card shadow-sm mb-4 post-card post-content-clickable';
                newPost.dataset.postId = Date.now(); 
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
       
                document.getElementById('postFeed').prepend(newPost);
               
                postTextarea.value = '';
                showPage('homePage');
            }
        });

      
        document.getElementById('cancelPostButton').addEventListener('click', () => {
            document.getElementById('postTextarea').value = '';
            showPage('homePage');
        });

     
        document.getElementById('profileLink').addEventListener('click', (event) => {
            event.preventDefault();
            showPage('profilePage');
        });
        
     
        document.getElementById('backToHomeButton').addEventListener('click', () => {
            showPage('homePage');
        });

       
        document.getElementById('postFeed').addEventListener('click', (event) => {
            const postCard = event.target.closest('.post-content-clickable');
            if (postCard) {
             
                const userImageSrc = postCard.querySelector('img').src;
                const userName = postCard.querySelector('h6').textContent;
                const postTime = postCard.querySelector('small').textContent;
                const postText = postCard.querySelector('.post-content').textContent;

               
                document.getElementById('singlePostUserImage').src = userImageSrc;
                document.getElementById('singlePostUserName').textContent = userName;
                document.getElementById('singlePostTime').textContent = postTime;
                document.getElementById('singlePostContent').textContent = postText;
                
           
                showPage('singlePostPage');
            }
        });

        
        document.getElementById('backFromPostButton').addEventListener('click', () => {
            showPage('homePage');
        });