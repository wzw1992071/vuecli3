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
              name:"订单首页",
              childs:[
                {index:"1-1",  name:"首页",path:"/index"},
                {index:"1-2",  name:"冻参谋导入",path:"/addOrder"},
                {index:"1-3",  name:"测试",path:"/test"},
              ]
          }
               
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
