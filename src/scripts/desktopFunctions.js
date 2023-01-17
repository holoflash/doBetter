import { completion } from "./completion";

export const desktopFunctions = (li, addTask, taskList, completedTaskList, color, name) => {
    let originalPos = null;
    let newPosition = null;
    let isDragging = false;
    let AllPages = JSON.parse(localStorage.getItem('AllPages')) || [];

    const unmarkAsComplete = (event) => {
        let correspondingPage = AllPages.find(page => page.name === name);
        completedTaskList.append(event.target);
        completion(taskList, completedTaskList, color, name);
        correspondingPage.taskArray.splice(correspondingPage.taskArray.indexOf(event.target.textContent), 1);
        correspondingPage.completedTaskArray.push(event.target.textContent);
        localStorage.setItem('AllPages', JSON.stringify(AllPages));
        completion(taskList, completedTaskList, color, name);
    }

    const markAsComplete = (event) => {
        let correspondingPage = AllPages.find(page => page.name === name);
        taskList.insertBefore(event.target, addTask);
        completion(taskList, completedTaskList, color, name);
        correspondingPage.completedTaskArray.splice(correspondingPage.completedTaskArray.indexOf(event.target.textContent), 1);
        correspondingPage.taskArray.push(event.target.textContent);
        localStorage.setItem('AllPages', JSON.stringify(AllPages));
        completion(taskList, completedTaskList, color, name);
    }

    li.addEventListener('click', (event) => {
        if (event.target.parentNode === completedTaskList) {
            markAsComplete(event);
        } else {
            unmarkAsComplete(event);
        }
    })

    li.addEventListener('mousedown', event => {
        originalPos = event.screenX;
        isDragging = true;
    });

    li.addEventListener('mousemove', event => {
        newPosition = event.screenX - originalPos;
        if (!isDragging || newPosition > 0) {
            return;
        }
        event.target.style.transform = `translateX(${newPosition}px)`;
    });

    li.addEventListener('mouseup', (event) => {
        if (newPosition < -100) {
            let AllPages = JSON.parse(localStorage.getItem('AllPages')) || [];
            let correspondingPage = AllPages.find(page => page.name === name);
            if (event.target.parentNode === taskList) {
                correspondingPage.taskArray.splice(correspondingPage.taskArray.indexOf(event.target.textContent), 1);
            } else {
                correspondingPage.completedTaskArray.splice(correspondingPage.completedTaskArray.indexOf(event.target.textContent), 1);
            }
            localStorage.setItem('AllPages', JSON.stringify(AllPages));
            event.target.remove();
            completion(taskList, completedTaskList, color, name);
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
