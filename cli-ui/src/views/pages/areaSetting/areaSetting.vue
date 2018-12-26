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
        <el-dialog
            title="修改信息"
            :visible.sync="dialogVisible1"
            :close-on-click-modal="false"
            width="30%">
            <div>
                <div class="area"> 双流区 - 中和街道</div>
                <el-form 
                    label-width="90px"
                    >
                    <el-row >
                        
                        <el-col :span="20">
                            <el-form-item label="映射区县:" >
                                <el-input v-model="editUserInfo.shop_name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row >
                        
                        <el-col :span="20">
                            <el-form-item label="配送状态:" >
                                <el-radio-group v-model="editUserInfo.shop_name">
                                    <el-radio-button v-for="item in selectData.sendState" :key="item.value" :label="item.value">{{item.label}}</el-radio-button>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                     <el-row >
                        
                        <el-col :span="16">
                            <el-form-item label="起步价:" >
                                <el-input v-model="editUserInfo.shop_name"></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="2">
                            
                            <span class="priceUnit">元</span>
                        </el-col>
                    </el-row>
                   

                </el-form>
 
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editUser">修改</el-button>
                <el-button @click="dialogVisible1 = false">关闭</el-button>
              
            </span>
        </el-dialog>
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
                sendState:[{
                    label:"开通",
                    value:"1"
                },{
                    label:"关停",
                    value:"0"
                }]
            },
             // 修改弹窗是否显示
            dialogVisible1:true,
            // 修改用户信息
            editUserInfo:{}
        }
    },
    methods: {
        pageChange(){

        },
        // 提交修改
        editUser(){

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
    .area{
        margin: 10px 20px;
        font-size: 16px;
        font-weight: bolder;
    }
    .priceUnit{
        line-height: 40px;
    }
</style>


