<template>
    <div class="container">
        <RouterView></RouterView>
        <IssuBadge></IssuBadge>
    </div>
</template>

<script>
import IssuBadge from '@/components/IssuBadge.vue'
import { reactive, toRefs } from 'vue'

export default {
    setup() {
        const state = reactive({
            count: 0,
        })

        return {
            ...toRefs(state),
        }
    },
    components:{
        IssuBadge
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
</style>