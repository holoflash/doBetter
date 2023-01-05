import { desktopFunctions } from "./desktopFunctions";
import { mobileFunctions } from "./mobileFunctions";

export const taskManager = (taskList, footer, addTask, completedTaskList, name) => {
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
        }
        const li = document.createElement('li');
        li.classList.add('task')
        li.textContent = taskName;
        taskList.append(li);



        (function desktopOrMobile() {
            const taskToDrag = document.querySelectorAll('li');
            //Check if user is using a touch device
            function isTouchDevice() {
                return (('ontouchstart' in window) ||
                    (navigator.maxTouchPoints > 0) ||
                    (navigator.msMaxTouchPoints > 0));
            }
            if (isTouchDevice() === false) {
                desktopFunctions(li, addTask, taskToDrag, footer, taskList, completedTaskList);
            }
            if (isTouchDevice() === true) {
                mobileFunctions(li, addTask, taskList, completedTaskList);
            }
        })();
        restore();

        // //LocalStorage ops
        // const storedObject = JSON.parse(localStorage.getItem(name));
        // storedObject.taskArray.push(li.textContent);
        // localStorage.setItem(name, JSON.stringify(storedObject));
        // //end

    }
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleTaskInput();
        }
    });
    taskInput.addEventListener('focusout', handleTaskInput);
}
