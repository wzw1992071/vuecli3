<template>
<div>
    <div>3333</div>
     <el-input v-model="shop_name"></el-input>
</div>
    
</template>
<script>
export default {
    name:"Test",
    data(){
        return {
            shop_name:""
        }
    },
    created(){
        console.log(this.$_)
    }
}
</script>