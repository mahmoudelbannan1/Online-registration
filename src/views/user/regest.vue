<template>
    <div class="dashboard">
        <div class="overlay" v-if="!togglesidebar"></div>
        <div class="side-bar" :class="[togglesidebar?'toggle-sidebar':'']">
            <mainsidebar>
                <usersidebar></usersidebar>
            </mainsidebar>
        </div>
        <div class="content" :class="[togglesidebar?'content-full-width':'']">
            <div class="header">regest subjects </div>

            <div class="regest">
                <div class="regested card">
                    <div class="title"><i class="fa-solid fa-check-to-slot"></i> regested subjects</div>

                    <div class="sub" v-for="(sub , i) in regested" :key="i">
                        <div class="sub-name">{{sub.sub_name}}</div>
                        <div class="sub-name">dr/ {{sub.doc_name}}</div>
                        <div class="sub-name">{{sub.time}}</div>
                        <div class="sub-name">{{sub.hours_num}} h</div>
                        <div class="add btn btn-danger" @click="unregest(sub)">add</div>
                    </div>
                    <div v-if="total_hours < 15 || total_hours > 20 " class="warning">the total houres is not in the range</div>
                </div>

                <div class="subjects card">
                    <div class="title"><i class="fa-solid fa-lock-open"></i> open subjects</div>
                    <div class="sub" v-for="(sub , i) in subjects" :key="i">
                        <div class="sub-name">{{sub.sub_name}}</div>
                        <div class="sub-name">dr/ {{sub.doc_name}}</div>
                        <div class="sub-name">{{sub.time}}</div>
                        <div class="sub-name">{{sub.hours_num}} h</div>
                        <div class="add btn btn-info" @click="regest_sub(sub)">add</div>
                    </div>
                </div>
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
            subjects:[
                {
                    sub_name: "or1",
                    doc_name: "nancy",
                    time: "sunday",
                    hours_num: 3,
                },
                {
                    sub_name: "or2",
                    doc_name: "nancy",
                    time: "sunday",
                    hours_num: 3,
                },
                {
                    sub_name: "math1",
                    doc_name: "kafafy",
                    time: "sunday",
                    hours_num: 3,
                },
                {
                    sub_name: "os1",
                    doc_name: "el sisy",
                    time: "sunday",
                    hours_num: 3,
                },
                {
                    sub_name: "os2",
                    doc_name: "sakr",
                    time: "sunday",
                    hours_num: 4,
                },
                {
                    sub_name: "nlp",
                    doc_name: "hussine",
                    time: "sunday",
                    hours_num: 5,
                },
                
            ],
            regested:[],
            total_hours:0,
        }
    },
    methods:{
        regest_sub(sub){
            this.regested.push(sub)
            this.subjects = this.subjects.filter(el=>{
                return el!==sub
            })
            this.total_hours += sub.hours_num
        },
        unregest(sub){
            this.subjects.push(sub)
            this.regested = this.regested.filter(el=>{
                return el!==sub
            })
        }
    }

}
</script>

<style lang="scss" scoped>
    .regest{
        position: relative;
        top: 100px;
        &>div{
            min-height: 200px;
            background-color: #fff;
            margin-bottom: 20px;
            padding: 15px;
            position: relative;
            .title{
                position: absolute;
                top: -35px;
                right: 20px
            }
            .sub{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
                padding: 5px 10px ;
                border: 1px solid #bbb;
                border-radius: 4px;
                @media (max-width:768px) {
                    font-size: 13px;
                    
                }
            }
        }
        .regested{
            padding-bottom: 50px;
            .title{
                color: crimson;
            }
            .warning{
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                padding: 10px;
                background-color: #ed143d61;
                color: #444;
                border-radius: 4px;
            }
        }
        .subjects{
            margin-top: 50px;
            .title{
                color: var(--main-color);
            }
        }
    }
</style>