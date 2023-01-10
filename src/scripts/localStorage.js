class Page {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.taskList = [];
        this.completedTaskList = [];
        this.completion = 0;
    }
}

export function createPage(name, color) {
    let AllPages = JSON.parse(localStorage.getItem('AllPages')) || [];
    let newPage = new Page(name, color);
    AllPages = AllPages.concat([newPage]);
    localStorage.setItem('AllPages', JSON.stringify(AllPages));
}

let AllPages = JSON.parse(localStorage.getItem('AllPages')) || [];
let isReadmePresent = AllPages.some((page) => page.name === 'Readme');
if (!isReadmePresent) {
    createPage('Readme', 'color1');
}
