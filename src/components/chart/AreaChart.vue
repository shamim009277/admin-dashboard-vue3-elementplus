<template>
    <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const series = ref([
    {
        name: 'Sales',
        data: [29, 41, 35, 51, 49, 62, 69, 37, 45,41, 35, 51]
    },
    {
        name: 'Visitors',
        data: [23, 41, 35, 51, 27, 37, 45, 41, 35, 51, 27, 37]
    }
])

const chartOptions = ref({
    chart: {
        height: 350,
        type: 'line'
    },
    title: {
        text: 'Monthly Sales Overview',
        align: 'left',
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#263238'
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
    }
})
</script>

<style></style>