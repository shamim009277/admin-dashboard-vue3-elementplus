<template>
    <div id="app" class="chart-wrapper">
        <apexchart type="pie" :width="chartOptions.chart.width" :options="chartOptions" :series="series" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ApexChart from 'vue3-apexcharts'

const series = ref([44, 55, 13, 43])

const chartOptions = ref({
    chart: {
        width: 380,
        type: 'pie',
    },
    title: {
        text: 'Order Summary',
        align: 'center',
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#263238'
        }
    },
    labels: ['Delivered', 'Pending', 'Shipping', 'Canceled'],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    ]
})
</script>

<style>
.chart-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>