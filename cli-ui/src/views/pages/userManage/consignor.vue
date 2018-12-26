// 发货人
<template>
    <div class="mainBox">
        <div class="header">发货人管理</div>
        <div class="searchArea flex">
            <el-input class="searchInput" v-model="keyWord" placeholder="收货人名、手机号、微信名"></el-input>
            <el-button type="primary">搜索</el-button>
            <el-button type="primary">导出</el-button>
        </div>
        <div class="fileter flex">
            <div>筛选条件:</div>
            <el-select v-model="shopType" placeholder="店铺类型">
                <el-option
                    v-for="item in selectData.shopType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
          
        </div>
        
        <div class="tableArea">
            <el-table
            :data="tableData"
            border
            align="center"
            >
            <el-table-column
                prop="shop_name"
                label="发货人"
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
                label="类型"
                min-width="150"
                align="center">
            </el-table-column>
            <el-table-column
                prop="shop_type_name"
                label="发货次数"
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
            width="30%">
            <div>
                <el-form 
                    label-width="90px"
                    >
                    <el-row >
                        
                        <el-col :span="20">
                            <el-form-item label="发货人:" >
                                <el-input v-model="editUserInfo.shop_name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                     <el-row >
                        
                        <el-col :span="20">
                            <el-form-item label="手机号:" >
                                <el-input v-model="editUserInfo.shop_name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row >
                        
                        <el-col :span="20">
                            <el-form-item label="类型:" >
                                <el-select v-model="editUserInfo.shopType" placeholder="店铺类型">
                                    <el-option
                                        v-for="item in selectData.shopType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
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
    name:"Consignor",
    data() {
        return {
            // 表格数据
            tableData:[],
            dataTotal:20,//总数
            // 搜索关键词
            keyWord:"",
            // 店铺类型
            shopType:"",
            // 下拉框数据
            selectData:{
                shopType:[]
            },
            // 修改弹窗是否显示
            dialogVisible1:false,
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


