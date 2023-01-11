class Page {
    constructor(name, color, taskArray, completedTaskArray) {
        this.name = name;
        this.color = color;
        this.taskArray = taskArray;
        this.completedTaskArray = completedTaskArray;
        this.cleanName = name.replace(/[^\w\s]/gi, '').replace(/\s/g, '');
    }
}

export function createPage(name, color, taskArray, completedTaskArray) {
    let AllPages = JSON.parse(localStorage.getItem('AllPages')) || [];
    let newPage = new Page(name, color, taskArray, completedTaskArray);
    AllPages = AllPages.concat([newPage]);
    localStorage.setItem('AllPages', JSON.stringify(AllPages));
}

let AllPages = JSON.parse(localStorage.getItem('AllPages')) || [];
let readmeDeleted = JSON.parse(localStorage.getItem('readmeDeleted')) || {};

let isReadmePresent = (AllPages.some((page) => page.name === 'Readme: tasks') ||
    AllPages.some((page) => page.name === 'Readme: pages') ||
    AllPages.some((page) => page.name === 'Readme: misc'));
if (!isReadmePresent && !readmeDeleted.readmeDeleted) {
    const part1 = [
        'Click to mark as complete',
        'Drag to the left to remove',
        'Press the + icon to add new tasks'];
    const part2 = [
        'Click to unmark as complete',
        'Drag to the left to remove',
        'The progress bar fills up as you complete tasks'];
    const part3 = [
        "Click on 'doBetter' in the top-right corner to go home",
        'In home view - add new pages by pressing the + icon',
        "Type in your title and select a color to add",
        'Double tap on the text input box to abort'
    ];
    const part4 = [
        "In home view - clicking on 'doBetter' brings up the page deletion menu"
    ];
    const part5 = [
        "This site can be installed as an app on your mobile device, via the 'Add to home screen/Install app' option in your browser",
        "Doing so adds a 'doBetter' icon to your home screen for quick access",
        "Furthermore, it gives the app a native look by removing the browser bar"
    ];
    const part6 = [
        "Click on '/holoflash' in the top-left corner 5 times in rapid succession to reset the app and clear all user data",
        "Thank you so much for checking out my app!"
    ];

    createPage('Readme: misc', 'color1', part5, part6);
    createPage('Readme: pages', 'color2', part3, part4);
    createPage('Readme: tasks', 'color3', part1, part2);
}
