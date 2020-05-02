<template>
  <div class='heroes'>
      <router-link to="/heroes/add" class="btn btn-primary">添加英雄</router-link>
    <hr />
    <table class="table table-hover" ref="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>英雄名称</th>
          <th>英雄性别</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.time}}</td>
          <td>
            <router-link class="primary" :to="'/edit/'+item.id">编辑</router-link>
            <button @click="del(item.id)" class="btn btn-danger">删除</button>
          </td>
        </tr>
        <tr v-if="list.length===0">
          <td colspan="5">暂无数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'heroes',
    created () {
      //获取英雄列表数据
      this.getlist()
    },
    data() {
      return {
        list: []
      }
    },
    methods: {
      async getlist () {
        const res = await this.$http({
          method: 'get',
          url: 'heroes'
        })
        this.list = res.data
      },
      // 删除英雄
      del (id) {
        if(confirm('是否删除英雄')) {
          this.$http.delete(`heroes${id}`).then(
            () => {
              this.getlist()
            }
          ).catch(
            (e) => {
              console.log('删除失败');
              
            }
          )
        }
      }
    }
}
</script>

<style scoped lang='less'></style>