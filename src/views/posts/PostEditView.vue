<template>
    <AppLoading v-if="loading" />
    <AppError v-else-if="error" :message="error.message" />
    <div v-else>
        <h2>게시글 수정</h2>
        <hr class="my-4">
        <AppError v-if="editError" :message="editError.message" />
        <PostForm v-model:title="form.title" v-model:price="form.price" v-model:content="form.content" @submit.prevent="edit">
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
        </PostForm>
        <!-- <AppAlert :show="showAlert" :message="alertMessage" :type="alertType"></AppAlert> -->
    </div>
</template>

<script setup> 
import { useRoute, useRouter } from 'vue-router';
import {ref} from 'vue';
import {getPostById, updatePost} from '@/api/posts'
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';

const { vAlert, vSuccess } = useAlert();

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
    title: null,
    price: 0,
    content: null,
    id: null,
})

const error = ref(null);
const loading = ref(false);

const fetchPost = async () => {
    try{
        loading.value = true;
        const { data } = await getPostById(id);
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
    form.value.price = data.data[0].price;
    form.value.content = data.data[0].content;
    form.value.id = id;
};
fetchPost();

const editError = ref(null)
const editLoading = ref(false)

const edit = async ()=>{
try{
    const editData = {
        id : form.value.id,
        title : form.value.title,
        price : form.value.price,
        content : form.value.content
    }
    editLoading.value = true
    await updatePost(editData)
    router.push({name:'PostDetail', params: {id}})
    vSuccess('수정이 완료되었습니다.')
}catch(err){
    vAlert(err.message);
    editError.value = err;
} finally {
    editLoading.value = false
}
}

const goDetailPage = ()=>router.push({name:'PostDetail', params:{id}});

//alert

</script>

<style lang="scss" scoped>

</style>