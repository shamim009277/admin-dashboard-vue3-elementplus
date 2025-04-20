<template>
    <div>
        <div class="page-container">
            <!-- Header Section -->
            <PageHeader title="Data Table" :breadcrumb-items="[
                { label: 'Home', path: '/' },
                { label: 'Data Table', path: '' }
            ]" />
            <br>

            <!-- Page Content -->
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Data Tables</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <!--Search Input -->
                            <el-input v-model="searchQuery" placeholder="Search..." clearable
                                style="width: 250px; margin-bottom: 10px" />

                            <!--Data Table -->
                            <el-table :data="paginatedData" border style="width: 100%">
                                <el-table-column prop="id" label="ID" width="80" />
                                <el-table-column prop="name" label="Name" />
                                <el-table-column prop="email" label="Email" />
                                <el-table-column prop="phone" label="Phone" />
                            </el-table>

                            <!--Pagination Controls -->
                            <div style="margin-top: 10px; display: flex; justify-content: space-between;">
                                <!-- Rows Per Page Dropdown -->
                                <el-select v-model="rowsPerPage" placeholder="Rows per page" size="medium" style="width:100px;">
                                    <el-option v-for="size in [5, 10, 20]" :key="size" :label="`${size} rows`"
                                        :value="size" />
                                </el-select>

                                <!-- Pagination -->
                                <el-pagination background layout="prev, pager, next" :current-page="currentPage"
                                    :total="filteredData.length" :page-size="rowsPerPage"
                                    @current-change="handlePageChange" />
                            </div>
                        </div>
                    </el-card><br>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Shortable Data Tables</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <DataTable />
                        </div>
                    </el-card><br>


                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Advance Data Tables</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <AdvanceTable />
                        </div>
                    </el-card><br>

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import DataTable from '@/views/comp/DataTable.vue'
import AdvanceTable from '@/views/comp/AdvanceTable.vue'
import PageHeader from '@/components/admin/PageHeader.vue'

//Sample Data
const tableData = ref([
    { id: 1, name: "Rahim", email: "rahim@example.com", phone: "1234567890" },
    { id: 2, name: "Karim", email: "karim@example.com", phone: "9876543210" },
    { id: 3, name: "Abdullah", email: "abdullah@example.com", phone: "5556667778" },
    { id: 4, name: "Sajjad", email: "sajjad@example.com", phone: "2223334445" },
    { id: 5, name: "Rakib", email: "rakib@example.com", phone: "1112223334" },
    { id: 6, name: "Jamil", email: "jamil@example.com", phone: "6667778889" },
    { id: 7, name: "Faruk", email: "faruk@example.com", phone: "4445556667" },
    { id: 8, name: "Sumon", email: "sumon@example.com", phone: "9990001112" },
    { id: 9, name: "Bashir", email: "bashir@example.com", phone: "7778889990" },
    { id: 10, name: "Nadim", email: "nadim@example.com", phone: "3334445556" },
    { id: 11, name: "Rahim", email: "rahim@example.com", phone: "1234567890" },
    { id: 12, name: "Karim", email: "karim@example.com", phone: "9876543210" },
    { id: 13, name: "Abdullah", email: "abdullah@example.com", phone: "5556667778" },
    { id: 14, name: "Sajjad", email: "sajjad@example.com", phone: "2223334445" },
    { id: 15, name: "Rakib", email: "rakib@example.com", phone: "1112223334" },
    { id: 16, name: "Jamil", email: "jamil@example.com", phone: "6667778889" },
    { id: 17, name: "Faruk", email: "faruk@example.com", phone: "4445556667" },
    { id: 18, name: "Sumon", email: "sumon@example.com", phone: "9990001112" },
    { id: 19, name: "Bashir", email: "bashir@example.com", phone: "7778889990" },
    { id: 20, name: "Nadim", email: "nadim@example.com", phone: "3334445556" },
    { id: 21, name: "Rahim", email: "rahim@example.com", phone: "1234567890" },
    { id: 22, name: "Karim", email: "karim@example.com", phone: "9876543210" },
    { id: 23, name: "Abdullah", email: "abdullah@example.com", phone: "5556667778" },
    { id: 24, name: "Sajjad", email: "sajjad@example.com", phone: "2223334445" },
    { id: 25, name: "Rakib", email: "rakib@example.com", phone: "1112223334" },
    { id: 26, name: "Jamil", email: "jamil@example.com", phone: "6667778889" },
    { id: 27, name: "Faruk", email: "faruk@example.com", phone: "4445556667" },
    { id: 28, name: "Sumon", email: "sumon@example.com", phone: "9990001112" },
    { id: 29, name: "Bashir", email: "bashir@example.com", phone: "7778889990" },
    { id: 30, name: "Nadim", email: "nadim@example.com", phone: "3334445556" }
]);

//Search Query
const searchQuery = ref("");

//Pagination States
const currentPage = ref(1);
const rowsPerPage = ref(5);

//**Filtered Data (Search Feature)**
const filteredData = computed(() => {
    return tableData.value.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        row.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        row.phone.includes(searchQuery.value)
    );
});

//**Paginated Data (Pagination Feature)**
const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * rowsPerPage.value;
    const end = start + rowsPerPage.value;
    return filteredData.value.slice(start, end);
});

//Change Page
const handlePageChange = (newPage) => {
    currentPage.value = newPage;
};
</script>

<style scoped>
.el-alert {
    margin: 20px 0 0;
}

.el-alert:first-child {
    margin: 0;
}
</style>