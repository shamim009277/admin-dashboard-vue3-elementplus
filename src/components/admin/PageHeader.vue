<template>
    <el-card class="header-card" shadow="never" :body-style="{ padding: '10px 0px', backgroundColor: '#F8F8F8' }"
        style="background-color: #F8F8F8; border: none;">
        <div class="header-content">
            <!-- Dynamic Page Title -->
            <h1 class="page-title">{{ title }}</h1>

            <!-- Dynamic Breadcrumb -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index" :to="item.path">
                    {{ item.label }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </el-card>
</template>

<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    breadcrumbItems: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>
<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}
</style>