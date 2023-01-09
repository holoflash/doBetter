import { completion } from "./completion";

export const desktopFunctions = (li, addTask, taskList, completedTaskList, color, name) => {
    let originalPos = null;
    let newPosition = null;
    let isDragging = false;

    li.addEventListener('mousedown', event => {
        originalPos = event.screenX;
        isDragging = true;
    });

    li.addEventListener('mousemove', event => {
        if (!isDragging) {
            return;
        }
        newPosition = event.screenX - originalPos;
        event.target.style.transform = `translateX(${newPosition}px)`;
    });

    li.addEventListener('mouseup', (event) => {
        if (newPosition < -100) {
            event.target.remove();
        } else if (newPosition > 100) {
            event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
            if (event.target.parentNode === completedTaskList) {
                taskList.insertBefore(event.target, addTask);
                completion(taskList, completedTaskList, color, name);
            } else {
                completedTaskList.append(event.target);
                completion(taskList, completedTaskList, color, name);
            }
            event.target.style.transform = null;
        } else {
            event.target.style.transform = null;
        }

        isDragging = false;
        originalPos = null;
        newPosition = null;
    });

    li.addEventListener('mouseleave', (event) => {
        if (isDragging) {
            event.target.style.transform = null;
            isDragging = false;
            originalPos = null;
            newPosition = null;
        }
    });
}
