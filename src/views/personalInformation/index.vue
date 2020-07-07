<template>
  <div class="personalInfo w-auto" style="hegiht:100%">
    <div class="flex">
      <div class="left" style="width:300px;height:100%"></div>
      <div class="right d-lg-flex align-items-center">
        <div class="firht-content d-flex flex-column">
          <span>
            <i class="el-icon-s-custom"></i>
            {{user.name}}
          </span>
          <span>
            <i class="el-icon-setting"></i>
            {{user.identity}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'personalInfo',
  computed:{
    ...mapGetters(['user'])
  }
}
</script>

<style>

</style>