<template>
    <div id="chart">
        <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ApexChart from 'vue3-apexcharts'

const series = ref([67])

const chartOptions = ref({
    chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -10
    },
    title: {
        text: 'Shipping Summary',
        align: 'left',
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#263238'
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val) {
                        return val + "%"
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        }
    },
    stroke: {
        dashArray: 4
    },
    labels: ['Delivered']
})
</script>


<style></style>