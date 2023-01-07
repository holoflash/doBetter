import { variableContentCreator } from "./variableContentCreator";

export const initializer = () => {
    const pageView = document.createElement('div');
    pageView.classList.add('pageView');
    document.body.append(pageView);

    variableContentCreator('Someday', 'color6');
    variableContentCreator('This year', 'color5');
    variableContentCreator('This month', 'color4');
    variableContentCreator('This week', 'color3');
    variableContentCreator('Tomorrow', 'color2');
    variableContentCreator('Today', 'color1');

    const addPage = document.createElement('button');
    addPage.classList.add('addPage');
    addPage.textContent = '+';

    const variableContent = document.querySelector('.variableContent');
    variableContent.prepend(addPage);
    let sameNameCount = 0;
    addPage.addEventListener('click', () => {
        const page = document.querySelectorAll('.page');
        page.forEach(pages => pages.classList.add('dontTouch'));
        document.body.addEventListener('click', (event) => {
            if (event.target.className === 'listTitle') {
                form.remove();
                variableContent.prepend(addPage);
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

        inputName.type = 'text';
        inputName.maxLength = 12;
        inputName.placeholder = 'do:';
        inputName.classList.add('addPageInput');
        inputName.autofocus = true;
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
                addPage.remove();
                variableContent.prepend(addPage);
                page.forEach(pages => pages.classList.remove('dontTouch'));
            });
            addPage.remove();
        });
        variableContent.prepend(form);
    });
}
