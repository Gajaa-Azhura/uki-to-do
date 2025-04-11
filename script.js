
const taskInput = document.getElementById('new-task');
const prioritySelect = document.getElementById('priority-level');
const todoItemsList = document.getElementById('todo-items');
const totalTasksCount = document.getElementById('total-tasks');
let todos = loadTodos();

renderTodos();
updateTotalCount();

function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const priority = prioritySelect.value;
        const newTodo = {
            id: Date.now(),
            text: taskText,
            priority: priority
        };
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        updateTotalCount();
        taskInput.value = '';
    }
}

function deleteTask(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
    updateTotalCount();
}

function renderTodos() {
    todoItemsList.innerHTML = '';
    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');

        const prioritySpan = document.createElement('span');
        prioritySpan.classList.add('priority', `priority-${todo.priority}`);
        prioritySpan.textContent = todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);

        const textSpan = document.createElement('span');
        textSpan.textContent = todo.text;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(todo.id);

        listItem.appendChild(prioritySpan);
        listItem.appendChild(textSpan);
        listItem.appendChild(deleteButton);
        todoItemsList.appendChild(listItem);
    });
}

function updateTotalCount() {
    totalTasksCount.textContent = `Total tasks: ${todos.length}`;
}

