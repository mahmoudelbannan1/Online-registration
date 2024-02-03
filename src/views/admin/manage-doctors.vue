<template>
    <div class="dashboard">
        <div class="overlay" v-if="!togglesidebar"></div>
        <div class="side-bar" :class="[togglesidebar?'toggle-sidebar':'']">
            <mainsidebar>
                <adminsidebar></adminsidebar>
            </mainsidebar>
        </div>
        <div class="content" :class="[togglesidebar?'content-full-width':'']">
            <div class="header"> manage doctors
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div class="doc-container">
                <table class="table table-primary table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">doctor name</th>
                            <th scope="col">doctor id</th>
                            <th scope="col">email</th>
                            <th scope="col">department</th>
                            <th scope="col">gender</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="doc in doctors" class="item" id="record" :key="doc.id"
                            @click="show_doc_details(doc)">
                            <td scope="row">{{doc.name}}</td>
                            <td>{{doc.id}}</td>
                            <td>{{doc.email}}</td>
                            <td>{{doc.dpt}}</td>
                            <td>{{doc.gender}}</td>
                            <td class="actions">
                                <div @click="update_doctor(doc)" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></div>
                                <div class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></div>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
            
        </div>

        <div @click="toggle_add_doc=!toggle_add_doc" class="add-std btn btn-primary">+</div>
        <div v-if="toggle_add_doc" class="add-student">
            <div class="overlay"></div>
            <form action="" method="POST">
                <div @click="toggle_add_doc=!toggle_add_doc" class="close btn btn-danger">X</div>
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
                        <label for="exampleInputEmail1" class="form-label">department</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">courses</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    
                </div>
                <button type="submit" class="btn btn-primary">save</button>
            </form>
        </div>



        <div v-if="update_doc" class="update-student">
            <div class="overlay"></div>
            <form action="" method="POST">
                <div @click="update_doc=!update_doc" class="close btn btn-danger">X</div>
                <div class="inputs">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_doc.name">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">nationality</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_doc.nationality">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">gender</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_doc.gender">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">religion</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_doc.religion">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">day of birth</label>
                        <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_doc.dob">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">national id</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_doc.national_id">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_doc.email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">student id</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_doc.id">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">department</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_doc.dpt">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">courses</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_doc.courses">
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
                        name: {{show_doc.name}}
                    </div>
                    <div class="mb-3">
                        nationality: {{show_doc.nationality}}
                    </div>
                    <div class="mb-3">
                        gender: {{show_doc.gender}}
                    </div>
                    <div class="mb-3">
                        religion: {{show_doc.religion}}
                    </div>
                    <div class="mb-3">
                        day of birth: {{show_doc.dob}}
                    </div>
                    <div class="mb-3">
                        national id: {{show_doc.national_id}}
                    </div>
                    <div class="mb-3">
                        email: {{show_doc.email}}
                    </div>
                    <div class="mb-3">
                        studentd id: {{show_doc.id}}
                    </div>
                    <div class="mb-3">
                        deparment: {{show_doc.dpt}}
                    </div>
                    <div class="mb-3">
                        courses: {{show_doc.courses}}
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
            toggle_add_doc:0,
            update_doc:0,
            doctors:[
                {
                    name: "mohamed negm",
                    id: 12,
                    email: "negmm7588@gmail.com",
                    dpt: "cs",
                    nationality: "egyptian",
                    gender: "male",
                    religion: "muslem",
                    dob: "19-9-1999",
                    national_id: 29929,
                    courses:[]
                },
                {
                    name: "mahmoude ahmed ",
                    id: 42,
                    email: "n@gmail.com",
                    dpt: "it",
                    nationality: "egyptian",
                    gender: "male",
                    religion: "muslem",
                    dob: "19-9-1999",
                    national_id: 29929,
                    courses:[]
                },
                {
                    name: "amira",
                    id: 1,
                    email: "aa@gmail.com",
                    dpt: "it",
                    nationality: "egyptian",
                    gender: "female",
                    religion: "muslem",
                    dob: "19-9-1999",
                    national_id: 29929,
                    courses: []
                }
            ],
            current_doc:{},
            show_doc:{},
            toggle_detais:0
        }
    },
    methods:{
        update_doctor(doc){
            this.update_doc=!this.update_doc,
            this.current_doc = doc
        },
        show_doc_details(doc){
            this.toggle_detais=!this.toggle_detais
            this.show_doc = doc
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