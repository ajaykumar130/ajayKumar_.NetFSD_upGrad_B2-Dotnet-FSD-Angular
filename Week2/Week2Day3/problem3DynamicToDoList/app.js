const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert("Please enter a task");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
};

const handleTaskActions = (event) => {
    const target = event.target;
    if (target.classList.contains("delete-btn")) {
        target.parentElement.remove();
    }

    if (target.classList.contains("complete-btn")) {
        const taskText = target.parentElement.querySelector(".task-text");
        taskText.classList.toggle("completed");
    }

};
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskActions);