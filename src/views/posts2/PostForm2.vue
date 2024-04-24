<template>
    <form>
        <div class="mb-3 text-start">
            <label for="title" class="form-label">제목</label>
            <input :value="title" @input="$emit('update:title', $event.target.value)" type="text" class="form-control"
                id="title" placeholder="제목을 입력해주세요.">
        </div>
        <div class="mb-3 text-start">
            <label for="content" class="form-label">내용</label>
            <textarea :value="content" @input="$emit('update:content', $event.target.value)" class="form-control"
                id="content" placeholder="내용을 입력해주세요." rows="3"></textarea>
        </div>

        <div class="d-flex gap-2 mt-4">
            <slot name="actions"></slot>
        </div>
    </form>

</template>

<script setup>
defineProps({
    title: String,
    content : String,
    // image : //Blob?
});

defineEmits(['update:title','update:content'])


</script>

<style lang="scss" scoped>

</style>