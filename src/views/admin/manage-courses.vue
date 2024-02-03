<template>
    <div class="dashboard">
        <div class="overlay" v-if="!togglesidebar"></div>
        <div class="side-bar" :class="[togglesidebar?'toggle-sidebar':'']">
            <mainsidebar>
                <adminsidebar></adminsidebar>
            </mainsidebar>
        </div>
        <div class="content" :class="[togglesidebar?'content-full-width':'']">
            <div class="header"> manage courses
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div class="doc-container">
                <table class="table table-primary table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">course name</th>
                            <th scope="col">course id</th>
                            <th scope="col">houres</th>
                            <th scope="col">course doctor</th>
                            <th scope="col">department</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="course in courses" class="item" id="record" :key="course.id"
                            @click="show_course_details(course)">
                            <td scope="row">{{course.name}}</td>
                            <td>{{course.id}}</td>
                            <td>{{course.houres}}</td>
                            <td>{{course.doctor}}</td>
                            <td>{{course.dpt}}</td>
                            <td class="actions">
                                <div @click="update_course_mothod(course)" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></div>
                                <div class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></div>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
            
        </div>

        <div @click="toggle_add_course=!toggle_add_course" class="add-std btn btn-primary">+</div>
        <div v-if="toggle_add_course" class="add-student">
            <div class="overlay"></div>
            <form action="" method="POST">
                <div @click="toggle_add_course=!toggle_add_course" class="close btn btn-danger">X</div>
                <div class="inputs">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">course name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">course id</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">course houres</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">course doctor</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">course department</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    
                </div>
                <button type="submit" class="btn btn-primary">save</button>
            </form>
        </div>



        <div v-if="update_course" class="update-student">
            <div class="overlay"></div>
            <form action="" method="POST">
                <div @click="update_course=!update_course" class="close btn btn-danger">X</div>
                <div class="inputs">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">course name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_course.name">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">course id</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_course.id">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">course houres</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_course.houres">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">course doctor</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_course.doctor">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">course department</label>
                        <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_course.dpt">
                    </div>
                    
                </div>
                <button type="submit" class="btn btn-primary">update</button>
            </form>
        </div>

        <div v-if="toggle_detais" class="show-student">
            <div class="overlay"></div>
            <form action="" method="POST">
                <div @click="toggle_detais=!toggle_detais" class="close btn btn-danger">X</div>
                <div class="inputs">
                    <div class="mb-3">
                        name: {{show_course.name}}
                    </div>
                    <div class="mb-3">
                        nationality: {{show_course.id}}
                    </div>
                    <div class="mb-3">
                        gender: {{show_course.houres}}
                    </div>
                    <div class="mb-3">
                        religion: {{show_course.doctor}}
                    </div>
                    <div class="mb-3">
                        day of birth: {{show_course.dpt}}
                    </div>
                    
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import mainsidebar from '@/components/main-sidebar'
import adminsidebar from '@/components/admin-sidebar.vue'
export default {
    components:{
        mainsidebar,adminsidebar
    },
    computed:{
        togglesidebar(){
            return this.$store.state.toggle_sidebar
        }
    },
    data(){
        return{
            toggle_add_course:0,
            update_course:0,
            courses:[
                {
                    name: "database1",
                    id: 12,
                    dpt: "cs",
                    houres: 4,
                    doctor: "nader",
                    pre_courses: ["os1","os2"],
                    post_courses: ["database2"]
                },
                {
                    name: "programming2",
                    id: 12,
                    dpt: "cs",
                    houres: 4,
                    doctor: "nader",
                    pre_courses: ["programming1"],
                    post_courses: ["programming3"]
                },
                {
                    name: "os2",
                    id: 12,
                    dpt: "cs",
                    houres: 4,
                    doctor: "nader",
                    pre_courses: ["os1"],
                    post_courses: ["database1"]
                }
            ],
            current_course:{},
            show_course:{},
            toggle_detais:0
        }
    },
    methods:{
        update_course_mothod(course){
            this.update_course=!this.update_course,
            this.current_course = course
        },
        show_course_details(course){
            this.toggle_detais=!this.toggle_detais
            this.show_course = course
        }
    }

}
</script>

<style lang="scss" scoped>

.dashboard{
    ::-webkit-scrollbar{
    width: 0;
    }
    position: relative;
    .doc-container{
        margin-top: 100px;
        width: 100%;
        table{
            font-size: 16px;
            tr{
                cursor: pointer;
            }
            
            table , thead,tr,th,td,tbody{
                border: 1px solid #fff;
                text-align: center;
                color: #444;
            }
            td.actions{
                display: flex;
                justify-content: space-evenly;
                    @media (max-width:768px) {
                        flex-wrap: wrap;
                    }
                .btn{
                    margin: 3px;
                    @media (max-width:768px) {
                        font-size: 11px;
                    }
                }
            }
            thead{
                tr,th{
                    border-bottom: 2px solid #fff;
                    color: #F87474 ;
                }
            }
            @media (max-width:768px) {
                font-size: 8px;
            }
        }
        
    }
    .add-std{
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 100;
        font-size: 22px;
    }
    
    .add-student,
    .update-student,
    .show-student{
        width: 100%;
        height: 100vh;
        z-index: 101;
        position: fixed;
        top: 0;
        left: 0;
        .overlay{
            width: 100%;
            height: 100%;
            display: block;
        }
        form{
            width: 50%;
            height: 90%;
            padding: 20px;
            padding-top: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 102;
            background-color: #fff;
            overflow-y: scroll;
            border-radius: 5px;
            @media (max-width:650px) {
                width: 100%;
            }
            .close{
                position: absolute;
                top: 5px;
                right: 5px;
            }
            .inputs{
                padding-top: 20px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-wrap: wrap;
                &>div{
                    width: 40%;
                    label{
                        font-size: 12px;
                        width: 100%;
                        // text-align: center;
                    }
                    @media (max-width:650px) {
                        width: 97%;
                        
                    }
                }
            }
            button{
                height: fit-content;
                margin-left: 50%;
                transform: translateX(-50%);
            }
        }
    }
    .show-student{
        form{
            height: auto;
            .inputs{
                div{
                    padding: 10px;
                    border: 1px solid #bbb;
                    border-radius: 5px;
                    color: #F87474;
                    font-size: 18px;
                    @media (max-width:768px) {
                        font-size: 11px;
                    }
                }
            }
        }
    }
}    
</style>