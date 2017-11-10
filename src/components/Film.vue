<template>
    <p>film info {{id}}</p>
</template>

<script>
export default {
  name: 'Film',
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style>

</style>