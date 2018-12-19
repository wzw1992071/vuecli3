// 实时分配
<template>
    <div class="mainBox">
        <div id="mapBox"></div>
        <div class="sideBox">
            <div class="flex sideHead">
                <el-button  type="primary" size="mini">重置</el-button>
                <el-button type="primary" size="mini">保存</el-button>
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"RealDispatch",
    data(){
        return{
            // 地图对象
            map:{},
            // 画多边形工具
            mouseTool:{},
            // 当前地图显示的司机列表
            diverListReal:[],
            page:1,
            // 选中的司机
            activeDiver:"",
            // 是否处于编辑状态
            showEditor:false,
            
        }
    },
    computed(){
        // initDiverList:{

        // }
    },
    methods:{
        initMap(){
            this.map = new AMap.Map('mapBox',{
                zoom:12,//级别
                center: this.defaultXY,//中心点坐标
                resizeEnable: true
            });
            this.map.setDefaultCursor("pointer");
            // 添加比例尺
            this.map.addControl(new AMap.Scale({ visible: true}))
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
        width: 16%;
        background-color: #fff;
        height: 600px;
        z-index: 100;
        left: 20px;
        top:40px;
        padding: 5px;
        .sideHead{
            padding: 5px;
            justify-content: flex-end;
            border-bottom: 1px solid #ccc;
        }
    }
}
</style>