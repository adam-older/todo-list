import eventsMediator from './events';

const events = eventsMediator;

const display = (function() {
    
});

// todo submit module
const todoForm = (function() {
    var submitTodo = document.querySelector("#submit-todo");
    submitTodo.addEventListener('click', emitSubmitTodo);

    function emitSubmitTodo() {
        let data = collectTodoData();
        events.emit('SubmitTodo', data);
    }

    function collectTodoData() {
        return {
            title: document.querySelector('#todo-title').value,
            desc: document.querySelector('#todo-desc').value,
            dueDate: document.querySelector('#todo-dueDate').value,
            priority: document.querySelector('input[name="priority"]:checked').id,

        }
    }
})();

events.on('SubmitTodo', (data) => {
    console.log(data);
})