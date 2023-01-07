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

    let originalPos = null;
    li.setAttribute('draggable', true);
    li.addEventListener('dragstart', event => originalPos = event.target.getBoundingClientRect());
    li.addEventListener('drag', event => {
        if (Math.sqrt((event.clientX - originalPos.left) ** 2 + (event.clientY - originalPos.top) ** 2) >= 200) {
            event.target.remove();
        }
    });
    li.addEventListener('dragend', event => originalPos = null);
}
