<template>
    <div class="page-container">
        <div class="body-container">
            <v-header></v-header>
            <v-news></v-news>
        </div>
        <v-sidebar></v-sidebar>
    </div>
</template>

<script>
import VHeader from '../components/Header'
import VNews from '../components/News'
import VSidebar from '../components/SideBar'
export default {
    components : {
        VHeader,
        VNews,
        VSidebar
    },
}
</script>

<style scoped>
    .page-container {
        display: flex;
    }
    .body-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
    }

</style>