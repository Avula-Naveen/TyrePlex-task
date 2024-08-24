function showMore() {
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    hiddenItems.forEach(item => {
        item.classList.remove('hidden');
    });
    const viewMoreBtn = document.querySelector('.view-more-btn');
    viewMoreBtn.style.display = 'none';
}