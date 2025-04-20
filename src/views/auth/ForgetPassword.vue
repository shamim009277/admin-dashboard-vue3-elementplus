<template>
    <div class="login-wrapper">
        <el-card class="login-card" shadow="hover">
            <!-- Logo -->
            <div class="login-logo">
                <img class="circle-image" src="/public/logo/forget.png" alt="Logo" />
            </div>
            <div>
                <h2 class="text-center text-xl font-bold mb-2 flex items-center justify-center gap-2"
                    style="text-align: center;margin-bottom: 3px;">
                    Forgot Password ?
                </h2>
                <p>Enter your registered email ID to reset the password</p>
            </div>

            <!-- Forget Form -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="0" class="login-form">
                <el-form-item prop="email">
                    <el-input v-model="loginForm.email" type="text"
                        placeholder="example@gmail.com" autocomplete="off" :prefix-icon="Message" size="large">
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" class="w-full" @click="submitLogin(loginFormRef)" style="width: 100%;">
                        Send Reset Link
                    </el-button>
                </el-form-item>

                <!-- Links -->
                <div class="login-links">
                    <router-link to="/login"><el-link :icon="Back"> Back to Login</el-link></router-link>
                </div>
            </el-form>
        </el-card>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Message,Back } from '@element-plus/icons-vue'

const loginFormRef = ref(null)
const loginForm = reactive({
    email: '',
})

const rules = {
    email: [{ required: true, message: 'Please input email', trigger: 'blur' }],
}

const submitLogin = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('Send reset link success')
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
.circle-image{
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    border: 1px solid #e59797;
    border-radius: 50%;
    padding: 2px;
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