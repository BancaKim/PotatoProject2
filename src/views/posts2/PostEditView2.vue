<template>
    <AppLoading v-if="loading" />
    <AppError v-else-if="error" :message="error.message" />
    <div v-else>
        <h2>게시글 수정</h2>
        <hr class="my-4">
        <AppError v-if="editError" :message="editError.message" />
        <PostForm2 v-model:title="form.title" v-model:content="form.content" @submit.prevent="edit">
            <template #actions>
                <button type="button" class="btn btn-outline-danger" @click="goDetailPage">취소</button>

                <button class="btn btn-primary" :disabled="editLoading">
                    <template v-if="editLoading">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </template>
                    <template v-else> 수정

                    </template>
                </button>

            </template>
        </PostForm2>
        <!-- <AppAlert :show="showAlert" :message="alertMessage" :type="alertType"></AppAlert> -->
    </div>
</template>

<script setup> 
import { useRoute, useRouter } from 'vue-router';
import {ref} from 'vue';
import { getBoardById, updateBoard } from '@/api/posts'
import PostForm2 from '@/views/posts2/PostForm2.vue';
import { useAlert } from '@/composables/alert';

const { vAlert, vSuccess } = useAlert();

const route = useRoute();
const router = useRouter();
const board_id = route.params.board_id;

const form = ref({
    title: null,
    content: null,
    board_id: null,
})

const error = ref(null);
const loading = ref(false);

const fetchPost = async () => {
    try{
        loading.value = true;
        const { data } = await getBoardById(board_id);
        setForm(data);  //객체 할당
    } catch(err) {
        error.value = err;
        console.error(error);

    } finally {
        loading.value = false;
    }
}
const setForm = (data) => {
    form.value.title = data.data[0].title;
    form.value.content = data.data[0].content;
    form.value.board_id = board_id;
};
fetchPost();

const editError = ref(null)
const editLoading = ref(false)

const edit = async ()=>{
try{
    const editData = {
        board_id: form.value.board_id,
        title : form.value.title,
        content : form.value.content
    }
    editLoading.value = true
    await updateBoard(editData)  
    router.push({ name: 'BoardDetail', params: { board_id }})  
    vSuccess('수정이 완료되었습니다.')
}catch(err){
    vAlert(err.message);
    editError.value = err;
} finally {
    editLoading.value = false
}
}

const goDetailPage = () => router.push({ name: 'BoardDetail', params: { board_id }});  

//alert

</script>

<style lang="scss" scoped>

</style>