export const dragAndDrop = (taskToDrag, footer, taskList) => {
    taskToDrag.forEach(li => li.setAttribute("draggable", true));
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
