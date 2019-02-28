const getters={
    fileBaseUrl:()=> 'http://img.idongpin.com/',//文件服务器
    defaultXY:()=>[104.07,30.67],//默认地图中心。暂定为成都
    headTabList:state => state.headTabList,
    currentTab:state => state.currentTab,
    realDispatchDiver:state => state.realDispatchDiver,
    exceptDispatchDiver:state => state.exceptDispatchDiver,
    printList:state => state.printList,
    customerData:state => state.customerData,
}

export default getters;
