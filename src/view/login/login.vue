<template>
    <div class="container">
        login{{ formList }}
        <el-button @click="login()">登陆</el-button>
    </div>
</template>
<style>
    
</style>
<script setup>
    import { tenantlogin } from '@/api/tenant.js'
    import { useRouter } from 'vue-router';

    const formList = ref()
    const router = useRouter() 

    function login(){
        tenantlogin({
            "tenantPhone": "17698789517",
            "tenantPassword": "123456"
        }).then(res=>{
            if(res.code == 200){
                ElMessage({
                    message: '登陆成功！',
                    type: 'success',
                })
                console.log(res.token)
                window.localStorage.setItem('token',res.data.token)
                this.formList = res
                router.push({
                    path: '/'
                })
            }
            
        })
    }
</script>