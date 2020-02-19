<template>
    <div class="item-inner-wraper">
        <div class="item-title">{{views.title}}</div>
        <div class="item-content">{{views.content}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props : ['views']
}
</script>

<style scoped>
    .item-title {
        font-size: 24px;
        text-align: left;
    }
    .item-content {
        display: -webkit-box;
        font-size: 16px;
        text-indent: 2em;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2; /*Webkit支持，不在标准之内（ie和火狐不兼容） */
        -webkit-box-orient: vertical;
    }
    .item-inner-wraper {
        padding: 0 10px;
        /* border-bottom: 1px solid rgb(238,238,238); */
    }
</style>