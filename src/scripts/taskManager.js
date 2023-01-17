import { desktopFunctions } from "./desktopFunctions";
import { mobileFunctions } from "./mobileFunctions";
import { completion } from "./completion";

const createTaskInput = () => {
    const taskInput = document.createElement('div');
    taskInput.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') {
            taskInput.innerText = taskInput.textContent;
        }
    });
    taskInput.contentEditable = true;
    taskInput.classList.add('task-input');
    return taskInput;
};

const createPlaceholder = () => {
    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');
    placeholder.textContent = ' ';
    return placeholder;
};

const deviceCheckAndAdvise = (li, addTask, taskList, completedTaskList, color, name) => {
    if (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0)) {
        mobileFunctions(li, addTask, taskList, completedTaskList, color, name);
    } else {
        desktopFunctions(li, addTask, taskList, completedTaskList, color, name);
    }
}

export const taskManager = (taskList, addTask, completedTaskList, name, color) => {
    const placeholder = createPlaceholder();
    const taskInput = createTaskInput();
    taskList.append(taskInput);
    taskInput.focus();
    addTask.remove();
    taskList.prepend(placeholder)
    taskInput.addEventListener('keydown', () => {
        placeholder.remove();
    });

    const restore = () => {
        taskInput.removeEventListener('focusout', handleTaskInput);
        placeholder.remove();
        taskInput.remove();
        taskList.append(addTask);
    };

    const handleTaskInput = () => {
        const taskName = taskInput.textContent.trim();
        if (!taskName) {
            restore();
            return;
        }
        const li = document.createElement('li');
        li.classList.add('task');
        li.textContent = taskName;
        taskList.append(li);

        let AllPages = JSON.parse(localStorage.getItem('AllPages')) || [];
        let correspondingPage = AllPages.find(page => page.name === name);
        correspondingPage.taskArray.push(taskName);
        localStorage.setItem('AllPages', JSON.stringify(AllPages));
        completion(taskList, completedTaskList, color, name);
        deviceCheckAndAdvise(li, addTask, taskList, completedTaskList, color, name)
        restore();
    };
    taskInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleTaskInput();
        }
    });
    taskInput.addEventListener('focusout', handleTaskInput);
};

export const storedTaskManager = (name, color, taskArray, completedTaskArray) => {
    let taskList = document.querySelector(`[data-reference='${name}'] .taskList`);
    let completedTaskList = document.querySelector(`[data-reference='${name}'] .completedTaskList`);
    let addTask = document.querySelector(`[data-reference='${name}'] .addTask`);

    taskArray.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('task');
        li.textContent = element;
        taskList.append(li)
        completion(taskList, completedTaskList, color, name);
        deviceCheckAndAdvise(li, addTask, taskList, completedTaskList, color, name)
    });

    completedTaskArray.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('completedTask');
        li.textContent = element;
        completedTaskList.append(li)
        completion(taskList, completedTaskList, color, name);
        deviceCheckAndAdvise(li, addTask, taskList, completedTaskList, color, name)
    })
}
