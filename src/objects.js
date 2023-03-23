import {
  changeCurrentProjectClass,
  changeProjectTodos,
} from './dom-manipulation';

const defaultProject = document.querySelector('.my-project');

const myProject = {
  title: defaultProject.textContent,
  todos: [],
};

export const projectList = [myProject];

function todoFactory(title, priority, description, due) {
  return { title, priority, description, due };
}

export let currentProject = myProject;

function addToProject(todo) {
  currentProject.todos.push(todo);
}

export function makeTodoObj() {
  const title = document.getElementById('todoTitle').value;
  const priority = document.getElementById('priority').value;
  const description = document.getElementById('description').value;
  const dateDue = document.getElementById('due').value;

  const todo = todoFactory(title, priority, description, dateDue);
  addToProject(todo);
}

function projectFactory(title) {
  return { title, todos: [] };
}

function addToProjectList(project) {
  projectList.push(project);
}

export function makeProjectObj() {
  const title = document.getElementById('projectTitle').value;
  const project = projectFactory(title);
  addToProjectList(project);
  currentProject = project;
}

export function changeCurrentProject(projectItem) {
  const projectTitle = projectItem.textContent;
  projectList.forEach((element) => {
    if (element.title === projectTitle) {
      currentProject = element;
      changeCurrentProjectClass(projectItem);
      changeProjectTodos(currentProject);
    }
  });
}

export function updatePriority(priority) {
  const todoDom = priority.parentNode;
  const todoDomTitle = todoDom.querySelector('h2');
  const todoArray = currentProject.todos;

  const result = todoArray.find(
    (element) => element.title === todoDomTitle.textContent
  );
  result.priority = priority.value;
}
