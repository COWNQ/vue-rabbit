import httpInstance from "@/utils/http.js";

export function getbanners(parmas = {}) {
  const { distributionSite = "1" } = parmas;
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}
