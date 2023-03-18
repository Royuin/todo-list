export function makeTodoForm() {
  const overlay = document.getElementById('overlay');
  overlay.classList = 'active';

  const todoHeader = document.querySelector('.todo-header');
  const form = document.createElement('form');
  form.classList = 'todo-form';
  todoHeader.appendChild(form);

  const exitButton = document.createElement('button');
  exitButton.classList = 'exit-button';
  exitButton.classList = 'button-style-reset';
  exitButton.textContent = 'X';
  form.appendChild(exitButton);

  const titleLabel = document.createElement('label');
  titleLabel.for = 'title';
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title';
  titleInput.name = 'text';
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

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
}

export function removeTodoForm() {
  const overlay = document.getElementById('overlay');
  const todoHeader = document.querySelector('.todo-header');
  const todoForm = document.querySelector('.todo-form');
  todoHeader.removeChild(todoForm);
  overlay.classList.remove('active');
}
