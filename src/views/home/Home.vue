<template>
    <div id="home">
        <el-container>
            <el-header  >欢迎你登录XX系统</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu  :default-active="$route.path" router >
                        <el-menu-item index="/va">
                            <i class="el-icon-location"></i>
                            <span>标签-</span>
                        </el-menu-item>
                         <el-menu-item index="/vb">
                             <i class="el-icon-location"></i>
                             <span>标签二</span>
                         </el-menu-item>
                         <el-submenu  index="/home">
                             <template slot="title">
                                 <i class="el-icon-location"></i>
                                 <span>标签三</span>
                             </template>
                             <el-menu-item index="/vc">标签三-1</el-menu-item>
                             <el-menu-item index="/vd">标签三-2</el-menu-item>
                         </el-submenu>

                    </el-menu>
                </el-aside>
                <el-main > <router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {

            }
        },
        methods:{

        },
        mounted(){  //跳到登录界面
            // var that=this
           // setTimeout(function () {
           //     console.log('---- 退出-------')
           //     that.$router.push('/')
           // },30000)
        }
    }

</script>

<style scoped>
 .el-header
 {
     width: 100%;
     line-height: 60px;
     /*line-height: 100px;*/
     text-align: center;
     background-color: blanchedalmond;
 }
.el-aside ,.el-menu
{
    width: 200px;
    min-height:980px;
    color: #ffffff;
    background-color: #72858d;
    padding: 0px;
}

.m{
    width: 100%;
    height: 100%;
}
/*html,body*/
/*{*/
/*    height: 100%;*/
/*}*/
 #home
 {
     background-color: #ffffff;
     /*height: 980px;*/
     padding: 0px;
     margin: 0px;
 }
</style>