<template>
    <div class="sidebar" :class="[toggle_sidebar?'toggle-sidebar':'']">
        <div @click="togglesidebar" class="menu"><i class="fa-solid fa-bars"></i></div>
        <div class="sidebar-cont">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        toggle_sidebar(){
            return this.$store.state.toggle_sidebar
        }
    },
    methods:{
        togglesidebar(){
            this.$store.commit('togglesidebar')
        }
    }
    

}
</script>

<style lang="scss" scoped>
    ::-webkit-scrollbar{
        width: 0;
        height: 0;
    }


</style>