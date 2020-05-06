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

      <select type="number" name="year" v-model.number="inputYear"  @change="updateYear" >
            <option v-for="(n, key) in 70"  :key="key" v-bind:value="n + 1950" >{{ n + 1950 }}</option>
        </select>
                        <div style="display: inline-block;">年</div>
            </div>
            <div  class="select" style="display:flex;">

      <select type="number" name="month" v-model.number="inputMonth" @change="updateMonth">
            <option v-for="(n, key) in 12"  :key="key" v-bind:value="n + 0">{{ n + 0 }}</option>
        </select>
                        <div style="display: inline-block;">月</div>
            </div>
            <div class="select" style="display:flex;">


      <select type="number" name="day" v-model.number="inputDay" @change="updateDay">
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
      inputYear: this.year,
      inputMonth: this.month,
      inputDay: this.day

    }

  },
  computed: {
    countNum() {
      return this.$store.getters.year
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
    updateYear(e) {
      const year = e.target.value;
      this.$store.commit('updateYear', year);
    },
    updateMonth(e) {
      const month = e.target.value;
      this.$store.commit('updateMonth', month);
    },
    updateDay(e) {
      const day = e.target.value;
      this.$store.commit('updateDay', day);
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
