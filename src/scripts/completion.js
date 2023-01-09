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
        if (task.className === 'completedTask') {
            numberOfCompletedTasks++;
        }
    });

    if (!numberOfTasks && !numberOfCompletedTasks) {
        percentage = 100;
    } else {
        percentage = (((numberOfCompletedTasks / (numberOfTasks + numberOfCompletedTasks)) * 100)).toFixed(0);
    }
    // //Display the percentage value on the progressbar
    // progressBar.textContent = `${percentage}%`
    progressBar.style.backgroundImage = `linear-gradient(to right, var(--${color}), ${percentage}%, var(--mainBg))`;
}
