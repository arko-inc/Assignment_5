let tasks = [];
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const totalDisplay = document.getElementById('total');
const completedDisplay = document.getElementById('completed');
const pendingDisplay = document.getElementById('pending');

// learned from brocode local stroage

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

// event create korlam 

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    totalDisplay.textContent = `Total: ${total}`;
    completedDisplay.textContent = `Completed: ${completed}`;
    pendingDisplay.textContent = `Pending: ${total - completed}`;
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'grid grid-cols-7 items-center';

      
        taskList.appendChild(taskItem);
    });
    updateStats();
}