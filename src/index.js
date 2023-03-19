import './style.css';
import { makeTodoForm, removeTodoForm, addTodo } from './dom-manipulation';
import { makeTodoObj, currentProject } from './objects';

const addTodoBtn = document.querySelector('.add-todo');

addTodoBtn.addEventListener('click', () => {
  const todoForm = document.querySelector('.todo-form');
  if (todoForm === null) {
    makeTodoForm();
    const exitBtn = document.querySelector('.exit-button');
    exitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      removeTodoForm();
    });
    const submitBtn = document.getElementById('todo-submit');
    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      makeTodoObj();
      const todoArray = currentProject.todos;

      const thisTodo = todoArray.slice(-1)[0];

      addTodo(thisTodo);
    });
  } else if (document.querySelector('.todo-form') !== undefined) {
    removeTodoForm();
  }
});
