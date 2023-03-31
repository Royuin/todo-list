import {
  changeCurrentProjectClass,
  changeProjectTodos,
} from './dom-manipulation';


export const projectList = [];
export let currentProject;

function todoFactory(title, priority, description, due) {
  return { title, priority, description, due };
}

export function setStoredCurentProject(obj) {
  currentProject = obj;
}

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

export function updateStorage(projects) {
  localStorage.clear();
  localStorage.setItem('current project', JSON.stringify(currentProject));
  projects.forEach((project) => {
    JSON.stringify(project);
  });
  localStorage.setItem("projectList", JSON.stringify(projects));
}

function projectFactory(title) {
  return { title, todos: [] };
}

export function addToProjectList(project) {
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
      localStorage.removeItem('current project');
      localStorage.setItem('current project', JSON.stringify(currentProject));
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

export function removeTodoObj(todo) {
  const index = currentProject.todos.indexOf(todo);
  currentProject.todos.splice(index, 1);
}