import eventsMediator from './events';
import Todo from './todo';
import Project from './project';

const events = eventsMediator;

const display = (function() {

    function renderActiveProjectTodos(activeProject) {
        let todoContainer = document.querySelector('#todo-container');
        activeProject.todoArray.forEach((todo) => {
            let todoHtml = todo.renderTodo();
            console.log(todoHtml);
            todoContainer.appendChild(todoHtml);
            // todoContainer.appendChild(todo.renderTodo());
        })
    }
    events.on('renderActiveProjectTodos', renderActiveProjectTodos);
})();

// todo submit module
const todoForm = (function() {
    var submitTodo = document.querySelector("#submit-todo");
    submitTodo.addEventListener('click', emitSubmitTodo);

    function emitSubmitTodo() {
        let todoData = collectTodoData();
        events.emit('SubmitTodo', todoData);
    }

    function collectTodoData() {
        // need to add validation
        return {
            title: document.querySelector('#todo-title').value,
            desc: document.querySelector('#todo-desc').value,
            dueDate: document.querySelector('#todo-dueDate').value,
            priority: document.querySelector('input[name="priority"]:checked').id,
        }
    }
})();

// events.on('SubmitTodo', (data) => {
//     console.log(data);
// })

// ALL CRUD should go in controller?

const controller = (function() {

    var activeProject = new Project("Default");


    function createTodo(todoData) {
        let newTodo = Object.assign(new Todo, todoData);
        newTodo.printData();
        activeProject.todoArray.push(newTodo);
        console.log(activeProject.todoArray);
        events.emit('renderActiveProjectTodos', activeProject);
    }

    events.on('SubmitTodo', createTodo)
})();