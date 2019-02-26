const getters={
    fileBaseUrl:()=> 'http://img.idongpin.com/',
    defaultXY:()=>[104.07,30.67],
    headTabList:state => state.headTabList,
    currentTab:state => state.currentTab,
    realDispatchDiver:state => state.realDispatchDiver,
    exceptDispatchDiver:state => state.exceptDispatchDiver,
    printList:state => state.printList,
    customerData:state => state.customerData,
}

export default getters;
