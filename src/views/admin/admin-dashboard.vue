<template>
    <div class="dashboard">
        <div class="overlay" v-if="!togglesidebar"></div>
        <div class="side-bar" :class="[togglesidebar?'toggle-sidebar':'']">
            <mainsidebar>
                <adminsidebar></adminsidebar>
            </mainsidebar>
        </div>
        <div class="content" :class="[togglesidebar?'content-full-width':'']">
            <div class="header"> manage students 
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div class="std-container">
                <table class="table table-primary table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">student name</th>
                            <th scope="col">student id</th>
                            <th scope="col">email</th>
                            <th scope="col">level</th>
                            <th scope="col">department</th>
                            <th scope="col">gender</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="std in students" class="item" id="record" :key="std.id"
                            @click="show_std_details(std)">
                            <td scope="row">{{std.name}}</td>
                            <td>{{std.id}}</td>
                            <td>{{std.email}}</td>
                            <td>{{std.level}}</td>
                            <td>{{std.dpt}}</td>
                            <td>{{std.gender}}</td>
                            <td class="actions">
                                <div @click="update_student(std)" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></div>
                                <div class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></div>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
            
        </div>

        <div @click="toggle_add_std=!toggle_add_std" class="add-std btn btn-primary">+</div>
        <div v-if="toggle_add_std" class="add-student">
            <div class="overlay"></div>
            <form action="/admin-dashboard" method="post">
                <div @click="toggle_add_std=!toggle_add_std" class="close btn btn-danger">X</div>
                <div class="inputs">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">nationality</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">gender</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">religion</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">day of birth</label>
                        <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">national id</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">student id</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">level</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">department</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    
                </div>
                <button type="submit" class="btn btn-primary">save</button>
            </form>
        </div>



        <div v-if="update_std" class="update-student">
            <div class="overlay"></div>
            <form action="" method="POST">
                <div @click="update_std=!update_std" class="close btn btn-danger">X</div>
                <div class="inputs">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.name">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">nationality</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.nationality">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">gender</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.gender">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">religion</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.religion">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">day of birth</label>
                        <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.dob">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">national id</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.national_id">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">student id</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.id">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">level</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.level">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">department</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.dpt">
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
                        name: {{show_std.name}}
                    </div>
                    <div class="mb-3">
                        nationality: {{show_std.nationality}}
                    </div>
                    <div class="mb-3">
                        gender: {{show_std.gender}}
                    </div>
                    <div class="mb-3">
                        religion: {{show_std.religion}}
                    </div>
                    <div class="mb-3">
                        day of birth: {{show_std.dob}}
                    </div>
                    <div class="mb-3">
                        national id: {{show_std.national_id}}
                    </div>
                    <div class="mb-3">
                        email: {{show_std.email}}
                    </div>
                    <div class="mb-3">
                        studentd id: {{show_std.id}}
                    </div>
                    <div class="mb-3">
                        level: {{show_std.level}}
                    </div>
                    <div class="mb-3">
                        deparment: {{show_std.dpt}}
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
            toggle_add_std:0,
            update_std:0,
            students:[
                {
                    name: "mohamed negm",
                    id: 12,
                    email: "negmm7588@gmail.com",
                    level: 4,
                    dpt: "cs",
                    nationality: "egyptian",
                    gender: "male",
                    religion: "muslem",
                    dob: "19-9-1999",
                    national_id: 29929
                },
                {
                    name: "mahmoude ahmed ",
                    id: 42,
                    email: "n@gmail.com",
                    level: 3,
                    dpt: "it",
                    nationality: "egyptian",
                    gender: "male",
                    religion: "muslem",
                    dob: "19-9-1999",
                    national_id: 29929
                },
                {
                    name: "amira",
                    id: 1,
                    email: "aa@gmail.com",
                    level: 4,
                    dpt: "it",
                    nationality: "egyptian",
                    gender: "female",
                    religion: "muslem",
                    dob: "19-9-1999",
                    national_id: 29929
                }
            ],
            current_std:{},
            show_std:{},
            toggle_detais:0
        }
    },
    methods:{
        update_student(std){
            this.update_std=!this.update_std,
            this.current_std = std
        },
        show_std_details(std){
            this.toggle_detais=!this.toggle_detais
            this.show_std = std
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
    .std-container{
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