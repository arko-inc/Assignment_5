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