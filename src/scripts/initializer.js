import { variableContentCreator } from "./variableContentCreator";

export const initializer = () => {
    const pageView = document.createElement('div');
    pageView.classList.add('pageView');
    document.body.append(pageView);

    const addPage = document.createElement('button');
    addPage.classList.add('addPage');
    addPage.textContent = '+';

    const variableContent = document.querySelector('.variableContent');
    variableContent.insertAdjacentElement('beforebegin', addPage);
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
            });
            page.forEach(pages => pages.classList.remove('dontTouch'));
        });
        variableContent.insertAdjacentElement('beforebegin', form);
    });
}
