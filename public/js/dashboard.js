const newPostCard = document.getElementById('new-post-card');
const newPostBtn = document.getElementById('new-post-btn');
const newPostForm = document.getElementById('new-post-form');
const postTitleEl = document.getElementById('post-title');
const postContentEl = document.getElementById('post-content');

const renderNewPostCard = async (e) => {
    e.preventDefault();
    newPostCard.setAttribute('style', 'display:block')
};

const newPostFormHandler = async (e) => {
    e.preventDefault();
    const postTitle = postTitleEl.value.trim();
    const postContent = postContentEl.value.trim();

    if (postTitle && postContent) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                title: postTitle,
                text: postContent
            }),
            headers: { 'Content-Type' : 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Unable to create post')
        }
    }
}

newPostForm.addEventListener('submit', newPostFormHandler)

newPostBtn.addEventListener('click', renderNewPostCard)