export const completion = (taskList, completedTaskList, color, name) => {
    const progressBar = document.querySelector(`.${name}.progressBar`)
    let numberOfTasks = 0;
    let percentage = 0;

    taskList.childNodes.forEach(task => {
        if (task.className === "task") {
            numberOfTasks++
        }
    });

    let numberOfCompletedTasks = 0;
    completedTaskList.childNodes.forEach(task => {
        if (task.className === "completedTask") {
            numberOfCompletedTasks++;
        }
    });
    if (numberOfTasks > 0 && numberOfCompletedTasks > 0) {
        percentage = (((numberOfCompletedTasks / (numberOfTasks + numberOfCompletedTasks)) * 100)).toFixed(0);
    }
    if (numberOfTasks === 0 && numberOfCompletedTasks > 0) {
        percentage = 100
        progressBar.textContent = 'All done!'
    }
    if (!numberOfTasks && !numberOfCompletedTasks) {
        percentage = 100
    }

    progressBar.textContent = `${percentage}%`
    progressBar.style.backgroundImage = `linear-gradient(to right, var(--${color}), ${percentage}%, var(--mainBg))`;
}