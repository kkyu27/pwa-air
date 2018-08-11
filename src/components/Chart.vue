<template>
  <section class="container">
    <h1>한 주간의 미세먼지 농도</h1>
    <div class="columns">
      <div class="column">
        <line-chart></line-chart>
      </div>
    </div>
  </section>
</template>

<script>
  import LineChart from './LineChart'

  export default {
    name: 'VueChartJS',
    components: {
      LineChart,
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
  h1 { text-align: center; padding-bottom: 10px; }
  a {
    color: #42b983;
  }
</style>