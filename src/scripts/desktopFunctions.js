export const desktopFunctions = (li, addTask, taskToDrag, footer, taskList, completedTaskList, color, taskArray, completedTaskArray) => {
    li.addEventListener('click', event => {
        if (taskList.contains(addTask)) {
            event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
            if (event.target.parentNode === completedTaskList) {
                taskList.insertBefore(event.target, addTask)
                event.target.style.color = 'white';
                const index = completedTaskArray.indexOf(event.target.textContent);
                if (index !== -1) {
                    completedTaskArray.splice(index, 1);
                }
                taskArray.push(event.target.textContent);
                localStorage.setItem("taskArray", JSON.stringify(taskArray));
                localStorage.setItem("completedTaskArray", JSON.stringify(completedTaskArray));
            } else {
                completedTaskList.append(event.target);
                event.target.className = 'completedTask';
                event.target.style.color = `var(--${color})`;
                const index = taskArray.indexOf(event.target.textContent);
                if (index !== -1) {
                    taskArray.splice(index, 1);
                }
                completedTaskArray.push(event.target.textContent);
                localStorage.setItem("taskArray", JSON.stringify(taskArray));
                localStorage.setItem("completedTaskArray", JSON.stringify(completedTaskArray));
            }
        }
    });

    taskToDrag.forEach(task => task.setAttribute("draggable", true));
    let dragged;
    taskToDrag.forEach(task => task.addEventListener("dragstart", event => {
        dragged = event.target;
        event.target.style.opacity = 0.1;
        setTimeout(() => {
            event.target.classList.add("taskDrag");
        }, 0);
    }));

    taskToDrag.forEach(task => task.addEventListener("dragend", event => {
        event.target.style.opacity = 1;
        event.target.classList.remove("taskDrag");
    }));

    footer.addEventListener("dragover", event => {
        event.preventDefault();
        footer.classList.add("dragEnter");
        footer.addEventListener("drop", event => {

            event.preventDefault();
            dragged.remove();
            footer.classList.remove("dragEnter");
        });
    });

    footer.addEventListener("dragleave", () => {
        footer.classList.remove("dragEnter");
    });

    taskToDrag.forEach(task => task.addEventListener("dragover", event => {
        event.preventDefault();
    }));

    taskToDrag.forEach(task => task.addEventListener("drop", event => {
        event.preventDefault();
        if (dragged && dragged.classList.contains("task")) {
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
