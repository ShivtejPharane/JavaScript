const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const columns = document.querySelectorAll(".column");

let tasks = JSON.parse(localStorage.getItem("kanbanTasks")) || [];

addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    const newTask = {
        id: Date.now(),
        text: text,
        column: "todo"
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = "";
});

function saveTasks() {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
}

function renderTasks() {
    document.querySelectorAll(".task-list").forEach(list => list.innerHTML = "");

    tasks.forEach(task => {
        const taskEl = createTaskElement(task);
        document.querySelector(`[data-column="${task.column}"] .task-list`)
            .appendChild(taskEl);
    });

    updateCounts();
}

function createTaskElement(task) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.dataset.id = task.id;

    const span = document.createElement("span");
    span.textContent = task.text;

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("task-buttons");

    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fas fa-pen"></i>';
    editBtn.classList.add("edit-btn");
    editBtn.title = "Edit Task";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    deleteBtn.title = "Delete Task";

    editBtn.onclick = () => {
        const newText = prompt("Edit task:", task.text);
        if (newText) {
            task.text = newText;
            saveTasks();
            renderTasks();
        }
    };

    deleteBtn.onclick = () => {
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks();
        renderTasks();
    };

    div.addEventListener("dragstart", () => {
        div.classList.add("dragging");
    });

    div.addEventListener("dragend", () => {
        div.classList.remove("dragging");
    });

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    div.appendChild(span);
    div.appendChild(btnContainer);

    return div;
}

columns.forEach(column => {
    const taskList = column.querySelector(".task-list");

    taskList.addEventListener("dragover", e => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        taskList.appendChild(dragging);
    });

    taskList.addEventListener("drop", e => {
        const id = document.querySelector(".dragging").dataset.id;
        const task = tasks.find(t => t.id == id);
        task.column = column.dataset.column;
        saveTasks();
        renderTasks();
    });
});

function updateCounts() {
    columns.forEach(column => {
        const columnName = column.dataset.column;
        const count = tasks.filter(t => t.column === columnName).length;
        column.querySelector(".count").textContent = count;
    });
}

renderTasks();