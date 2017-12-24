<template>
  <div class="hello">
    <div class="hero-image">
      <img src="./assets/sand-dunez.svg">
    </div>
    <h1>{{ msg }}</h1>
    <h2>Things I've worked on</h2>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the world of Patrick Seamars'
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
