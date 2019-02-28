import axios from "@/utils/myAxios";

// 请求模板（如果后面接口通了可以直接写请求不在需要mocker可以删掉打开http里面走代理）
export function test(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/test.json", {params: sendParam}).then(res=>{resolve(res)})
        }) 
         
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get("/api/other/shop-type/list", {params: sendParam}).then(res=>{resolve(res)})
        })
    }
    
}
// 获取K单列表
export function getKList(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/K-List-get.json", {params: sendParam}).then(res=>{resolve(res)})
        })
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get("	/admin/system/K-list/filter/list", {params: sendParam}).then(res=>{resolve(res)})
        }) 
    }
    
}
// K单过滤添加
export function KListAdd(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/K-List-add.json", {params: sendParam}).then(res=>{resolve(res)})
        })   
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.post("/admin/system/K-list/filter/add",sendParam).then(res=>{resolve(res)})
        })
    }
}
// K单过滤删除
export function KListDel(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/K-List-del.json", {params: {phone:sendParam}}).then(res=>{resolve(res)})
        }) 
         
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.delete(`/admin/system/K-list/filter/del/${sendParam}`).then(res=>{resolve(res)})
        })
    }
    
}
// 包车信息获取
export function rentCarList(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/rent-car-list.json", {params: {phone:sendParam}}).then(res=>{resolve(res)})
        }) 
         
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get("/admin/system/rent-car/list", {params: {phone:sendParam}}).then(res=>{resolve(res)})
        })
    }
    
}

// 包车信息修改
export function rentCarAdd(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/rent-car-add.json", {params: sendParam}).then(res=>{resolve(res)})
        })   
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.post("/admin/system/K-list/filter/add",sendParam).then(res=>{resolve(res)})
        })
    }
}

// 系统联系人相关操作
// 获取
export function contactList(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/contact-list.json").then(res=>{resolve(res)})
        })   
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get("/admin/system/contact/list").then(res=>{resolve(res)})
        })
    }
}
// 修改
export function contactAdd(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/contact-add.json").then(res=>{resolve(res)})
        })   
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.post("/admin/system/contact/add",sendParam).then(res=>{resolve(res)})
        })
    }
}

// 货物超限信息操作
// 获取
export function offGaugeList(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/off-gauge-list.json").then(res=>{resolve(res)})
        })   
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get("/admin/system/off-gauge/list").then(res=>{resolve(res)})
        })
    }
}
// 修改
export function offGaugeAdd(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/off-gauge-add.json").then(res=>{resolve(res)})
        })   
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.post("/admin/system/off-gauge/add",sendParam).then(res=>{resolve(res)})
        })
    }
}

// 收费标准配置操作
// 获取
export function freightList(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/freight-list.json").then(res=>{resolve(res)})
        })   
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get("/admin/system/freight/list").then(res=>{resolve(res)})
        })
    }
}
// 修改
export function  freightAdd(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/freight-add.json").then(res=>{resolve(res)})
        })   
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.post("/admin/system/freight/add",sendParam).then(res=>{resolve(res)})
        })
    }
}


// 获取区县列表
export function countyList(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/county-list.json", {params: sendParam}).then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get("/admin/dist-area/county/list", {params: sendParam}).then(res=>{
                resolve(res)
            })
        }) 
    }
}

// 获取街道列表
export function townList(id){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/town-list.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get(`/admin/dist-area/county/list/${id}`).then(res=>{
                resolve(res)
            })
        }) 
    }
}

// 修改街道配置
export function townUpdate(id,params){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/town-update.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.put(`/admin/dist-area/town/update/${id}`,params).then(res=>{
                resolve(res)
            })
        }) 
    }
}

// 获取客户类型
export function getCustomerType(){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/customer-type.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get(`/oa/customer/type/list`).then(res=>{
                resolve(res)
            })
        }) 
    }
}

// 获取收货地址状态说明
export function getConsigneesAddrStatus(){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/consignees-addr-status.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get(`/oa/customer/consignees/addr/status/list`).then(res=>{
                resolve(res)
            })
        }) 
    }
}
// 获取区域状态说明
export function getConsigneesTownStatus(){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/consignees-addr-status.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get(`/oa/customer/consignees/addr/town/status/list`).then(res=>{
                resolve(res)
            })
        }) 
    }
}

// 发货人列表
export function getCustomerShipperList(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/customer-shipper-list.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get(`/oa/customer/shipper/list`,{params:sendParam}).then(res=>{
                resolve(res)
            })
        }) 
    }
}

// 修改发货人
export function shipperUpdate(id,sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/commonBack.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.post(`/oa/customer/shipper/update/${id}`,sendParam).then(res=>{
                resolve(res)
            })
        }) 
    }
}

// 收货人列表
export function consigneesAddrList(sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/consignees-addr-list.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.get(`/oa/customer/consignees/addr/status/list`).then(res=>{
                resolve(res)
            })
        }) 
    }
}

// 收货地址状态修改
export function consigneesAddrStatus(id){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/commonBack.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.put(`/oa/customer/consignees/addr/status/${id}`).then(res=>{
                resolve(res)
            })
        }) 
    }
}

// 收货地址删除
export function consigneesAddrDelete(id){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/commonBack.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.delete(`/oa/customer/consignees/addr/${id}`).then(res=>{
                resolve(res)
            })
        }) 
    }
}

// 收货地址状修改
export function consigneesAddrEdit(id,sendParam){
    if(process.env.NODE_ENV=='development'){
        return new Promise((resolve,reject)=>{
            axios.get("/mocker/commonBack.json").then(res=>{
                resolve(res)
            })
        }) 
    }else if((process.env.NODE_ENV=='production')){
        return new Promise((resolve,reject)=>{
            axios.put(`/oa/customer/consignees/addr/${id}`,sendParam).then(res=>{
                resolve(res)
            })
        }) 
    }
}

