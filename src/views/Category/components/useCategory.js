import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
import httpInstance from "@/utils/http.js";

export function useCategroy() {
  const categroyData = ref({});
  const router = useRoute();
  function getcategroyAPI(id = router.params.id) {
    httpInstance.get(`/category?id=${id}`).then((res) => {
      categroyData.value = res.result;
    });
  }
  onMounted(() => {
    getcategroyAPI();
  });

  //监听路由变化
  onBeforeRouteUpdate((to) => {
    getcategroyAPI(to.params.id);
  });

  return {
    categroyData,
  };
}
