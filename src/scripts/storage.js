
export const storage = () => {
    let name = 'Readme'
    let color = 'color1'
    let taskArray = [
        'Click on the + icon to create new task',
        'Click to complete a task',
        'Drag and drop a task to delete it',
        'Click on the "better" logo in the top right to return home'
    ];
    let completedTaskArray = [
        'Click on a task again to bring it back up'
    ];

    const pageArray = {
        name,
        taskArray,
        completedTaskArray,
        color
    };

    localStorage.setItem(pageArray.name, JSON.stringify(pageArray));
}

