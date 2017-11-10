<template>
  <div class="card"><img src="http://via.placeholder.com/253x200" alt="" class="card-img-top">
    <div class="card-body">
      <h4 class="card-title">{{card.title}}</h4>
      <p class="card-text">{{card.desc}}</p>
      <p class="card-tags">
        <span @click="onTagClicked(tag)" class="badge badge-light" :key="tag" v-for="tag in card.tags">{{tag}}</span>
      </p>
      <div class="card-footer">
        <button class="btn btn-success"><span class="fa fa-thumbs-up"></span></button>
        <button class="btn btn-danger"><span class="fa fa-thumbs-down"></span></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FilmCard',
    props: ['card'],
    methods: {
      onTagClicked (tag) {
        this.$emit('tag', tag)
      }
    }
  }
</script>