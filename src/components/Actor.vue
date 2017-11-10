<template>
    <p>Actor {{id}} , {{name}} </p>
</template>

<script>
export default {
  name: 'Actor',
  data () {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name
    }
  }
//  props: ['title']
}
</script>

<style>

</style>