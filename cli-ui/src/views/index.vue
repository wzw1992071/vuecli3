<template>
  <div class="box">
    <el-container>
      <el-header>
        <img class="logo" src="../assets/img/logo.png" alt="">
        <h1 class="header">物流系统</h1>
      </el-header>
      <el-container class="fullPage">
        <el-aside width="15%">
          <Nav></Nav>
        </el-aside>
        <el-main class="main-content">
            <div class="headTab">
                <div class="tabItem" v-for="(item,index) in headTabList">
                    <div>{{item.name}}</div>
                    <span class="close el-icon-close"></span>
                </div>
            </div>
            <div>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
         
        </el-main>
      </el-container>
    </el-container>
    
    
  
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import '../assets/mod/LodopFuncs.js'
import Nav from './components/nav.vue'
export default {
  name: 'index',
  components: {
     Nav
  },
  data () {
    return {
    }
  },
  computed:{
    ...mapGetters(["headTabList","currentTab"])
  },
  watch:{
      currentTab(curVal,oldVal){
        let checkNav = this.headTabList.filter(item=>{
           return item.index == curVal
        })
        console.log(checkNav)
        if(checkNav.length>0){
            this.$router.push(checkNav[0].path)
        }
      }
  },
  beforeCreate () {
    // 如果为本地，模拟登陆获取token
    // if(window.location.hostname=="localhost"){
    //    this.$axios.post("/user/login/test",{
    
    //   })
    //   .then(function(){
    //     console.log("登陆成功")})
    //   .catch(function(){
    //       console.log("登陆失败，请重新登陆")
    //   })
  
    // }
  },
  created(){
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .box{
    height: 100%;
  }
    // 头部样式
  .logo{
    position: absolute;
    left: 40px;
    top: 6px ;
  }
  .el-header{
    line-height:50px;
    padding: 0 80px 0;
    background-color: #38B7F6;
    color: #fff;
    height: 50px !important;
  }
  // 页面主体样式
  .el-container{
    height: 100%;
    .main-content{
        background: #F5F7F9;
        padding: 12px;
        .headTab{
            display: flex;
            border-bottom: 1px solid #E7EAED;
            .tabItem{
                border-top-left-radius:5px;
                border-top-right-radius:5px;
                background-color: #E7EAED;
                margin-right: 5px;
                cursor: pointer;
                text-align: center;
                height:36px;
                line-height: 36px;
                position: relative;
                min-width: 60px;
                padding:0px 10px;
                &:hover{
                    background-color: #eee;
                }
                .close{
                    position: absolute;
                    right: -2px;
                    top:-2px;
                    font-size: 12px;
                    color: #fff;
                    background-color: #E81123;
                    padding: 1px;
                    border-radius: 10px; 
                    opacity: 0;
                    &:hover{
                        opacity: 1;
                    }
                }
            }
        }
    }
  }
//   头部页签样式
    
  
</style>