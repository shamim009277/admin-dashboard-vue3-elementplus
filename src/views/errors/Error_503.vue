<template>
    <div class="error-wrapper">
        <el-card class="error-card" shadow="hover">
            <!-- Error Icon/Image -->
            <div class="error-logo">
                <img src="/public/logo/503.png" alt="Error 503" />
            </div>

            <!-- Error Message -->
            <div class="card-content">
                <h2 class="text-center text-xl font-bold mb-2 flex items-center justify-center gap-2">
                    <span>Site Under Construction !</span>
                </h2>
                <p class="text-center text-gray-600">
                    We're building something awesome. Stay tuned!
                </p>
            </div>

            <!-- Back Button -->
            <el-form class="center-button-form">
                <el-form-item>
                    <router-link to="/">
                        <el-button type="primary" :icon="Back" class="w-full" style="width: 100%;">
                            Back to Home
                        </el-button>
                    </router-link>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup>
import { Back } from '@element-plus/icons-vue'
</script>

<style scoped>
.error-wrapper {
    min-height: 97vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f4f6f9;
}

.error-card {
    max-width: 600px;
    width: 100%;
    padding: 30px;
    border-radius: 12px;
}

.error-logo {
    text-align: center;
    margin-bottom: 20px;
}

.error-logo img {
    width: 200px;
    height: auto;
}

.card-content {
    text-align: center;
}

.card-content h2 {
    color: #333;
    margin: 0px;
    font-size: 24px;
    margin-bottom: 10px;
}

.card-content p {
    color: #666;
    margin-top: 0px;
    margin-bottom: 30px;
    font-size: 16px;
}

.center-button-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>