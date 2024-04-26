<template>
    <hr class="mt-4">
    <h2>지금 감자마켓에서 거래 가능한 상품은?</h2>
    <hr class="my-4">
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

                <AppCard :id="item.id" :image="item.pic" :title="item.title" :price="item.price" :user_id="item.user_id" :content="item.content" :likeCount="item.likeCount" :created-at="item.createdAt"
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
import {ref, watchEffect} from 'vue';
import {computed} from '@vue/reactivity'

const router = useRouter();
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
// const pageCount = computed(()=> Math.ceil(totalCount.value/ params.value._limit))
const pageCount = computed(() => {
    if (params.value._limit <= 0) return 0;  // Ensure limit is not zero or negative
    const total = Math.max(totalCount.value, 0);  // Ensure total is not negative
    return Math.ceil(total / params.value._limit);
});

const fetchPosts = async () => {
    try {
        loading.value = true;
        const response = await getPosts(params.value); // API 호출
        if (response.data.data) {
            posts.value = response.data.data; // 여기서 data는 배열이어야 합니다.//
            totalCount.value = parseInt(response.headers['x-total-count'] || 0); // 헤더에서 totalCount 추출
        } else {
            console.error('No data received', response);
            posts.value = []; // 데이터가 없다면 posts를 빈 배열로 설정
        }
    } catch (err) {
        console.error('Error fetching posts:', err);
        error.value = err;
        posts.value = []; // 에러 발생 시 posts를 빈 배열로 설정
    } finally {
        loading.value = false;
    }
};

const goPage = () => {
    router.push('/posts/create');
};
watchEffect(fetchPosts);
const goPageId = (id) => {
    if (!id) {
        console.error('ID is required to navigate to the detail page.');
        return;
    }
    router.push({
        name: 'PostDetail',
        params: { id }
    });
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