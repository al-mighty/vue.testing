import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import day1 from '@/components/day1'
import FilmList from '@/components/FilmList'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: HelloWorld
  },
  //   {
  //   path: '/day1',
  //   name: 'day1',
  //   component: day1
  // },
    {
    path: '/films',
    name: 'Films',
    component: FilmList
  }
  ]
})
