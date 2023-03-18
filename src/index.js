import '/src/style.css';
import makeForm from './dom-manipulation';

const addTodoBtn = document.querySelector('.add-todo');

addTodoBtn.addEventListener('click', makeForm);
