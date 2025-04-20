<template>
    <div class="login-wrapper">
      <el-card class="login-card" shadow="hover">
        <h2 class="text-center text-xl font-bold mb-4 flex items-center justify-center gap-2" style="text-align: center;margin-bottom: 50px;">
          Registration
        </h2>
  
        <!-- Logo -->
        <!-- <div class="login-logo">
          <img src="/public/logo/1.png" alt="Logo" />
        </div> -->
  
        <!-- Login Form -->
        <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="0" class="login-form">
          <el-form-item prop="name">
            <el-input v-model="loginForm.name" placeholder="Name" autocomplete="off" :prefix-icon="User" size="large"></el-input>
          </el-form-item>

          <el-form-item prop="email">
            <el-input v-model="loginForm.email" placeholder="Email" autocomplete="off" :prefix-icon="Message" size="large"></el-input>
          </el-form-item>

          <el-form-item prop="phone">
            <el-input v-model="loginForm.phone" placeholder="Phone Number" autocomplete="off" :prefix-icon="Phone" size="large"></el-input>
          </el-form-item>

          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="Username" autocomplete="off" :prefix-icon="User" size="large"></el-input>
          </el-form-item>
  
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" :type="showPassword ? 'text' : 'password'" placeholder="Password"
              autocomplete="off" :prefix-icon="Lock" size="large">
            </el-input>
          </el-form-item>
  
          <el-form-item>
            <el-button type="primary" class="w-full" @click="submitLogin(loginFormRef)" style="width: 100%;">
              Sign Up
            </el-button>
          </el-form-item>
  
          <!-- Links -->
          <div class="login-links">
            <span>Already have an account ? </span><router-link to="/login">Login</router-link>
          </div>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import { Search, User, Lock, Phone, Message } from '@element-plus/icons-vue'
  
  const loginFormRef = ref(null)
  const showPassword = ref(false)
  
  const loginForm = reactive({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
  })
  
  const rules = {
    name: [{ required: true, message: 'Please input name', trigger: 'blur' }],
    email: [{ required: true, message: 'Please input email', trigger: 'blur' }],
    phone: [{ required: true, message: 'Please input phone number', trigger: 'blur' }],
    username: [{ required: true, message: 'Please input username', trigger: 'blur' }],
    password: [{ required: true, message: 'Please input password', trigger: 'blur' }]
  }
  
  const togglePassword = () => {
    showPassword.value = !showPassword.value
  }
  
  const submitLogin = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('Login success')
      } else {
        console.log('Validation failed')
      }
    })
  }
  </script>
  
  <style scoped>
  .login-wrapper {
    min-height: 97vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f4f6f9;
  }
  
  .login-card {
    max-width: 400px;
    width: 100%;
    padding: 30px;
    border-radius: 12px;
  }
  
  .login-logo {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .login-logo img {
    width: 100px;
    height: auto;
  }
  
  .login-links {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
  }
  
  .login-links a {
    color: #409eff;
    text-decoration: none;
  }
  </style>
  