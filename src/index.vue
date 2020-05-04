<template>
  <div  class="container">
  <div>
    <p>{{ countNum }}</p>
  </div>
 <article class="message is-primary" style="border: 1px solid #ebfffc;">
  <div class="message-header">
  <span class="tag is-info" style="position: absolute;
    left: 0;
    top: 0;">STEP1</span>

    <p style="padding: 0px 0 0 40px;">お客様の情報を入力してください。</p>
  </div>
   <div class="card-content" style="background:#FFFFFF; ">
    <div class="content">

    <p>-性別-</p>
    <div class="control">
      <label class="radio">
        <input type="radio" name="sex" v-on:click="clickPlus">
        男性
      </label>
      <label class="radio">
        <input type="radio" name="sex" v-on:click="clickMinus">
        女性
      </label>
    </div>
    <p>-生年月日-</p>
    <div style="display:flex;">

              <div class="select" style="display:flex;">

      <select type="number" name="year" v-model.number="inputYear"  @change="updateBox">
            <option v-for="(n, key) in 70"  :key="key" v-bind:value="n + 1950">{{ n + 1950 }}</option>
        </select>
                        <div style="display: inline-block;">年</div>
            </div>
            <div  class="select" style="display:flex;">

      <select type="number" name="month" v-model.number="inputYear">
            <option v-for="(n, key) in 12"  :key="key" v-bind:value="n + 0">{{ n + 0 }}</option>
        </select>
                        <div style="display: inline-block;">月</div>
            </div>
            <div class="select" style="display:flex;">


      <select type="number" name="day" v-model.number="inputYear">
            <option v-for="(n, key) in 31"  :key="key" v-bind:value="n + 0">{{ n + 0 }}</option>
        </select>
                      <div style="display: inline-block;">日</div>
            </div>
            </div>

  </div>
  </div>
</article>

<div class="field is-grouped is-grouped-centered btn-primary" >
    <router-link to="/form" class="button is-primary">次へ</router-link>

</div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      msg: 'Hellow',
        inputYear: this.year

    }

  },
  computed: {
    countNum() {
      return this.$store.getters.count
    }
  },
  methods: {
    clear () {
      this.msg = ''
    },
    clickPlus() {
      this.$store.dispatch('increment')
    },
    clickMinus() {
      this.$store.dispatch('decrement')
    },
    updateBox(e) {
      console.log(e.target.value)
      const id = e.target.value;
      this.$store.commit('changeYourBox', id);
    }
  },
  props: {
    year: {
        type: Number
    }
  },

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
