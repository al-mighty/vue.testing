<template>
    <div class="hello">
        <!--<h1>{{ msg }}</h1>-->
        <h2>Essential Links</h2>
        <h2>|{{search}}|</h2>
        <input type="text" v-model.trim="search"/>
        <p>{{ checkBoxData }}</p>
        <label for=""><input value="Vasya" type="checkbox" v-model="checkBoxData"></label>
        <label for=""><input value="Vitya" type="checkbox" v-model="checkBoxData"></label>
        <label for=""><input value="Kira" type="checkbox" v-model="checkBoxData"></label>
        <label for=""><input value="Slava" type="checkbox" v-model="checkBoxData"></label>
        <p>{{selectData}}</p>
        <select name="" v-model="selectData" id="">
            <option v-for="option in options" :value="option">{{option}}</option>
        </select>
    </div>
</template>

<script>
export default {
  name: 'day1',
  data () {
    return {
  //      msg: 'day1',
      checkBoxData: [],
      search: '',
      options: [
        'alex',
        'slava',
        'katya'
      ],
      selectData: 'slava',
      inputData: 'my from component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
