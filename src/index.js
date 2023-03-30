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
    event.preventDefault();
    const title = document.getElementById('projectTitle').value;
    if (
      projectList.some((project) => project.title === title) ||
      title === ''
    ) {
      return;
    }
    makeProjectObj();
    const thisProject = projectList.slice(-1)[0];
    addProject(thisProject);

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
  });
});
