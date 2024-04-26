<template>
    <PostFilter v-model:title="params.title_like" v-model:limit="params._limit" />
    <div class="d-flex" role="search">
        <button class="btn btn-outline-success" type="button" @click="goPage">글쓰기</button>
    </div>
    <hr class="my-4">

    <AppLoading v-if="loading" />
    <AppError v-else-if="error" :message="'error.message'" />
    <template v-else>
        <AppGrid :items="posts">
            <template v-slot="{ item }">
                <AppCard :title="item.title" :content="item.content" :created-at="item.createdAt"
                    @click="goPageId(item.id)" @modal="openModal(item)">
                </AppCard>
            </template>
        </AppGrid>
        <AppPagination :current-page="params._page" :pageCount="pageCount" @page="page => (params._page = page)" />
    </template>

    <Teleport to="#modal">
        <PostModal v-model="show" :title="modalTitle" :content="modalContent" :created-at="modalCreatedAt" />
    </Teleport>
    <!-- summary -->
    <template v-if="posts&&posts.length>0">
        <hr class="my-5">
        <AppCard2>
            <PostDetailView :id="posts[0].id"></PostDetailView>
        </AppCard2>
    </template>
</template>

<script setup>
import PostDetailView from  '@/views/posts/PostDetailView.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import AppError from '@/components/app/AppError.vue';
import AppLoading from '@/components/app/AppLoading.vue';
import {getPosts} from '@/api/posts'
import { useRouter } from 'vue-router';
import {ref, watchEffect, watch} from 'vue';
import {computed} from '@vue/reactivity'

const router = useRouter()
const posts = ref([]);
const error = ref(null);
const loading = ref(false);

//정렬
const params = ref({
    _sort: 'createdAt',
    _order: 'desc',
    _page: 1,
    _limit: 9,
    title_like: '',
})

//pagination
const totalCount = ref(0);
const pageCount = computed(()=> Math.ceil(totalCount.value/ params.value._limit))

watch(() => params.value.title_like, (newValue, oldValue) => {
    alert('tt');
    console.log(oldValue, newValue);
})

const fetchPosts = async() => {
    try{
        loading.value= true;
        const { data,headers } = await getPosts(params.value);
        posts.value = data;
        totalCount.value = headers['x-total-count'];
    }catch(err){
        error.value = err;
    }finally{
        loading.value =false;
    }
    // getPosts()
    // .then((response)=>{
    //     console.log('response: ', response);
    // }).catch(error=>{
    //     console.log('error: ',error);
    // });
}


const goPage = () => {
    router.push('/posts/create');
};
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
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');

const openModal= ({title, content, createdAt})=>{
    show.value = true;
    modalTitle.value =title;
    modalContent.value =content;
    modalCreatedAt.value =createdAt;
}
</script>

<style lang="scss" scoped></style>