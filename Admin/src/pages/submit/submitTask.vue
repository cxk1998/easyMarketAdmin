<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="任务名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="任务类型">
        <el-select v-model="form.region" placeholder="please select your task type">
          <el-option label="训练任务" value="shanghai" />
          <el-option label="推导任务" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="学习率">
        <el-input v-model="form.lr" />
      </el-form-item>
      <el-form-item label="训练轮次">
        <el-input v-model="form.epoch" />
      </el-form-item>
      <el-form-item label="资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="CPU" />
          <el-radio label="GPU" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="额外参数">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>