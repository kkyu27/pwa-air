<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Line} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default{ 
    mixins: [Line],
    data () {
      return {
        datacollection: {
        //Data to be represented on x-axis
          labels: ['2일전', '1일전', '오늘'], 
          datasets: [
            {
              label: '미세먼지 농도',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#fff',
              //Data to be represented on y-axis
              data: [5, 15, 10]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            labels: {
              fontColor: '#ffffff'
            },
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>