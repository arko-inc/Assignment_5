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
        taskItem.innerHTML = `
        <span>${index + 1}</span>
        <span class="col-span-2">${task.name}</span>
        <span>${task.date}</span>
        <span>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleStatus(${index})">
        </span>
        <span class="text-red-500 cursor-pointer" onclick="deleteTask(${index})">🗑️</span>
        <span class="text-blue-500 cursor-pointer" onclick="editTask(${index})">✏️</span>
    `;
      
        taskList.appendChild(taskItem);
    });
    updateStats();
}

function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        tasks.push({
            name: taskName,
            date: new Date().toLocaleDateString(),
            completed: false
        });
        taskInput.value = '';
        saveTasks(); 
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();  
    renderTasks();
}

function editTask(index) {
    const newTaskName = prompt('Edit task:', tasks[index].name);
    if (newTaskName) {
        tasks[index].name = newTaskName;
        saveTasks();  
        renderTasks();
    }
}

function toggleStatus(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();  
    renderTasks();
}

saveBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


loadTasks();  
renderTasks(); 