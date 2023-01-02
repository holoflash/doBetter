let allTasks = [];

export const addToTaskList = (task) => {
    allTasks.push(task.textContent);
}


// export function changeTaskPosition(dragged, event) {
//     let temp = dragged;
//     dragged = event;
//     event = temp;
// }

// export const TaskManager = (taskName, taskList) => {

// }


// export class TaskManager {
//     constructor() {
//         this.myTaskLists = [];
//     }

//     createNewTask(name, status, taskListName) {
//         const task = { name, status, taskListName };
//         console.table(this.myTaskLists)
//         this.myTaskLists.push(task)
//     }

//     createNewTaskList(name, color) {
//         this.myTaskLists.push({ name, color, tasks: [] });
//     }

//     calculateCompletionPercentage(tasks) {
//         const completed = tasks.filter(task => task.status);
//         return ((completed.length / tasks.length) * 100).toFixed(0) + '%';
//     }
// }

// const taskManager = new TaskManager();

// taskManager.myTasks[2].edit('play', true);

// taskManager.sortByDate(taskManager.myTasks);
// console.table(taskManager.myTasks);

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