import { addToTaskList } from "./functions";
import { dragAndDrop } from "./dragAndDropDesktop";

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

        const restore = () => {
            taskInput.removeEventListener('focusout', handleTaskInput);
            taskInput.remove();
            placeholder.remove();
            taskList.append(addTask);
        }

        const handleTaskInput = () => {
            const taskName = taskInput.textContent.trim(' ');
            if (taskName === 'New task' || taskName === '') {
                restore();
                return
            } {
                const li = document.createElement('li');
                li.classList.add('task')
                li.textContent = taskName;
                taskList.append(li);
                let taskNumber = taskList.childElementCount - 2;
                li.id = taskNumber;
                addToTaskList(li);

                li.addEventListener('click', event => {
                    if (taskList.contains(addTask)) {
                        event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
                        if (event.target.parentNode === completedTaskList) {
                            taskList.insertBefore(event.target, addTask)
                            event.target.style.color = 'white'
                        } else {
                            completedTaskList.append(event.target);
                            event.target.className = 'completedTask'
                            event.target.style.color = `var(--${color})`
                        }
                    }
                });
                const taskToDrag = document.querySelectorAll('li');

                //disable drag and drop on mobile devices
                if (screen.width > 400) {
                    dragAndDrop(taskToDrag, footer, taskList);
                }
                restore();
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
    console.log(screen)
}