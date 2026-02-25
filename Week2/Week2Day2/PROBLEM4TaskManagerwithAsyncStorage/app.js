import {addTaskCallback,listTasksCallback,addTaskPromise,listTasksPromise,deleteTaskPromise} from "./storage.js";

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const addTaskHandler = () => {
    const task = taskInput.value;
    if (!task) {
        alert("Enter task");
        return;
    }
    addTaskCallback(task, (message) => {
        console.log(message);
        taskInput.value = "";
    });
};

const listTasksHandler = async () => {
    taskList.innerHTML = "";
    try {
        const tasks = await listTasksPromise();
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${task}
                <button onclick="deleteTaskHandler(${index})">
                    Delete
                </button>
            `;
            taskList.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
};

window.deleteTaskHandler = async (index) => {
    try {
        const message = await deleteTaskPromise(index);
        console.log(message);
        listTasksHandler();
    } catch (error) {
        alert(error);
    }
};

window.addTaskHandler = addTaskHandler;
window.listTasksHandler = listTasksHandler;