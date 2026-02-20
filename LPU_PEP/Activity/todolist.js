document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => renderTask(task));

    addBtn.addEventListener('click', addTask);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    function addTask() {
        const taskText = todoInput.value.trim();
        if (taskText === '') return;

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        renderTask(task);
        saveTask(task);
        todoInput.value = '';
    }

    function renderTask(task) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.dataset.id = task.id;

        const span = document.createElement('span');
        span.className = `todo-text ${task.completed ? 'completed' : ''}`;
        span.textContent = task.text;
        span.addEventListener('click', () => toggleTask(task.id, span));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times;'; 
        deleteBtn.addEventListener('click', () => deleteTask(task.id, li));

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    function saveTask(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function toggleTask(id, spanElement) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskIndex = tasks.findIndex(t => t.id === id);
        if (taskIndex > -1) {
            tasks[taskIndex].completed = !tasks[taskIndex].completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            spanElement.classList.toggle('completed');
        }
    }

    function deleteTask(id, liElement) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(t => t.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        liElement.style.opacity = '0';
        liElement.style.transform = 'translateX(10px)';
        setTimeout(() => liElement.remove(), 300);
    }
});
