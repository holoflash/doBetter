class ToDo {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }
    markComplete() {
        this.status = true;
    }

    markIncomplete() {
        this.status = false;
    }

    edit(newName, newStatus) {
        this.name = newName;
        this.status = newStatus;
    }
}

class Project extends ToDo {
    constructor(name, status, content) {
        super(name, status);
        this.content = content;
        this.color = color;
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

    createNewToDo(name, status) {
        this.myInbox.push(new ToDo(name, status));
        // updateTheDOM(new ToDo(name, dueDate));
    }

    createNewProject(name, status, color) {
        this.myProjects.push(new Project(name, status, color));
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
taskManager.createNewToDo('Write report', false);
taskManager.createNewToDo('Write a book', false);
taskManager.createNewToDo('SING', false);
taskManager.myInbox[2].edit('play', true);

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
