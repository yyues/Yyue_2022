<template>
  <div class="login-wrapper">
    <a-form :rules="rules" class="login" :model="LoginData">
      <a-form-item name="username" label="账号">
        <a-input v-model:value="LoginData.username" />
      </a-form-item>
      <a-form-item name="password" label="密码">
        <a-input
          type="password"
          v-model:value="LoginData.password"
          autocomplete
        />
      </a-form-item>
      <a-button @click="handleLogin">登录</a-button>
    </a-form>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const LoginData = reactive({
      username: null,
      password: null,
    });
    const handleLogin = () => {
      // 处理登录函数
    };
    const rules = {
      username: [
        {
          required: true,
          message: "Please input Username",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "Please input password",
          trigger: "blur",
        },
      ],
    };
    return {
      LoginData,
      rules,
      handleLogin,
    };
  },
};
</script>

<style scoped>
@import "./index.css";
</style>
