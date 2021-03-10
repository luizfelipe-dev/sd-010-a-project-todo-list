const addEvListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

const addEvListenerNElements = (elementsNodes, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const nodes = document.querySelectorAll(elementsNodes);
  for (let index = 0; index < nodes.length; index += 1) {
    nodes[index].addEventListener(event, fn);
  }
};

const createTodoItem = (text) => {
  const li = document.createElement('li');
  li.innerHTML = text;
  return li;
};

const addTodoToList = (item) => {
  const ol = document.querySelector('#lista-tarefas');
  ol.appendChild(item);
};

const getAllTodoList = () => {
  return document.querySelectorAll('li');
};

const resetColor = (item) => {
  const todoItem = item;
  todoItem.style.backgroundColor = '';
};

const changeColor = (ev, color) => { // 'rgb(128, 128, 128)'
  getAllTodoList().forEach((x) => resetColor(x));
  const todoItem = ev.target;
  todoItem.style.backgroundColor = color;
};

const changeLineThrough = (ev, className) => {
  const todoItem = ev.target;
  todoItem.classList.toggle(className);
};

const insertTodo = () => {
  const inputTodo = document.querySelector('#texto-tarefa');
  const todo = createTodoItem(inputTodo.value);
  addTodoToList(todo);
  addEvListenerNElements('li', 'click', (e) => { changeColor(e, 'rgb(128, 128, 128)'); });
  addEvListenerNElements('li', 'dblclick', (e) => { changeLineThrough(e, 'completed'); });
};

const clearTodoList = () => {
  const listContainer = document.querySelector('#lista-tarefas');
  listContainer.innerHTML = '';
};

const clearCompletedTodoList = () => {
  const listContainer = document.querySelectorAll('.completed');
  for (let index = 0; index < listContainer.length; index += 1) {
    listContainer[index].remove();
  }
};

window.onload = () => {
  addEvListener('#criar-tarefa', 'click', insertTodo);
  addEvListener('#apaga-tudo', 'click', clearTodoList);
  addEvListener('#remover-finalizados', 'click', clearCompletedTodoList);
};
