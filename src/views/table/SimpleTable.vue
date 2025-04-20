<template>
    <div>
        <div class="page-container">
            <!-- Header Section -->
            <PageHeader title="Simple Table" :breadcrumb-items="[
                { label: 'Home', path: '/' },
                { label: 'Simple Table', path: '' }
            ]" />
            <br>

            <!-- Page Content -->
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Basic Table</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-table :data="tableData" style="width: 100%">
                                <el-table-column prop="date" label="Date" :style="{ flexGrow: 1 }" />
                                <el-table-column prop="name" label="Name" :style="{ flexGrow: 2 }" />
                                <el-table-column prop="address" label="Address" :style="{ flexGrow: 3 }" />
                            </el-table>
                        </div>
                    </el-card><br>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Table With Border</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-table :data="tableData" border style="width: 100%">
                                <el-table-column prop="date" label="Date" :style="{ flexGrow: 1 }" />
                                <el-table-column prop="name" label="Name" :style="{ flexGrow: 2 }" />
                                <el-table-column prop="address" label="Address" :style="{ flexGrow: 3 }" />
                            </el-table>
                        </div>
                    </el-card><br>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Table With Fixed Border</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-table :data="tableData" height="250" style="width: 100%">
                                <el-table-column prop="date" label="Date" :style="{ flexGrow: 1 }" />
                                <el-table-column prop="name" label="Name" :style="{ flexGrow: 2 }" />
                                <el-table-column prop="address" label="Address" :style="{ flexGrow: 3 }" />
                            </el-table>
                        </div>
                    </el-card><br>
                </el-col>


                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Stripe Tablet</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-table :data="tableData" stripe style="width: 100%">
                                <el-table-column prop="date" label="Date" :style="{ flexGrow: 1 }" />
                                <el-table-column prop="name" label="Name" :style="{ flexGrow: 2 }" />
                                <el-table-column prop="address" label="Address" :style="{ flexGrow: 3 }" />
                            </el-table>
                        </div>
                    </el-card><br>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Table with show overflow tooltip</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-table :data="tableData2" style="width: 100%">
                                <el-table-column type="selection" width="55" />
                                <el-table-column label="Date" width="120">
                                    <template #default="scope">{{ scope.row.date }}</template>
                                </el-table-column>
                                <el-table-column property="name" label="Name" width="120" />
                                <el-table-column property="address" label="use show-overflow-tooltip" width="240"
                                    show-overflow-tooltip />
                                <el-table-column property="address" label="address" />
                            </el-table>
                        </div>
                    </el-card><br>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Table with fixed column</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-table :data="tableData3" style="width: 100%">
                                <el-table-column fixed prop="date" label="Date" width="150" />
                                <el-table-column prop="name" label="Name" width="120" />
                                <el-table-column prop="state" label="State" width="120" />
                                <el-table-column prop="city" label="City" width="120" />
                                <el-table-column prop="address" label="Address" width="600" />
                                <el-table-column prop="zip" label="Zip" width="120" />
                                <el-table-column fixed="right" label="Operations" min-width="120">
                                    <template #default>
                                        <el-button link type="danger" size="large" @click="handleClick">
                                            <el-icon><Delete /></el-icon>
                                        </el-button>
                                        <el-button link type="success" size="large"><el-icon><Edit /></el-icon></el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-card><br>
                </el-col>
            </el-row>


        </div>
    </div>
</template>

<script lang="ts" setup>
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
import PageHeader from '@/components/admin/PageHeader.vue'

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

import { ElTable } from 'element-plus'

interface User {
  date: string
  name: string
  address: string
}
const tableData2: User[] = [
  {
    date: '2016-05-04',
    name: 'Aleyna Kutzner',
    address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
  },
  {
    date: '2016-05-03',
    name: 'Helen Jacobi',
    address: '760 A Street, South Frankfield, Illinois',
  },
  {
    date: '2016-05-02',
    name: 'Brandon Deckert',
    address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
  },
  {
    date: '2016-05-01',
    name: 'Margie Smith',
    address: '23618 Windsor Drive, West Ricardoview, Idaho',
  },
]

const handleClick = () => {
  console.log('click')
}

const tableData3 = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
</script>

<style scoped>
.el-alert {
    margin: 20px 0 0;
}

.el-alert:first-child {
    margin: 0;
}
</style>