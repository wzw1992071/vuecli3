// 发货人(缺少导出)
<template>
    <div class="mainBox">
        <div class="header">发货人管理</div>
        <div class="searchArea flex">
            <el-select v-model="serachType" placeholder="店铺类型">
                <el-option
                    v-for="item in selectData.serachTypeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-input class="searchInput" v-model="keyWord" placeholder="收货人名、手机号、微信名"></el-input>
            <div class="fileter flex" v-if="customerData&&customerData.customerType">
                <div>筛选条件:</div>
                <el-select v-model="shopType" clearable placeholder="店铺类型">
                    <el-option
                        v-for="item in customerData.customerType"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
            </div> 
            <el-button type="primary" @click="pageChange(1)">搜索</el-button>
            <el-button type="primary">导出</el-button>
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
                prop="phone"
                label="手机号"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="we_name"
                label="绑定微信"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="type"
                label="类型"
                min-width="150"
                align="center">
                <template slot-scope="scope">
                    <div>{{typeToName(scope.row.type)}}</div>
                </template>
            </el-table-column>
            <el-table-column
                prop="delivery_num"
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
                    <el-button  type="text" size="small" @click="openEdit(scope.row)">修改</el-button>
                </template>
            </el-table-column>

            </el-table>
        </div>
        <div class="pageControl">
            <el-pagination
                background
                :page-size="50"
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
                                <el-input v-model="editUserInfo.phone"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row >  
                        <el-col :span="20">
                            <el-form-item label="类型:" >
                                <el-select v-model="editUserInfo.type" v-if="customerData&&customerData.customerType" placeholder="店铺类型">
                                   <el-option
                                        v-for="item in customerData.customerType"
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
                <el-button type="primary" @click="editUser">修改</el-button>
                <el-button @click="dialogVisible1 = false">关闭</el-button>   
            </span>
        </el-dialog>
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
        },
        // 修改用户提交信息
        editInfoParam(){
            let data ={
                shop_name:this.editUserInfo.shop_name,
                phone:this.editUserInfo.phone,
                type:this.editUserInfo.type
            };
            return data
        }
    },
    methods: {
        ...mapActions(["getCustomerData"]),
        // 获取列表数据
        getListData(){
            this.$http.getCustomerShipperList(this.getListParam).then(res=>{
                this.tableData = res.data.lists
                this.dataTotal = res.data.total
            })
        },
        // 翻页
        pageChange(page){
            this.page = page;
            this.getListData();
        },
        // 店铺类型转换
        typeToName(type){
            console.log(this.customerData.customerType)
            let typeName=""
            this.customerData.customerType.forEach(item => {
                if(item.id==type){
                    typeName=item.name
                }
            });
            return typeName
        },   
        openEdit(data){
            this.editUserInfo= data;
            this.dialogVisible1=true;
        },
        // 提交修改
        editUser(){
            if(this.editUserInfo.shop_name&&this.editUserInfo.phone){
                this.$http.shipperUpdate(this.editUserInfo.id,this.editInfoParam).then(res=>{
                    this.$message({
                        message: "保存成功！",
                        type: "success"
                    });
                     this.dialogVisible1=false;
                     this.getListData()
                })
            }else{
                this.$message.error({
                    message: "请完善资料！"
                });
                return false
            }
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


