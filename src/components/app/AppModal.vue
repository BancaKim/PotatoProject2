<template>
    <Transition>
        <div v-if="modelValue">
            <div class="modal-backdrop fade show"></div>
        <!-- Modal -->
            <div 
            class="modal fade show d-block" 
            tabindex="-1" 
            role="dialog" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <slot name="header">
                                <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                @click="$emit('update:modelValue',false)">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </slot>
                        </div>
                        <div class="modal-body">
                        <slot></slot>
                        </div>
                        <div class="modal-footer">
                            <slot name = "actions"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
defineProps({
    modelValue: Boolean,
    title: String
})
defineEmits(['close', 'update:modelValue']);
</script>

<style scoped>
.v-enter-from, .v-leave-to {
    opacity: 0;
}
.v-enter-active, .v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-to, .v-leave-from {
    opacity: 1;
}

</style>