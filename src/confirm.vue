<template>
  <div  class="container">

 <article class="message is-primary" style="border: 1px solid #ebfffc;">
  <div class="message-header">

    <p style="padding: 0px 0 0 40px;">以下の内容をご確認ください。</p>
  </div>
   <div class="card-content" style="background:#FFFFFF; ">
    <div class="content">

   <p>-相談内容-</p>

    <div class="field is-grouped is-grouped-centered">
    {{gender}}
    </div>


   <p>-生年月日-</p>

    <div class="field is-grouped is-grouped-centered">
    {{year}}年{{month}}月{{day}}日
    </div>

    <p>現在生命保険に加入されていますか？</p>

    <div class="field is-grouped is-grouped-centered">
    {{assign}}
    </div>
    <p>現在入院中ですか。または、直近3ヶ月以内に医師の診察・検査結果、入院・手術、を勧められたことはありますか？</p>

    <div class="field is-grouped is-grouped-centered">
        {{treeyear}}

    </div>
    <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>

    <div class="field is-grouped is-grouped-centered">
        {{sevenweek}}
    </div>


   <p>-相談内容-</p>

    <div class="field is-grouped is-grouped-centered">
    {{updatetext}}
    </div>

  </div>
  </div>
</article>
<div class="field is-grouped is-grouped-centered">
    <router-link to="/consultation" class="button is-primary">前へ</router-link>

</div>
      <router-view></router-view>

  </div>

</template>

<script>
import { mapState} from 'vuex'

export default {
  data () {
    return {
      msg: 'Hellow'
    }

  },
  computed:mapState([
        'gender',
        'year',
        'month',
        'day',
        'assign',
        'treeyear',
        'sevenweek',
        'updatetext'
  ]),
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
