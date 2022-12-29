import { TaskManager } from './functions.js';

export const pageCreator = (name, color) => {
    const variableContent = document.querySelector('.variableContent');
    const page = document.createElement('div');
    const colorAndTitle = document.createElement('div');
    const colorSelector = document.createElement('button');
    const listTitleSelector = document.createElement('span');
    const taskList = document.createElement('div');
    const completedTaskList = document.createElement('div')
    const footer = document.querySelector('.footer');
    const navigation = document.createElement('div');

    navigation.classList.add(name);
    navigation.id = 'nav'
    navigation.innerText = '●';

    navigation.addEventListener('click', (event) => {
        const navigators = document.querySelectorAll('#nav')
        navigators.forEach(nav => nav.style.color = 'black')
        event.target.style.color = 'white';
        const pageToScrollTo = document.querySelector(`.${event.target.className}`);
        pageToScrollTo.scrollIntoView();
        console.log(pageToScrollTo.scrollIntoView())
    });

    footer.appendChild(navigation);


    page.classList.add('page');
    page.classList.add(name)
    colorAndTitle.classList.add('doAndTitle');
    colorSelector.classList.add('doThing');
    listTitleSelector.classList.add('listTitle');
    taskList.classList.add('taskList');
    completedTaskList.classList.add('completedTaskList');
    completedTaskList.innerText = '_________________'


    colorSelector.textContent = 'do';
    colorAndTitle.appendChild(colorSelector);
    colorAndTitle.appendChild(listTitleSelector);
    listTitleSelector.textContent = name;

    page.append(colorAndTitle, taskList, completedTaskList);

    variableContent.appendChild(page);

    page.style.backgroundImage = `linear-gradient(to bottom, var(--mainBg), 90%, var(--${color}))`;
    colorSelector.style.color = `var(--${color})`;

    const addTask = document.createElement('div');
    addTask.classList.add('addTask');
    addTask.textContent = '+';
    taskList.append(addTask);

    const dblclickHandler = (taskInput, handleTaskInput, placeholder) => {
        taskInput.removeEventListener('focusout', handleTaskInput);
        taskInput.remove();
        placeholder.remove();
        taskList.append(addTask);
        page.removeEventListener('dblclick', dblclickHandler);
    }

    addTask.addEventListener('click', () => {
        page.addEventListener('dblclick', () => {
            if (taskInput === document.activeElement) {
                dblclickHandler(taskInput, handleTaskInput, placeholder);

            }
        });
        const taskInput = document.createElement('div');
        taskInput.contentEditable = true;
        taskInput.classList.add('task-input');
        taskList.append(taskInput);
        taskInput.focus();
        addTask.remove();

        const placeholder = document.createElement('div');
        placeholder.classList.add('placeholder');
        placeholder.innerText = 'New task';

        taskInput.insertAdjacentElement('beforeend', placeholder);

        taskInput.addEventListener('keydown', () => {
            placeholder.remove();
        });
        const handleTaskInput = () => {
            const taskName = taskInput.textContent;
            if (taskName !== 'New task' && taskName !== '') {
                const li = document.createElement('li');
                li.classList.add('task')
                li.textContent = taskName;
                taskList.append(li);


                li.addEventListener('dblclick', event => {
                    event.target.remove();
                });


                li.addEventListener('click', event => {
                    if (taskList.contains(addTask)) {
                        event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
                        if (event.target.parentNode === completedTaskList) {
                            taskList.insertBefore(event.target, addTask)

                            // event.target.className = 'task'
                        } else {
                            completedTaskList.append(event.target);
                            event.target.className = 'completedTask'
                        }
                    }
                });
            }



            taskInput.removeEventListener('focusout', handleTaskInput);
            taskInput.remove();
            placeholder.remove();
            taskList.append(addTask);
            addTask.click();
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




