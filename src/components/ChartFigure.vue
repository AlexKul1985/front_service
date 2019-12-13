<script>
// import VueCharts from 'vue-chartjs'
import {  Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  props:['data','options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data,
     this.options
    )
  }
}
</script>