document.addEventListener("DOMContentLoaded", () => {
  
  let taskForm = document.getElementById('create-task-form');
  let newTaskDescription = document.getElementById(new-task-description');
  let taskUl = document.getElementById('tasks');
  let renderApp = () => (tasksUl.innerHTML = taskList.renderTasks());
  
  taskForm.addEventListener('submit', function(e) {
    if (e.preventDefault);
    taskList.createNewTask(newTaskDescription.value);
    e.target.reset();
    renderApp();
  });
  
});
