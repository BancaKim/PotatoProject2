<template>
    <div class="card" style="width: 18rem;">
        <!-- <img src="@/assets/macpro.png" class="card-img-top" alt="macpro"> -->
        <img :src="formattedImage" class="card-img-top" alt="productimage">
        <div class="card-body">
            <!-- type : news, notice -->
            <div class="badge">
                <span class="badge text-bg-secondary text-start">{{ typeName }}</span>
            </div>
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">감자: {{ price }}개</p>
            <p class="card-text">{{ content }}</p>
            <p class="text-muted">{{ formattedDate }}</p>
            <div class="d-flex justify-content-center bd-highlight">
                <a href="#" class="btn mr-10" :class="isLikeClass" @click="toggleLike">좋아요 {{ likeCountson }}</a>
                <a href="#" class="btn btn-primary" @click.stop="$emit('modal')">이동</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {computed,ref} from 'vue';
    import dayjs from 'dayjs';
    import { postLikeCount } from '@/api/posts'

    const props = defineProps({
        id: [Number, String],
        type: {
            type: String,
            default: 'electronic',
            validator: (value) => {
                return ['electronic', 'clothes'].includes(value);
            }
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        likeCount: {
            type: Number,
        },
        createdAt: {
            type: [String, Date, Number],
        },
        image: {
            type: String
            // default: () => ({}),
        }
    });

const emit =  defineEmits(['toggleLike','modal']);

let likeCountson = ref(props.likeCount);
const isLikeClass = computed(() => props.likeCount > 0 ? 'btn-danger' : 'btn-outline-danger');
const typeName = computed(() => props.type === 'electronic' ? '전자기기' : '옷');
const formattedImage = computed(() => props.image ? `data:image/jpeg;base64,${props.image}` : '');
const formattedDate = computed(() => dayjs(props.createdAt).format('YYYY.MM.DD HH:mm:ss'));

const toggleLike = ()=>{
    event.stopPropagation();
    likeCountson.value += 1;
    emit('toggleLike');
    return postLikeCount(likeCountson.value, props.id);
}

</script>

<style scoped>
</style>