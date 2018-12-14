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
    </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name:"Index",
    data(){
        return{
            map:{},
            mouseTool:{}
        }
    },
    computed:{
        ...mapGetters["defaultXY"]
    },
    methods:{
        initMap(){
            this.$nextTick(()=>{
                this.map = new AMap.Map('mapBox',{
                    zoom:12,//级别
                    center: this.defaultXY,//中心点坐标
                });
                this.map.setDefaultCursor("pointer");
                // 添加比例尺
                this.map.addControl(new AMap.Scale({ visible: true}))
            })
        },
        
        addweilan(){
            // this.map.plugin(["AMap.PolyEditor"],()=>{
            //     polygonEditor = new AMap.PolyEditor(this.map,polygon); 
            //     polygonEditor.open(); 
            // });  
            this.mouseTool = new AMap.MouseTool(this.map);   
            var overlays = [];
            this.mouseTool.on(this.mouseTool.polygon({
              strokeColor:'#80d8ff'
            }),(e)=>{
                overlays.push(e.obj);
                 console.log(e)
            }) 
            
        },
        closeTool(){
            this.mouseTool.close()
        }
    },
    created(){
        this.initMap()

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
</style>
