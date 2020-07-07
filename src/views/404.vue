<template>
  <div class="not-findPage">
    <div class="go-back">
      <p>
        <i class="fa fa-frown-o" aria-hidden="true"></i>
        亲。。。没有找打你想要的页面
      </p>
      <p>
        <a href="javascript:;" @click="$router.go(-1)">返回上一页</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "404"
};
</script>

<style lang="scss" scoped>
.not-findPage {
  width: 100%;
  height: 100%;
  background: url("../assets/images/404.gif") no-repeat center center;
  background-size: 100% 100%;
  .go-back {
    width: 300px;
    position: absolute;
    top:100px;
    right: 100px;
    p {
      line-height: 35px;
      margin-top:15px;
    }
  }
}
</style>
