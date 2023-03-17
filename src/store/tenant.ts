import { defineStore } from "pinia";
import { ref } from "vue";

export const store_tenant = defineStore("tenant", () => {
  const tenantInfo = ref();

  return { tenantInfo };
});
