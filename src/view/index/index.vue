<template>
    <div class="container">
        index
        {{ tenantInfo }}
    </div>
</template>
<style></style>
<script setup>
import { storeToRefs } from 'pinia'
import { store_tenant } from '@/store/tenant.ts'
const store = store_tenant()

const { tenantInfo } = storeToRefs(store)

</script>