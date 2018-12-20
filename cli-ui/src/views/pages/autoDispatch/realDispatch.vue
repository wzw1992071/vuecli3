// 实时分配
<template>
    <div class="mainBox">
        <div id="mapBox"></div>
        <div class="sideBox">
            <div class="flex sideHead">
                <el-button  type="primary" size="mini">重置</el-button>
                <el-button type="primary" size="mini">保存</el-button>
            </div>
            <div class="driverList">
                <ul>
                    <li v-for="(item,index) in diverListReal" :key="index" :class="{active:activeDiver===index}" @click="activeDiver=index">
                        <div>
                            <span class="carNum">{{item.carNum}}号车</span>
                            <span>{{item.name}}</span>
                        </div>
                        <div>
                            <span>预分配：{{item.exDispatch.user}}户；{{item.exDispatch.number}}件</span>
                        </div>
                        <div>
                            <span>最终分配：{{item.realDispatch.user}}户；{{item.realDispatch.number}}件</span>
                        </div>
                        <div>
                            <el-button type="primary" size="small" v-if="item.polygonArr.length" plain :disabled="showEditor" @click="editPoly(index)">调整框选范围</el-button>     
                            <el-button type="primary" size="small" v-else  plain :disabled="showEditor">手动框选返回</el-button>
                            <el-button type="primary" size="small"v-if="item.isEdit"  plain @click="closeEditor(index)">结束调整</el-button>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- <div class="loadMore">
                <div v-if="isEnd">我也是有底线的</div>
                <div v-else>加载更多</div>
            </div> -->
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
            diverListReal:[
                {

                    id:123,
                    carNum:1,
                    name:"小猪佩奇",
                    exDispatch:{
                        number:40,
                        user:20
                    },
                    realDispatch:{
                        number:40,
                        user:20
                    },
                    polygonArr: [[104.087364, 30.720576], [104.162209, 30.673932], [104.140408, 30.614118], [104.057495, 30.626379]],
                    isEdit:false
                },
                {

                    id:222,
                    carNum:2,
                    name:"小猪佩奇2",
                    exDispatch:{
                        number:40,
                        user:20
                    },
                    realDispatch:{
                        number:40,
                        user:20
                    },
                    polygonArr: [],
                    isEdit:false
                    
                }
            ],
            // 图形列表
            PolygonList:[],
            
            // 选中的司机
            activeDiver:"",
            // 是否处于编辑状态
            showEditor:false,
            // 图形编辑对象
            polyEditor:{}
            
        }
    },
    watch: {
        activeDiver(val,oldVal){
            console.log(val&&(!this.$_.isEmpty(this.PolygonList[val])))
            // if(val&&(!this.$_.isEmpty(this.PolygonList[val]))){
            //     this.PolygonList[val].setOptions({strokeColor:"#f00"})
            // }
            
            // if(oldVal&&(!this.$_.isEmpty(this.PolygonList[oldVal]))){
            //     this.PolygonList[oldVal].setOptions({strokeColor:"#80d8ff"})
            // }
        }
    },
    computed:{
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
        },
        // 画出初始图
        initPolygon(){
            this.$_.cloneDeep(this.diverListReal).forEach((item,i) => {
                
                let polygonObj=(item.polygonArr.length==0)?{}: new AMap.Polygon({
                    map: this.map,
                    path: item.polygonArr,//设置多边形边界路径
                    strokeColor: "#80d8ff", //线颜色
                    strokeOpacity: 0.2, //线透明度
                    strokeWeight: 3,    //线宽
                    fillColor: "#1791fc", //填充色
                    fillOpacity: 0.35//填充透明度
                })
                this.PolygonList.push(polygonObj)
                // console.log(this.$_.isEmpty(polygonObj))
                if(!this.$_.isEmpty(polygonObj)){
                     polygonObj.on('click',e=>{
                        this.activeDiver = this.$_.findIndex(this.PolygonList,polygonObj)
                    })
                }
               
            });
        },
        // 调整范围
        editPoly(index){
            // console.log(this.PolygonList[index])
            this.polyEditor=new AMap.PolyEditor(this.map, this.PolygonList[index])
            this.polyEditor.open();
            this.showEditor=true;
            this.diverListReal[index].isEdit=true
            this.polyEditor.on('end', (event)=>{
                let listArr = []
                event.target.C.path.forEach((item,index) => {
                    listArr.push([
                        item.lng,item.lat
                    ])
                });
                this.diverListReal[index].polygonArr=listArr;
            })
        },
        // 关闭调整
        closeEditor(index){
            this.polyEditor.close();
            this.showEditor=false;
            this.diverListReal[index].isEdit=false
        }

    },
    mounted(){
        this.initMap()
        this.initPolygon()
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
        .driverList{
            min-height: 50px;
            padding: 5px 2px;
            li{
                height: 140px;
                background: #f6f6f6;
                // border-bottom: 1px solid #ccc;
                margin-bottom: 5px;
                &.active{
                    background: #ccc
                }
                &>div{
                    padding: 6px 5px;
                   
                    span{
                        font-size: 14px;
                        color: #111;
                        font-weight: bolder;
                        &.carNum{
                            margin-right: 10px;
                        }
                    }
                }
                
            }
            
            
        }
        .loadMore{
            cursor: pointer;
            color: #aaa;
            text-align: center
        }
    }
}
</style>