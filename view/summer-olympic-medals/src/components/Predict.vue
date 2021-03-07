<template>

  <section>
    <div class="small row">
      <div class="col">Nombre de médailles :</div>
      <div class="col"><input v-model="form.medal" name="medal" /></div>
      <div class="w-100 mb-2"></div>

      <div class="col">Nombre de médailles d'or : </div>
      <div class="col"><input v-model="form.gold"  name="gold" /></div>
      <div class="w-100 mb-2"></div>

      <div class="col">Nombre de médailles d'argent : </div>
      <div class="col"><input v-model="form.silver"  name="silver" /></div>
      <div class="w-100 mb-2"></div>

      <div class="col">Nombre de médailles de bronze : </div>
      <div class="col"><input v-model="form.bronze"  name="bronze" /></div>
      <div class="w-100 mb-2"></div>

      <div class="col">Nombre de participant : </div>
      <div class="col"><input v-model="form.number_of_participant"  name="number_of_participant" /></div>
      <div class="w-100 mb-2"></div>

      <div class="col">PIB : </div>
      <div class="col"><input v-model="form.gdp"  name="gdp" /></div>
      <div class="w-100 mb-2"></div>

      <div class="col">Classement général de bonheur : </div>
      <div class="col"><input v-model="form.rank"  name="rank" /></div>
      <div class="w-100 mb-2"></div>

      <div class="col">Score bonheur : </div>
      <div class="col"><input v-model="form.score"  name="score" /></div>
      <div class="w-100 mb-2"></div>

      <div class="col"></div>
      <div class="col center"><button @click="predict" class="btn-dark text-center" > Go </button> </div>
    </div>

    <div v-if="cluster || cluster == 0" >
      <div class="alert alert-success" role="alert">
        <ul class="text-left" >
          <li> cluster 0 : Pas de chance de gagner beaucoup de médailles dont or </li>
          <li> cluster 3: Beaucoup de chances de gagner des médailles dont or </li>
        </ul>
        Ces valeurs appartiennent au cluster {{cluster}}
      </div>
    </div>
  </section>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        medal:null,
        gold:null,
        silver:null,
        bronze:null,
        score:null,
        rank:null,
        gdp:null,
        number_of_participant: null
      },
      cluster:null
    }
  },
  methods : {
    predict () {

      this.cluster = null

      const headers = {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }

      axios.post('http://127.0.0.1:5000/predict', this.form, {headers}).then((response) => {
        this.cluster = response.data.cluster;
      })
    }
  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin:  150px auto;
}
</style>