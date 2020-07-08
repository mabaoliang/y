<template>
    <div id="login">
        <el-container  class="c">
            <el-header  align="center">登录界面</el-header>
            <el-main>
                <el-form :model="form" label-width="100px">
                    <el-form-item label="帐号">
                        <el-input v-model="form.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.userPassword"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="priary" @click="loginWay">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
     import {login} from "@/http/api";
    //import {post} from  "@/http/http"
    export default {
        name: "Login",
        data(){
            return {
                form:{
                    userName:'',
                    userPassword:''
                }
            }
        },
        methods:{
            //登录
            loginWay:function () {
                var that=this;
               login('/api/Member/member',{openid: "oIZLk5Cb6A8mGItjIA1f_qYDmyEg",
                    team_id: 10012}).then(res=>{
                    console.log(res)
                    that.$router.push('/home')
                }).catch(e=>{
                    that.$message('请求失败')
                    console.log(e)
                })

            }
        },
        mounted(){
            document.querySelector('body').setAttribute('style', 'background-color:#0d9be8')
           // document.querySelector('body').setAttribute('style', 'margin: 0 auto; width: 100%; max-width: 750px;min-width: 300px; background:#171b2a; overflow-x: hidden;height: 100%;');
        },
        beforeDestroy() {
            document.querySelector('body').removeAttribute('style')
        },

    }
</script>

<style scoped>

 #login
 {
     background-color: #0d9be8;
     width: 100%;
     height: 100vh;
     padding: 0px;
     margin: 0px;

 }
    .c{
        position: relative;
        width: 30%;
        left: 30%;
        top: 30%;
    }
</style>