import eventsMediator from './events';
import Todo from './todo';

const events = eventsMediator;

const display = (function() {
    
});

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

const controller = (function() {

    function createTodo(todoData) {
        let newTodo = Object.assign(new Todo, todoData);
        newTodo.printData();
    }
    events.on('SubmitTodo', createTodo)
})();