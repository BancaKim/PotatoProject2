<template>
    <div class="badges" ref="badges">
        <div class="badge">
            <img src="@/assets/badge1.jpg" alt="badge">
        </div>
        <div class="badge">
            <img src="@/assets/badge2.jpg" alt="badge">
        </div>
    </div>
</template>

<script>
import {gsap} from 'gsap';
import {throttle} from 'lodash-es';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    setup () {
        const badges = ref(null);

        const handleScroll = throttle(() => {
            console.log(window.scrollY);
            if (window.scrollY > 500) {
                // 배지 숨기기
                gsap.to(badges.value, 0.6, {
                    opacity: 0,
                    visibility: 'hidden'
                });
            } else {
                // 배지 보여주기
                gsap.to(badges.value, 0.6, {
                    opacity: 1,
                    visibility: 'visible'
                });
            }
        }, 300);

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            badges
        };
    }
}

</script>

<style scoped>
.badges {
    position: absolute;
    top: 200px;
    right: 12px;
    /* display: flex; */
    flex-direction: column;
    display : none;
}

.badges .badge {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 12px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, .15);
    cursor: pointer;
}
</style>