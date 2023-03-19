const defaultProject = document.querySelector('.my-project');

const myProject = {
  title: defaultProject.textContent,
  todos: [],
};

const projectList = [myProject];

function todoFactory(title, priority, description, due) {
  return { title, priority, description, due };
}

function addToProject(todo) {
  myProject.todos.push(todo);
}

let currentProject = myProject;

function makeTodoObj() {
  const title = document.getElementById('todoTitle').value;
  const priority = document.getElementById('priority').value;
  const description = document.getElementById('description').value;
  const dateDue = document.getElementById('due').value;

  const todo = todoFactory(title, priority, description, dateDue);
  addToProject(todo);
}
