<template>
    <div id="app">
        <apexchart type="radar" height="350" :options="chartOptions" :series="series" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ApexChart from 'vue3-apexcharts'

const series = ref([
    {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20]
    },
    {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80]
    },
    {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10]
    }
])

const chartOptions = ref({
    chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
        }
    },
    title: {
        text: 'Radar Chart - Multi Series',
        align: 'left',
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#263238'
        }
    },
    stroke: {
        width: 2
    },
    fill: {
        opacity: 0.1
    },
    markers: {
        size: 0
    },
    yaxis: {
        stepSize: 20
    },
    xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016']
    }
})
</script>

<style></style>