// 收货人
<template>
    <div class="mainBox">
        <div class="header">收货人管理</div>
        <div class="searchArea flex">
            <el-input class="searchInput" v-model="keyWord" placeholder="收货人名、手机号、微信名"></el-input>
            <el-button type="primary">搜索</el-button>
        </div>
        <div class="fileter flex">
            <div>筛选条件:</div>
            <el-select v-model="filter_isSend" placeholder="是否可送">
                <el-option
                    v-for="item in selectData.isSend"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
             <el-select v-model="filter_isSend" placeholder="是否绑定微信">
                <el-option
                    v-for="item in selectData.isSend"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
             <el-select v-model="filter_isSend" placeholder="多久未送货">
                <el-option
                    v-for="item in selectData.isSend"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
             <el-select v-model="filter_isSend" placeholder="是否可送">
                <el-option
                    v-for="item in selectData.isSend"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
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
                label="收货人"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="name"
                label="手机号"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="phone"
                label="绑定微信"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="address"
                label="区县"
                min-width="120"
                align="center">
            </el-table-column>
            <el-table-column
                prop="shop_type_name"
                label="街道"
                min-width="150"
                align="center">
            </el-table-column>
            <el-table-column
                prop="shop_type_name"
                label="地址"
                min-width="150"
                align="center">
            </el-table-column>
            <el-table-column
                prop="shop_type_name"
                label="配送状态"
                min-width="80"
                align="center">
            </el-table-column>
             <el-table-column
                prop="shop_type_name"
                label="送货次数"
                min-width="80"
                align="center">
            </el-table-column>
             <el-table-column
                prop="shop_type_name"
                label="最近送货"
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
            title="修改信息"
            :visible.sync="dialogVisible1"
            :close-on-click-modal="false"
            width="50%">
            <div>
                <el-form 
                    label-width="90px"
                    ref="changeUserInfo"
                    >
                    <el-row class="online">
                        <el-col :span="12">
                            <el-form-item label="店铺名:">
                                <el-input v-model="editUserInfo.shop_name"></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="12">
                            <el-form-item label="手机号:" >
                                <el-input v-model="editUserInfo.shop_name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                
                     <el-row class="online">
                        <el-col :span="20">
                            <el-form-item label="地址:">
                                <el-input v-model="editUserInfo.shop_name"></el-input>
                                <el-button type="primary">定位</el-button>
                            </el-form-item>
                           
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
    name:"Consignee",
    data() {
        return {
            // 搜索条件
            keyWord:"",//关键词
            page:1,//当前页
            pageSize:50,//每页数据
            // 筛选条件
            filter_isSend:"",
            filter_Area:"1",
            // 筛选下拉框
            selectData:{
                isSend:[],
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
            },
            // 表格数据
            tableData:[],
            dataTotal:20,//总数
            // 修改客户信息弹窗
            dialogVisible1:true,
            // 修改用户信息
            editUserInfo:{}
        }
    },
    methods: {
        pageChange(){

        },
        editUser(){
            this.dialogVisible1 = false
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
    .searchArea{
        margin: 10px 0;
       .searchInput{
       
           width: 300px;
           margin-right: 10px;
       }
        
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


