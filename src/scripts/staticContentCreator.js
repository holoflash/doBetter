export function staticContentCreator() {
    const body = document.querySelector('body');
    const constantContent = document.createElement('div');
    const header = document.createElement('div');
    const github = document.createElement('a');
    const logo = document.createElement('span');
    const variableContent = document.createElement('div');
    const footer = document.createElement('div');

    constantContent.classList.add('constantContent');
    header.classList.add('header');
    github.classList.add('github');
    logo.classList.add('logo');
    variableContent.classList.add('variableContent');
    footer.classList.add('footer');

    github.href = 'https://github.com/holoflash/doBetter';
    github.textContent = '/holoflash';
    logo.textContent = 'do';
    const better = document.createElement('span');
    better.textContent = 'Better';
    better.style.color = 'moccasin';
    logo.append(better);

    // const clear = document.createElement('button')
    // clear.textContent = 'clear'
    // clear.classList.add('clear');
    // clear.addEventListener('click', () => {
    //     alert("Local storage erased")
    //     localStorage.clear();
    // });

    header.append(github, logo);
    constantContent.append(header, footer);

    body.append(constantContent, variableContent);
};