export const completion = (taskList, completedTaskList, color, name) => {
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
    }
    if (!numberOfTasks && !numberOfCompletedTasks) {
        percentage = 100
    }

    const percentageDisplay = document.querySelector((`.${name}Percentage`))

    percentageDisplay.textContent = `${percentage}%`;
    percentage = 50 - percentage;
    // const progressBar = document.querySelector(`.${name}Progress`)
    // progressBar.style.backgroundImage = `linear-gradient(to top, var(--${color}), ${percentage}%, var(--mainBg))`;
}
