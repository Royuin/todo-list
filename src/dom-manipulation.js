import { updatePriority } from './objects';

export function removeTodoForm() {
  const overlay = document.getElementById('overlay');
  const todoHeader = document.querySelector('.todo-header');
  const todoForm = document.querySelector('.todo-form');
  todoHeader.removeChild(todoForm);
  overlay.classList.remove('active');
}

export function removeTodos() {
  const todoUl = document.querySelector('.todo-list');
  while (todoUl.firstChild) {
    todoUl.removeChild(todoUl.lastChild);
  }
}

export function addTodo(todoArray) {
  for (let i = 0; i < todoArray.length; i += 1) {
    const obj = todoArray[i];
    const ul = document.querySelector('.todo-list');
    const todoTitle = obj.title;
    const listItem = document.createElement('li');
    listItem.dataset.index = todoArray.indexOf(obj);
    listItem.classList += ' card';

    const itemHeading = document.createElement('h2');
    itemHeading.textContent = todoTitle;
    listItem.appendChild(itemHeading);

    const editBtn = document.createElement('button');
    const editIcon = document.createElement('img');
    editBtn.classList.add('edit-btn', 'button-style-reset', 'icon');
    editIcon.src = '/src/assets/icons/file-edit.svg';
    editBtn.dataset.index = todoArray.indexOf(obj);
    editIcon.dataset.index = todoArray.indexOf(obj);
    editBtn.appendChild(editIcon);
    listItem.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = '/src/assets/icons/delete.svg';
    deleteBtn.classList.add('delete-button', 'button-style-reset', 'icon');
    listItem.appendChild(deleteBtn);
    deleteBtn.appendChild(deleteIcon);

    const priority = document.createElement('select');
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

    (function setSelected() {
      const selectOptions = Array.from(priority.options);
      const found = selectOptions.find(
        (element) => element.text === obj.priority
      );
      found.selected = true;
    })();

    priority.addEventListener('change', () => {
      updatePriority(priority);
    });

    const description = document.createElement('p');
    description.textContent = obj.description;
    listItem.appendChild(description);

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.value = obj.due;
    listItem.appendChild(dueDate);

    ul.appendChild(listItem);
  }
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
  titleLabel.textContent = '* Title';
  titleLabel.style.color = 'black';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'projectTitle';
  titleInput.name = 'text';
  titleInput.required = true;
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const invalidMessage = document.createElement('p');
  invalidMessage.classList = 'invalid';
  invalidMessage.textContent = 'Must be filled out and cannot use same title';
  invalidMessage.style.display = 'none';
  invalidMessage.style.color = 'red';
  form.appendChild(invalidMessage);

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

export function editTodoForm(todoObj, todoArray) {
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

  exitButton.addEventListener('click', (event) => {
    event.preventDefault();
    removeTodoForm();
  });

  const titleLabel = document.createElement('label');
  titleLabel.for = 'todoTitle';
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'todoTitle';
  titleInput.name = 'text';
  titleInput.value = todoObj.title;
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
  priorityInput.value = todoObj.priority;

  const descriptionLabel = document.createElement('label');
  descriptionLabel.for = 'descriptionLabel';
  descriptionLabel.textContent = 'Description';
  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.id = 'description';
  descriptionTextarea.id = 'description';
  descriptionTextarea.value = todoObj.description;

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
  dueDateInput.value = todoObj.dateDue;

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Edit To-do';
  submitBtn.type = 'submit';
  submitBtn.setAttribute('id', 'edit-todo-submit');
  form.appendChild(submitBtn);

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    todoObj.title = titleInput.value;
    todoObj.priority = priorityInput.value;
    todoObj.description = descriptionTextarea.value;
    todoObj.dateDue = dueDateInput.value;

    removeTodos();
    addTodo(todoArray);
    const editBtn = document.querySelectorAll('.edit-btn');
    editBtn.forEach((element) => {
      element.addEventListener('click', () => {
        const todoListItem = element.parentElement;

        const index = todoListItem.dataset.index;
        const todo = todoArray[index];

        editTodoForm(todo, todoArray);
      });
    });
  });
}
