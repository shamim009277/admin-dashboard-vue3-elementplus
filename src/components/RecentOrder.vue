<template>
    <div>
        <!-- Global Search Input -->
        <el-input v-model="searchQuery" placeholder="Search..." clearable style="width: 450px; margin-bottom: 10px" />

        <!-- Data Table -->
        <el-table :data="paginatedData" border style="width: 100%" @sort-change="handleSort">
            <el-table-column prop="id" label="ID" width="50" />
            <el-table-column prop="order_id" label="OrderID" />
            <el-table-column prop="name" label="Customer Name" sortable />
            <el-table-column prop="phone" label="Phone" sortable />
            <el-table-column prop="order_date" label="Order Date" />
            <el-table-column prop="payment" label="Payment" />
            <el-table-column prop="quantity" label="Quantity" />
            <el-table-column prop="price" label="Price" />
            <el-table-column prop="total_amount" label="Total Amount" />
            <el-table-column prop="paid" label="Paid" />
            <el-table-column prop="due" label="Due" />
            <!-- <el-table-column prop="status" label="Status" /> -->
            <el-table-column prop="status" label="Status" :filters="[
                { text: 'Pending', value: '1' },
                { text: 'Delivered', value: '2' },
            ]" :filter-method="filterTag" filter-placement="bottom-end">
                <template #default="scope">
                    <el-tag :type="scope.row.status === '1' ? 'warning' : 'success'" disable-transitions>{{
                        scope.row.status === '1'?'Pending':'Delivered' }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="action" label="Action" />
        </el-table>

        <!-- Pagination Controls -->
        <div style="margin-top: 10px; display: flex; justify-content: space-between;">
            <!-- Rows Per Page Dropdown -->
            <el-select v-model="rowsPerPage" placeholder="Rows per page" size="medium" style="width:100px;">
                <el-option v-for="size in [5, 10, 20]" :key="size" :label="`${size} rows`" :value="size" />
            </el-select>

            <!-- Pagination -->
            <el-pagination background layout="prev, pager, next" :current-page="currentPage"
                :total="filteredData.length" :page-size="rowsPerPage" @current-change="handlePageChange" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Sample Data (AJAX থেকে ডাটা আনতে চাইলে `fetch` বা `axios` ব্যবহার করুন)
const tableData = ref([
    { id: 1, order_id: "#TWT5015100369", location: "Dhaka, Bangladesh", order_date: "11-06-2025", payment: "Credit Card", quantity: "3", price: "2300.00", total_amount: "6900.00", paid: "2000.00", due: "300.00", status: "1", name: "Rahim", email: "rahim@example.com", phone: "1234567890" },
    { id: 2, order_id: "#TWT5015100370", location: "Dhaka, Bangladesh", order_date: "11-06-2025", payment: "Credit Card", quantity: "3", price: "2300.00", total_amount: "6900.00", paid: "2000.00", due: "300.00", status: "2", name: "Karim", email: "karim@example.com", phone: "9876543210" },
    { id: 3, order_id: "#TWT5015100371", location: "Dhaka, Bangladesh", order_date: "11-06-2025", payment: "Credit Card", quantity: "3", price: "2300.00", total_amount: "6900.00", paid: "2000.00", due: "300.00", status: "1", name: "Abdullah", email: "abdullah@example.com", phone: "5556667778" },
    { id: 4, order_id: "#TWT5015100372", location: "Dhaka, Bangladesh", order_date: "11-06-2025", payment: "Credit Card", quantity: "3", price: "2300.00", total_amount: "6900.00", paid: "2000.00", due: "300.00", status: "1", name: "Sajjad", email: "sajjad@example.com", phone: "2223334445" },
    { id: 5, order_id: "#TWT5015100373", location: "Dhaka, Bangladesh", order_date: "11-06-2025", payment: "Credit Card", quantity: "3", price: "2300.00", total_amount: "6900.00", paid: "2000.00", due: "300.00", status: "2", name: "Rakib", email: "rakib@example.com", phone: "1112223334" },
    { id: 6, order_id: "#TWT5015100374", location: "Dhaka, Bangladesh", order_date: "11-06-2025", payment: "Credit Card", quantity: "3", price: "2300.00", total_amount: "6900.00", paid: "2000.00", due: "300.00", status: "2", name: "Jamil", email: "jamil@example.com", phone: "6667778889" },
    { id: 7, order_id: "#TWT5015100375", location: "Dhaka, Bangladesh", order_date: "11-06-2025", payment: "Credit Card", quantity: "3", price: "2300.00", total_amount: "6900.00", paid: "2000.00", due: "300.00", status: "1", name: "Faruk", email: "faruk@example.com", phone: "4445556667" },
    { id: 8, order_id: "#TWT5015100376", location: "Dhaka, Bangladesh", order_date: "11-06-2025", payment: "Credit Card", quantity: "3", price: "2300.00", total_amount: "6900.00", paid: "2000.00", due: "300.00", status: "2", name: "Sumon", email: "sumon@example.com", phone: "9990001112" },
    { id: 9, order_id: "#TWT5015100377", location: "Dhaka, Bangladesh", order_date: "11-06-2025", payment: "Credit Card", quantity: "3", price: "2300.00", total_amount: "6900.00", paid: "2000.00", due: "300.00", status: "1", name: "Bashir", email: "bashir@example.com", phone: "7778889990" },
    { id:10, order_id: "#TWT5015100377", location: "Dhaka, Bangladesh", order_date: "11-06-2025", payment: "Credit Card", quantity: "3", price: "2300.00", total_amount: "6900.00", paid: "2000.00", due: "300.00", status: "1", name: "Nadim", email: "nadim@example.com", phone: "3334445556" },
]);

// Search Query
const searchQuery = ref("");

// Pagination States
const currentPage = ref(1);
const rowsPerPage = ref(5);

// Sorting States
const sortColumn = ref(null);
const sortOrder = ref(null);

// **Filtered Data (Search Feature)**
const filteredData = computed(() => {
    return tableData.value.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        row.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        row.phone.includes(searchQuery.value)
    );
});

// **Sorted & Paginated Data**
const paginatedData = computed(() => {
    let sortedData = [...filteredData.value];

    if (sortColumn.value) {
        sortedData.sort((a, b) => {
            const valA = a[sortColumn.value];
            const valB = b[sortColumn.value];

            if (sortOrder.value === "ascending") {
                return valA > valB ? 1 : -1;
            } else if (sortOrder.value === "descending") {
                return valA < valB ? 1 : -1;
            }
            return 0;
        });
    }

    const start = (currentPage.value - 1) * rowsPerPage.value;
    const end = start + rowsPerPage.value;
    return sortedData.slice(start, end);
});

// Handle Page Change
const handlePageChange = (newPage) => {
    currentPage.value = newPage;
};

// Handle Sorting
const handleSort = ({ prop, order }) => {
    sortColumn.value = prop;
    sortOrder.value = order;
};
</script>