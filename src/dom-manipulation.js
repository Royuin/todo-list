export function addTodo(obj) {
  const ul = document.querySelector('.todo-list');
  const todoTitle = obj.title;
  const listItem = document.createElement('li');
  listItem.classList = todoTitle;
  listItem.classList = 'card';

  const itemHeading = document.createElement('h2');
  itemHeading.textContent = todoTitle;
  listItem.appendChild(itemHeading);

  const priority = document.createElement('select');
  priority.textContent = obj.priority;
  const lowPriority = document.createElement('option');
  lowPriority.textContent = 'Low';
  const mediumPriority = document.createElement('option');
  mediumPriority.textContent = 'Medium';
  const hightPriority = document.createElement('option');
  hightPriority.textContent = 'High';
  priority.appendChild(lowPriority);
  priority.appendChild(mediumPriority);
  priority.appendChild(hightPriority);
  listItem.appendChild(priority);

  const description = document.createElement('p');
  description.textContent = obj.description;
  listItem.appendChild(description);

  const dueDate = document.createElement('input');
  dueDate.type = 'date';
  dueDate.value = obj.due;
  listItem.appendChild(dueDate);

  ul.appendChild(listItem);
}

export function makeTodoForm() {
  const overlay = document.getElementById('overlay');
  overlay.classList = 'active';

  const todoHeader = document.querySelector('.todo-header');
  const form = document.createElement('form');
  form.classList = 'todo-form';
  todoHeader.appendChild(form);

  const exitButton = document.createElement('button');
  exitButton.classList.add('exit-button', 'button-style-reset');
  exitButton.textContent = 'X';
  form.appendChild(exitButton);

  const titleLabel = document.createElement('label');
  titleLabel.for = 'todoTitle';
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'todoTitle';
  titleInput.name = 'text';
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const priorityLabel = document.createElement('label');
  priorityLabel.for = 'priority';
  priorityLabel.textContent = 'Priority';
  const priorityInput = document.createElement('select');
  priorityInput.id = 'priority';
  priorityInput.name = 'priority';
  const lowPriority = document.createElement('option');
  lowPriority.textContent = 'Low';
  const mediumPriority = document.createElement('option');
  mediumPriority.textContent = 'Medium';
  const hightPriority = document.createElement('option');
  hightPriority.textContent = 'High';
  priorityInput.appendChild(lowPriority);
  priorityInput.appendChild(mediumPriority);
  priorityInput.appendChild(hightPriority);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.for = 'descriptionLabel';
  descriptionLabel.textContent = 'Description';
  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.id = 'description';
  descriptionTextarea.id = 'description';

  form.appendChild(descriptionLabel);
  form.appendChild(descriptionTextarea);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.for = 'due';
  dueDateLabel.textContent = 'Date due:';
  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'due';
  dueDateInput.name = 'due';
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Create To-do';
  submitBtn.type = 'submit';
  submitBtn.setAttribute('id', 'todo-submit');
  form.appendChild(submitBtn);
}

export function removeTodoForm() {
  const overlay = document.getElementById('overlay');
  const todoHeader = document.querySelector('.todo-header');
  const todoForm = document.querySelector('.todo-form');
  todoHeader.removeChild(todoForm);
  overlay.classList.remove('active');
}

export function addProject(obj) {
  const projectTitle = obj.title;

  const projectUl = document.querySelector('.project-list');
  const newLi = document.createElement('li');

  projectUl.appendChild(newLi);

  const projectBtn = document.createElement('button');
  projectBtn.className += 'project button-style-reset ';
  projectBtn.textContent = projectTitle;
  newLi.appendChild(projectBtn);
}

export function makeProjectForm() {
  const overlay = document.getElementById('overlay');
  overlay.classList = 'active';

  const projectHeader = document.querySelector('.project-header');
  const form = document.createElement('form');
  form.classList = 'project-form';
  projectHeader.appendChild(form);

  const exitButton = document.createElement('button');
  exitButton.classList.add('exit-button', 'button-style-reset');
  exitButton.textContent = 'X';
  form.appendChild(exitButton);

  const titleLabel = document.createElement('label');
  titleLabel.for = 'projectTitle';
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'projectTitle';
  titleInput.name = 'text';
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Create Project';
  submitBtn.type = 'submit';
  submitBtn.setAttribute('id', 'project-submit');
  form.appendChild(submitBtn);
}

export function removeProjectForm() {
  const overlay = document.getElementById('overlay');
  const projectHeader = document.querySelector('.project-header');
  const projectForm = document.querySelector('.project-form');
  projectHeader.removeChild(projectForm);
  overlay.classList.remove('active');
}

export function changeCurrentProjectClass(thisProject) {
  const projects = document.querySelectorAll('.project');
  projects.forEach((element) => {
    if (element.classList.contains('current-project') !== undefined) {
      element.classList.remove('current-project');
    }
    thisProject.classList.add('current-project');
  });
}

export function changeProjectTodos(project) {
  const todoList = document.querySelector('.todo-list');
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }

  const todoArray = project.todos;
  todoArray.forEach((element) => {
    addTodo(element);
  });
}
