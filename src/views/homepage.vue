<template>
    <div class="pb-20 pt-20 sm:pt-0">
        <hero />
        <trendingCollection />
        <topCreators />
        <browseCategories />
        <discoverMore />
        <mushroom />
        <howItsWorks />
        <optInForm />
    </div>
</template>
<script>
import hero from '@/components/hero.vue';
import trendingCollection from '@/components/trendingCollection.vue';
import topCreators from '@/components/topCreators.vue';
import browseCategories from '@/components/browseCategories.vue';
import discoverMore from '@/components/discoverMore.vue';
import mushroom from '@/components/mushroom.vue';
import howItsWorks from '@/components/howItsWorks.vue';
import optInForm from '@/components/optInForm.vue';

export default {
    components:{
        hero,
        trendingCollection,
        topCreators,
        browseCategories,
        discoverMore,
        mushroom,
        howItsWorks,
        optInForm,
    }
}
</script>