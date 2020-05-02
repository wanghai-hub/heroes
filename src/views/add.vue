<template>
  <div class='add'>
      <form @submit.prevent="submit">
        <legend>添加英雄</legend>
        <div class="form-group">
        <label>英雄名称</label>
        <input v-model="herolist.name" type="text" class="form-control" />
        </div>
        <div class="form-group">
        <label>英雄性别</label>
        <div>
            <input v-model="herolist.gender" type="radio" name="ok" value="男"/> 男
            <input v-model="herolist.gender" type="radio" name="ok" value="女"/> 女
        </div>
        </div>
        <button type="submit" class="btn btn-primary">提交</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'add',
    data() {
        return {
          herolist: {
            name: '',
            gender: '男'
          }
        }
    },
    methods: {
      // 提交编辑的新英雄信息
      submit () {
        this.$http.post('heroes',{
          ...this.herolist, time: new Date()
        }).then((res) => {
          // 成功,跳转列表
          this.$router.push('/heroes')
        }).catch((e) =>{console.log('修改失败');
        })
      }
    },
}
</script>

<style scoped lang='less'></style>