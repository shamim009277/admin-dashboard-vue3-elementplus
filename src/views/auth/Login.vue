<template>
  <div class="login-wrapper">
    <el-card class="login-card" shadow="hover">
      <h2 class="text-center text-xl font-bold mb-2 flex items-center justify-center gap-2" style="text-align: center;margin-bottom: 5px;">
        Admin Login
      </h2>

      <!-- Logo -->
      <div class="login-logo">
        <img src="/public/logo/1.png" alt="Logo" />
      </div>

      <!-- Login Form -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="0" class="login-form">
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
            Login
          </el-button>
        </el-form-item>

        <!-- Links -->
        <div class="login-links">
          <router-link to="/forgot-password">Forgot Password ?</router-link>
          <span> | </span>
          <span>Don't have an account yet ? </span><router-link to="/register">Sign Up</router-link>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Search, User, Lock } from '@element-plus/icons-vue'

const loginFormRef = ref(null)
const showPassword = ref(false)

const loginForm = reactive({
  username: '',
  password: ''
})

const rules = {
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
