<template>
    <div>
        <div id="mapBox" class="mapBox">

        </div>
        <div @click="addweilan">
            画多边形
        </div>
        <div @click="closeTool">
            结束
        </div>
        <div @click="closeEdit" v-if="showEditor">
            结束编辑
        </div>
        <div class="info">
             <el-input v-model="porsonInfo.name" ></el-input>
            <el-input v-model="porsonInfo.id"></el-input>
        </div>
       
    </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name:"Index",
    data(){
        return{
            porsonInfo:{
                name:"",
                id:""
            },
            map:{},
            mouseTool:{},
            diverList:[],
            PolygonArr:[],
            showEditor:false,
            polyEditor:{}
        }
    },
    computed:{
        ...mapGetters["defaultXY"]
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
        // 划线
        addweilan(){
            // this.map.plugin(["AMap.PolyEditor"],()=>{
            //     polygonEditor = new AMap.PolyEditor(this.map,polygon); 
            //     polygonEditor.open(); 
            // });  
            this.mouseTool = new AMap.MouseTool(this.map);   
            var overlays = [];
            this.mouseTool.on(this.mouseTool.polygon({
              strokeColor:'#80d8ff'
            })) 
            // 画完后记录点，并保存
            AMap.event.addListener(this.mouseTool, 'draw', (type,obj)=> {
                var polygonItem = type.obj;
                var path = polygonItem.getPath();//取得绘制的多边形的每一个点坐标
                let listArr = []
                path.forEach((item,index) => {
                    listArr.push([
                        item.lng,item.lat
                    ])
                });
                this.diverList.push({
                    name:this.porsonInfo.name,
                    id:this.porsonInfo.id,
                    polygonArr:listArr

                })
               
                localStorage.setItem('diverList', JSON.stringify(this.diverList));
                this.mouseTool.close()
            });
            
        },
        closeTool(){
            
        },
        getPolygon(){
            // console.log(localStorage.getItem('diverList'))
            this.diverList = localStorage.getItem('diverList')?JSON.parse(localStorage.getItem('diverList')):[]
            // console.log(this.diverList[0].polygonArr)
            //  new AMap.Polygon({
            //     map: this.map,
            //     path: [[103.966515, 30.705523],[104.031746,30.712312],[103.989861,30.665073],[103.967888,30.678066]],//设置多边形边界路径
            //     strokeColor: "#FF33FF", //线颜色
            //     strokeOpacity: 0.2, //线透明度
            //     strokeWeight: 3,    //线宽
            //     fillColor: "#1791fc", //填充色
            //     fillOpacity: 0.35//填充透明度
            // });
            JSON.parse(JSON.stringify(this.diverList)).forEach((item,index)=>{
                let polygonObj = {
                        name:item.name,
                        id:item.id,
                        Polygon:new AMap.Polygon({
                            map: this.map,
                            path: item.polygonArr,//设置多边形边界路径
                            strokeColor: "#FF33FF", //线颜色
                            strokeOpacity: 0.2, //线透明度
                            strokeWeight: 3,    //线宽
                            fillColor: "#1791fc", //填充色
                            fillOpacity: 0.35//填充透明度
                        })
                    }
                this.PolygonArr.push(polygonObj)
                polygonObj.Polygon.on('click',e=>{
                    this.showEditor=true;
                    this.polyEditor=new AMap.PolyEditor(this.map, polygonObj.Polygon)
                    this.polyEditor.open();
                    this.polyEditor.on('end', (event)=>{
                        console.log(event)
                        console.log(polygonObj)
                        // polygonObj
                    })
                });
                
                
                
            })
            
        },
        closeEdit(){
            this.polyEditor.close(); 
            this.showEditor=false
        }
        
    },
    mounted(){
        this.initMap()
        this.getPolygon()
    },
    beforeCreate () {
      
    
    }  
  
}
</script>

<style lang="less" scoped>
    #mapBox{
        width: 800px;
        height: 600px;
        
    }
    .info{
            width: 200px;
        }
</style>
