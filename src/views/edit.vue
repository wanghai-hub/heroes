<template>
  <div class='edit'>
      <form @submit.prevent="update()">
            <legend>编辑英雄</legend>
            <div class="form-group">
            <label>英雄名称</label>
            <input v-model="hlist.name" type="text" class="form-control" />
            </div>
            <div class="form-group">
            <label>英雄性别</label>
            <div>
                <input v-model="hlist.gender" type="radio" name="gender" value="男" /> 男
                <input v-model="hlist.gender" type="radio" name="gender" value="女" /> 女
            </div>
            </div>
            <button type="submit" class="btn btn-success">修改</button>
        </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "edit",
    data(){
        return {
            hlist: {
                gender: '女',
                name: ''
            }
        }
    },
    created() {
        this.gethero()
    },
    methods: {
        // 强求当前数据信息，展示在列表中
        gethero() {
            const id = this.$route.params.id
            this.$http.get(`heroes/${id}`).then(
                (res) => {
                    this.hlist.name = res.data.name
                    this.hlist.gender = res.data.gender
                }
            )
        },
        update () {
            const id = this.$route.params.id
            this.$http.patch(`heroes${id}`,this.hlist).then(
                () => {
                    this.$router.push('/heroes')
                }
            )
        },
    }
}
</script>

<style scoped lang='less'></style>