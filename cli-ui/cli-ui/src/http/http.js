import axios from "@/utils/myAxios";

// 下载模板
export function getShopTypeLists(sendParam){
    return axios.get("/api/other/shop-type/list", {
        params: sendParam
    });
}