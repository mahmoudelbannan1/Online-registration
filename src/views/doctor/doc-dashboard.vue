<template>
    <div class="doc-dashboard">
        <div class="header">
            <router-link to="#" class="profile">
                <img src="../../assets/avatar.jpg" alt="">
                <p>use name</p>
            </router-link>
            <div class="title">
                dashboard
            </div>
        </div>

        <div class="container">
            <div class="course card" v-for="(c , i) in subjects" :key="i">
                <router-link :to="{name:'classroom' ,  params: { id: '1' }}">
                    <div class="image"><img :src="c.img" alt=""></div>
                    <h2 class="sub-title">{{c.sub_name}}</h2>
                </router-link>
            </div>
        </div>
            
    </div>
</template>

<script>
import mainsidebar from '@/components/main-sidebar'
import usersidebar from '@/components/user-sidebar.vue'
export default {
    components:{
        mainsidebar,usersidebar
    },
    computed:{
        togglesidebar(){
            return this.$store.state.toggle_sidebar
        }
    },
    data(){
        return{
            subjects:  [
                {
                    'img':require('../../assets/vuejs.svg'),
                    'sub_name':'database',
                    'doc_name':'dr/nader',
                },
                {
                    'img':require('../../assets/react.svg'),
                    'sub_name':'math1',
                    'doc_name':'dr/kafafy',
                },
                {
                    'img':require('../../assets/angular.svg'),
                    'sub_name':'or1',
                    'doc_name':'dr/nancy',
                },
                {
                    'img':require('../../assets/node.svg'),
                    'sub_name':'compiler',
                    'doc_name':'dr/elgendy',
                },
                {
                    'img':require('../../assets/network.png'),
                    'sub_name':'data structure',
                    'doc_name':'dr/arbi',
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    .doc-dashboard{
        width: 100%;
        min-height: 100vh;
        // height: auto;
        position: relative;
        background-color: var(--contentbg);
        padding-bottom: 30px;
        .header{
            position: fixed;
            width: 95%;
            color: inherit;
            display: flex;
            top: 10px;
            align-items: center;
            justify-content: space-between;
            .profile{
                display: flex;
                align-items: center;
                height: 100%;
                width: fit-content;
                color: var(--main-color);
                font-size: 22px;
                @media (max-width:768px) {
                    font-size: 16px;
                    font-weight: 300;
                }
                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                p{
                    margin: 0 0 0 5px;
                }
            }
            .title{
                color: var(--main-color);
                font-size: 22px;
                font-weight: 100;
                @media (max-width:768px) {
                    font-size: 16px;
                }
            }
        }
    }    
    .container{
        position: relative;
        top: 130px;
        display: grid;
        height: 100%;
        gap: 20px;
        grid-template-columns: repeat(auto-fill,minmax(250px , 1fr));
        margin-bottom: 150px;

        .course{
            background-color: #262f38;
            text-align: center;
            height: 220px;
            padding: 20px;
            a{
                color: inherit;
                width: 100%;
                height: 100%;
                .image{
                    width: 100%;
                    height: 50%;
                    img{
                        width: 90%;
                        height: 80%;
                    }
                }
                .sub-title{
                    font-size: 30px;
                    font-weight: bold;
                    color: var(--main-color);
                    margin-top: 20px;
                }
                .doctor{
                    font-size: 20px;
                    margin-top: 10px;
                    font-weight: bold;
                    color: #929292;

                }
            }
        }
    }
</style>