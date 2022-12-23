const pageCreator = (pageTitle) => {
    const page = document.createElement('div');
    page.classList.add(pageTitle);

    const colorAndTitle = document.createElement('div');
    colorAndTitle.classList.add('doAndTitle');
    page.appendChild(colorAndTitle);

    const colorSelector = document.createElement('button');
    colorSelector.classList.add('doThing');
    colorAndTitle.textContent = 'do';
    colorAndTitle.appendChild(colorSelector);

    const listTitleSelector = document.createElement('span');
    listTitleSelector.classList.add('listTitle');
    colorAndTitle.appendChild(listTitleSelector);
    listTitleSelector.textContent = 'Today';

    const listContainer = document.createElement('div');
    listContainer.classList.add('taskList');
    page.appendChild(listContainer);

    const aTask = document.createElement('LI');
    aTask.classList.add('task');
    aTask.textContent = 'make a to-do list app'
    listContainer.appendChild(aTask);

    const aCompletedTask = document.createElement('LI');
    aCompletedTask.classList.add('completedTask');
    aCompletedTask.textContent = 'use JavaScript to create DOM elements'
    listContainer.appendChild(aCompletedTask);

    const variableContent = document.querySelector('.variableContent');
    variableContent.append(page);
}

pageCreator('page1');
pageCreator('page2');
pageCreator('page3');