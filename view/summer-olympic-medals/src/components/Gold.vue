<template>
  <section class="container">
    <BarC :data="datacollection"  :options="options"></BarC>
  </section>
</template>
<script>
import axios from 'axios';
import BarC from './BarC';
export default {
  name:"Gold",
  components:{BarC},
  data(){
    return{
      data: {},
      datacollection:{},
      options:{}
    }
  },
  mounted(){

    const headers = {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }

    axios.get('http://127.0.0.1:5000/top_ten_gold', {headers}).then((response) => {
      this.data = response.data.Medal;

      this.datacollection = {
        labels: Object.keys(response.data.Medal),
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: Object.values(response.data.Medal)
          }
        ]
      }
    })
  }
}
</script>