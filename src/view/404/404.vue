<template>
    <div class="not-found">
        <h1>404 - 页面未找到</h1>
        <p>很抱歉，您访问的页面不存在。</p>
        <router-link to="/index">返回首页</router-link>
    </div>
</template>
  
<script>
export default {
    name: 'NotFound',
}
</script>
  
<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

p {
    font-size: 24px;
    margin-bottom: 20px;
}

router-link {
    font-size: 20px;
    color: #007bff;
    text-decoration: none;
}
</style>