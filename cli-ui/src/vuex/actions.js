
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
    },
    // 获取客户通用数据
    getCustomerData({state,commit}){
        // console.log(Object.keys(state.customerData)
        if(Object.keys(state.customerData).length==0){
            // $http.getCustomerType().then(res=>{
            //     console.log(res)
            // })
            Promise.all([$http.getCustomerType(),$http.getConsigneesAddrStatus(),$http.getConsigneesTownStatus()]).then(res=>{
                let data = {
                    customerType:res[0].data,
                    consigneesAddrStatus:res[1].data,
                    consigneesTownStatus:res[2].data
                }
                commit('GETCUSTOMERDATA',data)
            })
        }else{
            return false
        }
    }
}