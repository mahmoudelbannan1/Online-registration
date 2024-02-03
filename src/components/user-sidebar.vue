<template>
    <div class="user-sidebar">
        <div class="profile">
            <router-link class="profile-link" to="/">
                <img src="../assets/avatar.jpg" alt="">
                <h2>user name</h2>
            </router-link>
        </div>

        <div class="links">
            <ul>
                <li @click="changeactive(0)" :class="[active_link===0?'active-links':'']"><router-link :to="{name:'userdashboard'}">
                    <i class="fa-solid fa-book icon"></i> your courses</router-link></li>
                <li @click="changeactive(1)" :class="[active_link===1?'active-links':'']"><router-link :to="{name:'finished'}">
                    <i class="fa-solid fa-window-restore icon"></i> finished subjects</router-link></li>
                <li @click="changeactive(2)" :class="[active_link===2?'active-links':'']"><router-link :to="{name:'degree'}">
                    <i class="fa-solid fa-table icon"></i> your degrees</router-link></li>
                <li @click="changeactive(3)" :class="[active_link===3?'active-links':'']"><router-link :to="{name:'regest'}">
                    <i class="fa-solid fa-registered icon"></i> regest subjects</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        active_link(){
            return this.$store.state.active_link
        }
    },
    methods:{
        changeactive(l){
            this.$store.commit('change_activelink',l)
            // console.log(this.$store.state.active_link)
        }
    }

}
</script>

<style lang="scss" scoped>
    .user-sidebar{
        width: 100%;
        .profile{
            border-bottom: 2px solid #c4c4c4;
            padding: 10px 0 30px;
            .profile-link{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                color: #fff;
                img{
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                }
                h2{
                    font-size: 22px;

                }
            }
        }
        .links{
            padding: 30px 0 0;
            ul{
                width: 100%;
                li{
                    color: #fff;
                    font-size: 20px;
                    font-weight: 400;
                    transition: all .3s ease-in-out;
                    margin-bottom: 10px;
                    &:hover,
                    &.active-links{
                        background-color: #fff;
                        color: #ff0080;
                        border-radius: 100px;
                    }
                    a{
                        color: inherit;
                        text-transform: capitalize;
                        display: block;
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                    }
                }
            }
        }
    }

</style>