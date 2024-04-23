<template>
    <div class="card" style="width: 18rem;">
        <!-- <img src="@/assets/macpro.png" class="card-img-top" alt="macpro"> -->
        <img :src="formattedImage" class="card-img-top" alt="productimage">
        <div class="card-body">
            <!-- type : news, notice -->
            <span class="badge text-bg-secondary mt-2">{{ typeName }}</span>
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ content }}</p>
            <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">좋아요</a>

            <p class="text-muted">{{ $dayjs(createdAt).format('YYYY.MM.DD HH:mm:ss') }}</p>
            <div class="d-flex flex-row-reverse bd-highlight">
                <a href="#" class="btn btn-primary" @click.stop="$emit('modal')">이동</a>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import dayjs from 'dayjs';

export default {
    props: {
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
        content: {
            type: String,
            required: true,
        },
        isLike: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type : [String, Date, Number],
        },
        image: {
            type: String
            // default: () => ({}),
        }
    },
    emits: ['toggleLike','modal'],
    setup(props, context) {
        // console.log('props.title ', props.title);
        const isLikeClass = computed(() => props.isLike ? 'btn-danger' : 'btn-outline-danger');
        const typeName = computed(() => props.type === 'electronic' ? '전자기기' : '옷');
        const formattedImage = computed(()=>{
            //base64 데이터가 제대로 렌더링 되도록 처리
            return props.image? `data:image/jpeg;base64,${props.image}`:'';
        });
        const formattedDate = computed(()=>{
            return dayjs(props.createdAt).format('YYYY.MM.DD HH:mm:ss');
        });
        
        const toggleLike = () => {
            // props.isLike = !props.isLike;
            context.emit('toggleLike')
        }
        return { isLikeClass, typeName, formattedImage, formattedDate, toggleLike };
    },
};
</script>

<style scoped></style>