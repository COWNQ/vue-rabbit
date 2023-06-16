import { ref } from "vue";
import { defineStore } from "pinia";
import { getlayouttitlelist } from "@/api/layout.js";

export const useCounterStore = defineStore("counter", () => {
  const layoutlist = ref([]);
  function togetlist() {
    getlayouttitlelist().then((res) => {
      layoutlist.value = res.result;
    });
  }

  return { layoutlist, togetlist };
});
