<script>
import { Bar } from 'vue-chartjs'

export default {
  props:['data','options'],
  name:"Bar",
  extends: Bar,
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>