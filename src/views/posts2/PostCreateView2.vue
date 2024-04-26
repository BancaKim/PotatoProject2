<template>
    <div>
        <br>
        <h2>우리동네 게시판 등록</h2>
        <hr class="my-4">
        <AppError v-if="error" :message="error.message"/>
        <PostForm2 v-model:title="form.title" v-model:content="form.content" @submit.prevent="save">
            <template #actions>
                <button type="button" class="btn btn-outline-dark" @click="goListPage">목록</button> <!--수정필-->

                <button class="btn btn-primary" :disabled="loading">
                    <template v-if="loading">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </template>
                    <template v-else> 저장

                    </template>
                </button>

            </template>
        </PostForm2>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import { createBoard } from '@/api/posts';
import PostForm2 from '@/views/posts2/PostForm2.vue';
import {useAlert} from '@/composables/alert';

const {vAlert, vSuccess} = useAlert();

const router = useRouter();
const form = ref({
    title:null,
    content:null,
})

const loading = ref(false);
const error = ref(null);

const save= async ()=>{
    try{
        loading.value = true;
        let data = {
            'title': form.value.title,
            'content': form.value.content
        }
        await createBoard(data);
        // router.push({name: 'PostList'})
        vSuccess('등록이 완료되었습니다.')
    } catch (err){
        vAlert(err.message);
        alert('비상!!!')
        error.value = err;
    } finally {
        loading.value = false;
    }
     
}

const goListPage = () => router.push({name:'BoardList'});  
// const visibleForm = ref(false);
</script>

<style lang="scss" scoped></style>