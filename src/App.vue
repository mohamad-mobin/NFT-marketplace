<template >
    <baseHeader />
    <router-view></router-view>
    <baseFooter class=""/>
</template>
<script>
import baseFooter from './components/baseFooter.vue';
import baseHeader from './components/baseHeader.vue'; './components/baseFooter.vue';
export default {
    components:{
        baseFooter,
        baseHeader
    }
    
}
</script>
<style >
    body{
        background: #2B2B2B;
        font-family: workSans;
        overflow-x: hidden;
    }
</style>