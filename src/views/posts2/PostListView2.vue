<template>
    <hr class="mt-4">
    <h2>우리 동네 게시판</h2>
    <hr class="my-4">
    <div class="d-flex" role="search">
        <button class="btn btn-outline-success" type="button" @click="goPage">글쓰기</button>
    </div>
    <hr class="my-4">

    <AppGrid :items="posts" :colClass="col-12">
        <template v-slot="{ item }">
            <!-- <AppCard :image="item.product_pic" :title="item.product_title" :content="item.product_content" :created-at="item.enroll_date"
                    @click="goPageId(item.product_number)" @modal="openModal(item)">
                </AppCard> -->
            <AppCard3 :board_id="item.board_id" :title="item.title" :content="item.content" :likeCount="item.likeCount"
                :created-at="item.createdAt" @click="goPageId(item.board_id)" @modal="openModal(item)">
            </AppCard3>
        </template>
    </AppGrid>
    <AppPagination :current-page="params._page" :pageCount="pageCount" @page="page => (params._page = page)" />

    <Teleport to="#modal">
        <PostModal v-model="show" :title="modalTitle" :content="modalContent" :created-at="modalCreatedAt" />
    </Teleport>
    <!-- summary -->
    <template v-if="posts&&posts.length>0">
        <hr class="my-5">
        <AppCard2>
            <PostDetailView2 :board_id="posts[0].board_id"></PostDetailView2>
        </AppCard2>
    </template>
</template>

<script setup>
import PostDetailView2 from  '@/views/posts2/PostDetailView2.vue';
import PostModal from '@/components/posts/PostModal.vue';
import AppCard3 from '@/views/posts2/AppCard3.vue';
import { getBoards } from '@/api/posts'
import { useRouter } from 'vue-router';
import {ref, watchEffect} from 'vue';
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
// const pageCount = computed(()=> Math.ceil(totalCount.value/ params.value._limit))
const pageCount = computed(() => {
    if (params.value._limit <= 0) return 0;  // Ensure limit is not zero or negative
    const total = Math.max(totalCount.value, 0);  // Ensure total is not negative
    return Math.ceil(total / params.value._limit);
});

const fetchPosts = async () => {
    try {
        const response = await getBoards(params.value); // API 호출
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
    router.push('/posts2/createBoard');
};
watchEffect(fetchPosts);

const goPageId = (board_id) => {
    if (!board_id) {
        console.error('ID is required to navigate to the detail page.');
        return;
    }
    router.push({
        name: 'BoardDetail',    ///수정필요
        params: { board_id }
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