<template>
  <div class="login-wrapper">
    <div class="cont">
      <div class="form sign-in">
        <h2>Welcome back!</h2>
        <el-form :model="login" ref="loginForm" @submit.prevent>
          <el-form-item prop="email">
            <label>
              <span>Email</span>
              <input type="email" v-model="login.email" />
            </label>
          </el-form-item>
          <el-form-item prop="password">
            <label>
              <span>Password</span>
              <input type="password" v-model="login.password" />
            </label>
          </el-form-item>
          <p class="forgot-pass">Forgot password?</p>
          <button type="submit" class="submit" @click="handleLogin">Sign In</button>
          <button type="button" class="fb-btn" disabled>
            Connect with
            <span>facebook</span>
          </button>
        </el-form>
      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div class="img__text m--in">
            <h2>One of us?</h2>
            <p>If you already has an account, just sign in. We've missed you!</p>
          </div>
          <div class="img__btn">
            <span class="m--up">Sign In</span>
            <span class="m--in">Register</span>
          </div>
        </div>
        <div class="form sign-up">
          <h2>Time to feel like home</h2>
          <el-form :model="register" ref="registerForm" @submit.prevent>
            <el-form-item prop="email">
              <label>
                <span>Name</span>
                <input type="text" v-model="register.userName" />
              </label>
            </el-form-item>
            <el-form-item prop="password">
              <label>
                <span>Email</span>
                <input type="email" v-model="register.email" />
              </label>
            </el-form-item>
            <el-form-item prop="password">
              <label>
                <span>Password</span>
                <input type="password" v-model="register.password" />
              </label>
            </el-form-item>
            <button type="submit" class="submit" @click="handleRegister">Register</button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
export default defineComponent({
  setup() {
    const login = reactive({
      userName: '',
      email: '',
      password: '',
      isRemember: false
    })
    const register = reactive({
      userName: '',
      email: '',
      password: '',
      rePassword: ''
    })
    const loginRef = ref<FormInstance>()
    const registerRef = ref<FormInstance>()

    const rules = reactive<FormRules>({
      userName: [{ required: true, message: 'Please input userName', trigger: 'blur' }],
      email: [{ required: true, message: 'Please input email', trigger: 'blur' }],
      password: [{ required: true, message: 'Please input password', trigger: 'blur' }]
    })

    onMounted(() => {
      // 添加 动画效果
      const el = document.querySelector('.img__btn') as HTMLElement
      el.addEventListener('click', function () {
        const cont = document.querySelector('.cont') as HTMLElement
        cont.classList.toggle('s--signup')
      })
    })
    const handleLogin = () => {}
    const handleRegister = () => {}
    return {
      login,
      register,
      handleLogin,
      handleRegister,
      loginRef,
      registerRef,
      rules
    }
  }
})
</script>
<style lang="scss" scoped>
@import './login.scss';
</style>
