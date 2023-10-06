const todoInput = document.querySelector('#taskInput');
const todoButton = document.querySelector('.button');
const todoList = document.querySelector('.task-list');
let buttonDisabled = Boolean(todoButton.getAttribute('disabled'));

todoInput.addEventListener('keyup', checkSubmitEnabled);
todoButton.addEventListener('click', submitTask);

function checkSubmitEnabled(event) {
  buttonDisabled = event.target.value.length < 4;

  if (buttonDisabled) {
    disableButton();

    return;
  }

  todoButton.removeAttribute('disabled');
}

function submitTask(event) {
  addTaskToList(todoInput.value);
  todoInput.value = '';
  disableButton();
}

function addTaskToList(task) {
  const listElement = document.createElement('li');
  listElement.addEventListener('click', markAsDone);
  listElement.textContent = task;
  todoList.append(listElement);
}

function disableButton() {
  todoButton.setAttribute('disabled', 'disabled');
}

function markAsDone(event) {
  const { classList } = event.target;
  if (classList.contains('done')) {
    classList.remove('done');

    return;
  }

  classList.add('done');
}
