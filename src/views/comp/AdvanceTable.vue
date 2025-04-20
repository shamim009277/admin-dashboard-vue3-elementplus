<template>
    <div>
        <div style="margin-top: 10px; display: flex; justify-content: space-between; flex-wrap: wrap;">
            <!-- Global Search -->
            <el-input v-model="globalSearch" placeholder="Global Search..." clearable @input="filterTable"
                style="margin-bottom: 10px; width: 100%; max-width: 300px;" />

            <!-- Export Buttons -->
            <div style="margin-bottom: 10px; display: flex; flex-wrap: wrap; gap: 10px;">
                <el-button type="success" size="small" @click="exportToCSV" style="flex: 1;">Export CSV</el-button>
                <el-button type="warning" size="small" @click="exportToExcel" style="flex: 1;">Export Excel</el-button>
                <el-button type="danger"  size="small" @click="exportToPDF" style="flex: 1;">Export PDF</el-button>
            </div>
        </div>


        <!-- Table -->
        <el-table border :data="filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
            style="width: 100%" @selection-change="handleSelectionChange">
            <!-- Multi-Select Checkbox -->
            <el-table-column type="selection" width="50" />

            <!-- Visible Columns -->
            <el-table-column v-for="column in visibleColumns" :key="column.prop" :prop="column.prop"
                :label="column.label" :sortable="column.sortable" style="width:100%">
                <template #default="{ row }">
                    <span>{{ row[column.prop] }}</span>
                </template>
            </el-table-column>

            <!-- Action Buttons -->
            <el-table-column label="Actions" width="150">
                <template #default="{ row }">
                    <el-button type="primary" :icon="Edit" circle size="small" @click="editRow(row)"></el-button>
                    <el-button type="danger" :icon="Delete" circle size="small" @click="deleteRow(row)"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- Pagination -->
        <el-pagination v-model:current-page="currentPage" :page-size="pageSize" :total="filteredData.length"
            layout="prev, pager, next, sizes" :page-sizes="[5, 10, 20, 50]" @size-change="handleSizeChange"
            style="margin-top: 10px;" />

        <!-- Column Toggle -->
        <el-checkbox-group v-model="selectedColumns" style="margin-top: 10px;">
            <el-checkbox v-for="col in columns" :key="col.prop" :label="col.prop">{{ col.label }}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";

import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'

// Local Data Array
const tableData = ref([
    { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 32, email: "jane@example.com" },
    { id: 3, name: "Alice Brown", age: 25, email: "alice@example.com" },
    { id: 4, name: "Bob Johnson", age: 40, email: "bob@example.com" },
    { id: 5, name: "Charlie Lee", age: 22, email: "charlie@example.com" },
    { id: 6, name: "David Kim", age: 36, email: "david@example.com" },
    { id: 7, name: "Emma Watson", age: 29, email: "emma@example.com" },
    { id: 8, name: "Frank Miller", age: 45, email: "frank@example.com" },
    { id: 9, name: "Grace Hopper", age: 38, email: "grace@example.com" },
    { id: 10, name: "Henry Ford", age: 50, email: "henry@example.com" },
    { id: 11, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 12, name: "Jane Smith", age: 32, email: "jane@example.com" },
    { id: 13, name: "Alice Brown", age: 25, email: "alice@example.com" },
    { id: 14, name: "Bob Johnson", age: 40, email: "bob@example.com" },
    { id: 15, name: "Charlie Lee", age: 22, email: "charlie@example.com" },
    { id: 16, name: "David Kim", age: 36, email: "david@example.com" },
    { id: 17, name: "Emma Watson", age: 29, email: "emma@example.com" },
    { id: 18, name: "Frank Miller", age: 45, email: "frank@example.com" },
    { id: 19, name: "Grace Hopper", age: 38, email: "grace@example.com" },
    { id: 20, name: "Henry Ford", age: 50, email: "henry@example.com" },
    { id: 21, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 22, name: "Jane Smith", age: 32, email: "jane@example.com" },
    { id: 23, name: "Alice Brown", age: 25, email: "alice@example.com" },
    { id: 24, name: "Bob Johnson", age: 40, email: "bob@example.com" },
    { id: 25, name: "Charlie Lee", age: 22, email: "charlie@example.com" },
    { id: 26, name: "David Kim", age: 36, email: "david@example.com" },
    { id: 27, name: "Emma Watson", age: 29, email: "emma@example.com" },
    { id: 28, name: "Frank Miller", age: 45, email: "frank@example.com" },
    { id: 29, name: "Grace Hopper", age: 38, email: "grace@example.com" },
    { id: 30, name: "Henry Ford", age: 50, email: "henry@example.com" },
    { id: 31, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 32, name: "Jane Smith", age: 32, email: "jane@example.com" },
    { id: 33, name: "Alice Brown", age: 25, email: "alice@example.com" },
    { id: 34, name: "Bob Johnson", age: 40, email: "bob@example.com" },
    { id: 35, name: "Charlie Lee", age: 22, email: "charlie@example.com" },
    { id: 36, name: "David Kim", age: 36, email: "david@example.com" },
    { id: 37, name: "Emma Watson", age: 29, email: "emma@example.com" },
    { id: 38, name: "Frank Miller", age: 45, email: "frank@example.com" },
    { id: 39, name: "Grace Hopper", age: 38, email: "grace@example.com" },
    { id: 40, name: "Henry Ford", age: 50, email: "henry@example.com" },
    { id: 41, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 42, name: "Jane Smith", age: 32, email: "jane@example.com" },
    { id: 43, name: "Alice Brown", age: 25, email: "alice@example.com" },
    { id: 44, name: "Bob Johnson", age: 40, email: "bob@example.com" },
    { id: 45, name: "Charlie Lee", age: 22, email: "charlie@example.com" },
    { id: 46, name: "David Kim", age: 36, email: "david@example.com" },
    { id: 47, name: "Emma Watson", age: 29, email: "emma@example.com" },
    { id: 48, name: "Frank Miller", age: 45, email: "frank@example.com" },
    { id: 49, name: "Grace Hopper", age: 38, email: "grace@example.com" },
    { id: 50, name: "Henry Ford", age: 50, email: "henry@example.com" }
]);

const globalSearch = ref("");
const selectedRows = ref([]);
const selectedColumns = ref(["name", "age", "email"]);
const currentPage = ref(1);
const pageSize = ref(5);

// Define Columns
const columns = [
    { prop: "name", label: "Name", sortable: true },
    { prop: "age", label: "Age", sortable: true },
    { prop: "email", label: "Email", sortable: true }
];

// Filter Logic (Only Global Search)
const filteredData = computed(() => {
    let data = tableData.value;

    // Global Search
    if (globalSearch.value) {
        data = data.filter(row => Object.values(row).some(value => String(value).toLowerCase().includes(globalSearch.value.toLowerCase())));
    }

    return data;
});

// Column Visibility
const visibleColumns = computed(() => columns.filter(col => selectedColumns.value.includes(col.prop)));

// Handle Multi-Select
const handleSelectionChange = (val) => {
    selectedRows.value = val;
};

// Handle Page Size Change
const handleSizeChange = (size) => {
    pageSize.value = size;
    currentPage.value = 1;
};

// Edit Row
const editRow = (row) => {
    alert(`Editing: ${row.name}`);
};

// Delete Row
const deleteRow = (row) => {
    tableData.value = tableData.value.filter(item => item !== row);
};

// Export CSV
const exportToCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8," + selectedColumns.value.join(",") + "\n";
    filteredData.value.forEach(row => {
        csvContent += selectedColumns.value.map(col => row[col]).join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
};

// Export Excel
const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData.value.map(row => {
        let obj = {};
        selectedColumns.value.forEach(col => obj[col] = row[col]);
        return obj;
    }));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "data.xlsx");
};

// Export PDF
const exportToPDF = () => {
    const doc = new jsPDF();

    autoTable(doc, {
        head: [selectedColumns.value],
        body: filteredData.value.map(row => selectedColumns.value.map(col => row[col]))
    });

    doc.save("data.pdf");
};
</script>

<style scoped>
    @media (max-width: 768px) {
        .el-input {
            width: 100%;
        }
        
        .export-buttons {
            width: 100%;
            justify-content: space-between;
        }

        .el-button {
            width: 100%;
            margin-bottom: 5px;
        }
    }

    /* Ensure the table is scrollable horizontally */
    .el-table {
        overflow-x: auto;
    }

    @media (max-width: 768px) {
        /* Stack the table headers and adjust column width */
        .el-table-column {
            display: block;
            width: 100%;
        }

        .el-table-column .cell {
            display: flex;
            justify-content: space-between;
        }
    }
</style>