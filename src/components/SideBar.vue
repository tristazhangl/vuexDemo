<template>
    <div class="sidebar-container">
        <div class="items-action"><el-button plain size="small" @click="addToViewsList">添加</el-button></div>
        <div class="items-wrapper">
            <div class="item-wrapper" v-for="views in viewsList" :key="views.id">
                <div class="action">
                    <el-checkbox v-model="views.selected"></el-checkbox>
                </div>
                <div class="content">
                    <v-views-item :views="views"></v-views-item>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import VViewsItem from './ViewsItem'
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            viewsList : [
                {
                    id : '1',
                    title : '标题1',
                    content : '中新社上海11月16日电 (记者 陈静)截至16日9时30分，在上海市中心胶州路教师公寓特大火灾事故中死亡的人数已上升至53人。正在医院治疗的伤者有70人，其中17人伤势严重。',
                },
                {
                    id : '2',
                    title : '标题2',
                    content : ' 上海的这场火灾至少告诉了我，坚持不买高层楼是十分正确的。在我居住的城市，却是越来越风尚高层电梯楼，楼房高一层每平方米就加价60元。',
                },
                {
                    id : '3',
                    title : '标题3',
                    content : '不是因为加价就不买电梯高层，而是认为住得越高，碰到火灾、地震这样的突发事情，没有低层好逃生。当初买房时，很多朋友劝我买电梯楼，说是等年纪大了爬楼困难，我却坚持选择了无电梯的小高层楼房。',
                }
            ]
        }
    },
    components : {
        VViewsItem
    },
    methods : {
        addToViewsList(){
            let showViewsList = [];
            for (let views of this.viewsList) {
                if (views.selected) {
                    showViewsList.push(views);
                }
            }
            this.setShowViews(showViewsList);
        },
        ...mapMutations('news',['setShowViews'])
    }
}
</script>

<style scoped>
    .sidebar-container {
        width: 400px;
    }
    .items-wrapper {
        padding: 0 20px;
    }
    .item-wrapper {
        display: flex;
        border-bottom: 1px solid rgb(238,238,238);
    }
    .item-wrapper .action {
        align-self: center;
        width: 100px;
    }
    .item-wrapper .content {
        flex-grow: 1;
    }
    .items-action {
        text-align: right;
        padding-right: 20px;
    }
</style>