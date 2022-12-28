import { TaskManager } from './functions.js';

export const pageCreator = (name, color) => {
    const variableContent = document.querySelector('.variableContent');
    const page = document.createElement('div');
    const colorAndTitle = document.createElement('div');
    const colorSelector = document.createElement('button');
    const listTitleSelector = document.createElement('span');
    const taskList = document.createElement('div');

    page.classList.add('page');
    colorAndTitle.classList.add('doAndTitle');
    colorSelector.classList.add('doThing');
    listTitleSelector.classList.add('listTitle');
    taskList.classList.add('taskList');

    colorSelector.textContent = 'do';
    colorAndTitle.appendChild(colorSelector);
    colorAndTitle.appendChild(listTitleSelector);
    listTitleSelector.textContent = name;

    page.appendChild(colorAndTitle);
    page.appendChild(taskList);
    variableContent.appendChild(page);

    page.style.backgroundImage = `linear-gradient(to bottom, var(--mainBg), 90%, var(--${color}))`;
    colorSelector.style.color = `var(--${color})`;

    const addTask = document.createElement('div');
    addTask.classList.add('addTask');
    addTask.textContent = '+';
    taskList.prepend(addTask);

    addTask.addEventListener('click', () => {
        const taskInput = document.createElement('div');
        taskInput.contentEditable = true;
        taskInput.classList.add('task-input');
        taskList.append(taskInput);
        taskInput.focus();

        const placeholder = document.createElement('div');
        placeholder.classList.add('placeholder');
        placeholder.innerText = 'New task';

        taskInput.insertAdjacentElement('afterbegin', placeholder);

        taskInput.addEventListener('input', () => {
            if (taskInput.textContent !== '') {
                placeholder.remove();
            }
        });


        const handleTaskInput = () => {
            const taskName = taskInput.textContent;
            if (taskName) {
                const li = document.createElement('li');
                li.classList.add('task')
                li.textContent = taskName;
                taskList.append(li);

                li.addEventListener('dblclick', event => {
                    event.target.remove();
                });
                li.addEventListener('click', event => {
                    event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
                });
            }
            taskInput.removeEventListener('focusout', handleTaskInput);
            taskInput.remove();
            placeholder.remove();
        }

        taskInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleTaskInput();
            }
        });
        taskInput.addEventListener('focusout', handleTaskInput);
    })
}

// page.addEventListener('click', () => {
//     taskInput.readOnly = true;
// })

// const aTask = document.createElement('li');
// aTask.classList.add('task');
// aTask.textContent = name;
// taskList.prepend(aTask);


// export const taskCreator = () => {
//     console.log('sup')
//     const taskList = document.querySelector('.taskList');
//     const aTask = document.createElement('li');
//     aTask.classList.add('task');
//     aTask.textContent = taskName;
//     taskList.appendChild(aTask);
//     aTask.addEventListener('click', () => {
//         if (aTask.classList.contains('task')) {
//             aTask.classList.remove('task');
//             aTask.classList.add('completedTask');
//         } else {
//             aTask.classList.remove('completedTask');
//             aTask.classList.add('task');
//         }
//     });
// };


// View all of the task lists and their tasks in the console




