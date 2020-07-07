<template>
  <div class="dialog-container">
     <el-dialog
    v-dialogDrag
    V-dialogDragWidth
    close-on-click-modal
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <slot name="dialog"></slot>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="showDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props:{
    dialogTitle:{
      type:String
    }
  },
  data() {
    return {
      dialogVisible:false
    }
  },
  methods:{
    showDialog() {
      this.dialogVisible = true;
    }
  }
}
</script>

<style>

</style>