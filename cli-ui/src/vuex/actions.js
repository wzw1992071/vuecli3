
import * as $http from "@/http/http"
export default {
    // getShopTypeLists:({state,commit})=>{
    //     return new Promise((resolve, reject)=>{
    //         if(state.shopTypeLists.length==0){
    //             $http.getShopTypeLists().then(res=>{
    //                 commit('GETSHOPTYPELISTS',res.data.lists)
    //                 resolve();
    //             })
    //         }else{
    //             resolve();
    //         }
            
    //     })
        
    // },
    // 点击导航添加页签
    addNewTab:({commit},obj)=>{
        commit('ADDNEWTAB',obj)
    },
    // 选择页签
    chioceTab:({commit},objID)=>{
        commit('CHIOCETAB',objID)
    },
    // 删除页签
    delectTab:({commit},obj)=>{
        commit('DELECTTAB',obj)
    },
    // 地图保存分配状态（方便取消拿值）
    // 实时分配
    saveRealDriver({commit},obj){
        commit('SAVEREALDRIVER',obj)
    },
    // 预分配
    saveExceptDrive({commit},obj){
        commit('SAVEEXCEPTDRIVER',obj)
    },
    // 获取打印机列表
    getPrintList({state,commit}){
        // console.log(getLodop)
        // commit('SAVEEXCEPTDRIVER',obj)
        if(state.printList.length==0){
            
            let LODOP = getLodop();
            let printNumber =  LODOP.GET_PRINTER_COUNT()
            let printList = []
            for(let i=0;i<printNumber;i++){
                printList.push({
                   value:LODOP.GET_PRINTER_NAME(i)
                })
            }
            commit('GETPRINTLIST',printList)
        }else{
            return false
        }
    }
}