<template>
    <AppLoading v-if="loading" />
    <AppError v-else-if="error" :message="error.message" />
    <div v-else>
        <!-- <img :src="require(formattedImage)" width="80" aspect-ratio="5/5"> -->
        <h2>{{ post.title}}</h2>
        <p>{{ post.content}}</p>
        <p class="text-muted">
            {{$dayjs(post.createdAt).format('YYYY.MM.DD HH:mm:ss')}}
        </p>
        <hr class="my-4">
        <AppError v-if="removeError" :message="removeError.message" />
        <div class="row g-2">
            <div class="col-auto">
                <button class="btn btn-outline-dark">이전글</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-dark">다음글</button>
            </div>
            <div class="col-auto me-auto"></div>
            <div class="col-auto">
                <button class="btn btn-outline-dark" @click="goListPage">목록</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
            </div>
            <div class="col-auto">

                <button class="btn btn-outline-danger" @click="remove" :disabled="removeLoading">
                    <template v-if="removeLoading">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </template>
                    <template v-else> 삭제
                    </template>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import { getBoardById, deleteBoard } from '@/api/posts';
import { useAlert } from '@/composables/alert';
import { ref } from 'vue';
const { vAlert} = useAlert();

const props = defineProps({
    board_id: [Number, String],
    })
    // const route = useRoute();
const router = useRouter();
    // const id = route.params.id;
    /*
    ref 선언 시 장점 : 한꺼번에 객체 할당이 가능
    const form = reactive({});
    form = {...data} -> 반응형 성격 소실
    form.title = data.title;
    form.content = data.content;이런 식으로 넣어줘야함
    단점) form.value.title , form.value.content 이런식으로 접근해야함
    reactive 장) form.title, form.content
    단) 객체 할당 불가
    */
    const post = ref({
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        createdAt: {
            type: [String, Date, Number],
        },

    });
    const error = ref(null);
    const loading = ref(false);

    const fetchPost = async () => {
        try{
            loading.value = true;
            const { data } = await getBoardById(props.board_id);
            setPost(data);  //객체 할당
        } catch (err) {
            error.value = err;
            console.log(err)
        } 
        finally {
            loading.value = false;
        }
    }
    const setPost = (data) => {
        post.value.title = data.data[0].title;
        post.value.content = data.data[0].content;
        post.value.createdAt = data.data[0].createdAt;
    };
    fetchPost();

//     const formattedImage = computed(() => {
//         return post.value.image ? `data:image/jpeg;base64,${post.value.image}` : '';
// });
    // onMounted(()=>{
    //     const { data } = getPostById(props.id);
    //     setPost(data); 
    // })

    const removeError = ref(null);
    const removeLoading = ref(false);

    const remove = async () => {
        try{
            if(confirm('삭제 하시겠습니까?')===false){
                return;
            }
            removeLoading.value = true;
            await deleteBoard(props.board_id);
            router.push({ name:'BoardList'}); 
        } catch (err){
            vAlert(err.message)
            removeError.value = err;
        } finally {
            removeLoading.value = false;
        }
    }
    const goListPage = () => router.push({ name:'BoardList'});
    const goEditPage = () => router.push({ name: 'BoardEdit', params: { board_id: props.board_id } });  //수정필요
</script>

<style lang="scss" scoped></style>