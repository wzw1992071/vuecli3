// 发货人
<template>
    <div class="mainBox">

        
        
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
export default {
    name:"Consignor",
    data() {
        return {
            // 搜索类型
            serachType:"shop_name",
             // 搜索关键词
            keyWord:"",
             // 店铺类型
            shopType:"",
            page:"1",
            // 表格数据
            tableData:[],
            dataTotal:20,//总数
            // 下拉框数据
            selectData:{
                serachTypeList:[
                    {label:"店铺名",value:"shop_name" },
                    {label:"姓名",value:"name"}, 
                    {label:"电话号",value:"phone"} 
                ]
            },
            // 修改弹窗是否显示
            dialogVisible1:false,
            // 修改用户信息
            editUserInfo:{}
        }
    },
    computed: {
        ...mapGetters(["customerData"]),
        // 获取数据请求参数组装
        getListParam(){
            let data ={size:50};
            if(this.keyWord){
                data[this.serachType]=this.keyWord;
            }
            if(this.shopType){
                data.type=this.shopType;
            }
            data.page=this.page;
            return data
        }
    },
    methods: {
        ...mapActions(["getCustomerData"]),
        // 获取列表数据
        getListData(){
             this.$http.getCustomerShipperList(this.getListParam).then(res=>{
                 console.log(res)
             })
            // this.$http.getCustomerShipperList(this.getListParam).then(res=>{
            //     console.log(res)
            // })
        },
        pageChange(){

        },
        // 提交修改
        editUser(){

        },

    },
    created(){
        this.getCustomerData()
        this.getListData()
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
    .searchArea{
        margin: 10px 0;
       .searchInput{
       
           width: 300px;
           margin-right: 10px;
       }
        
    }
    .fileter{
        &>div{
            line-height: 40px;
            margin-right: 10px;
        }
    }
    .tableArea{
        margin-top: 10px;
        text-align: center
    }
</style>


