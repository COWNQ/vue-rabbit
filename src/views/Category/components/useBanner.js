import { ref, onMounted } from "vue";
import { getbanners } from "@/api/home";

export function useBanner() {
  const bannerList = ref([]);
  function getbanner() {
    getbanners({ distributionSite: 2 }).then((res) => {
      bannerList.value = res.result;
    });
  }
  onMounted(() => {
    getbanner();
  });
  return {
    bannerList,
  };
}
