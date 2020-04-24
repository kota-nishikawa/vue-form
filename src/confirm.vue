<template>
  <div  class="container">

 <article class="message is-primary" style="border: 1px solid #ebfffc;">
  <div class="message-header">
  <span class="tag is-info" style="position: absolute;
    left: 0;
    top: 0;">STEP3</span>

    <p style="padding: 0px 0 0 40px;">相談内容を入力してください。</p>
  </div>
   <div class="card-content" style="background:#FFFFFF; ">
    <div class="content">

   <p>-相談内容-</p>
    <div class="control">

        <textarea  name="sex"  class="textarea"></textarea>

    </div>

  </div>
  </div>
</article>
<div class="field is-grouped is-grouped-centered">
    <router-link to="/form" class="button is-primary">前へ</router-link>
    <router-link to="/confirm" class="button is-primary">次へ</router-link>

</div>
      <router-view></router-view>

  </div>

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
@import "../node_modules/bulma/bulma.sass";

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
