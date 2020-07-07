<template>
  <div class="register">
    <div class="register-container">
      <div class="register-title">资金管理系统</div>
      <el-form
        :model="registerForm"
        ref="registerForm"
        :rules="registerFormRules"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input type="password"  v-model="registerForm.password2" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item label="身份选择">
          <el-select v-model="registerForm.identity" placeholder="请选择">
            <el-option
              v-for="(item,index) in identities"
              :key="index"
              :label="item.propName"
              :value="item.propCode">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitRegisterForm('registerForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Register } from "../../api/login";
export default {
  name: "register",
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value !== this.registerForm.password2) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    // 确认密码校验
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        name: "",
        email: "",
        password: "",
        password2: "",
        identity: ""
      },
      identities:[
        {propName:'管理员',propCode:'manager'},
        {propName:'员工',propCode:'employee'}
      ],
      registerFormRules: {
        name: [
          { required: true, message: "用户名不能为空", tigger: "blur" },
          { min: 3, message: "用户名长度最少三个字符", tigger: "bulr" }
        ],
        email:[
          {validator:validateEmail,tigger:'blur'},
        ],
        password: [
          { validator:validatePass, tigger: "bulr" },
          {
            min: 6,
            max: 16,
            message: "密码长度应为6到16个字符之间",
            tigger: "blur"
          }
        ],
        password2: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitRegisterForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Register(this.registerForm).then(res => {
            if (res.status == "200") {
              this.$message({
                showClose: true,
                type: "success",
                message: "注册成功"
              });
              this.$router.push("/login");
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  // filter: blur(4px);
  background: url("../../assets/images/bg.jpg") no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
}
.register-container {
  width: 400px;
  padding: 15px;
  margin: 150px auto 0;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  .register-title {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
  }
}
.go-register {
  line-height: 35px;
  text-align: right;
  margin-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.9);
}
.el-button {
  width: 100%;
}
</style>
