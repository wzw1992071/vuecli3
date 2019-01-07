<template>
    <div>
        <div>
            <el-select v-model="printName" placeholder="请选择">
                <el-option
                    v-for="item in printList"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" @click="print">打印</el-button>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
export default {
    name:"Test",
    data(){
        return{
            printName:""
        }
    },
    computed:{
        ...mapGetters(["printList"])
    },
    methods:{
        ...mapActions(["getPrintList"]),
        print(){
            var LODOP = getLodop();
            LODOP.PRINT_INIT("打印销售单");
            LODOP.ADD_PRINT_TEXT(
              15,
              300,
              500,
              100,
              `销售单`
            );
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15); //距离顶部20加字体加间距总高40
            LODOP.SET_PRINT_PAGESIZE(0, 2100, 1400, "");
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            // LODOP.SET_PREVIEW_WINDOW(0,1,0,800,600,"");//打印前弹出选择打印机的对话框
            LODOP.SET_PRINTER_INDEX(this.printName)
            LODOP.SET_PRINT_MODE("AUTO_CLOSE_PREWINDOW", 1); //打印后自动关闭预览窗口
            LODOP.PREVIEW();
        }
    },
    created(){
        // var LODOP = getLodop();
        // // LODOP.PRINT_INIT("打印销售单");
        // console.log(LODOP.GET_PRINTER_NAME(0))
        this.getPrintList()
    }
}
</script>
<style lang="less" scoped>

</style>

