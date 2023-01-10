let AllPages = [];

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
    AllPages.push(new Page(name, color));
    localStorage.setItem('AllPages', JSON.stringify(AllPages));
}
