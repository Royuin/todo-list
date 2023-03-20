import './style.css';
import {
  makeTodoForm,
  removeTodoForm,
  addTodo,
  makeProjectForm,
  removeProjectForm,
  addProject,
} from './dom-manipulation';
import {
  makeTodoObj,
  currentProject,
  projectList,
  makeProjectObj,
  changeCurrentProject,
} from './objects';

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

const addProjectBtn = document.querySelector('.add-project');
addProjectBtn.addEventListener('click', () => {
  makeProjectForm();
  const exitBtn = document.querySelector('.exit-button');
  exitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    removeProjectForm();
  });
  const projectSubmit = document.getElementById('project-submit');
  projectSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    makeProjectObj();
    const thisProject = projectList.slice(-1)[0];
    addProject(thisProject);
    const projectBtns = document.querySelectorAll('.project');
    projectBtns.forEach((item) => {
      item.addEventListener('click', () => {
        changeCurrentProject(item);
      });
    });
  });
});
