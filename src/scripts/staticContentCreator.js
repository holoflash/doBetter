export function staticContentCreator() {
    const body = document.querySelector('body');
    const constantContent = document.createElement('div');
    const header = document.createElement('div');
    const github = document.createElement('a');
    const logo = document.createElement('span');
    const variableContent = document.createElement('div');
    const footer = document.createElement('div');
    const better = document.createElement('span');
    const indicatorHolder = document.createElement('div');

    constantContent.classList.add('constantContent');
    header.classList.add('header');
    github.classList.add('github');
    logo.classList.add('logo');
    variableContent.classList.add('variableContent');
    footer.classList.add('footer');
    footer.classList.add('hide');
    indicatorHolder.classList.add('indicatorHolder')

    github.textContent = '/holoflash';
    logo.textContent = 'do';
    better.textContent = 'Better';
    better.style.color = 'moccasin';
    github.href = 'https://github.com/holoflash/doBetter#readme';

    better.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    })

    logo.append(better);
    header.append(github, indicatorHolder, logo);
    constantContent.append(header, footer);
    body.append(constantContent, variableContent);
};