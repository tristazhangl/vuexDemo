<template>
    <div class="body-container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>
                  {{getCity}}
                </span>
            </div>
            <div class="text item">
                <div class="items-wrapper">
                    <div class="item-wrapper" v-for="views in showViewsList" :key="views.id">
                        <div class="content">
                            <v-views-item  :views="views"></v-views-item>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import {mapGetters, mapState, mapMutations} from 'vuex'
import VViewsItem from './ViewsItem'
export default {
    computed : {
        ...mapGetters(['getCity']),
        getCity2 () {
          return this.$store.state.$userCity
        },
        ...mapState('news',{
          showViewsList : state => state.showViewsList
        }),
    },
    components : {
      VViewsItem
    }
}
</script>

<style>
  .body-container {
    flex-flow: 1;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  /*news content */
  .item-wrapper {
        display: flex;
        border-bottom: 1px solid rgb(238,238,238);
  }
  .item-wrapper .content {
      flex-grow: 1;
  }
</style>