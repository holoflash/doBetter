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
        const taskInput = document.createElement('div');
        taskInput.addEventListener('input', (event) => {
            if (event.inputType === 'insertFromPaste') {
                taskInput.innerText = taskInput.innerText;
            }
        });
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
                li.draggable = 'true;'
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
                        } else {
                            completedTaskList.append(event.target);
                            event.target.className = 'completedTask'
                        }
                    }
                });

                const taskToDrag = document.querySelectorAll('li');
                let dragged;
                taskToDrag.forEach(task => task.addEventListener('dragstart', (event) => {
                    dragged = event.target;
                    event.target.style.opacity = 0.1;
                    setTimeout(() => {
                        event.target.classList.add('taskDrag')
                    }, 0);
                }));

                taskToDrag.forEach(task => task.addEventListener('dragend', (event) => {
                    event.target.style.opacity = 1;
                    event.target.classList.remove('taskDrag')
                }));

                footer.addEventListener("dragover", (event) => {
                    event.preventDefault();
                    footer.classList.add('dragEnter');
                    footer.addEventListener("drop", (event) => {
                        event.preventDefault();
                        dragged.remove();
                        footer.classList.remove('dragEnter');
                    });
                },);

                footer.addEventListener("dragleave", () => {
                    footer.classList.remove('dragEnter');
                });

                //Reorder tasks by dragging and dropping
                taskToDrag.forEach(task => task.addEventListener("dragover", event => {
                    event.preventDefault();
                }));

                taskToDrag.forEach(task => task.addEventListener("drop", event => {
                    event.preventDefault();
                    if (dragged && dragged.classList.contains("task")) {
                        const rect = event.target.getBoundingClientRect();
                        const isOnTopHalf = event.clientY - rect.top < rect.height / 2;
                        if (isOnTopHalf) {
                            taskList.insertBefore(dragged, event.target);
                        } else {
                            event.target.insertAdjacentElement("afterend", dragged);
                        }
                    }
                }));

                taskInput.removeEventListener('focusout', handleTaskInput);
                taskInput.remove();
                placeholder.remove();
                taskList.append(addTask);
            }
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