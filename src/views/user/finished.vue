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

            <div class="finished">
                <table class="table table-primary table-striped table-hover">
                    <thead>
                        <tr>
                            <!-- <th scope="col">#</th> -->
                            <th scope="col">subject name</th>
                            <th scope="col">hours</th>
                            <th scope="col">year</th>
                            <th scope="col">smester</th>
                            <th scope="col">degree</th>
                            <th scope="col">gpa</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr v-for="(f , i) in finished" :key="i">
                            <!-- <td>{{f.number}}</td> -->
                            <td>{{f.sub_name}}</td>
                            <td>{{f.hours}}</td>
                            <td>{{f.year}}</td>
                            <td>{{f.smester}}</td>
                            <td>{{f.degree}}</td>
                            <td>{{f.gpa}}</td>
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
        }
    },
    data(){
        return{
            finished: [
                {
                    "number":1,
                    "sub_name":"database",
                    "hours":"3h",
                    "year":"first year",
                    "smester":2,
                    "degree":80,
                    "gpa":3.7
                },
                {
                    "number":2,
                    "sub_name":"file structure",
                    "hours":"3h",
                    "year":"second year",
                    "smester":1,
                    "degree":60,
                    "gpa":2.2
                },
                {
                    "number":3,
                    "sub_name":"or",
                    "hours":"2h",
                    "year":"second year",
                    "smester":2,
                    "degree":85,
                    "gpa":3.8
                },
                {
                    "number":4,
                    "sub_name":"nlp",
                    "hours":"3h",
                    "year":"fourth year",
                    "smester":1,
                    "degree":90,
                    "gpa":3.7
                },
                {
                    "number":5,
                    "sub_name":"math",
                    "hours":"4h",
                    "year":"first year",
                    "smester":1,
                    "degree":80,
                    "gpa":3.7
                },
                {
                    "number":6,
                    "sub_name":"kps",
                    "hours":"3h",
                    "year":"fourth year",
                    "smester":1,
                    "degree":70,
                    "gpa":3
                },
                {
                    "number":7,
                    "sub_name":"os1",
                    "hours":"3h",
                    "year":"second year",
                    "smester":1,
                    "degree":60,
                    "gpa":2
                },
                {
                    "number":8,
                    "sub_name":"os2",
                    "hours":"3h",
                    "year":"fourth year",
                    "smester":1,
                    "degree":80,
                    "gpa":3.7
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    .finished{
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