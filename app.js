const app = new Vue({
    el: '#app',
    data: {
        title: 'hi',
        newTodo: ''
    },
    methods: {
        addTodo() {
            console.log('submited')
        }
    }
});