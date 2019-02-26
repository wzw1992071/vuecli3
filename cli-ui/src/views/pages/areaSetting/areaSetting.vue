// 区域配置
<template>
    <div class="mainBox">
        <div class="header">区域配置</div>
        <div class="fileter flex">
            <div>区域:</div>
            <div>
                <el-radio-group v-model="filter_Area" @change="changeArea">
                     <el-radio-button v-for="item in selectData.area" :key="item.id" :label="item.id">{{item.name}}</el-radio-button>
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
                prop="town_name"
                label="街道名"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="county_name"
                label="区县"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="map_name"
                label="区县映射"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="customer_num"
                label="客户数"
                min-width="150"
                align="center">
            </el-table-column>
            <el-table-column
                prop="status"
                label="状态"
                min-width="150"
                align="center">
                <template slot-scope="scope">     
                    <div>{{scope.row.status==1?"开启":"关闭"}}</div>
                </template>
            </el-table-column>
             <el-table-column
                prop="base_price"
                label="起步价（元）"
                min-width="150"
                align="center">
                <template slot-scope="scope">     
                    <div>{{scope.row.base_price/100}}</div>
                </template>
            </el-table-column>
             <el-table-column
                prop="order_no"
                label="操作"
                min-width="150"
                align="center">
                <template slot-scope="scope">     
                    <el-button  type="text" size="small" @click="editArea(scope.row)">修改</el-button>
                </template>
            </el-table-column>

            </el-table>
        </div>
        
        <el-dialog
            title="修改信息"
            :visible.sync="dialogVisible1"
            :close-on-click-modal="false"
            width="30%">
            <div>
                <div class="area"> {{editUserInfo.county_name}} - {{editUserInfo.town_name}}</div>
                <el-form 
                    label-width="90px"
                    >
                    <el-row >
                        
                        <el-col :span="20">
                            <el-form-item label="映射区县:" >
                                <el-input v-model="editUserInfo.map_name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row >
                        
                        <el-col :span="20">
                            <el-form-item label="配送状态:" >
                                <el-radio-group v-model="editUserInfo.status">
                                    <el-radio-button v-for="item in selectData.sendState" :key="item.value" :label="item.value">{{item.label}}</el-radio-button>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                     <el-row >
                        
                        <el-col :span="16">
                            <el-form-item label="起步价:" >
                                <el-input v-model="editUserInfo.base_price"></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="2">
                            
                            <span class="priceUnit">元</span>
                        </el-col>
                    </el-row>
                   

                </el-form>
 
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitEdit">修改</el-button>
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
            filter_Area:"",
            selectData:{
                area:[],
                sendState:[{value:"0",label:"未开通"},{value:"1",label:"已开通"}]
            },
             // 修改弹窗是否显示
            dialogVisible1:false,
            // 修改用户信息
            editUserInfo:{}
        }
    },
    computed:{
        submitEditParam(){
            return {
                map_name:this.editUserInfo.map_name,
                base_price:(this.editUserInfo.base_price*100).toFixed(0),
                map_name:this.editUserInfo.status
            }
        }
    },
    methods: {
        // 获取区域列表
        getAreaList(){
            this.$http.countyList().then(res=>{
                this.selectData.area=res.data
            })
        },
        // 区域改变
        changeArea(area){
            this.filter_Area = area
            this.getTownList()
        },
        // 获取街道列表
        getTownList(){
            this.$http.townList(this.filter_Area).then(res=>{
                this.tableData=res.data
            })
        },
        // 打开修改页面
        editArea(data){
            this.dialogVisible1=true;
            this.editUserInfo=JSON.parse(JSON.stringify(data))
            this.editUserInfo.base_price/=100
        },
        // 提交修改
        submitEdit(){
            this.$http.townUpdate(this.editUserInfo.id,this.submitEditParam).then(res=>{
                this.dialogVisible1=true;
                this.$message({
                    message: "保存成功",
                    type: "success"
                });
                this.getTownList()
            })
        },
    },
    mounted(){
        this.getAreaList();
        this.getTownList()
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


