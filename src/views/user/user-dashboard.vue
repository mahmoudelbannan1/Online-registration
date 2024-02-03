<template>
    <div class="dashboard">
        <div class="overlay" v-if="!togglesidebar"></div>
        <div class="side-bar" :class="[togglesidebar?'toggle-sidebar':'']">
            <mainsidebar>
                <usersidebar></usersidebar>
            </mainsidebar>
        </div>
        <div class="content" :class="[togglesidebar?'content-full-width':'']">
            <div class="header"> courses </div>
            <div class="courses">
                <div class="course card" v-for="(c , i) in subjects" :key="i">
                    <router-link :to="{name:'lectures' ,  params: { id: '1' }}">
                        <div class="image"><img :src="c.img" alt=""></div>
                        <h2 class="sub-title">{{c.sub_name}}</h2>
                        <div class="doctor">{{c.doc_name}}</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import mainsidebar from '@/components/main-sidebar'
import usersidebar from '@/components/user-sidebar.vue'
import stdSubjects from '@/database/std-subjects.js'
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
            subjects: [],
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
    },
    async mounted(){
        this.subjects = await stdSubjects.stdsubjects().data
        console.log(this.subjects.data)
    }

}
</script>

<style lang="scss" scoped>
    .content{
        .courses{
            margin-top: 70px;
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(auto-fill,minmax(250px , 1fr));
            .course{
                background-color: #262f38;
                text-align: center;
                height: 250px;
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
    }
</style>