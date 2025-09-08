const newsHeroLinks = document.querySelectorAll('.news-hero__grid');
if (newsHeroLinks){
    newsHeroLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (e.target.classList.contains('news-hero__btn-discover')) return;
            window.location.href = 'one-news.html';
        })
    })
}

const indexProjectLinks = document.querySelector('.main-projects');
if (indexProjectLinks){
    indexProjectLinks.addEventListener('click', (e) => {
        if (e.target.dataset.link === 'one-project') {
            window.location.href = 'one-project.html';
        }
    })
}

const ourProjects = document.querySelector('.projects-hero__tabs-grid')
if (ourProjects){
    ourProjects.addEventListener('click', (e) => {
        if (e.target.dataset.link === 'one-project') {
            window.location.href = 'one-project.html';
        }
    })
}