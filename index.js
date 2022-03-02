const taskValue=document.getElementsByClassName('task_value')[0];
const taskSubmit=document.getElementsByClassName('task_submit')[0];
const taskList=document.getElementsByClassName('task_list')[0];

taskSubmit.addEventListener('click',function(e){
    e.preventDefault();
    const task=taskValue.value;
    addTasks(task);
    taskValue.value='';
});

function addTasks(task){
    const listItem=document.createElement('li');
    const deleteButton=document.createElement('button');
    const showItem=taskList.appendChild(listItem);
    
    showItem.innerHTML='Do '+task+' !';
    
    listItem.appendChild(deleteButton);
    deleteButton.innerHTML='Delete';
    deleteButton.addEventListener('click',function(e){
	e.preventDefault();
	deleteTasks(deleteButton);
    });
};

function deleteTasks(deleteButton){
    const chosenTask=deleteButton.closest('li');
    taskList.removeChild(chosenTask);
}
