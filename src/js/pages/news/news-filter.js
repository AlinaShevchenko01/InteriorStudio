const newsTabsBtns = document.querySelectorAll('.news-hero__menu-tabs .menu-tabs__btn');
const newsTabsSelect = document.querySelector('.news-hero__menu-tabs .menu-tabs__select')
const newsTabsFilter = document.querySelectorAll('.news-hero [data-grid]')

if (newsTabsBtns.length > 0) {
    newsTabsBtns[0].classList.add('active');
}

function filter (category) {
    newsTabsFilter.forEach(item => {
        if (category === 'All' || item.dataset.grid === category) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })

    newsTabsBtns.forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    })

    if (newsTabsSelect) newsTabsSelect.value = category;
}

if (newsTabsBtns.length > 0) {
    newsTabsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.filter || 'All';
            filter(category);
        })
    })
}

if (newsTabsSelect) {
    newsTabsSelect.addEventListener('change', (e) => {
        const category = e.target.value || 'All';
        filter(category);
    })
}