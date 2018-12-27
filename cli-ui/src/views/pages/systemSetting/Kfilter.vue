// 包车信息
<template>
    <div class="mainBox">
       <div class="header">K单过滤</div>
       <div class="btnGroup flex">
            <el-button type="primary" @click="dialogVisible1=true">新增</el-button>
           
        </div>
        <div class="tableArea">
            <el-table
            :data="tableData"
            border
            align="center"
            >
                <el-table-column
                    prop="shop_type_name"
                    label="发货人"
                    min-width="150"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="shop_type_name"
                    label="手机号"
                    min-width="150"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="order_no"
                    label="操作"
                    min-width="150"
                    align="center">
                    <template slot-scope="scope">     
                        <el-button  type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pageControl">
            <el-pagination
                background
                :page-size=20
                layout="total,prev, pager, next"
                @current-change="pageChange"
                :total="dataTotal">
            </el-pagination>
        </div> 
    </div>
    
</template>

<script>

export default {
    
    name:"Kfilter",
    data(){
        return{
            dataTotal:20,
            dialogVisible1:false,
            tableData:[

            ]
        }
    },
    methods:{
        pageChange(){

        }
    },
    components: {
  
    },

     
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
    .btnGroup{
        justify-content: flex-end;
        padding-right: 10px;
        
    }
    .tableArea{
        margin-top: 10px;
        text-align: center
    }
</style>


