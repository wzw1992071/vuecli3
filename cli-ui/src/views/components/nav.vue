<template>
  <div class="nav" id="nav">
    <el-menu
        class="el-menu-vertical-demo"
        background-color="#232B2D"
        text-color="#fff"
        active-text-color="#fff" 
        @select="addTab"
        
      >
      <!-- active-text-color="#ffd04b" -->
        <el-submenu v-for="(routeList, index) in routeLists" :key="index" :index="routeList.index">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{routeList.name}}</span>
            </template>
            <el-menu-item v-for='(child) in routeList.childs' :index="child.index" :key="child.index">
                <i class="el-icon-document  "></i>
                <span slot="title">{{child.name}}</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  name: 'Nav',
  data () {
    return {
        routeLists: [
          { 
              index:"1",  
              name:"开单",
              childs:[
                {index:"1-1",  name:"开单",path:"/openOrder"},
                {index:"1-2",  name:"运单列表",path:"/orderList"},
                
              ]
          },
          { 
              index:"2",  
              name:"智能分配",
              childs:[
                {index:"2-1",  name:"实时分配",path:"/realDispatch"},
                {index:"2-2",  name:"预分配",path:"/exceptDispatch"},
              ]
          },
          { 
              index:"3",  
              name:"车队管理",
              childs:[
                {index:"3-1",  name:"车队管理",path:"/manageCar"},
               
              ]
          },
          { 
              index:"4",  
              name:"客户管理",
              childs:[
                {index:"4-1",  name:"收货人",path:"/consignee"},
                {index:"4-2",  name:"发货人",path:"/consignor"}
              ]
          },
          { 
              index:"5",  
              name:"区域配置",
              childs:[
                {index:"5-1",  name:"区域配置",path:"/areaSetting"},
               
              ]
          },
          { 
              index:"6",  
              name:"系统配置",
              childs:[
                {index:"6-1",  name:"K单过滤",path:"/Kfilter"},
                {index:"6-4",  name:"包车信息",path:"/charterInfo"},
               
              ]
          },
          { 
              index:"10",  
              name:"测试",
              childs:[
                {index:"10-1",  name:"测试",path:"/test"},
                {index:"10-2",  name:"测试2",path:"/test2"},
              
               
              ]
          },
          
               
        ]
    }
  },
  computed:{
    //   根据路由得到默认选中项
      // defaultCheck(){
      //     let i =this.$route.path=="/"?"/otherImport":this.$route.path
      //     return i
      // }
      
  },
  methods: {
    ...mapActions(["addNewTab"]),
    addTab(index){
      let mainIndex = index.split("-")[0];
      let mainRouter = this.routeLists.filter(item=>{
        return item.index == mainIndex
      })[0]
      let checkNav = mainRouter.childs.filter(item=>{
        return item.index == index
      })[0]
      this.addNewTab(checkNav)
      
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 左侧导航栏
  #nav{
    height: 100%;
    background-color: #313540;
    .el-menu{
        border-right: 0!important;
      }
    .el-submenu{
      .el-menu-item-group__title{
        padding-top: 0px;
      }
    }
  }
  
</style>
