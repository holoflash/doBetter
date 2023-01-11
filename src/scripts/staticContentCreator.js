export function staticContentCreator() {
    const constantContent = document.createElement('div');
    const header = document.createElement('div');
    const holoflash = document.createElement('a');
    const logo = document.createElement('span');
    const variableContent = document.createElement('div');
    const better = document.createElement('span');
    const indicatorHolder = document.createElement('div');
    const pageMenu = document.createElement('div')
    const pageMenuContent = document.createElement('div')
    const pageMenuTitle = document.createElement('h3')

    constantContent.classList.add('constantContent');
    header.classList.add('header');
    holoflash.classList.add('holoflash');
    logo.classList.add('logo');
    variableContent.classList.add('variableContent');
    indicatorHolder.classList.add('indicatorHolder')
    pageMenu.classList.add('pageMenu')
    pageMenuContent.classList.add('pageMenuContent')
    pageMenuTitle.classList.add('pageMenuTitle')

    holoflash.textContent = '/holoflash';
    logo.textContent = 'do';
    better.textContent = 'Better';
    better.style.color = 'moccasin';

    //Multi-click fun!
    let clickCounter = 0;
    let timer = null;

    holoflash.addEventListener('click', () => {
        clickCounter++;
        if (clickCounter === 1) {
            timer = setTimeout(() => {
                clickCounter = 0;
            }, 5000);
        } else if (clickCounter === 5) {
            clearTimeout(timer);
            let reallyCertain;
            let certain = confirm('Reset all data?')
            if (certain === true) {
                reallyCertain = confirm("Are you sure? This action can't be undone");
            }
            if (reallyCertain === true) {
                localStorage.clear();
                location.reload();
                let readmeDeleted = { readmeDeleted: false };
                localStorage.setItem('readmeDeleted', JSON.stringify(readmeDeleted));
            }
            clickCounter = 0;
        }
    });

    logo.append(better);
    header.append(holoflash, indicatorHolder, logo);
    constantContent.append(header);
    document.body.append(constantContent, variableContent);
    pageMenuContent.append(pageMenuTitle)
    pageMenu.append(pageMenuContent)
    document.body.append(pageMenu)
};
