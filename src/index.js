import './style.css';
import {
  makeTodoForm,
  removeTodoForm,
  addTodo,
  makeProjectForm,
  removeProjectForm,
  addProject,
  editTodoForm,
  removeTodos,
} from './dom-manipulation';
import {
  makeTodoObj,
  currentProject,
  projectList,
  makeProjectObj,
  changeCurrentProject,
  removeTodoObj,
  updateStorage,
  addToProjectList,
} from './objects';

const addTodoBtn = document.querySelector('.add-todo');
const projectBtns = document.querySelectorAll('.project');

function deleteListener(todoArray) {
  const deleteBtns = document.querySelectorAll('.delete-button');
  deleteBtns.forEach((element) => {
    element.addEventListener('click', () => {
      const todoUl = document.querySelector('.todo-list');
      const todoListItem = element.parentElement;

      const index = todoListItem.dataset.index;
      const todo = todoArray[index];
      removeTodoObj(todo);
      todoUl.removeChild(todoListItem);
    });
  });
}

function editListener(todoArray) {
  const editBtn = document.querySelectorAll('.edit-btn');
  editBtn.forEach((element) => {
    element.addEventListener('click', () => {
      const todoListItem = element.parentElement;

      const index = todoListItem.dataset.index;
      const todo = todoArray[index];

      editTodoForm(todo, todoArray);

      const editSubmitBtn = document.getElementById('edit-todo-submit');

      editSubmitBtn.addEventListener('click', () => {
        deleteListener(todoArray);
      });
    });
  });
}

(function parseStorage() {
  const projectStorage = localStorage.getItem('projectList');
  if (projectStorage !== null) {
    const projects = JSON.parse(projectStorage);
    const currentProjectString = localStorage.getItem('current project');
    const updatedProject = JSON.parse(currentProjectString);
    const currentTitle = updatedProject.title;

    projects.forEach((element) => {
      addToProjectList(element);
      addProject(element);
    });

    const currentProjectDom = document.getElementById(currentTitle);
    changeCurrentProject(currentProjectDom);
  }
})();

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

      removeTodos();
      addTodo(todoArray);

      editListener(todoArray);
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
    const title = document.getElementById('projectTitle').value;
    if (
      projectList.some((project) => project.title === title) ||
      title === ''
    ) {
      const invalid = document.querySelector('.invalid');
      invalid.style.display = '';
      event.preventDefault() === false;
      return;
    }
    event.preventDefault();
    makeProjectObj();
    const thisProject = projectList.slice(-1)[0];
    addProject(thisProject);
    updateStorage(projectList);

    projectBtns.forEach((item) => {
      item.addEventListener('click', () => {
        changeCurrentProject(item);
        const todoArray = currentProject.todos;
        removeTodos();
        addTodo(todoArray);
        editListener(todoArray);
        deleteListener(todoArray);
      });
    });
  });
});
