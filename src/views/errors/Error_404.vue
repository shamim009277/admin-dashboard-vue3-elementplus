<template>
    <div class="error-wrapper">
      <el-card class="error-card" shadow="hover">
        <!-- Error Icon/Image -->
        <div class="error-logo">
          <img class="circle-image" src="/public/logo/404.png" alt="Error 404" />
        </div>
  
        <!-- Error Message -->
        <div class="card-content">
          <h2 class="text-center text-xl font-bold mb-2 flex items-center justify-center gap-2">
            404 - Page Not Found
          </h2>
          <p class="text-center text-gray-600">
            The page you’re looking for doesn’t exist or has been moved. Please check the URL or return to the homepage.
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
  
  .circle-image {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    border: 1px solid #e59797;
    border-radius: 50%;
    padding: 2px;
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
  }
  
  .card-content p{
    color: #666;
    margin-top: 0px;
    margin-bottom: 30px;
    font-size: 16px;
  }
  .center-button-form{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  </style>
  