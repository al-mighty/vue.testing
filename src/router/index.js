import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import day1 from '@/components/day1'
import FilmsList from '@/components/FilmsList'
import FilmsNew from '@/components/FilmsNew'
import ActorsList from '@/components/ActorsList'
import Actor from '@/components/Actor'
import Film from '@/components/Film'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
      name: 'FilmsList',
      component: FilmsList
    },
    {
      path: '/films/new',
      name: 'FilmsNew',
      component: FilmsNew
    },
    {
      path: '/actors',
      name: 'ActorsList',
      component: ActorsList
    },
    {
      path: '/actors/:name/:id',
      name: 'Actor',
      component: Actor
    },
    {
      path: '/films/:id',
      name: 'Film',
      component: Film
    }
  ],
  linkExactActiveClass: 'active'
})
