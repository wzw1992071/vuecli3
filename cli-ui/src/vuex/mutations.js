export default {
    // GETSHOPTYPELISTS:(states,shopTypeLists)=>{
    //     states.shopTypeLists=shopTypeLists;
    // } ,
    ADDNEWTAB(states,obj){
        // 判断头部页签是否重复
        let sameObj = states.headTabList.filter(item=>{
            return   item.index == obj.index
        })
        if(sameObj.length==0){
            states.headTabList.push(obj);
            states.currentTab = obj.index
        }else{
            states.currentTab = obj.index
        }
    },
    CHIOCETAB(states,objId){
        states.currentTab = objId;
    },
    DELECTTAB(states,obj){
        // states.currentTab = objId;
        let delectIndex = ""
        states.headTabList.forEach((item,i) => {
           if(item.index == obj.index){
            delectIndex=i;
           }
        })
        states.headTabList.splice(delectIndex,1)
        if(obj.index == states.currentTab){
            states.currentTab = states.headTabList.length>0?states.headTabList[0].index:"";
        }
    },
    SAVEREALDRIVER(states,obj){
        states.realDispatchDiver = obj
    },
    SAVEEXCEPTDRIVER(states,obj){
        states.exceptDispatchDiver = obj
    },
    GETPRINTLIST(states,printList){
        states.printList = printList
    }

}