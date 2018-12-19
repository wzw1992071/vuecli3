// 预分配
<template>
    <div class="mainBox">
        <div id="mapBox"></div>
        <div class="sideBox"></div>
    </div>
</template>

<script>
export default {
    name:"ExceptDispatch",
    data(){
        return{

        }
    },
    methods:{
        initMap(){

        }
    },
    mounted(){
        this.initMap()
    }
}
</script>

<style lang="less" scoped>
.mainBox{
    position: relative;
    #mapBox{
        height: 100%;
    }
    .sideBox{
        position: absolute;
        width: 20%;
        background-color: #fff;
        height: 200px;
        z-index: 100;
        
    }
}
</style>


