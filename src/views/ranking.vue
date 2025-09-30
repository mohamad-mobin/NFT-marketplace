<template>
    <div>
        <rankingHeader />
        <rankingTables />
    </div>
</template>
<script>
import rankingHeader from '@/components/ranking/rankingHeader.vue';
import rankingTables from '@/components/ranking/rankingTables.vue';

export default {
    components:{
        rankingHeader,
        rankingTables
    }
}
</script>