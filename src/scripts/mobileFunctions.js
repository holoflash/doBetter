import { completion } from "./completion";

export const mobileFunctions = (li, addTask, taskList, completedTaskList, color, name) => {
    const variableContent = document.querySelector('.variableContent')
    let originalPos = null;
    let newPosition = null;
    let isDragging = false;
    let AllPages = JSON.parse(localStorage.getItem('AllPages')) || [];

    const unmarkAsComplete = (event) => {
        completedTaskList.append(event.target);
        completion(taskList, completedTaskList, color, name);
        let correspondingPage = AllPages.find(page => page.name === name);
        correspondingPage.taskArray.splice(correspondingPage.taskArray.indexOf(event.target.textContent), 1);
        correspondingPage.completedTaskArray.push(event.target.textContent);
        localStorage.setItem('AllPages', JSON.stringify(AllPages));
        completion(taskList, completedTaskList, color, name);
    }

    const markAsComplete = (event) => {
        taskList.insertBefore(event.target, addTask);
        completion(taskList, completedTaskList, color, name);
        let correspondingPage = AllPages.find(page => page.name === name);
        correspondingPage.completedTaskArray.splice(correspondingPage.completedTaskArray.indexOf(event.target.textContent), 1);
        correspondingPage.taskArray.push(event.target.textContent);
        localStorage.setItem('AllPages', JSON.stringify(AllPages));
        completion(taskList, completedTaskList, color, name);
    }

    li.addEventListener('click', (event) => {
        event.target.className = event.target.className === 'task' ? 'completedTask' : 'task';
        if (event.target.parentNode === completedTaskList) {
            markAsComplete(event);
        } else {
            unmarkAsComplete(event);
        }
    })

    li.addEventListener('touchstart', event => {
        if (event.target === li) {
            variableContent.style.overflow = 'hidden'
        }
        originalPos = event.touches[0].screenX;
        isDragging = true;
    });

    li.addEventListener('touchmove', event => {
        newPosition = event.touches[0].screenX - originalPos;
        if (!isDragging || newPosition > 0) {
            return;
        }
        event.target.style.transform = `translateX(${newPosition}px)`;
    });

    li.addEventListener('touchend', (event) => {
        variableContent.style.overflow = 'scroll';
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
}
