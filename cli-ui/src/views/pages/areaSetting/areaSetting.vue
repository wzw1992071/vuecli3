// 区域配置
<template>
    <div class="mainBox">
        <div class="header">区域配置</div>
        <div class="fileter flex">
            <div>区域:</div>
            <div>
                <el-radio-group v-model="filter_Area">
                     <el-radio-button v-for="item in selectData.area" :key="item.value" :label="item.value">{{item.label}}</el-radio-button>
                </el-radio-group>
            </div>
        </div>
        
        <div class="tableArea">
            <el-table
            :data="tableData"
            border
            align="center"
            >
            <el-table-column
                prop="shop_name"
                label="街道名"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="name"
                label="区县"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="phone"
                label="区县映射"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="address"
                label="客户数"
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
                prop="shop_type_name"
                label="起步价"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="order_no"
                label="操作"
                min-width="150"
                align="center">
                <template slot-scope="scope">     
                    <el-button  type="text" size="small">修改</el-button>
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
    name:"areaSetting",
    data() {
        return {
            // 表格数据
            tableData:[],
            dataTotal:20,//总数
            filter_Area:"1",
            selectData:{
                area:[{
                    label:"青羊区",
                    value:"1"
                },{
                    label:"武侯区",
                    value:"2"
                },
                {
                    label:"新都区",
                    value:"3"
                },
                {
                    label:"高新区",
                    value:"4"
                }],
            }
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
     .fileter{
        margin: 10px;
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


