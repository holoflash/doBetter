const constructHeader = () => {
    const constantContent = document.querySelector('.constantContent');

    const header = document.createElement('div');
    header.classList.add('header');

    const github = document.createElement('a');
    github.classList.add('github');
    github.href = 'https://github.com/holoflash/doBetter'
    github.textContent = '/holoflash'

    const navbar = document.createElement('button');
    navbar.classList.add('navigation');
    navbar.textContent = 'ALL LISTS'

    const logo = document.createElement('span');
    logo.classList.add('logo');
    logo.textContent = 'doBetter'

    header.append(github, navbar, logo);
    constantContent.append(header);
}

constructHeader();