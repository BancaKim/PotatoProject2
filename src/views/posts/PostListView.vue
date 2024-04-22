<template>
    <h2>게시글 목록</h2>
    <hr class="my-4">
    <PostFilter 
    v-model:title="params.title_like" 
    v-model:limit="params._limit"/>
    <div class="d-flex" role="search">
        <button class="btn btn-outline-success" 
        type="button" 
        @click="goPage">글쓰기</button>
    </div>
    <hr class="my-4">
        <AppGrid :items="posts">
            <template v-slot="{item}">
                <AppCard
                    :title="item.title"
                    :content="item.content" 
                    :created-at="item.createdAt"
                    @click="goPageId(item.id)"
                    @modal="openModal(item)">
                </AppCard>
            </template>
        </AppGrid>
        <AppPagination 
        :current-page="params._page" 
        :pageCount="pageCount" 
        @page = "page =>(params._page = page)"/>   
        <Teleport to="#modal">
            <PostModal 
            v-model="show" 
            :title="modalTitle" 
            :content="modalContent" 
            :created-at="modalCreatedAt"/>
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
import AppGrid from '@/components/posts/AppGrid.vue';
import AppCard from '@/components/AppCard.vue';
import PostDetailView from  '@/views/posts/PostDetailView.vue';
import AppPagination from '@/components/AppPagination.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import AppCard2 from '@/components/AppCard2.vue';
import {getPosts} from '@/api/posts'
import { useRouter } from 'vue-router';
import {ref, watchEffect} from 'vue';
import {computed} from '@vue/reactivity'

const router = useRouter()
const posts = ref([]);

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


const fetchPosts = async() => {
    try{
        const { data,headers } = await getPosts(params.value);
        posts.value = data;
        totalCount.value = headers['x-total-count'];
    }catch(error){
        console.error(error)
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