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
}
