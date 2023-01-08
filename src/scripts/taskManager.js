import { desktopFunctions } from "./desktopFunctions";
import { mobileFunctions } from "./mobileFunctions";
import { completion } from "./completion";

const createTaskInput = () => {
    const taskInput = document.createElement('div');
    taskInput.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') {
            taskInput.innerText = taskInput.innerText;
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

export const taskManager = (taskList, addTask, completedTaskList, name, color) => {
    console.log('hello there')
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

        // const storedObject = JSON.parse(localStorage.getItem('Readme'));

        completion(taskList, completedTaskList, color, name);
        if (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0)) {
            mobileFunctions(li, addTask, taskList, completedTaskList, color, name);
        } else {
            desktopFunctions(li, addTask, taskList, completedTaskList, color, name);
        }
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
