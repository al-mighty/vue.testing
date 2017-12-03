new Vue({
  el: '#app',
  data: {
    title: 'Фильмотека',
    search: '',
    films: [
      {
        id: 1,
        title: 'Трансформеры',
        desc: 'Роботы',
        tags: ['Фантастика', 'боевик']
      },
      {
        id: 2,
        title: 'Чаппи',
        desc: 'Искуственный интелект',
        tags: ['Техника', 'робот', 'ии']
      },
      {
        id: 3,
        title: 'Люси',
        desc: 'Фантастическая передозировка наркотиков',
        tags: ['Фантастика', 'боевик']
      },
      {
        id: 4,
        title: 'Трансформеры2',
        desc: 'Роботы',
        tags: ['Фантастика', 'боевик']
      },
      {
        id: 5,
        title: 'Чаппи2', desc: 'Искуственный интелект', tags: ['Техника', 'робот', 'ии']
      },
      {
        id: 6,
        title: 'Люси2', desc: 'Фантастическая передозировка наркотиков', tags: ['Фантастика', 'боевик']
      },
      {
        id: 6,
        title: 'Терминатор',
        desc: 'робот ищет мальца который закоротит его плату',
        tags: ['Фантастика', 'ии']
      },
    ],
    tags: [],
    limit: 4,
  },
  methods: {
    onTagFilterClicked(value){
      if (!this.tags.includes(value)) {
        this.tags.push(value)
      }
    },
    onTagUnFilterClicked(value){
      if (this.tags.includes(value)) {
        this.tags.splice(this.tags.indexOf(value), 1)
      }
    }
  },
  computed: {
    filtered(){
      let filter = this.search.toLowerCase().trim()
      let result = []

      if (filter === '') {
        result = this.films
      } else {
        result = this.films.filter(film => {
          if (film.title.toLowerCase().indexOf(filter) != -1) {
            return true
          }
        })
      }
      if (this.tags.length > 0) {
        return result.filter(
          item => this.tags.every(
            tag => item.tags.includes(tag)
          )
        )
      }
      return result
    }

  }
})