
export const pageCreator = (pageTitle, pageColor) => {
    const variableContent = document.querySelector('.variableContent');
    const page = document.createElement('div');
    const colorAndTitle = document.createElement('div');
    const colorSelector = document.createElement('button');
    const listTitleSelector = document.createElement('span');
    const taskList = document.createElement('div');

    page.classList.add('page');
    colorAndTitle.classList.add('doAndTitle');
    colorSelector.classList.add('doThing');
    listTitleSelector.classList.add('listTitle');
    taskList.classList.add('taskList');

    colorSelector.textContent = 'do';
    colorAndTitle.appendChild(colorSelector);
    colorAndTitle.appendChild(listTitleSelector);
    listTitleSelector.textContent = pageTitle;

    page.appendChild(colorAndTitle);
    page.appendChild(taskList);
    variableContent.appendChild(page);

    page.style.backgroundImage = `linear-gradient(to bottom, var(--mainBg), 90%, var(--${pageColor}))`;
    colorAndTitle.style.color = `var(--${pageColor})`;
    // colorSelector.addEventListener('click', sayHi)
    // function sayHi() {
    //     alert('aiiight')
    // }
}

export const taskCreator = (taskName) => {
    const taskList = document.querySelector('.taskList');
    const aTask = document.createElement('li');
    aTask.classList.add('task');
    aTask.textContent = taskName;
    taskList.appendChild(aTask);

    aTask.addEventListener('click', () => {
        if (aTask.classList.contains('task')) {
            aTask.classList.remove('task');
            aTask.classList.add('completedTask');
        } else {
            aTask.classList.remove('completedTask');
            aTask.classList.add('task');
        }
    });
};

