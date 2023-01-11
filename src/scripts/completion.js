export const completion = (taskList, completedTaskList, color, name) => {
    let cleanName = name.replace(/[^\w\s]/gi, '').replace(/\s/g, '');
    const progressBar = document.querySelector(`.${cleanName}.progressBar`);
    let numberOfTasks = 0;
    let percentage = 0;

    taskList.childNodes.forEach(task => {
        if (task.className === "task") {
            numberOfTasks++;
        }
    });

    let numberOfCompletedTasks = 0;
    completedTaskList.childNodes.forEach(task => {
        if (task.className === 'completedTask') {
            numberOfCompletedTasks++;
        }
    });

    if (!numberOfTasks && !numberOfCompletedTasks) {
        percentage = 100;
    } else {
        percentage = (((numberOfCompletedTasks / (numberOfTasks + numberOfCompletedTasks)) * 100)).toFixed(0);
    }
    progressBar.style.backgroundImage = `linear-gradient(to right, var(--${color}), var(--${color}) ${percentage}%, var(--mainBg) ${percentage}%, var(--mainBg))`;
}
