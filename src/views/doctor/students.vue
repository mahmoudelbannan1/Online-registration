<template>
    <div class="students">
        
        <div class="header">
            <router-link to="#" class="profile">
                <img src="../../assets/avatar.jpg" alt="">
                <p>use name</p>
            </router-link>
            <div class="links">
                <router-link :to="{name:'classroom'}">lectures</router-link>
                <router-link :to="{name:'students'}" class="active">students</router-link>
                <router-link :to="{name:'doctordashboard'}">all subjects</router-link>
            </div>
            <div class="sub-name">
                subject name
            </div>
        </div>
        <div class="std-container">
            <table class="table table-primary table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">student name</th>
                        <th scope="col">midterm</th>
                        <th scope="col">quize1</th>
                        <th scope="col">quize2</th>
                        <th scope="col">project</th>
                        <th scope="col">practice</th>
                        <th scope="col">final</th>
                        <th scope="col">total</th>
                        <th scope="col">GPA</th>
                        <th scope="col">edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="std in students" class="item" id="record" :key="std.id" 
                        >
                        <td scope="row">{{std.name}}</td>
                        <td>{{std.midterm}}</td>
                        <td>{{std.quize1}}</td>
                        <td>{{std.quize2}}</td>
                        <td>{{std.project}}</td>
                        <td>{{std.practice}}</td>
                        <td>{{std.final}}</td>
                        <td>{{std.midterm+std.quize1+std.quize2+std.project+std.practice+std.final}}</td>
                        <td>{{(std.midterm+std.quize1+std.quize2+std.project+std.practice+std.final)/100}}</td>
                        <td class="edit"><button @click="update_student(std)" class="btn btn-primary">edit</button></td>
                    </tr>
                </tbody>
            </table> 
        </div>

        <div v-if="toggle_edit_degree" class="edit-degree">
            <div v-if="toggle_edit_degree" class="overlay"></div>
            <form @submit.prevent="submit">
                <div @click="toggle_edit_degree=!toggle_edit_degree" class="close btn btn-danger">X</div>
                <div class="name">{{current_std.id}} : {{current_std.name}}</div>
                <div class="inputs">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">midterm</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="current_std.midterm">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">quize1</label>
                        <input type="number" class="form-control" id="exampleInputPassword1"
                            v-model="current_std.quize1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">quize2</label>
                        <input type="number" class="form-control" id="exampleInputPassword1"
                            v-model="current_std.quize2">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">project</label>
                        <input type="number" class="form-control" id="exampleInputPassword1"
                            v-model="current_std.project">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">practice</label>
                        <input type="number" class="form-control" id="exampleInputPassword1"
                            v-model="current_std.practice">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">final</label>
                        <input type="number" class="form-control" id="exampleInputPassword1"
                            v-model="current_std.final">
                    </div>
                    
                </div>
                <button type="submit" class="btn btn-primary">update</button>
                <div class="direction">
                    <div @click="prev_std" class="prev btn btn-success">prev</div>
                    <div @click="next_std" class="next btn btn-success">next</div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            toggle_edit_degree: 0,
            students:[
                {
                    "id":1,
                    "name":"mohame negm",
                    "midterm": 40,
                    "quize1": 88,
                    "quize2": 75,
                    "project": 10,
                    "practice": 0,
                    "final": 0
                },
                {
                    "id":2,
                    "name":"amira",
                    "midterm": 99,
                    "quize1": 8,
                    "quize2": 2,
                    "project": 7,
                    "practice": 0,
                    "final": 0
                },
                {
                    "id":3,
                    "name":"mohame salama",
                    "midterm": 0,
                    "quize1": 0,
                    "quize2": 44,
                    "project": 0,
                    "practice": 0,
                    "final": 4
                },
                {
                    "id":4,
                    "name":"mohame",
                    "midterm": 7,
                    "quize1": 0,
                    "quize2": 5,
                    "project": 0,
                    "practice": 3,
                    "final": 0
                },
                {
                    "id":5,
                    "name":"mahmoud",
                    "midterm": 0,
                    "quize1": 0,
                    "quize2": 0,
                    "project": 0,
                    "practice": 0,
                    "final": 0
                }
            ],
            current_std:{},
            current_std_index: 0
        }
    },
    methods:{
        update_student(std){
            this.toggle_edit_degree = 1
            this.current_std = std
            this.current_std_index = this.students.indexOf(std)
        },
        next_std(){
            this.current_std_index += 1
            if(this.current_std_index >= this.students.length){
                this.current_std_index = 0
            }
            this.update_student(this.students[this.current_std_index])
        },
        prev_std(){
            this.current_std_index -= 1
            if(this.current_std_index < 0){
                this.current_std_index = this.students.length-1
            }
            this.update_student(this.students[this.current_std_index])
        }

    }
}
</script>

<style lang="scss" scoped>
    ::-webkit-scrollbar{
        width: 0;
    }
    .students{
        width: 100%;
        min-height: 100vh;
        position: relative;
        top: 0;
        background-color: var(--contentbg);
        padding: 20px;
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
            .links{
                width: fit-content;
                display: flex;
                font-size: 20px;
                font-weight: 500;
                @media (max-width:768px) {
                    font-size: 16px;
                }
                a{
                    padding: 10px;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    &:hover,
                    &.active{
                        color: var(--main-color);
                    }
                }
            }
            .sub-name{
                color: var(--main-color);
                font-size: 22px;
                font-weight: 100;
                @media (max-width:768px) {
                    font-size: 16px;
                }
            }
        }
        .std-container{
            padding-top: 150px;
            height: 100%;
            width: 100%;
            table , thead,tr,th,td,tbody{
                border: 1px solid #fff;
                text-align: center;
            }
            thead{
                border-bottom: 2px solid #fff;
            }
        }
        .edit-degree{
            width: 100%;
            height: 100vh;
            z-index: 101;
            position: fixed;
            top: 0;
            left: 0;
            form{
                width: 450px;
                height: 80%;
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
                .name{
                    color: var(--main-color);
                    font-size: 22px;
                    font-weight: bold;
                    text-align: center;
                    text-transform: capitalize;
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
                            text-align: center;
                        }
                    }
                }
                button{
                    height: fit-content;
                    margin-left: 50%;
                    transform: translateX(-50%);
                }
                .direction{
                    margin-top: 30px;
                    display: flex;
                    justify-content: center;
                    .next,.prev{
                        margin: 20px;
                    }
                }
                
            }
        }
    }









</style>