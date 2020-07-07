<template>
  <div class="header-container">
    <div class="header-left">
      <div class="colse-btn" @click="handelColse">
        <span v-if="closed"><i class="el-icon-s-fold"></i></span>
        <span v-else><i class="el-icon-s-unfold"></i></span>
      </div>
      <div class="logo">资金管理系统</div>
    </div>
    <div class="header-right">
      <div class="fullScreen-btn" @click="changeFullScreen">
        <el-tooltip :content="isFullScreen? '取消全屏' : '全屏'">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
  name:'headerContainer',
  data() {
    return {
      closed:false,//切换图标
      collapse:false,//菜单折叠，默认为展开
      isFullScreen:false,//是否全屏，默认不是全屏
    }
  },
  methods:{
    // 菜单折叠
    handelColse() {
      this.collapse = !this.collapse;
      bus.$emit('collapse',this.collapse);
    },
    changeFullScreen() {
      let element = document.documentElement;
      if(this.isFullScreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
      }else {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
        }
      }
      this.isFullScreen = !this.isFullScreen;
    },
  }
}

</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding:0 20px;
  box-sizing: border-box;
  .header-left {
    display: flex;
    height: 100%;
    align-items: center;
    .close-btn {
      padding:0 20px;
    }
    .close-btn i {
      font-size: 25px;
    }
    .logo {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .header-right {
    height: 100%;
    line-height: 60px;
    .fullScreen-btn i {
      font-size: 25px;
    }
  }
}
</style>