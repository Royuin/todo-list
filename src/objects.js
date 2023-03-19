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
