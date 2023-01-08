import '../styles/pageView.css'
import { taskManager } from "./taskManager";
import { storage } from './storage';

export const pageView = (variableContent, indicatorHolder, page) => {
    const header = document.querySelector('.header')
    const pageView = document.createElement('div')

    pageView.classList.add('pageView');
    header.style.position = 'relative';
    indicatorHolder.style.display = 'none'

    pageView.appendChild(variableContent)
    document.body.append(pageView);
    document.body.style.all = 'unset'

    page.addEventListener('click', (event) => {
        const form = document.querySelector('.form')
        if (!form) {


            // const storedObject = JSON.parse(localStorage.getItem('Readme'));
            // const taskList = Array.from(storedObject.taskArray)
            // const completedTaskList = Array.from(storedObject.completedTaskArray)
            // console.log(taskList)
            // taskManager(taskList, completedTaskList);



            // const page = document.querySelectorAll('.page');
            // page.forEach(pages => pages.classList.add('dontTouch'));
            let pageToView = document.querySelector(`.${event.target.classList[1]}`);
            if (pageToView === null) return;
            document.querySelectorAll('.pageView').forEach(icon => icon.remove());
            document.body.append(variableContent);
            indicatorHolder.style.display = 'flex';
            header.style.position = 'fixed';
            pageToView.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}
