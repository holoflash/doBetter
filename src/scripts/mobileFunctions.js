export const mobileFunctions = (li, addTask, taskList, completedTaskList) => {
    const variableContent = document.querySelector('.variableContent');
    let touchstartX = 0;
    let touchendX = 0;

    li.addEventListener('touchstart', (event) => {
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
        // Swipe left
        if (touchendX < touchstartX) {
            event.target.classList.add('moveLeft')
            setTimeout(() => {
                event.target.remove();
            }, 500);
            // Swipe right
        } else if (touchendX > touchstartX) {
            if (taskList.contains(addTask)) {
                event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
                setTimeout(() => {
                    if (event.target.parentNode === completedTaskList) {
                        taskList.insertBefore(event.target, addTask)
                    } else {
                        completedTaskList.append(event.target);
                    }
                }, 500);
            }

        }
    };
}
