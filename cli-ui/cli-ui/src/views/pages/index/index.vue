<template>
    <div>
        <el-button type="primary">主要按钮2</el-button>
    </div>
</template>

<script>
export default {
    name:"Index",
    data(){
        return{
            
        }
    },
    methods:{
        getData(){
            this.$http.getShopTypeLists().then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        this.getData()
    },
    beforeCreate () {
        // console.log(1)
        // 如果为本地，模拟登陆获取token
        if(window.location.hostname=="localhost"){
        this.$axios.post("/user/login/test",{
        
        })
        .then(function(){
            console.log("登陆成功")})
        .catch(function(){
            console.log("登陆失败，请重新登陆")
        })
    
    }  
  },
}
</script>

<style lang="less" scoped>

</style>
