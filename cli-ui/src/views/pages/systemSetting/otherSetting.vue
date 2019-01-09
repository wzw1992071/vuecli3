<template>
    <div>
        <div class="setBox">
            <div class="title">系统联系人</div>
            <div class="oneLine">
                <div class="header">系统联系人:</div>
                <el-input
                    v-model="systemContacts"
                    clearable>
                </el-input>
            </div>
            <div class="oneLine btnLine">
                <el-button type="primary" @click="saveContacts">保存</el-button>
            </div>
        </div>
        <div class="setBox">
            <div class="title">预分配件数</div>
            <div class="oneLine">
                <div class="header">件数超限制:</div>
                <el-input
                    v-model.number="goodsNumber"
                    clearable>
                </el-input>
                
            </div>
            <div class="oneLine btnLine">
                <el-button type="primary" @click="saveGoodsNumber">保存</el-button>
            </div>
        </div>
        <div class="setBox">
            <div class="title">收费标准</div>
            <div class="oneLine">
                <div class="header">打折起步价:</div>
                <el-input
                    v-model.number="chargeRuler.minMoney"
                    clearable>
                </el-input>
                
            </div>
            <div class="oneLine">
                <div class="header">折扣:</div>
                 <el-select class="myselect" v-model="chargeRuler.discount" clearable  placeholder="请选择">
                    <el-option
                        v-for="item in selectOptions.discount"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                
            </div>
            <div class="oneLine btnLine">
                <el-button type="primary" @click="saveGoodsNumber">保存</el-button>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"OtherSetting",
    data() {
        return {
            selectOptions:{
                discount:[{
                    value:3,
                    label:"3折"
                },{
                    value:4,
                    label:"4折"
                },{
                    value:5,
                    label:"5折"
                },{
                    value:6,
                    label:"6折"
                },{
                    value:7,
                    label:"7折"
                },{
                    value:8,
                    label:"8折"
                },
                {
                    value:9,
                    label:"9折"
                }]
            },
            systemContacts:"",
            goodsNumber:"",
            chargeRuler:{
                minMoney:"",
                discount:""
            }
        }
    },
    methods: {
        saveContacts(){
            
        },
        saveGoodsNumber(){

        }
    },
}
</script>

<style lang="less" scoped>
    .setBox{
        border: 1px solid #ccc;
        margin: 10px 0;
        .title{
            font-size: 16px;
            font-weight: bolder;
            margin: 6px
        }
        .oneLine{
            width: 500px;
            display: flex;
            margin: 20px 5px;
            &.btnLine{
                margin-left: 60px;
            }
            .el-input,.myselect{
                width: 200px;
            }
           
            .header{
                line-height: 40px;
                width: 160px;
                // flex-grow: 1;
                text-align: right;
                margin-right: 10px;
            }
        }   
    }

</style>

