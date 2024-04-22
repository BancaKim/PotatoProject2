<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4"/>
      <AppGrid :items="posts" col-class="col-6">
        <template v-slot="{item}">
             <AppCard 
                :title="item.title"
                :content="item.content" 
                :created-at="item.createdAt"
                @click="goPageId(item.id)">
            </AppCard>
        </template>

      </AppGrid>
  </div>
</template>

<script setup>
import AppGrid from '@/components/posts/AppGrid.vue';
import AppCard from '@/components/AppCard.vue';
import {useRouter} from 'vue-router';
import {getPosts} from '@/api/posts'
import {ref, watchEffect} from 'vue';

const router = useRouter();
const totalCount = ref(0);
const posts = ref([]);
const goAboutPage =()=>{
  router.push('/about');
};

const params = ref({
    _sort: 'createdAt',
    _order: 'desc',
    _page: 1,
    _limit: 9,
    title_like: '',
});

const fetchPosts = async() => {
    try{
        const { data,headers } = await getPosts(params.value);
        posts.value = data;
        totalCount.value = headers['x-total-count'];
    }catch(error){
        console.error(error)
    }
}

watchEffect(fetchPosts);
const goPageId = (id) => {
    // router.push(`/posts/'${id}`);
    router.push({
        name:'PostDetail',
        params: {
            id,
        }
    })
};

</script>

<style scoped></style>