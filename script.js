
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const taskList = document.getElementById('task-list');
    const taskCounter = document.getElementById('task-counter');

    function updateTaskCounter() {
        const totalTasks = taskList.children.length;
        taskCounter.textContent = `Total Tasks: ${totalTasks}`;
    }

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;
        if (taskText === '') return;

        const listItem = document.createElement('li');

        const prioritySpan = document.createElement('span');
        prioritySpan.className = 'priority';
        prioritySpan.textContent = `[${priority}]`;

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
            updateTaskCounter();
        });

        listItem.appendChild(prioritySpan);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
        updateTaskCounter();
    });
    const taskCountDisplay = document.getElementById('task-count');
    function updateTaskCount() {
        taskCountDisplay.textContent = `Total tasks: ${taskList.children.length}`;
    }