<template>
<router-view></router-view>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Hellow'
    }

  },
  methods: {
    clear () {
      this.msg = ''
    }
  }
};
</script>


<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.select:not(.is-multiple):not(.is-loading)::after {
    border-color: #3273dc;
    right: 2.125em;
    z-index: 4;
}
</style>
