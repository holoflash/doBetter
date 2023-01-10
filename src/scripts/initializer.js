import { variableContentCreator } from "./variableContentCreator";
import { pageViewFunctions } from './pageViewFunctions';

export const initializer = () => {
    const logo = document.querySelector('.logo')
    const indicatorHolder = document.querySelector('.indicatorHolder');
    const variableContent = document.querySelector('.variableContent');
    const pageView = document.createElement('div');
    const addPage = document.createElement('button');

    pageView.classList.add('pageView');
    addPage.classList.add('addPage');
    addPage.textContent = '+';
    document.body.append(pageView);
    variableContentCreator('Someday', 'color3')
    variableContentCreator('Tomorrow', 'color2')
    variableContentCreator('Today', 'color1')
    variableContent.insertAdjacentElement('beforebegin', addPage);


    const pageMenu = document.querySelector('.pageMenu')
    const pageMenuContent = document.querySelector('.pageMenuContent')
    const pageMenuTitle = document.querySelector('.pageMenuTitle')

    logo.addEventListener('click', () => {
        let pageIndex = Array.from(variableContent.childNodes)
        if (variableContent.parentNode !== document.body && variableContent.childNodes.length > 0) {
            pageMenuTitle.textContent = 'Click to remove:'
            for (let i = 0; i < pageIndex.length; i++) {
                const indexItem = document.createElement('div');
                indexItem.classList.add('indexItem')
                indexItem.textContent = pageIndex[i].classList[1];
                let cssColor = pageIndex[i].childNodes[0].style.backgroundImage.slice(26, 39)
                pageMenuContent.append(indexItem)
                indexItem.style.color = `${cssColor}`
                indexItem.addEventListener('click', (event) => {
                    event.target.remove()
                    indicatorHolder.querySelector(`#${indexItem.textContent}`).remove();
                    document.querySelector(`.${indexItem.textContent}`).remove();
                    if (pageMenuContent.childNodes.length === 1) {
                        pageMenuTitle.textContent = 'All done!'
                    }
                });
            }
            pageMenu.style.display = "block";
            window.onclick = function (event) {
                if (event.target == pageMenu) {
                    pageMenu.style.display = "none";
                    pageMenuContent.textContent = ''
                    pageMenuContent.append(pageMenuTitle)
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
        document.body.addEventListener('click', (event) => {
            if (event.target.className === 'listTitle') {
                form.remove();
                variableContent.insertAdjacentElement('beforebegin', addPage);
                return
            }
            if (!['text', 'submit', 'button'].includes(event.target.type)) {
                return
            }
        })

        const form = document.createElement('div');
        form.classList.add('form')
        const inputName = document.createElement('input');

        form.scrollIntoView({
            behavior: 'smooth',
            inline: 'end'
        });

        if (form) {
            addPage.style.display = 'none'
        }

        inputName.type = 'text';
        inputName.maxLength = 12;
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
                let name = inputName.value.trim().replace(/[^\w\s]/gi, '').replace(/\s/g, '');
                if (name === '') {
                    name = 'Untitled';
                }
                if (document.querySelector(`.${name}`)) {
                    sameNameCount++
                    name = name + sameNameCount;
                }
                const color = event.target.id;
                variableContentCreator(name, color);
                form.remove();
                variableContent.insertAdjacentElement('beforebegin', addPage);
                addPage.style.display = 'flex'
            });
            page.forEach(pages => pages.classList.remove('dontTouch'));
        });
        variableContent.insertAdjacentElement('beforebegin', form);
    });
}
