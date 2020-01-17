document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.getElementById('create-task-form');
let newTaskDescription = document.getElementById('new-task-description');
let taskUl = document.getElementById("tasks");
const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());  


  taskForm.addEventListener("submit", function(e) {         
    if (e.preventDefault);  //prevents the app from default be havior of redirecting to new url when submit is clicked. 
    taskList.createNewTask(newTaskDescription.value);
    e.target.reset();
    renderApp();
  
  }); 
    
  taskUl.addEventListener("click", (e) => {           
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }

  });
   
});

class TaskList {
    constructor() {
      this.tasks = [];
    }
  
    createNewTask(description) {
      const newTask = new Task(description);
      this.tasks.push(newTask);
    }
  
    renderTasks() {
      return this.tasks.map((task) => task.render()).join("");
    }
  
    deleteTask(description) {
      this.tasks = this.tasks.filter((task) => task.description !== description);
    }
  }

});
