import httpInstance from "@/utils/http.js";

export function getlayouttitlelist() {
  return httpInstance({
    url: "/home/category/head",
  });
}
