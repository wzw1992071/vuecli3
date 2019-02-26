//K单过滤（已完成）
<template>
    <div class="mainBox">
       <div class="header">K单过滤</div>
       <div class="btnGroup flex">
            <el-button type="primary" @click="openDialogVisible">新增</el-button>
           
        </div>
        <div class="tableArea">
            <el-table
            :data="tableData"
            border
            align="center"
            >
                <el-table-column
                    prop="content[0].name"
                    label="发货人"
                    min-width="150"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="content[0].phone"
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
                        <el-button  type="text" size="small" @click="deleteFilter(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog
            title="新增过滤"
            :visible.sync="dialogVisible1"
            :close-on-click-modal="false"
            width="30%">
            <div>
                <el-form 
                    label-width="90px"
                    >
                    <el-row >
                        <el-col :span="20">
                            <el-form-item label="电话:" >
                                <el-input v-model="addFilterData.content"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row >
                        
                        <el-col :span="20">
                            <el-form-item label="备注:" >
                                <el-input  type="textarea" v-model="addFilterData.remark"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>                
                </el-form>
 
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="creatKFilter">添加</el-button>
                <el-button @click="dialogVisible1 = false">关闭</el-button>
              
            </span>
        </el-dialog>
        
    
    </div>
    
</template>

<script>

export default {
    
    name:"Kfilter",
    data(){
        return{
            // 添加过滤模板
            addFilterDemo:{
                content:"",//电话
                remark:""//备注
            },
            // 添加过滤数据
            addFilterData:{},
            // 添加弹窗显示标志
            dialogVisible1:false,
            // 表格数据
            tableData:[

            ]
        }
    },
    methods:{
        getData(){
            this.$http.getKList().then(res=>{
                console.log(res)
                this.tableData=res.data
            })
        },
        // 点击添加弹窗
        openDialogVisible(){
            this.dialogVisible1=true;
            this.addFilterData=Object.assign({},this.addFilterDemo)
        },
        // 提交新增
        creatKFilter(){
            if(this.$utils.validatePhone(this.addFilterData.content)){
                this.$http.KListAdd(this.addParam).then(res=>{
                    this.$message({
                        message: "添加成功！",
                        type: "success"
                    });
                    this.dialogVisible1 = false
                    this.getData()
                })
            }else{
                this.$message.error({
                    message: "请输入正确的电话号！"
                });
                return false;
            }
        },
        // 删除一条过滤
        deleteFilter(data){
            console.log(data)
            this.$confirm("是否删除该用户?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
                customClass: "mywarning"
            }).then(() => {
                this.$http.KListDel(data.content[0].phone).then(res=>{
                    this.$message({
                        message: "删除成功！",
                        type: "success"
                    });
                    this.getData()
                })
            });
            
        }


    },
    computed: {
        // 请求数据处理
        addParam(){
            return this.addFilterData.remark?
            {content:[this.addFilterData.content],remark:this.addFilterData.remark}:{content:[this.content]}
        }
    },
    created(){
        this.getData()
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
    .btnGroup{
        justify-content: flex-end;
        padding-right: 10px;
        
    }
    .tableArea{
        margin-top: 10px;
        text-align: center
    }
</style>


