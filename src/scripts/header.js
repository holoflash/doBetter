export function staticContentCreator() {
    const body = document.querySelector('body');
    const constantContent = document.createElement('div');
    const header = document.createElement('div');
    const github = document.createElement('a');
    const navbar = document.createElement('button');
    const logo = document.createElement('span');
    const variableContent = document.createElement('div');
    const footer = document.createElement('div');

    constantContent.classList.add('constantContent');
    header.classList.add('header');
    github.classList.add('github');
    navbar.classList.add('navigation');
    logo.classList.add('logo');
    variableContent.classList.add('variableContent');
    footer.classList.add('footer');

    github.href = 'https://github.com/holoflash/doBetter';
    github.textContent = '/holoflash';
    navbar.textContent = 'ALL LISTS';
    logo.textContent = 'doBetter';

    header.append(github, navbar, logo);
    constantContent.append(header, footer);

    body.append(constantContent, variableContent);
};