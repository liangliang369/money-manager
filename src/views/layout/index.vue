<template>
  <div class="layout">
    <el-container style="position:absolute;top:0;bottom:0;left:0;right:0;">
      <el-header class="d-flex theme_bg">
        <div class="logo mr-auto w-25"></div>
        <div class="avatar-box d-flex align-items-center">
          <el-avatar size="medium" :src="user.avatar"></el-avatar>
          <span class="username text-info ml-1">欢迎：{{user.name}}</span>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-caret-bottom text-white"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出</el-dropdown-item>
              <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="theme_bg">
          <el-menu class="theme_bg"
            default-active="/dashboard"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-menu-item index="/dashboard">
              <i class="el-icon-setting"></i>
              <span slot="title">首页</span>
            </el-menu-item>
             <el-menu-item index="/moneyManagement">
              <i class="el-icon-setting"></i>
              <span slot="title">资金管理</span>
            </el-menu-item>
            <el-menu-item index="/infoManagement">
              <i class="el-icon-setting"></i>
              <span slot="title">信息管理</span>
            </el-menu-item>
             <el-menu-item index="/moneyDistribution">
              <i class="el-icon-setting"></i>
              <span slot="title">资金流水</span>
            </el-menu-item>
            <el-menu-item index="/personalInformation">
              <i class="el-icon-setting"></i>
              <span slot="title">个人设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { removeToken } from "../../utils/auch.js";
export default {
  name: "layout",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isAuthenticated", "user"])
  },
  created() {
    console.log("user22", this.user);
  },
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        removeToken("userToken");
        this.$store.dispatch('clearUserInfo')
         this.$router.push("/login");
      } else {
        this.$router.push("/");
      }
    }
  },

};
</script>

<style>
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.logo {
  height: 100%;
}
.el-aside {
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>