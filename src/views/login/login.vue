<template>
  <div class="rel-container">
    <div class="rel-box-body">
      <el-form :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
               class="rel-form">
        <h3 class="title">用户登录</h3>
        <el-form-item prop="username">
          <el-input name="user"
                    type="text"
                    v-model="loginForm.username"
                    placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="btnPrimary"
                     style="width:100%;"
                     :loading="loading"
                     @click.native.prevent="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'change', message: '用户名不能为空!' }],
        password: [{ required: true, trigger: 'change', message: '密码不能为空!' }]
      },
      loading: false
    }
  },
  methods: {
    handleLogin () {
      // 检测IE浏览器
      if (window.ActiveXObject || 'ActiveXObject' in window) {
        this.$alert('为了您更好的用户体验，本平台推荐您使用谷歌或者火狐浏览器！', '提示', {
          confirmButtonText: '确定'
        })
        return false
      }
      // 登录验证
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('login', this.loginForm).then(res => {
            if (res === 1) {
              this.$router.push({path: '/home'})
            } else {
              this.$message.error('账号或者密码错误')
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.rel-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  .rel-box-body {
    width: 400px;
    margin: 30px auto 0;
    background: #fff;
    padding-bottom: 40px;
    .rel-form {
      width: 280px;
      margin: 0 auto;
      .title {
        color: #1e88e5;
        font-size: 18px;
        padding: 17px 0;
        font-weight: 600;
        line-height: 50px;
        text-align: center;
      }
      .el-form-item__content {
        position: relative;
        .el-input__inner {
          height: 42px;
        }
        .capttxt {
          width: 182px;
        }
        .captcha-img-wrap {
          position: absolute;
          top: 0;
          right: 0;
          width: 90px;
          height: 42px;
          img {
            width: 90px;
            height: 42px;
          }
        }
        .el-form-item__error {
          padding: 14px 10px;
          background: #fff;
          box-shadow: 0 0 6px #e4e4e4;
          font-size: 12px;
          border-radius: 5px;
          line-height: 1;
          white-space: nowrap;
          color: black;
          position: absolute;
          left: 105%;
          z-index: 999;
          &:after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
          }
          &:after {
            right: 99%;
            border-right: 10px solid #fff;
          }
          &:before {
            right: 100%;
            border-top: 5px solid transparent;
          }
        }
        .el-form-item__error {
          color: #f6706d;
          top: 0;
          left: 105%;
          display: block;
        }
      }
    }
  }
}
</style>
