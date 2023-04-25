// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filtertodo);

// Functions

function addTodo(event) {
  // stops from submitting the form ie. page refreshes
  event.preventDefault();

  // Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value; //'hey'
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // check-mark Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class = "fas fa-check"> </i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  // Delete Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class = "fas fa-trash"> </i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // Append to List
  // note - (html line no. 39) because we need to tell where we have to attach all these (app.js file line-6 to line-35)
  todoList.appendChild(todoDiv);

  // Clear todo input value
  todoInput.value = '';
}

// Function of deleteCheck
function deleteCheck(e) {
  const item = e.target; // From where it is coming thats why target is used
  // console.log(e);

  // Delete todo
  if (item.classList[0] === 'trash-btn') {
    // which is false in this case

    const todo = item.parentElement; // whatver is it's parent element and remove that element

    // Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  // Check mark
  if (item.classList[0] === 'complete-btn') {
    // which is true in this case

    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

// search from All, Completed & Uncompleted
function filtertodo(e) {
  const todos = todoList.childNodes; // which is li in this case
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}
