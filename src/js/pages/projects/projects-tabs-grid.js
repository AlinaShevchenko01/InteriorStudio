const projectsTabsBtns = document.querySelectorAll('.projects-hero__menu-tabs .menu-tabs__btn')
const projectsTabsSelect = document.querySelector('.projects-hero__menu-tabs .menu-tabs__select')
const projectsTabsGrid = document.querySelector('.projects-hero__tabs-grid')

if (projectsTabsBtns.length > 0) {
    projectsTabsBtns[0].classList.add('active')
}
let currentGridTab = 0;

const gridOrders = [
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['d', 'e', 'c', 'a', 'b', 'f'],
    ['b', 'e', 'f', 'd', 'a', 'c'],
    ['a', 'd', 'f', 'b', 'e', 'c'],
]

function applyGridOrders (index) {
    if (!projectsTabsGrid) return;
    const gridAreas = gridOrders[index];
    if (window.innerWidth > 768){
        projectsTabsGrid.style.gridTemplateAreas =
            `"${gridAreas[0]} ${gridAreas[1]}"`
            + `"${gridAreas[2]} ${gridAreas[2]}"`
            + `"${gridAreas[3]} ${gridAreas[4]}"`
            + `"${gridAreas[5]} ${gridAreas[5]}"`;
    }else {
        projectsTabsGrid.style.gridTemplateAreas =
            `"${gridAreas[0]}"`
            + `"${gridAreas[1]}"`
            + `"${gridAreas[2]}"`
            + `"${gridAreas[3]}"`
            + `"${gridAreas[4]}"`
            + `"${gridAreas[5]}"`;
    }
}

if (projectsTabsBtns.length > 0) {
    projectsTabsBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentGridTab = index;
            applyGridOrders(index);

            if (!btn.classList.contains('active')) {
                projectsTabsBtns.forEach(btn => {
                    if (btn.classList.contains('active')) {
                        btn.classList.remove('active');
                    }
                });
                projectsTabsBtns[index].classList.add('active');
            }
        })
    })
}

if (projectsTabsSelect) {
    projectsTabsSelect.addEventListener('change', (e) => {
        currentGridTab = e.target.selectedIndex;
        applyGridOrders(currentGridTab);
    })
}

window.addEventListener('resize', (e) => {
    applyGridOrders(currentGridTab);
})