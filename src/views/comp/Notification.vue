<template>
    <div>
        <div class="page-container">
            <!-- Header Section -->
            <PageHeader title="Notification" :breadcrumb-items="[
                { label: 'Home', path: '/' },
                { label: 'Notification', path: '' }
            ]" />
            <br>

            <!-- Page Content -->
            <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                <div class="card-header">
                    <div class="card-info">
                        <h3 style="color:black !important;">Notification</h3>
                    </div>
                </div><br>
                <div class="card-body">
                    <el-button plain @click="open1"> Closes automatically </el-button>
                    <el-button plain @click="open2"> Won't close automatically </el-button>
                </div>


                <h3>With Types</h3>
                <el-button type="success" @click="open1t"> Success </el-button>
                <el-button type="warning" @click="open2t"> Warning </el-button>
                <el-button type="info" @click="open3t"> Info </el-button>
                <el-button type="danger"  @click="open4t"> Error </el-button>

                <h3>Custom Position</h3>
                <el-button plain @click="open1p"> Top Right </el-button>
                <el-button plain @click="open2p"> Bottom Right </el-button>
                <el-button plain @click="open3p"> Bottom Left </el-button>
                <el-button plain @click="open4p"> Top Left </el-button>


                <h3>Custom Position</h3>
                <el-button plain @click="open1c"> Success </el-button>
                <el-button plain @click="open2c"> Warning </el-button>
                <el-button plain @click="open3c"> Info </el-button>
                <el-button plain @click="open4c"> Error </el-button>
            </el-card><br>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PageHeader from '@/components/admin/PageHeader.vue'
import { Bell, Message } from '@element-plus/icons-vue'

import { ref } from 'vue'

import { h } from 'vue'
import { ElNotification } from 'element-plus'

const open1 = () => {
    ElNotification({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder'),
    })
}

const open2 = () => {
    ElNotification({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 0,
    })
}

const open1t = () => {
    ElNotification({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
    })
}

const open2t = () => {
    ElNotification({
        title: 'Warning',
        message: 'This is a warning message',
        type: 'warning',
    })
}

const open3t = () => {
    ElNotification({
        title: 'Info',
        message: 'This is an info message',
        type: 'info',
    })
}

const open4t = () => {
    ElNotification({
        title: 'Error',
        message: 'This is an error message',
        type: 'error',
    })
}

const open1p = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open2p = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open3p = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open4p = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}

const open1c = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
    customClass: 'custom-success',
  })
}

const open2c = () => {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
    customClass: 'custom-warning',
  })
}

const open3c = () => {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
    customClass: 'custom-info',
  })
}

const open4c = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
    customClass: 'custom-error',
  })
}
</script>

<style scoped>
.item {
    margin-top: 10px;
    margin-right: 30px;
}

.el-dropdown {
    margin-top: 1.1rem;
}

.custom-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}


/* Success */
.custom-success {
  background-color: #e6f4ea !important; /* Light green */
  color: #2c7a7b !important; /* Dark green */
}

/* Warning */
.custom-warning {
  background-color: #fff4e5 !important; /* Light orange */
  color: #b45309 !important; /* Dark orange */
}

/* Info */
.custom-info {
  background-color: #e8f4ff !important; /* Light blue */
  color: #1e40af !important; /* Dark blue */
}

/* Error */
.custom-error {
  background-color: #fde2e2 !important; /* Light red */
  color: #c53030 !important; /* Dark red */
}

/* Optional: Make the text bold */
.el-notification__title {
  font-weight: bold;
}
</style>