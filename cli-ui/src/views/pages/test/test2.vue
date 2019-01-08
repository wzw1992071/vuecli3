<template>
    <div>
        <el-tree
            :data="Treedata"
            show-checkbox
            node-key="id"
            :default-checked-keys="[5]"
            :props="defaultProps">
        </el-tree>
    </div>
</template>
<script>
export default {
    name:"Test2",
    data(){
        return{
            Treedata:[{
                id: 1,
                label: '开单',
                children: [{
                    id: 4,
                    label: '订单管理',
                },{
                    id: 5,
                    label: '车队管理',
                }]
            }],
            // Treedata:[{
            //     id: 1,
            //     label: '开单',
            //     children: [{
            //         id: 4,
            //         label: '订单管理',
            //         children: [{
            //         id: 5,
            //         label: '实施分配'
            //         }, {
            //         id: 6,
            //         label: '预分配'
            //     }]
                

            // }],
            // 树结构参数
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>

