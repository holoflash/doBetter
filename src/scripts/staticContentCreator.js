export function staticContentCreator() {
    const constantContent = document.createElement('div');
    const header = document.createElement('div');
    const github = document.createElement('a');
    const logo = document.createElement('span');
    const variableContent = document.createElement('div');
    const better = document.createElement('span');
    const indicatorHolder = document.createElement('div');
    const pageMenu = document.createElement('div')
    const pageMenuContent = document.createElement('div')
    const pageMenuTitle = document.createElement('h3')

    constantContent.classList.add('constantContent');
    header.classList.add('header');
    github.classList.add('github');
    logo.classList.add('logo');
    variableContent.classList.add('variableContent');
    indicatorHolder.classList.add('indicatorHolder')
    pageMenu.classList.add('pageMenu')
    pageMenuContent.classList.add('pageMenuContent')
    pageMenuTitle.classList.add('pageMenuTitle')

    github.textContent = '/holoflash';
    logo.textContent = 'do';
    better.textContent = 'Better';
    better.style.color = 'moccasin';
    github.href = 'https://github.com/holoflash/doBetter#readme';

    logo.append(better);
    header.append(github, indicatorHolder, logo);
    constantContent.append(header);
    document.body.append(constantContent, variableContent);
    pageMenuContent.append(pageMenuTitle)
    pageMenu.append(pageMenuContent)
    document.body.append(pageMenu)
};
