import { taskManager } from "./taskManager";
import { scrollAndNavigate } from "./scrollAndNavigate";
import { pageViewFunctions } from './pageViewFunctions';
import { completion } from "./completion";

export const variableContentCreator = (name, color) => {
    name = (name.trim().replace(/\s/g, '_'));
    const variableContent = document.querySelector('.variableContent');
    const pageIndicator = document.createElement('span')
    const indicatorHolder = document.querySelector('.indicatorHolder');
    const page = document.createElement('div');
    const doAndTitle = document.createElement('div');
    const doColor = document.createElement('div');
    const title = document.createElement('span');
    const taskList = document.createElement('div');
    const completedTaskList = document.createElement('div')
    const addTask = document.createElement('div');
    const progressBar = document.createElement('div');

    doColor.textContent = 'do';
    title.textContent = name.trim().replace(/_/g, ' ');
    addTask.textContent = '+';
    doColor.style.color = `var(--${color})`;
    pageIndicator.innerText = '❖'

    page.classList.add('page');
    page.classList.add(name)
    doAndTitle.classList.add('doAndTitle');
    doColor.classList.add('doColor');
    title.classList.add('listTitle');
    title.classList.add(name)
    addTask.classList.add('addTask');
    taskList.classList.add('taskList');
    progressBar.classList.add(name);
    progressBar.classList.add('progressBar')
    completedTaskList.classList.add('completedTaskList');
    pageIndicator.classList.add('pageIndicator')
    pageIndicator.id = name;
    pageIndicator.style.color = `var(--${color})`;

    pageIndicator.addEventListener('click', (event) => {
        (document.querySelector(`.${event.target.id}`)).scrollIntoView()
    })

    doAndTitle.appendChild(doColor);
    doAndTitle.appendChild(title);
    page.insertAdjacentElement('afterbegin', progressBar);
    taskList.append(addTask);
    variableContent.prepend(page);
    page.append(doAndTitle, taskList, completedTaskList);
    indicatorHolder.prepend(pageIndicator);

    completion(taskList, completedTaskList, color, name);

    pageViewFunctions(variableContent, indicatorHolder);
    scrollAndNavigate(page);
    addTask.addEventListener('click', () => {
        taskManager(taskList, addTask, completedTaskList, name, color);
    });



    // /////!!!!!!!
    // if (localStorage.getItem("username") === null) {
    //     const pageObject = {
    //         name: name,
    //         color: color,
    //         taskList: [],
    //         completedTaskList: []
    //     };
    //     localStorage.setItem(name, JSON.stringify(pageObject));
    // }
}
