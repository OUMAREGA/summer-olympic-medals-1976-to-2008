<template>
  <section>
      <Bar :data="data" ></Bar>
  </section>
</template>
<script>

import { Bar } from 'vue-chartjs';
import axios from 'axios';

export default {

  name:"Bronze",
  components:{Bar},
  data(){
    return{
      data: {}
    }
  },

  mounted(){
    axios.get('http://127.0.0.1:5000/top_ten_gold').then((response) => {
      console.log(response)
    })
  }
}
</script>