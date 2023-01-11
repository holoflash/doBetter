import { variableContentCreator } from "./variableContentCreator";
import { pageViewFunctions } from './pageViewFunctions';
import { createPage } from "./localStorage";
import { storedTaskManager } from "./taskManager";

export const initializer = () => {
    const logo = document.querySelector('.logo');
    const indicatorHolder = document.querySelector('.indicatorHolder');
    const variableContent = document.querySelector('.variableContent');
    const pageView = document.createElement('div');
    const addPage = document.createElement('button');
    const pageMenu = document.querySelector('.pageMenu');
    const pageMenuContent = document.querySelector('.pageMenuContent');
    const pageMenuTitle = document.querySelector('.pageMenuTitle');

    pageView.classList.add('pageView');
    addPage.classList.add('addPage');
    addPage.textContent = '+';
    document.body.append(pageView);

    function retrievePageData() {
        let AllPages = JSON.parse(localStorage.getItem('AllPages')) || [];
        let readmeDeleted = JSON.parse(localStorage.getItem('readmeDeleted')) || {};
        if (readmeDeleted.readmeDeleted && !AllPages.length) {
            variableContentCreator('nEwPaGe103912341', 'color1');
            document.querySelector('.nEwPaGe103912341').remove();
            return;
        } else {
            AllPages.forEach((page) => {
                variableContentCreator(page.name, page.color);
                storedTaskManager(page.name, page.color, page.taskArray, page.completedTaskArray, page.completion);
            });
        }
    }

    retrievePageData();

    variableContent.insertAdjacentElement('beforebegin', addPage);
    logo.addEventListener('click', () => {
        let pageIndex = Array.from(variableContent.childNodes)
        if (variableContent.parentNode !== document.body && variableContent.childNodes.length > 0) {
            pageMenuTitle.textContent = 'Click to remove:'
            for (let i = 0; i < pageIndex.length; i++) {
                const indexItem = document.createElement('div');
                indexItem.classList.add('indexItem');
                indexItem.textContent = pageIndex[i].dataset.reference;
                let cssColor = pageIndex[i].childNodes[0].style.backgroundImage.slice(26, 39);
                pageMenuContent.append(indexItem);
                indexItem.style.color = `${cssColor}`
                indexItem.addEventListener('click', (event) => {
                    let AllPages = JSON.parse(localStorage.getItem('AllPages'));
                    let readmePages = ['Readme: tasks', 'Readme: pages', 'Readme: misc'];
                    let readmePagesInLocalStorage = readmePages.filter(pageName => AllPages.some(page => page.name === pageName));
                    AllPages = AllPages.filter((element) => element.cleanName !== indexItem.textContent.replace(/[^\w\s]/gi, '').replace(/\s/g, ''));

                    if (readmePagesInLocalStorage.length === 1) {
                        let readmeDeleted = { readmeDeleted: true };
                        localStorage.setItem('readmeDeleted', JSON.stringify(readmeDeleted));
                    }

                    localStorage.setItem('AllPages', JSON.stringify(AllPages));
                    event.target.remove();
                    indicatorHolder.querySelector(`#${indexItem.textContent.replace(/[^\w\s]/gi, '').replace(/\s/g, '')}`).remove();
                    document.querySelector(`.${indexItem.textContent.replace(/[^\w\s]/gi, '').replace(/\s/g, '')}`).remove();

                    if (pageMenuContent.childNodes.length === 1) {
                        variableContent.style.filter = 'none';
                        addPage.style.filter = 'none';
                        pageMenu.style.display = "none";
                        pageMenuContent.textContent = '';
                        pageMenuContent.append(pageMenuTitle);
                    }
                });
            }
            variableContent.style.filter = `blur(5px)`;
            addPage.style.filter = `blur(5px)`;
            pageMenu.style.display = "block";
            window.onclick = function (event) {
                if (event.target == pageMenu) {
                    variableContent.style.filter = 'none';
                    addPage.style.filter = 'none';
                    pageMenu.style.display = "none";
                    pageMenuContent.textContent = '';
                    pageMenuContent.append(pageMenuTitle);
                }
            }
            return
        }
        pageViewFunctions(variableContent, indicatorHolder);
    });

    let sameNameCount = 0;
    addPage.addEventListener('click', () => {
        const page = document.querySelectorAll('.page');
        page.forEach(pages => pages.classList.add('dontTouch'));
        const form = document.createElement('div');
        const inputName = document.createElement('input');
        form.classList.add('form')

        if (form) {
            addPage.style.display = 'none'
        }

        inputName.type = 'text';
        inputName.maxLength = 20;
        inputName.placeholder = 'do:';
        inputName.classList.add('addPageInput');
        form.appendChild(inputName);

        ['color1', 'color2', 'color3', 'color4', 'color5', 'color6'].forEach(color => {
            const button = document.createElement('button');
            button.type = 'button';
            button.id = color;
            button.style.backgroundColor = `var(--${color})`;
            button.classList.add('color-button');
            form.appendChild(button);
            button.addEventListener('click', (event) => {
                let name = inputName.value.trim();
                if (name === '') {
                    name = 'Untitled';
                }
                if (/^\d/.test(name)) {
                    name = "_" + name;
                }

                if (document.querySelector(`.${name.replace(/[^\w\s]/gi, '').replace(/\s/g, '')}`)) {
                    sameNameCount++;
                    name = name + sameNameCount;
                }
                const color = event.target.id;

                createPage(name, color, [], []);
                variableContentCreator(name, color);
                form.remove();
                variableContent.insertAdjacentElement('beforebegin', addPage);
                addPage.style.display = 'flex'
            });
            page.forEach(pages => pages.classList.remove('dontTouch'));
        });
        variableContent.insertAdjacentElement('beforebegin', form);

        form.addEventListener('dblclick', () => {
            form.remove();
            variableContent.insertAdjacentElement('beforebegin', addPage);
            addPage.style.display = 'flex'
        })
    })
}
