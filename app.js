const app = new Vue({
    el: '#app',
    data: {
        title: 'hi',
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo() {
            console.log(this.newTodo)
            this.todos.push({
                title: this.newTodo,
                done: false
            });
        }
    }
});