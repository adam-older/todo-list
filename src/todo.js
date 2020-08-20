export default function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.desc = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

Todo.prototype.printData = function() {
    console.log(this);
}

Todo.prototype.updateTodo = function(field, newValue) {
    // update logic here
    // either field update to newValue
    // OR make fields edittable on page, then create new todo with new info and replace selected ID in project array
}

Todo.prototype.renderTodo = function() {
    let newTodoDiv = document.createElement('div');
    newTodoDiv.className = 'todo';
    newTodoDiv.appendChild(createTitleTag(this.title));
    newTodoDiv.appendChild(createDescriptionTag(this.desc));
    newTodoDiv.appendChild(createDueDateTag(this.dueDate));
    newTodoDiv.appendChild(createPriorityTag(this.priority));
    return newTodoDiv;
}

function createTitleTag(title) {
    let titleDiv = document.createElement('div');
    titleDiv.innerText = title;
    titleDiv.classtitle = 'todo-title'; // change later
    return titleDiv;
}

function createDescriptionTag(description) {
    let descTag = document.createElement('p');
    descTag.innerText = description;
    descTag.className = 'todo-desc';
    return descTag;
}

function createDueDateTag(dueDate) {
    let dueDateTag = document.createElement('div');
    dueDateTag.innerText = dueDate;
    dueDateTag.className = 'todo-duedate';
    return dueDateTag;
}

function createPriorityTag(priority) {
    let priorityTag = document.createElement('div');
    priorityTag.innerText = priority;
    priorityTag.className = 'todo-priority';
    return priorityTag;
}