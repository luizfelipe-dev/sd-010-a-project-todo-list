const taskList = document.querySelector('#lista-tarefas');

function addTask() {
  const eachTask = document.createElement('li');
  eachTask.innerText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  taskList.appendChild(eachTask);
}

const buttonAddTask = document.querySelector('#criar-tarefa');
buttonAddTask.addEventListener('click', addTask);

function removeBackground() {
  const everyTask = taskList.children;
  for (let i = 0; i < everyTask.length; i += 1) {
    everyTask[i].removeAttribute('style');
  }
}

function addBackground(event) {
  removeBackground();
  const eTarget = event.target;
  eTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

taskList.addEventListener('click', addBackground);
