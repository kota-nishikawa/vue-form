<template>
  <div  class="container">
 <article class="message is-primary" style="border: 1px solid #ebfffc;">
  <div class="message-header">
   <span class="tag is-info" style="position: absolute;left: 0;top: 0;">STEP2</span>
    <p style="padding: 0px 0 0 40px;">お客様の情報を入力してください。</p>
  </div>
   <div class="card-content" style="background:#FFFFFF; ">
    <div class="content">

    <div class="control"  v-if="show>0">
    <p>現在生命保険に加入されていますか？</p>
    <label class="radio"><input type="radio" name="insurance" @click="show++" @input="updateAssign" value="はい">
        はい
      </label>
      <label class="radio">
        <input type="radio" name="insurance" @click="show++" @input="updateAssign" value="いいえ">
        いいえ
      </label>
    </div>
    <div class="control"  v-if="show>1">

    <p>現在入院中ですか。または、直近3ヶ月以内に医師の診察・検査結果、入院・手術、を勧められたことはありますか？</p>
    <div style="display:flex;">
      <label class="radio">
        <input type="radio" @input="updateTreeYear" name="latest" @click="show++" value="はい">
        はい
      </label>
      <label class="radio">
        <input type="radio"  @input="updateTreeYear" name="latest" @click="show++" value="いいえ">
        いいえ
      </label>
            </div>
    </div>
        <div class="control"  v-if="show>2">

    <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
    <div style="display:flex;">
      <label class="radio">
        <input type="radio" name="long" @click="show++"  @input="updateSevenWeek"  value="はい" >
        はい
      </label>
      <label class="radio">
        <input type="radio" name="long" @click="show++" @input="updateSevenWeek" value="いいえ" >
        いいえ
      </label>
            </div>


  </div>
  </div>
  </div>
</article>
<div class="field is-grouped is-grouped-centered">
    <router-link to="/"  class="button is-primary">前へ</router-link>
    <router-link to="/consultation"  class="button is-primary">次へ</router-link>

</div>

  </div>

</template>

<script>

export default {
  data () {

    return {
      msg: 'Hellow',
      show: 1

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
    updateAssign(e) {
     const assign = e.target.value;
      this.$store.commit('updateAssign', assign);
    },
    updateTreeYear(e) {
     const assign = e.target.value;
      this.$store.commit('updateTreeYear', assign);

    },
    updateSevenWeek(e) {
     const assign = e.target.value;
      this.$store.commit('updateSevenWeek', assign);

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
