<template>
    <div>
        <br>
        <h2>게시글 등록</h2>
        <hr class="my-4">
        <AppError v-if="error" :message="error.message"/>
        <PostForm v-model:title="form.title" v-model:price="form.price" v-model:content="form.content" @update:file="handleFile" @submit.prevent="save">
            <template #actions>
                <button type="button" class="btn btn-outline-dark" @click="goListPage">목록</button>

                <button class="btn btn-primary" :disabled="loading">
                    <template v-if="loading">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </template>
                    <template v-else> 저장

                    </template>
                </button>

            </template>
        </PostForm>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {createPost} from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import {useAlert} from '@/composables/alert';
import { useUserStore } from '@/store/userstore'
let store = useUserStore();

const {vAlert, vSuccess} = useAlert();

const router = useRouter();
const form = ref({
    title:null,
    price:0,
    content:null,
    image: null
})

const handleFile = (file) =>{
    form.value.image = file; // 파일데이터를 form에 추가
}
const loading = ref(false);
const error = ref(null);

const save= async ()=>{
    try{
        loading.value = true;
        let formData = new FormData();
        formData.append('user_id', store.getUserInfo[0].user_id);
        formData.append('title',form.value.title);
        formData.append('price', form.value.price);
        formData.append('content', form.value.content);
        if (form.value.image){
            console.log('value 여부');
            formData.append('image', form.value.image);
        }
        await createPost(formData);
        vSuccess('등록이 완료되었습니다.');
        router.push('/');
    } catch (err){
        vAlert(err.message);
        alert('비상!!!')
        error.value = err;
    } finally {
        loading.value = false;
    }
     
}

const goListPage = () => router.push({name:'PostList'});
// const visibleForm = ref(false);
</script>

<style lang="scss" scoped></style>