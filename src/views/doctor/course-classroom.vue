<template>
    <div class="classroom">
        <div v-if="toggle_add_lec" class="overlay"></div>
        <div class="header">
            <router-link to="#" class="profile">
                <img src="../../assets/avatar.jpg" alt="">
                <p>use name</p>
            </router-link>
            <div class="links">
                <router-link :to="{name:'classroom'}" class="active">lectures</router-link>
                <router-link :to="{name:'students'}">students</router-link>
                <router-link :to="{name:'doctordashboard'}">all subjects</router-link>
            </div>
            <div class="sub-name">
                subject name
            </div>
        </div>
        <div class="container">
            <div class="lecture card" v-for="(lec , i) in lectures" :key="i">
                <div class="delete btn btn-danger"><i class="fa-solid fa-trash-can"></i></div>
                <div class="title">{{lec.lec_name}}</div>
                <div class="date">{{lec.publish_date}}</div>
                <div class="desc">{{lec.desc}}</div>
                <div class="source">
                    <a :href="lec.source" target="_blank">{{lec.lec_name}}</a>
                    <a :href="lec.source" class="" :download="lec.lec_name"><i class="fa-solid fa-download"></i></a>
                </div>
            </div>
        </div>
        <div @click="toggle_add_lec=!toggle_add_lec" class="add btn btn-primary"><i class="fa-solid fa-plus"></i></div>
        <div v-if="toggle_add_lec" class="add-lec-form">
            <div @click="toggle_add_lec=!toggle_add_lec" class="close btn btn-danger">X</div>
            <form action="" method="POST">
                <input type="text" name="lec_name" placeholder="lecture title">
                <input type="text" name="lec_desc" placeholder="lecture descreption">
                <input type="file" name="lecture" placeholder="">
            </form>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            show_std: 0,
            toggle_add_lec: 0,
            lectures:[
                {
                    lec_name:"first lect",
                    publish_date: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis",
                    source:"../../assets/fwd2.PNG"
                },
                {
                    lec_name:"second lect",
                    publish_date: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis",
                    source:"../../assets/fwd2.PNG"
                },
                {
                    lec_name:"third lect",
                    publish_date: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis",
                    source:"../../assets/fwd2.PNG"
                },
                {
                    lec_name:"fourth lect",
                    publish_date: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis",
                    source:"../../assets/fwd2.PNG"
                },
                {
                    lec_name:"fourth lect",
                    publish_date: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis",
                    source:"../../assets/fwd2.PNG"
                }

            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    .classroom{
        width: 100%;
        min-height: 100vh;
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
        .container{
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(auto-fill , minmax(250px , 1fr));
            padding-top: 50px;
            position: relative;
            top: 120px;
            height: 100%;
            margin-bottom: 150px;
            .lecture{
                padding: 20px;
                background-color: rgb(0 72 255 / 12%);
                position: relative;
                overflow: hidden;
                &:hover{
                    .delete{
                        top: 10px;
                    }
                }
                .delete{
                    position: absolute;
                    top: -100px;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: all .3s ease-in-out;
                }
                .title{
                    font-size: 22px;
                    font-weight: bold;
                    color: #666;
                }
                .date{
                    color: crimson;
                    font-size: 12px;
                }
                .desc{
                    margin-top: 10px;
                }
                .source{
                    margin-top: 10px;
                    text-align: center;
                    background-color: var(--main-color);
                    padding: 10px;
                    border-radius: 4px;
                    a{
                        padding: 15px;
                        font-size: 20px;
                        color: #fff;
                    }
                }
            }

        }
        .add{
            position: fixed;
            bottom: 10px;
            right: 10px;
            font-size: 20px;
        }
        .add-lec-form{
            width: 400px;
            padding: 20px;
            background-color: #fff;
            z-index: 101;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            border-radius: 5px;
            // @media (max-width:600px) {
            //     width: 90%;
            // }
            .close{
                position: absolute;
                right: 5px;
                top: 5px;
            }
            form{
                width: 100%;
                height: 100%;
                margin-top: 40px;
                input{
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #bbb;
                    border-radius: 4px;
                }
            }
        }
    }

</style>