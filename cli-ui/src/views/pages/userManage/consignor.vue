// 发货人
<template>
    <div class="mainBox">
        <div class="header">收发货人管理</div>
        <div class="btnGroup flex">
            <el-button type="primary">新增司机</el-button>
            <!-- <el-button type="primary">主要按钮</el-button> -->
            
        </div>
        
        <div class="tableArea">
            <el-table
            :data="tableData"
            border
            align="center"
            >
            <el-table-column
                prop="shop_name"
                label="姓名"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="name"
                label="车号"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="phone"
                label="电话"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="address"
                label="微信名"
                min-width="150"
                align="center">
            </el-table-column>
            <el-table-column
                prop="shop_type_name"
                label="K单打印机"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="shop_type_name"
                label="状态"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="order_no"
                label="操作"
                min-width="150"
                align="center">
                <template slot-scope="scope">
                    <el-button  type="text" size="small">停用</el-button>
                    <el-button  type="text" size="small">修改</el-button>
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
    name:"Consignor",
    data() {
        return {
            // 表格数据
            tableData:[],
            dataTotal:20,//总数
        }
    },
    methods: {
        pageChange(){

        }
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


