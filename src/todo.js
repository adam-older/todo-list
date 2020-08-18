function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.desc = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

Todo.prototype.printData = function() {
    console.log(this);
}

export default Todo;