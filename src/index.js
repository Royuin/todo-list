import './style.css';
import { makeTodoForm, removeTodoForm } from './dom-manipulation';

const addTodoBtn = document.querySelector('.add-todo');

addTodoBtn.addEventListener('click', () => {
  const todoForm = document.querySelector('.todo-form');
  if (todoForm === null) {
    makeTodoForm();
  } else if (document.querySelector('.todo-form') !== undefined) {
    removeTodoForm();
  }
});
