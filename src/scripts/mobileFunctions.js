import { completion } from "./completion";

export const mobileFunctions = (li, addTask, taskList, completedTaskList, color, name) => {
    const variableContent = document.querySelector('.variableContent');
    let touchstartX = 0;
    let touchendX = 0;

    li.addEventListener('click', (event) => {
        event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
        if (event.target.parentNode === completedTaskList) {
            taskList.insertBefore(event.target, addTask);
            completion(taskList, completedTaskList, color, name);
        } else {
            completedTaskList.append(event.target);
            completion(taskList, completedTaskList, color, name);
        }
    })

    li.addEventListener('touchstart', (event) => {
        event.target.draggable = true;
        variableContent.classList.add('dontTouch')
        touchstartX = event.changedTouches[0].screenX;
        addTask.classList.add('dontTouch');
    });

    li.addEventListener('touchend', (event) => {
        touchendX = event.changedTouches[0].screenX;
        addTask.classList.remove('dontTouch');
        variableContent.classList.remove('dontTouch')
        swipe(event);
    });

    const swipe = (event) => {
        const threshold = 100; // Set the swipe threshold here
        if (touchendX < touchstartX) {
            event.target.classList.add('moveLeft')
            setTimeout(() => {
                event.target.remove();
            }, 500);
        }
        else if (touchendX > touchstartX) {
            const swipeDistance = touchendX - touchstartX;
            if (swipeDistance > threshold) {
                if (taskList.contains(addTask)) {
                    event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
                    if (event.target.parentNode === completedTaskList) {
                        taskList.insertBefore(event.target, addTask)
                    } else {
                        setTimeout(() => {
                            completedTaskList.append(event.target);
                        }, 500);
                    }
                    completion(taskList, completedTaskList, color, name)
                }
            }
        }
    }
}
