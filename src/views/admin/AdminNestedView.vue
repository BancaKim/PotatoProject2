<template>
    <div>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" :to="{name:'DashBoard', replace: true}">
                    대쉬보드
                </RouterLink>    
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" :to="{name:'MemberInfo', replace: true}">
                    회원관리
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" :to="{name:'GridSystem', replace: true}">
                    GridSystem
                </RouterLink>
            </li>
        </ul>
        <hr class="my-4">
        <RouterView></RouterView>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>