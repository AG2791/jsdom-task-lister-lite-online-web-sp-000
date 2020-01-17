
document.addEventListener("DOMContentLoaded", () => {
  // your code here

// define variables 
 
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
