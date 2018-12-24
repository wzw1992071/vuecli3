// 车队管理
<template>
    <div class="mainBox">
        <div class="header">车队管理</div>
        <div class="btnGroup flex">
            <el-button type="primary" @click="dialogVisible2=true">新增司机</el-button>
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
        <el-dialog
            title="请新司机使用微信扫码"
            :visible.sync="dialogVisible1"
            :close-on-click-modal="false"
            width="30%">
            <div>
                
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">关闭</el-button>
              
            </span>
        </el-dialog>
        <el-dialog
            title="修改信息"
            :visible.sync="dialogVisible2"
            :close-on-click-modal="false"
            width="30%">
            <div>
                <el-form 
                    label-width="90px"
                    ref="changeUserInfo"
                    >
                    <el-row class="online">
                        <el-col :span="20">
                            <el-form-item label="店铺名:" prop="shop_name">
                                <el-input v-model="changeInfo.shop_name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                     <el-row class="online">
                        <el-col :span="20">
                            <el-form-item label="车号:" prop="shop_name">
                                <el-input v-model="changeInfo.shop_name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                     <el-row class="online">
                        <el-col :span="20">
                            <el-form-item label="手机号:" prop="shop_name">
                                <el-input v-model="changeInfo.shop_name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                     <el-row class="online">
                        <el-col :span="20">
                            <el-form-item label="打印机:" prop="shop_name">
                                <!-- <el-input v-model="changeInfo.shop_name"></el-input> -->
                                <el-select v-model="changeInfo.shop_type">
                                    <el-option
                                        v-for="item in printLists"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                    </el-option>
                                </el-select> 
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="submitChangeInfo">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:"ManageCar",
    data() {
        return {
            // 表格数据
            tableData:[],
            dataTotal:20,//总数
            dialogVisible1:false,//新增司机弹窗
            dialogVisible2:false,//修改司机信息弹窗
            changeInfo:{}// 修改司机信息
        }
    },
    computed:{
        printLists(){
            let prints= [];
            return prints;
        }
    },
    methods: {
        pageChange(){

        },
        // 提交修改
        submitChangeInfo(){

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
    .online{
        .el-select{
            width: 298px;
        }
    }
   
</style>


