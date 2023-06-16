//使用vueuse
import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    // 创建全局指令
    app.directive("imglazy", {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          el.src = binding.value;
          stop();
        });
      },
    });
  },
};
