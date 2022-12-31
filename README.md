# doBetter

Live: https://holoflash.github.io/doBetter/

This is a simple yet effective task management app that allows you to create new pages (task lists), add tasks to those pages, and mark tasks as completed. The app has a minimalistic design and is easy to use, making it perfect for those who want to stay organized without being overwhelmed by unnecessary features.

## Features

-   Create new pages with a given name and color
-   Add tasks to the page's task list
-   Mark tasks as completed, which moves them to the completed task list
-   Rearrange tasks in the task list and completed task list by dragging and dropping them
-   Footer element with text content of '🗑'
-   Page background color determined by the given color argument

## Setup

1. Clone or download this repository
2. Open the `index.html` file in your browser

## Usage

To create a new page, use the `pageCreator` function and pass in the desired name and color for the page. The page will be appended to the DOM.

```javascript
pageCreator('My Page', 'red');
```

To add a new task to a page, click the '+' button on the page. A task input field will appear, where you can enter the task name. Press enter or click outside of the input field to add the task to the page's task list.

To mark a task as completed, click on the task in the task list. It will be moved to the completed task list and the task's appearance will change.

To rearrange tasks, click and hold on a task and drag it to the desired location. Release the mouse button to drop the task.

## Built With

-   ![HTML5](https://img.shields.io/static/v1?label=&message=HTML5&color=E34F26&logo=html5&logoColor=ffffff)
-   ![CSS3](https://img.shields.io/static/v1?label=&message=CSS3&color=1572B6&logo=css3&logoColor=ffffff)
-   ![JavaScript](https://img.shields.io/static/v1?label=&message=JavaScript&color=F7DF1E&logo=javascript&logoColor=000000)
-   ![Webpack](https://img.shields.io/static/v1?label=&message=Webpack&color=8DD6F9&logo=webpack&logoColor=ffffff)

## Learning Outcomes

This project helped me to:

-   Practice using vanilla JavaScript to manipulate the DOM
-   Use webpack to bundle my code
-   Understand the importance of user experience when designing an app

One of the challenges I faced while working on this project was ensuring that the drag and drop functionality worked smoothly and intuitively for the user. Another challenge was ensuring that the app was fully responsive on both mobile and desktop devices.

Overall, working on this project helped me to improve my skills in front-end web development.
