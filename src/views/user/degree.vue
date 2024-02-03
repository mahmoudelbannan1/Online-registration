<template>
    <div class="dashboard">
        <div class="overlay" v-if="!togglesidebar"></div>
        <div class="side-bar" :class="[togglesidebar?'toggle-sidebar':'']">
            <mainsidebar>
                <usersidebar></usersidebar>
            </mainsidebar>
        </div>
        <div class="content" :class="[togglesidebar?'content-full-width':'']">
            <div class="header"> finished subjects </div>

            <div class="degree">
                <table class="table table-primary table-striped table-hover">
                    <thead>
                        <tr>
                            <!-- <th scope="col">#</th> -->
                            <th scope="col">subject name</th>
                            <th scope="col">midterm</th>
                            <th scope="col">quize 1</th>
                            <th scope="col">quize 2</th>
                            <th scope="col">project</th>
                            <th scope="col">oral</th>
                            <th scope="col">final</th>
                            <th scope="col">totla</th>
                            <th scope="col">GPA</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr v-for="(f , i) in finished" :key="i">
                            <!-- <td>{{f.number}}</td> -->
                            <td>{{f.sub_name}}</td>
                            <td>{{f.midterm}}</td>
                            <td>{{f.quize_1}}</td>
                            <td>{{f.quize_2}}</td>
                            <td>{{f.project}}</td>
                            <td>{{f.oral}}</td>
                            <td>{{f.final}}</td>
                            <td>{{total(f)}}</td>
                            <td>{{total(f)/100}}</td>
                        </tr>
                    </tbody>
                </table>
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
        },
        
    },
    data(){
        return{
            finished: [
                {
                    "sub_name":"database",
                    "midterm":15,
                    "quize_1":4,
                    "quize_2":2,
                    "project":10,
                    "oral":3,
                    "final": 60,
                },
                {
                    "sub_name":"flutter",
                    "midterm":10,
                    "quize_1":4,
                    "quize_2":2,
                    "project":4,
                    "oral":3,
                    "final": 60,
                }
            ]
        }
    },
    methods:{
        total(sub){
            return sub.midterm+sub.quize_1+sub.quize_2+sub.project+sub.oral+sub.final
        }
    }

}
</script>

<style lang="scss" scoped>
    .degree{
        position: relative;
        top: 100px;
        table{
            font-size: 16px;
            thead , th , tbody , tr, td{
                border: 1px solid #fff;
                text-align: center;
                color: #444;
                // border-collapse: initial;
            }
            thead{
                tr,th{
                    border-bottom: 2px solid #fff;
                    color: #F87474 !important;
                }
            }
            @media (max-width:768px) {
                font-size: 11px;
            }
        }
    }
</style>