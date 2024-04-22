<template>
    <header>
        <div class="inner">
            <div class="sub-menu">
                <ul class="menu">
                    <li>
                        <a href="/signin">회원가입</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">로그인</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Admin</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>
.inner {
    height: 50px;
    margin: 0 auto;
    position: relative;
}

header .sub-menu {
    /* background-color: aquamarine; */
    display: flex;
    position: absolute;
    top: 10px;
    right: 0;
}

header .sub-menu ul.menu {
    display: flex;

}

header .sub-menu ul.menu li {
    position: relative;
    padding:10px;
} 


header .sub-menu ul.menu li::before {
    content: "";
    display: block;
    width: 1px;
    height: 20px;
    background-color: #e5e5e5;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;

}

header .sub-menu ul.menu li:first-child::before {
    display: none;
}

header .sub-menu ul.menu li a {
    font-size: 20px;
    padding: 0px 16px;
    display: block;
    color: #656565;

}

header .sub-menu ul.menu li a:hover {
    color: #000;
} 

</style>