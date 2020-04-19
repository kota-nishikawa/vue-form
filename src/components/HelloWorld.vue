<template>
  <div class="hello">
    <p>性別</p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><input type="radio" value="男"></li>
      <li><input type="radio" value="女"></li>

    </ul>
      <div id="dates">
    <select name="year" v-model="year" v-on:change="modify">
        <option v-for="year in getYears()" name="year" :value="year" :key='year'>{{ year }}</option>
    </select>
    <label>年</label>

    <select name="month"  v-model="month" v-on:change="modify">
        <option v-for="month in months" name="month" :value="month" :key='month'>{{ month }}</option>
    </select>
    <label>月</label>

    <select name="date"  v-model="date" >
        <option v-for="date in getDates(year, month)" name="date" :value="date" :key='date'>{{ date }}</option>
    </select>
    <label>日</label>
  </div>
  </div>

</template>

<script>


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
