<template>
    <div>
        <el-table
                :data="tableData"
                align="center"
                style="width: 100%">
            <el-table-column

                    label="图片"
                    >
                <template slot-scope="scope">
                    <el-image :src="scope.row.goods_Image" style="width:80px"></el-image>
                </template>
            </el-table-column>
            <el-table-column
                    prop="goods_catename"
                    label="类型"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="goods_title"
                    label="标题"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="goods_desc"
                    label="简介"
                    width="180"
                 >
            </el-table-column>
            <el-table-column
                    prop="goods_original"
                    label="价格">
            </el-table-column>
            <el-table-column
                    prop="library"
                    label="库存">
            </el-table-column>
            <el-table-column
                    prop="goods_sales"
                    label="销售">
            </el-table-column>
            <el-table-column
                    prop="create_at"
                    label="日期">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {loadList} from "@/http/api";

    export default {
        name: "VpageA",
        data(){
            return{
                tableData: []
            }
        },
        created(){

            loadList('/api/Index/timelimit',{cate_id: -1,
                openid: "oIZLk5Cb6A8mGItjIA1f_qYDmyEg",
                page: 10,
                team_id: 10012}).then(res=>{
                     console.log(res)
                this.tableData=res.goods
            }).catch(err=>{
                console.log(err)
            })
        }
    }
</script>

<style scoped>

</style>