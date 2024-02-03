<template>
    <div class="container-fluid">
        <div class="overlay"></div>
        <div class="login-form">
            <div class="account-img"><img src="../assets/avatar.jpg" alt="profile image"></div>
            <form @submit.prevent="login" autocomplete="off">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" v-model="email"
                    class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" name="email"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" v-model="password"
                    class="form-control" id="exampleInputPassword1" />
                </div>
                <button  type="submit" class="btn btn-primary">Submit</button>
                <div v-if="error" class="error">{{error}}</div>
            </form>
        </div>
    </div>

</template>

<script>
import auth from '../database/auth'
export default {
    data(){
        return{
            email: "negm",
            password: "222",
            error: null
        }
    },
    methods:{
        async login(e){
            try{
                e.preventDefault();
                const response =  await auth.login({
                    email:this.email,
                    password: this.password
                })
                // this.$store.dispatch('settoken',response.data.token)
                // this.$store.dispatch('setuser',response.data.user)
                // console.log(response.data.token,response.data.user)
                this.$router.push({name: 'userdashboard'})
            } catch(err){
                this.error = "invalid"
            }
            
            

        },
        logout(){
            this.$store.dispatch('settoken',null)
            this.$store.dispatch('setuser',null)
            this.$router.push({name:'login'})
        }
    }

}
</script>

<style lang="scss" scoped>
    .container-fluid{
        height: 100vh;
        width: 100%;
        display: grid;
        place-items: center;
        background-image: url("../assets/login-bg.jpg");
        background-size: cover;
        background-position: center;
        position: relative;
        .login-form{
            background-color: #fff;
            padding: 50px 30px 30px;
            color: #333;
            position: relative;
            z-index: 101;
            border-radius: 5px;
            width: 50%;
            @media (max-width:768px) {
                width: 99%;
                
            }
            .account-img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                position: absolute;
                top: -50px;
                left: 50%;
                transform: translateX(-50%);
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            form{
                width: 100%;
                .radio{
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                    flex-wrap: wrap;
                }
                input{
                    border: 1px solid #333;
                }
            } 
        }
    }




</style>