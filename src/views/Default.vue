<template>
  <el-container>
    <!-- Sidebar -->
    <AdminSidebar :isOpen="isSidebarOpen" />

    <el-container direction="vertical">
      <!-- Header -->
      <AdminHeader @toggleSidebar="isSidebarOpen = !isSidebarOpen" />

      <!-- Main Content -->
      <el-main class="main-content">
         <RouterView />
      </el-main>

      <!-- Footer -->
      <AdminFooter />
    </el-container>
  </el-container>
</template>

<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import AdminHeader from "@/components/admin/Header.vue";
import AdminSidebar from "@/components/admin/Sidebar.vue";
import AdminFooter from "@/components/admin/Footer.vue";

const isSidebarOpen = ref(true);

</script>

<style scoped>
.main-content {
  background-color: #f8f8f8;
  padding: 10px;
  min-height: calc(100vh - 120px);;
}
</style>