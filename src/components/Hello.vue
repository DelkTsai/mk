<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div v-html="innerHtml"></div>
    <span v-once>what the fuck?!!{{msg}}</span>
    <button @click="change">123</button>
    <p v-if="seen">do u miss me?</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      seen:true,
      msg: 'hehedale',
      innerHtml:'<button>htmmmml</button>'
    }你知不知道你git   安装在哪里  我看下
  },
  methods:{
    change:function () {
      var _this = this;
      _this.msg='kl';
      console.log(123);
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
