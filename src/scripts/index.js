import '../styles/styles.css'
import { TaskManager } from '../scripts/functions.js';

//Create header and area to attach new pages to
(() => {
    const body = document.querySelector('body');
    const constantContent = document.createElement('div');
    const header = document.createElement('div');
    const github = document.createElement('a');
    const navbar = document.createElement('button');
    const logo = document.createElement('span');
    const variableContent = document.createElement('div');

    constantContent.classList.add('constantContent');
    header.classList.add('header');
    github.classList.add('github');
    navbar.classList.add('navigation');
    logo.classList.add('logo');
    variableContent.classList.add('variableContent');

    github.href = 'https://github.com/holoflash/doBetter';
    github.textContent = '/holoflash';
    navbar.textContent = 'ALL LISTS';
    logo.textContent = 'doBetter';

    header.append(github, navbar, logo);
    constantContent.append(header);

    body.append(constantContent, variableContent);
})();

const taskManager = new TaskManager();
taskManager.createNewProject('Today', 'color1');
taskManager.createNewProject('Tomorrow', 'color2');
taskManager.createNewProject('Someday', 'color3');

taskManager.createNewToDo('Make a to-do list', true)
taskManager.createNewToDo('Make a to-do list', true)
taskManager.createNewToDo('Make a to-do list', true)
taskManager.createNewToDo('Make a to-do list', true)
taskManager.createNewToDo('Make a to-do list', false)


