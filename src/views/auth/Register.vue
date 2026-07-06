<template>
  <div class="login-wrapper">
    <el-card class="login-card" shadow="hover">
      <div class="login-header">
        <h2>Create Account</h2>
        <p>Sign up to get started with A&amp;G.</p>
      </div>

      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="0" class="login-form">
        <el-form-item prop="name">
          <el-input v-model="loginForm.name" placeholder="Name" autocomplete="off" :prefix-icon="User" size="large" />
        </el-form-item><br>

        <el-form-item prop="email">
          <el-input v-model="loginForm.email" placeholder="Email" autocomplete="off" :prefix-icon="Message" size="large" />
        </el-form-item><br>

        <el-form-item prop="phone">
          <el-input v-model="loginForm.phone" placeholder="Phone Number" autocomplete="off" :prefix-icon="Phone" size="large" />
        </el-form-item><br>

        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="Username" autocomplete="off" :prefix-icon="User" size="large" />
        </el-form-item><br>

        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            autocomplete="off"
            :prefix-icon="Lock"
            size="large"
          />
        </el-form-item><br>

        <el-form-item>
          <el-button type="primary" class="login-button" @click="submitLogin(loginFormRef)">
            Sign Up
          </el-button>
        </el-form-item>

        <div class="login-links">
          <span>Already have an account?</span>
          <router-link to="/login"> Login</router-link>
        </div>
      </el-form>

      <div class="login-footer">
        <p>Copyright 2026 © <a href="#" target="_blank" rel="noopener noreferrer">A&amp;G Fashion Ltd.</a></p>
        <p>Unauthorized Access is Prohibited.</p>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { User, Lock, Phone, Message } from '@element-plus/icons-vue'

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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f4f6f9;
  padding: 24px 16px 16px;
}

.login-card {
  max-width: 430px;
  width: 100%;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 16px 40px rgba(98, 106, 239, 0.12);
}

.login-header {
  text-align: center;
  margin-bottom: 20px;
}

.login-header h2 {
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
}

.login-header p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
}

.login-form :deep(.el-form-item) {
  margin-bottom: 14px;
}

.login-button {
  width: 100%;
  height: 44px;
  font-size: 15px;
  font-weight: 600;
}

.login-links {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #6b7280;
}

.login-links a {
  color: #409eff;
  text-decoration: none;
  font-weight: 600;
}

.login-footer {
  margin-top: 22px;
  text-align: center;
  color: #6b7280;
  font-size: 12px;
  line-height: 1.5;
}

.login-footer a {
  color: #409eff;
  text-decoration: none;
}

.login-footer p {
  margin: 0;
  padding: 0;
}
</style>
