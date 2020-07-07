<template>
 <div class="login">
    <div class="login-container">
    <div class="login-title">资金管理系统</div>
    <el-form :model="loginForm" ref="loginForm" :rules="loginFormRules">
      <el-form-item  prop="email">
        <el-input v-model="loginForm.email">
          <i slot="prefix" class="fa fa-user-o" aria-hidden="true"></i>
        </el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off" show-password>
          <i slot="prefix" class="fa fa-unlock-alt" aria-hidden="true"></i>
        </el-input>
      </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="submitLoginForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
    <!-- 没有账户，去注册 -->
    <div class="go-register">
      <div class="go-register-info">
        没有账户？
        <a href="javascript:;" @click="$router.push('/register')">去注册</a>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
import { Login } from '../../api/login'
import { setToken } from '../../utils/auch'
export default {
  name:'login',
  data() {
      var validateEmail = (rule,value,callback) => {
          let emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(value == '') {
              callback(new Error('邮箱不能为空'));
          }else if(!emailReg.test(value)) {
              callback(new Error('邮箱格式不正确'));
          }else {
              callback()
          }
      };
    return {
      loginForm:{
        email:'',
        password:''
      },
      loginFormRules:{
        email:[{validator:validateEmail,tigger:'blur'},],
        password:[
          {required:true,message:'密码不能为空',tigger:'bulr'},
          {min:6,max:16,message:'密码长度应为6到16个字符之间',tigger:'blur'}
        ]
      }
    }
  },
  methods:{
    submitLoginForm(formName) {
      console.log('formName',formName)
      this.$refs[formName].validate((valid) => {
        if(valid) {
          Login(this.loginForm)
          .then(res=> {
            if(res.status == '200') {
              this.$message({
                showClose: true,
                type:'success',
                message:'登录成功'
              });
              const { token } = res.data;
              setToken('userToken',token);
              const USER = jwtDecode(token);
              console.log('USER',USER)
              console.log('2222',!this.isEmpty(USER))
              this.$store.dispatch('setIsAuthenticated',!this.isEmpty(USER))
              this.$store.dispatch('setUser',USER)
              this.$router.push('/dashboard');
            }
          })
        }
      })
    },
    // 判断是否授权 
    isEmpty(value) {
      return (
       value === undefined ||
       value === null || 
       (typeof value === 'object' && Object.keys(value).length===0) ||
       (typeof value === 'string' && value.trim().length===0)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  // filter: blur(4px);
  background: url('../../assets/images/bg.jpg') no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
}
.login-container {
  width: 300px;
  padding:15px;
  margin:200px auto 0;
  background-color: rgba(255,255,255,.6);
  box-shadow: 5px 5px 5px rgba(0,0,0,.6);
  border-radius: 10px;
  .login-title {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom:20px;
  }
}
.go-register {
  line-height: 35px;
  text-align: right;
  margin-top:10px;
  border-top:1px solid rgba(255,255,255,.9);
}
.el-button {
  width: 100%;
}
</style>