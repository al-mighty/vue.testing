new Vue({
    el: '#app',
    data: {
        title: 'Фильмотека',
        btnClass: 'btn-danger',
        danger: true,
        showBtn: false,
        items: [
            1, 2, 3, 4, 5, 6
        ],
        message: '',

    },
    methods: {
        onDemo(){
            console.log('demo')
        }
    }
})