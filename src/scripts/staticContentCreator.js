export function staticContentCreator() {
    const body = document.querySelector('body');
    const constantContent = document.createElement('div');
    const header = document.createElement('div');
    const github = document.createElement('a');
    const logo = document.createElement('span');
    const variableContent = document.createElement('div');
    const better = document.createElement('span');
    const indicatorHolder = document.createElement('div');
    const pageView = document.createElement('div')

    constantContent.classList.add('constantContent');
    header.classList.add('header');
    github.classList.add('github');
    logo.classList.add('logo');
    variableContent.classList.add('variableContent');
    indicatorHolder.classList.add('indicatorHolder')
    pageView.classList.add('pageView');

    github.textContent = '/holoflash';
    logo.textContent = 'do';
    better.textContent = 'Better';
    better.style.color = 'moccasin';
    github.href = 'https://github.com/holoflash/doBetter#readme';

    logo.append(better);
    header.append(github, indicatorHolder, logo);
    constantContent.append(header);
    body.append(constantContent, pageView, variableContent);
};