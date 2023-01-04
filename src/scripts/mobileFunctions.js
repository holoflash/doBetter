export const mobileFunctions = (li, addTask, footer, taskList, completedTaskList, color) => {
    let touchStartTime;
    let touchTimer;

    li.addEventListener('touchstart', (event) => {
        touchStartTime = Date.now();
        touchTimer = setTimeout(() => {
            let taskToHandle = event.target;
            let intervalId;
            addTask.classList.add('dontTouch');

            intervalId = setInterval(() => {
                taskToHandle.style.opacity = taskToHandle.style.opacity === '1' ? '0.7' : '1';
            }, 300);

            li.classList.add('dontTouch');
            footer.classList.add("dragEnter");
            document.addEventListener('click', (event) => {
                if (event.target !== footer) {
                    footer.classList.remove("dragEnter");
                    addTask.classList.remove('dontTouch');
                    li.classList.remove('dontTouch');
                    event.target.style.opacity = 1;
                    clearInterval(intervalId);
                    return
                }
            })

            footer.addEventListener('click', () => {
                taskToHandle.remove();
                footer.classList.remove("dragEnter");
                addTask.classList.remove('dontTouch');
                li.classList.remove('dontTouch');
            });
        }, 500);
    });

    li.addEventListener('touchend', () => {
        clearTimeout(touchTimer);
    });

    li.addEventListener('touchcancel', () => {
        clearTimeout(touchTimer);
    });

    li.addEventListener('click', (event) => {
        if (event.target.classList.contains('completedTask')) {
            taskList.insertBefore(event.target, addTask);
            event.target.style.color = 'white';
            event.target.className = 'task';
            event.target.style.opacity = 1;
            addTask.classList.remove('dontTouch');
            return
        }

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
}
