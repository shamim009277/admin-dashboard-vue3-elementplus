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
                    <el-card class="dashboard-card1 professional-card" shadow="hover" style="border-top: 2px solid #626AEF;">
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
                                <h3 style="color:black !important;">Filtered Table</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <div style="display:flex; gap:10px; align-items:center; margin-bottom:10px;">
                                <el-select v-model="filterField" size="small" style="width:150px;">
                                    <el-option label="Name" value="name" />
                                    <el-option label="Email" value="email" />
                                    <el-option label="Phone" value="phone" />
                                </el-select>

                                <el-input v-model="filterQuery2" placeholder="Filter..." clearable style="width:250px;" />

                                <div style="margin-left:auto; color: #606266; font-size:13px;">Results: {{ filteredData2.length }}</div>
                            </div>

                            <el-table class="compact-table" :data="paginatedFilteredData2" border style="width: 100%"
                                stripe size="small" row-key="id" show-overflow-tooltip highlight-current-row>
                                <el-table-column prop="id" label="ID" width="80" />
                                <el-table-column prop="name" label="Name" />
                                <el-table-column prop="email" label="Email" />
                                <el-table-column prop="phone" label="Phone" />
                            </el-table>

                            <div style="margin-top: 10px; display: flex; justify-content: space-between;">
                                <el-select v-model="rowsPerPage2" placeholder="Rows per page" size="medium" style="width:100px;">
                                    <el-option v-for="size in [5, 10, 20]" :key="size" :label="`${size} rows`" :value="size" />
                                </el-select>

                                <el-pagination background layout="prev, pager, next" :current-page="currentPage2"
                                    :total="filteredData2.length" :page-size="rowsPerPage2"
                                    @current-change="handlePageChange2" />
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
import { ref, computed, watch } from "vue";
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

//Second table filter states
const filterField = ref('name');
const filterQuery2 = ref('');

//Filtered Data for second table
const filteredData2 = computed(() => {
    const q = filterQuery2.value.toString().toLowerCase().trim();
    if (!q) return tableData.value;
    return tableData.value.filter((row) => {
        const val = (row[filterField.value] ?? '').toString().toLowerCase();
        return val.includes(q);
    });
});

//Pagination States
const currentPage = ref(1);
const rowsPerPage = ref(5);

//Pagination for second (filtered) table
const currentPage2 = ref(1);
const rowsPerPage2 = ref(5);

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

// Paginated data for filtered table
const paginatedFilteredData2 = computed(() => {
    const start = (currentPage2.value - 1) * rowsPerPage2.value;
    const end = start + rowsPerPage2.value;
    return filteredData2.value.slice(start, end);
});

//Change Page
const handlePageChange = (newPage) => {
    currentPage.value = newPage;
};

//Change page for filtered table
const handlePageChange2 = (newPage) => {
    currentPage2.value = newPage;
};

// Reset filtered table page when filter changes
watch([filterQuery2, filterField], () => {
    currentPage2.value = 1;
});
</script>

<style scoped>
.el-alert {
    margin: 20px 0 0;
}

.el-alert:first-child {
    margin: 0;
}

/* Compact table styling for filtered table */
.compact-table ::v-deep .el-table__cell {
    padding: 6px 8px;
    font-size: 13px;
}
.compact-table ::v-deep .el-table__row {
    height: 36px;
}
.compact-table ::v-deep .el-table__header-wrapper th {
    padding: 6px 8px;
}

/* Professional card and table refinements */
.professional-card {
    border-radius: 6px;
    box-shadow: 0 1px 8px rgba(99, 102, 120, 0.06);
}

.compact-table ::v-deep .el-table__header-wrapper {
    background: #f7fafc;
    border-bottom: 1px solid #e6eef6;
}
.compact-table ::v-deep .el-table__header-wrapper th {
    color: #2c3e50;
    font-weight: 600;
    font-size: 13px;
}
.compact-table ::v-deep .el-table__body-wrapper tbody tr:nth-child(odd) {
    background: #ffffff;
}
.compact-table ::v-deep .el-table__body-wrapper tbody tr:nth-child(even) {
    background: #fbfcfd;
}
.compact-table ::v-deep .el-table__row:hover td {
    background: rgba(98,106,239,0.03);
}
.compact-table ::v-deep .el-table__cell {
    color: #34495e;
}
</style>