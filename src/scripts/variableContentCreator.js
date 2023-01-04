import { taskManager } from "./taskManager";

export const variableContentCreator = (name, color) => {
    const variableContent = document.querySelector('.variableContent');
    const page = document.createElement('div');
    const colorAndTitle = document.createElement('div');
    const colorSelector = document.createElement('button');
    const listTitleSelector = document.createElement('span');
    const taskList = document.createElement('div');
    const completedTaskList = document.createElement('div')
    const footer = document.querySelector('.footer');

    footer.textContent = '🗑'

    page.classList.add('page');
    page.classList.add(name)
    colorAndTitle.classList.add('doAndTitle');
    colorSelector.classList.add('doThing');
    listTitleSelector.classList.add('listTitle');
    taskList.classList.add('taskList');
    completedTaskList.classList.add('completedTaskList');

    colorSelector.textContent = 'do';
    colorAndTitle.appendChild(colorSelector);
    colorAndTitle.appendChild(listTitleSelector);
    listTitleSelector.textContent = name;

    page.append(colorAndTitle, taskList, completedTaskList);

    variableContent.appendChild(page);

    page.style.backgroundImage = `linear-gradient(to bottom, var(--mainBg), 80%, var(--${color}))`;
    colorSelector.style.color = `var(--${color})`;

    const addTask = document.createElement('div');
    addTask.classList.add('addTask');
    addTask.textContent = '+';
    taskList.append(addTask);

    addTask.addEventListener('click', () => {
        taskManager(taskList, footer, addTask, completedTaskList, color);
    });
}
