<template>
    <div class="header-container">
        <el-radio-group v-model="currentCity" @change="changeCurrency(currentCity)">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            currentCity: '上海'
        }
    },
    methods : {
        ...mapMutations(['changeCity']),  // 这里传入的数组是字符串，只有属性名才不需要引号。
        changeCurrency(){
            this.changeCity(this.currentCity);
        }
    }
}
</script>

<style scoped>
    .header-container {
        height: 150px;
    }

</style>