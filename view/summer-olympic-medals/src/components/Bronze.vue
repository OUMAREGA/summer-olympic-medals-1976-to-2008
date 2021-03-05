<template>
  <div class="small">
    <radar-chart :chart-data="datacollection"></radar-chart>
  </div>
</template>

<script>
import RadarChart from './RadarChart.js'
import axios from 'axios'

export default {
  components: {
    RadarChart
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {

    const headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }

    axios.get('http://127.0.0.1:5000/top_ten_bronze', {headers}).then((response) => {
      this.data = response.data.Medal;

      const labels = Object.keys(response.data.Medal);
      const values = Object.values(response.data.Medal);

      this.datacollection = {
        labels: labels,
        datasets: [
          {
            label: 'Top Ten Bronze Medals',
            backgroundColor: ["#41B883", "#E46651", "#00D8FF","#711183", "#563619", "#b9cec2","#ced69e","#a9cfe5","#f7ef07","#af422f"],
            data: values
          }
        ]

      }
    })
  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin:  150px auto;
}
</style>