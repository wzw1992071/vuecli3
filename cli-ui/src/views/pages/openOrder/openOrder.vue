// 开单页面

//请求的话可以直接用this.$axios发请求，我都是封装过的，和axios文档上的一样，或者在src/http/http.js里面写，调用直接用this.$http.方法名就可以调用
<template>
    <div>
         <div class="header">开单</div>
    </div>
</template>

<script>
export default {
    name:"OpenOrder",
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
    .mainBox{
        padding: 5px
    }
    .header{
        font-size: 24px;
        font-weight: bolder;
    }
</style>
