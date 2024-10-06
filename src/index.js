document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskInput =document.getElementById("new-task-description");
  const prioritySelect = document.getElementById("priority");
  const ul = document.getElementById("tasks");
  
//Adding an event listener to the submission
taskForm.addEventListener("submit",function(event){
  //Preventing the default value of page refreshing
  event.preventDefault();
    // Creating list item in the dom 
    const li =document.createElement("li");

// Getting the task from the input field
const taskDescription = taskInput.value;
//Taking the selected priority
const taskPriority = prioritySelect.value;

// setting the text of  using the innerTextProperty list item to the description and adding the type of the priority one wants 
li.innerText = `${taskDescription}- Priority: ${taskPriority}`;
//gives the priorities an attribute using the setattribute method
li.setAttribute("data-priority", taskPriority.toUpperCase());
//appending the li list to the unodered list
ul.appendChild(li);

//Creeating the Deleating button
const deleteButton = document.createElement("Button");
// Atttaching the delete button using the inner text property
deleteButton.innerText = "Delete";
// Adding a class name to the delete button 
deleteButton.className = 'delete-button'
//Adding an event listener to the delete button
deleteButton.addEventListener("click", function (){
  //Using the removechild method to remove the list from the child elelment which is the parent
  ul.removeChild(li);
});
// adding the the append method
li.appendChild(deleteButton);
//removing the task added from the input field
taskInput.value = "";
//setting the dropdown menu to first option which is low
prioritySelect.selectedIndex = 0;

}
)});

 
