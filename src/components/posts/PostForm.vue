<template>
    <form>
        <div class="mb-3 text-start">
            <label for="title" class="form-label">제목</label>
            <input :value="title" @input="$emit('update:title', $event.target.value)" type="text" class="form-control"
                id="title" placeholder="제목을 입력해주세요.">
        </div>
        <div class="mb-3 text-start">
            <label for="price" class="form-label">가격</label>
            <input :value="price" @input="$emit('update:price', $event.target.value)" type="number" class="form-control"
                id="price" placeholder="가격을 입력해주세요.">
        </div>
        <div class="mb-3 text-start">
            <label for="content" class="form-label">내용</label>
            <textarea :value="content" @input="$emit('update:content', $event.target.value)" class="form-control"
                id="content" placeholder="내용을 입력해주세요." rows="3"></textarea>
        </div>
        <!-- file upload -->
        <div class="mb-3 text-start">
            <label for="formFile" class="form-label">상품 사진</label>
            <input class="form-control" type="file" id="formFile" @change="handleFileChange">
        </div>
        <!-- file upload -->

        <div class="d-flex gap-2 mt-4">
            <slot name="actions"></slot>
        </div>
    </form>

</template>

<script setup>
import { ref } from 'vue';
defineProps({
    title: String,
    price: Number,
    content : String,
    // image : //Blob?
});

const emits = defineEmits(['update:title', 'update:price', 'update:content','update:file'])
const file = ref(null);

const handleFileChange = (event) => {
    file.value = event.target.files[0];
    if (file.value) {
        emits('update:file', file.value);
    }}

</script>

<style lang="scss" scoped>

</style>