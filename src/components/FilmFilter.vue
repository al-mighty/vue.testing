<template>
    <form action=" ">
        <div class="form-group">
            <input type="text" :value="value" @input="onValueUpdated($event.target.value)" class="form-control">
        </div>
        <p>
            <span class="badge badge-light" v-for="tag in tags" :key="tag" @click="onTagClicked(tag)">#{{tag}} </span>
        </p>
    </form>
</template>

<script>
  export default {
    props: ['value', 'tags'],
    methods: {
      onValueUpdated(value){
        this.$emit('input', value);
      },
      onTagClicked(tag) {
        this.$emit('tag', tag);
      }
    }
  }
</script>
<style>

</style>