function Project(name) {
    this.name = name;
    this.todoArray = [];
}

export default Project;

// // CRUD for todos:
// // create:
// Project.prototype.pushTodo = function(todo) {
//     this.todoArray.push(todo);
// }

// // read:
// Project.prototype.printTodo = function() {
//     console.log(this.todoArray);
//     // todo
// }

// // update:
// Project.prototype.updateTodo = function() {

// }