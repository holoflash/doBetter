export const desktopFunctions = (li, addTask, taskToDrag, footer, taskList, completedTaskList, taskArray, completedTaskArray) => {
    li.addEventListener('click', event => {
        if (taskList.contains(addTask)) {
            event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
            if (event.target.parentNode === completedTaskList) {
                taskList.insertBefore(event.target, addTask)
            } else {
                completedTaskList.append(event.target);
            }
        }
    });

    taskToDrag.forEach(task => task.setAttribute("draggable", true));
    let dragged;
    taskToDrag.forEach(task => task.addEventListener("dragstart", event => {
        dragged = event.target;
        footer.classList.remove('hide')
        event.target.style.opacity = 0.1;
        setTimeout(() => {
            event.target.classList.add("hide");
        }, 0);
    }));

    taskToDrag.forEach(task => task.addEventListener("dragend", event => {
        event.target.style.opacity = 1;
        event.target.classList.remove("hide");
    }));

    footer.addEventListener("dragover", event => {
        event.preventDefault();
        footer.classList.add("reveal");
        footer.addEventListener("drop", event => {
            event.preventDefault();
            dragged.remove();
            footer.classList.remove("reveal");
            footer.classList.add('hide');
        });
    });

    footer.addEventListener("dragleave", () => {
        footer.classList.remove("reveal");

    });

    taskToDrag.forEach(task => task.addEventListener("dragover", event => {
        event.preventDefault();
    }));

    taskToDrag.forEach(task => task.addEventListener("drop", event => {
        footer.classList.add('hide');
        event.preventDefault();
        if (dragged && (dragged.classList.contains("task") || dragged.classList.contains("completedTask"))) {
            const rect = event.target.getBoundingClientRect();
            const isOnTopHalf = event.clientY - rect.top < rect.height / 2;
            if (isOnTopHalf) {
                taskList.insertBefore(dragged, event.target);
            } else {
                event.target.insertAdjacentElement("afterend", dragged);
            }
        }
    }));
}
