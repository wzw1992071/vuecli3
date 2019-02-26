// 打印配置（已完成）
<template>
    <div>
        <div class="title">打印机配置</div>
        <div>警告：打印机信息仅保存在本机，清空缓存后需要重新设置</div>
        <div class="settingBox">
            <div class="oneLine">
                <div class="printType">标签:</div>
                <el-select v-model="printSetting.tag" clearable  placeholder="请选择">
                    <el-option
                        v-for="item in printList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="oneLine">
                <div class="printType">收据:</div>
                <el-select v-model="printSetting.receipt" clearable  placeholder="请选择">
                    <el-option
                        v-for="item in printList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="oneLine">
                <div class="printType">清货单:</div>
                <el-select v-model="printSetting.manifest" clearable  placeholder="请选择">
                    <el-option
                        v-for="item in printList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div class="oneLine" v-for="(item,index) in printSetting.KPrintList">
                <div class="printType">K单{{index+1}}:</div>
                <el-select v-model="printSetting.KPrintList[index]" clearable  placeholder="请选择">
                    <el-option
                        v-for="item in printList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <div >
                    <el-button type="text" @click="deleteOneK" v-if="index!=0" >删除</el-button>
                </div>
            </div>
            <div class="oneLine">
               <el-button type="primary" @click="addOneK">添加K单打印机</el-button>
            </div>
            <div class="oneLine">
               <el-button type="primary" @click="saveSetting">保存</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex"
export default {
    name:"PrintSetting",
    data(){
        
        return{
            printSetting:{
                tag:"",//标签
                receipt:"",//收据
                manifest:"",//请货单
                KPrintList:[]
            },
            
            
        }
       
    },
    computed:{
        ...mapGetters(["printList"])
    },
    methods: {
        ...mapActions(["getPrintList"]),
        // 保存打印机配置
        saveSetting(){
            localStorage.setItem("printSetting",JSON.stringify(this.printSetting))
            this.$message({
                message: "保存成功",
                type: "success"
            });
        },
        // 获取本地的打印信息
        getLocolSetting(){
            let printSetting = localStorage.getItem('printSetting');
            if(printSetting){
                this.printSetting =  JSON.parse(JSON.stringify(JSON.parse(printSetting)))
            }
            if(this.printSetting.KPrintList.length==0){
                this.addOneK()
            }
        },
        // 新增一个K单打印机
        addOneK(){
            this.printSetting.KPrintList.push("")
        },
        // 删除一个K单打印机
        deleteOneK(index){
            this.printSetting.KPrintList.splice(index,1)
        }
    },
    mounted(){
        this.getPrintList()
        this.getLocolSetting()
        
    }
}
</script>
<style lang="less" scoped>
    .title{
        font-weight: bolder;
        font-size: 18px;
        margin: 10px 0;
    }
    .settingBox{
        margin-left: 50px;
        .oneLine{
            display:flex;
            margin: 20px 5px;
            .printType{
                line-height: 40px;
                width: 60px;
                text-align: right;
                margin-right: 10px;
            }
        }
    }
    
</style>


