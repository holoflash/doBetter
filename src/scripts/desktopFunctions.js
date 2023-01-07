import { completion } from "./completion";

export const desktopFunctions = (li, addTask, taskList, completedTaskList, color, name) => {
    li.addEventListener('click', event => {
        if (taskList.contains(addTask)) {
            event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
            if (event.target.parentNode === completedTaskList) {
                taskList.insertBefore(event.target, addTask)
            } else {
                completedTaskList.append(event.target);
            }
            completion(taskList, completedTaskList, color, name)
        }
    });

    // li.addEventListener('contextmenu', event => {
    //     event.preventDefault();

    //     const contextMenu = document.createElement('div');
    //     contextMenu.classList.add('context-menu');

    //     const moveUpButton = document.createElement('button');
    //     moveUpButton.innerText = 'Move Up in List';
    //     moveUpButton.addEventListener('click', () => {
    //         contextMenu.remove();
    //         // Move the li element up in the list
    //     });
    //     const moveDownButton = document.createElement('button');
    //     moveDownButton.innerText = 'Move Down in List';
    //     moveDownButton.addEventListener('click', () => {
    //         // Move the li element down in the list
    //     });
    //     const addToCompletedButton = document.createElement('button');
    //     addToCompletedButton.innerText = 'Add to Completed';
    //     addToCompletedButton.addEventListener('click', () => {
    //         // Add the li element to the completed task list
    //     });

    //     const addToTasksButton = document.createElement('button');
    //     addToTasksButton.innerText = 'Add to Tasks';
    //     addToTasksButton.addEventListener('click', () => {
    //         // Add the li element to the task list
    //     });

    //     const deleteButton = document.createElement('button');
    //     deleteButton.innerText = 'Delete';
    //     deleteButton.addEventListener('click', () => {
    //         // Remove the li element from the DOM
    //     });

    //     contextMenu.appendChild(moveUpButton);
    //     contextMenu.appendChild(moveDownButton);
    //     contextMenu.appendChild(addToCompletedButton);
    //     contextMenu.appendChild(addToTasksButton);
    //     contextMenu.appendChild(deleteButton);

    //     li.prepend(contextMenu);

    //     const closeContextMenu = () => {
    //         contextMenu.remove();
    //     };

    //     document.addEventListener('click', closeContextMenu);
    // });

}