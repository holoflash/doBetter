import { variableContentCreator } from "./variableContentCreator";

export const initializer = () => {
    variableContentCreator('Someday', 'color6');
    variableContentCreator('This_year', 'color5');
    variableContentCreator('This_month', 'color4');
    variableContentCreator('This_week', 'color3');
    variableContentCreator('Tomorrow', 'color2');
    variableContentCreator('Today', 'color1');

    const addPage = document.createElement('button');
    addPage.classList.add('addPage');
    addPage.textContent = '+';

    const variableContent = document.querySelector('.variableContent');
    variableContent.prepend(addPage);
    let sameNameCount = 0;
    addPage.addEventListener('click', () => {
        document.body.addEventListener('click', (event) => {
            if (!['text', 'submit', 'button'].includes(event.target.type)) {
                form.remove();
                variableContent.prepend(addPage);
                return
            }
        })
        const form = document.createElement('form');
        const inputName = document.createElement('input');
        inputName.autofocus = true;

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
                let name = inputName.value.trim().replace(/[^\w\s]/gi, '').replace(/\s/g, '_');
                if (name === '') {
                    name = 'Untitled'
                }

                if (document.querySelector(`.${name}`)) {
                    sameNameCount++
                    name = name + sameNameCount;
                }
                const color = event.target.id;
                variableContentCreator(name, color);
                form.remove();
                variableContent.prepend(addPage);
            });
            addPage.remove();
        });
        variableContent.prepend(form);
    });
}