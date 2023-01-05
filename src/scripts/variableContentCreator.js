import { taskManager } from "./taskManager";

export const variableContentCreator = (name, color) => {
    const variableContent = document.querySelector('.variableContent');
    const pageIndicator = document.createElement('span')
    const indicatorHolder = document.querySelector('.indicatorHolder');
    const page = document.createElement('div');
    const doAndTitle = document.createElement('div');
    const doColor = document.createElement('div');
    const title = document.createElement('span');
    const taskList = document.createElement('div');
    const completedTaskList = document.createElement('div')
    const footer = document.querySelector('.footer');
    const addTask = document.createElement('div');

    footer.textContent = 'delete'
    doColor.textContent = 'do';
    title.textContent = name;
    addTask.textContent = '+';
    page.style.backgroundImage = `linear-gradient(to bottom, var(--mainBg), 80%, var(--${color}))`;
    doColor.style.color = `var(--${color})`;
    pageIndicator.textContent = '●'

    page.classList.add('page');
    page.classList.add(name)
    doAndTitle.classList.add('doAndTitle');
    doColor.classList.add('doThing');
    title.classList.add('listTitle');
    addTask.classList.add('addTask');
    taskList.classList.add('taskList');
    completedTaskList.classList.add('completedTaskList');
    pageIndicator.classList.add('pageIndicator')
    pageIndicator.id = name;
    pageIndicator.style.color = `var(--${color})`;
    pageIndicator.addEventListener('click', (event) => {
        (document.querySelector(`.${event.target.id}`)).scrollIntoView()
    })

    doAndTitle.appendChild(doColor);
    doAndTitle.appendChild(title);
    taskList.append(addTask);
    variableContent.appendChild(page);
    page.append(doAndTitle, taskList, completedTaskList);

    indicatorHolder.append(pageIndicator);

    //Determine the page in view and advise
    function createObserver() {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };
        let observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(page);
    }

    function handleIntersect(entries) {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                let pageInView = entry.target.classList[1];
                let correspondingDot = document.querySelector(`#${pageInView}`);
                correspondingDot.classList.add('glow')

                if (pageInView === 'Today') {
                    document.querySelector('#Tomorrow').classList.remove('glow')
                    document.querySelector('#Someday').classList.remove('glow')
                }
                if (pageInView === 'Tomorrow') {
                    document.querySelector('#Today').classList.remove('glow')
                    document.querySelector('#Someday').classList.remove('glow')
                }
                if (pageInView === 'Someday') {
                    document.querySelector('#Today').classList.remove('glow')
                    document.querySelector('#Tomorrow').classList.remove('glow')
                }



            }
        }
    }
    createObserver();


    // // LocalStorage ops
    // const taskArray = [].slice.call(taskList)
    // const completedTaskArray = [].slice.call(completedTaskList)

    // const pageArray = {
    //     taskArray,
    //     completedTaskArray
    // };
    // localStorage.setItem(name, JSON.stringify(pageArray));

    // storedObject = { taskArray, completedTaskArray }
    // localStorage.setItem(name, JSON.stringify(storedObject));
    // // End

    addTask.addEventListener('click', () => {
        taskManager(taskList, footer, addTask, completedTaskList, name);
    });
}
