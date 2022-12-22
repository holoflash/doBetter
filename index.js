class ToDo {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
    }
    markComplete() {
        this.status = true;
    }

    markIncomplete() {
        this.status = false;
    }

    edit(newName, newDueDate, newStatus) {
        this.name = newName;
        this.dueDate = newDueDate;
        this.status = newStatus;
    }
}

class Project extends ToDo {
    constructor(name, dueDate, status, content) {
        super(name, dueDate, status);
        this.content = content;
    }

    addToDo(toDo) {
        this.content.push(toDo);
    }
}

class TaskManager {
    constructor() {
        this.myInbox = [];
        this.myProjects = [];
    }

    createNewToDo(name, dueDate) {
        this.myInbox.push(new ToDo(name, dueDate));
        // updateTheDOM(new ToDo(name, dueDate));
    }

    createNewProject(name, dueDate) {
        this.myProjects.push(new Project(name, dueDate));
    }

    addToDoToProject(inboxIndex, projectIndex) {
        this.myProjects[projectIndex].addToDo(this.myInbox[inboxIndex]);
    }

    sortByDate(array) {
        array.sort((a, b) => a.dueDate - b.dueDate);
    }

    progression(array) {
        const completed = array.filter((item) => item.status);
        return ((completed.length / array.length) * 100).toFixed(0) + '%';
    }
    removeTask(array, taskIndex) {
        array.splice(taskIndex, 1);
    }
    removeTaskFromProject(projectIndex, taskIndex) {
        this.myProjects[projectIndex].content.splice(taskIndex, 1);
    }
    removeProject(projectIndex) {
        this.myProjects.splice(projectIndex, 1);
    }
}

const taskManager = new TaskManager();
taskManager.createNewToDo('Write report', 20220715);
taskManager.createNewToDo('Write a book', 20220714);
taskManager.createNewToDo('SING', 20220714);
taskManager.myInbox[2].edit('play', 20110829, true);

taskManager.sortByDate(taskManager.myInbox);
console.table(taskManager.myInbox);

// function updateTheDOM(task) {
//     const content = document.querySelector('#content');
//     const post = document.createElement('div');
//     post.className = task.name;
//     content.appendChild(post);
// }

//     // This stores in local memory
//     // localStorage.setItem("My watchlist", JSON.stringify(myWatchlist));
//     //Create a "CLEAR" function
//     //  localStorage.clear();
// };
//const date = new Date();
//date.toLocaleDateString() returns format xx/xx/xxx
