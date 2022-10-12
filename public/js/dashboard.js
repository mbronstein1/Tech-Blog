const newPostCard = document.getElementById('new-post-card');
const newPostBtn = document.getElementById('new-post-btn');




const renderNewPostCard = async (e) => {
    e.preventDefault();
    newPostCard.setAttribute('style', 'visibility: visible')
}



newPostBtn.addEventListener('click', renderNewPostCard)