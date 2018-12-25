// 收货人
<template>
    <div class="mainBox">
        <div class="header">收货人管理</div>
        <div class="searchArea flex">
            <el-input class="searchInput" v-model="keyWord" placeholder="收货人名、手机号、微信名"></el-input>
            <el-button type="primary" @click="changeUser">搜索</el-button>
           
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
                    <el-button  type="text" size="small"  @click="changeUser">修改</el-button>
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
                    <el-row >
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
                        <el-col :span="20" >
                            <el-form-item label="地址:">
                                <el-input v-model="editUserInfo.address"></el-input>
                               
                            </el-form-item>
                            
                        </el-col>
                        <el-button type="primary positionBtn" @click="getPosition">定位</el-button>
                    </el-row>
                     
                </el-form>
                <div id="mapBox">

                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                 <el-button type="primary" @click="clear">清除</el-button>
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
            // 地图对象
            map:{},
            // 地图根据名字搜索
            placeSearch:{},
            // 表格数据
            tableData:[],
            dataTotal:20,//总数
            // 修改客户信息弹窗
            dialogVisible1:false,
            // 修改用户信息
            editUserInfo:{}
        }
    },
    methods: {
        pageChange(){

        },
        // 弹出修改框
        changeUser(){
            this.dialogVisible1=true;
            setTimeout(() => {
                this.initMap()
            }, 1000);
            
        },
        // 提交修改
        editUser(){
            this.dialogVisible1 = false
        },
        // 初始化地图
        initMap(){
            // console.log(document.querySelector("#mapBox"))
            this.map = new AMap.Map('mapBox',{
                zoom:12,//级别
                center: this.defaultXY,//中心点坐标
                resizeEnable: true
            });
            this.map.setDefaultCursor("pointer");
            // 添加比例尺
            this.map.addControl(new AMap.Scale({ visible: true}))
            this.map.clearMap()
        },
        // 定位
        getPosition(){
            if(this.editUserInfo.address){
                this.placeSearch = new AMap.PlaceSearch({
                    city: '028'
                })
                this.placeSearch.search(this.editUserInfo.address,  (status, result)=>{
                // 查询成功时，result即对应匹配的POI信息
                    this.map.clearMap()
                    console.log(result)
                    if(_.isEmpty(result)){
                        this.$message({
                            message: "请输入正确地址",
                            type: "warning"
                        });
                    }else{
                        let pois = result.poiList.pois;
                        let marker = new AMap.Marker({
                            position: pois[0].location,   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                            title: pois[0].name
                        });
                        this.map.add(marker);
                        this.map.setFitView();
                        marker.on('dragging', (e)=>{
                            console.log(e)
                        })
                    }
                   

                })
            }else{
                this.$message({
                    message: "请输入地址",
                    type: "warning"
                });
            }
            

        },
        clear(){
            this.map.clearMap()
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
    .online{
        display: flex;
        .positionBtn{
            margin-left: 10px;
            height: 40px;
        }
    }
    #mapBox{
        margin-left: 50px;
        width: 650px;
        height: 300px;
    }
</style>


