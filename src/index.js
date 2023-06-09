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
  noProjectError,
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
      updateStorage(projectList);
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
        updateStorage(projectList);
      });
    });
  });
}

function dateListeners(todoArray) {
  const dates = document.querySelectorAll('.date');
  dates.forEach((element) => {
    element.addEventListener('input', () => {
      const todoListItem = element.parentElement;

      const index = todoListItem.dataset.index;
      const todo = todoArray[index];

      todo.due = element.value;

      updateStorage(projectList);
    });
  });
}

function projectListeners() {
  const projectBtns = document.querySelectorAll('.project');
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
    addTodo(currentProject.todos);
    projectListeners();
    deleteListener(currentProject.todos);
    editListener(currentProject.todos);
    dateListeners(currentProject.todos);
  }
})();

addTodoBtn.addEventListener('click', () => {
  const todoForm = document.querySelector('.todo-form');

  if (projectList.length === 0) {
    noProjectError();
  } else if (todoForm === null) {
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

      deleteListener(todoArray);
      editListener(todoArray);
      dateListeners(currentProject.todos);
      updateStorage(projectList);
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
    projectListeners();

    if (projectList.length === 1) {
      const projectItem = document.getElementById(thisProject.title);
      changeCurrentProject(projectItem);
    }
  });
});
