import { variableContentCreator } from "./variableContentCreator";

export const initializer = () => {
    variableContentCreator('Today', 'color1');
    variableContentCreator('Tomorrow', 'color2');
    variableContentCreator('Someday', 'color3');

    const addPage = document.createElement('button');
    addPage.classList.add('addPage');
    addPage.textContent = '+';

    const variableContent = document.querySelector('.variableContent');
    variableContent.appendChild(addPage);

    addPage.addEventListener('click', () => {
        const form = document.createElement('form');
        form.classList.add('addPageForm');
        const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.maxLength = 9;
        inputName.placeholder = 'List title';
        inputName.classList.add('addPageInput');
        form.appendChild(inputName);

        inputName.addEventListener('blur', event => {
            event.preventDefault();
            if (event.target !== form) {
                form.remove();
                variableContent.append(addPage);
            }
        });

        ['color1', 'color2', 'color3', 'color4', 'color5', 'color6'].forEach(color => {
            const button = document.createElement('button');
            button.type = 'button';
            button.id = color;
            button.style.backgroundColor = `var(--${color})`;
            button.classList.add('color-button');
            form.appendChild(button);
            button.addEventListener('click', () => {
                let name = inputName.value.trim().replace(/[^\w\s]/gi, '').replace(/\s/g, '_');
                if (name === '') {
                    name = 'Untitled'
                }
                console.log(name)
                const color = event.target.id;
                variableContentCreator(name, color);
                form.remove();
                variableContent.append(addPage);
            });
            addPage.remove();
        });
        variableContent.appendChild(form);
    });
}