<script setup>
import {fetchHotGoodsAPI} from '@/api/datail'
import {onMounted, ref} from 'vue'
import {useRoute} from "vue-router"

const props = defineProps({
  hotTitle: {
    type: String
  },
  hotType: {
    type: Number
  }
})

const hotlist = ref({})
const route = useRoute()
const title = ref("")
const params = ref({
  id: route.params.id,
  type: props.hotType
})
const gethotlist = () => {
  fetchHotGoodsAPI(params.value).then(res => {
    console.log(res)
    hotlist.value = res.result
    if (props.hotType === 1) {
      title.value = "nihaoa"
    } else {
      title.value = "ss"
    }
  })
}
onMounted(() => {
  gethotlist()
})


</script>


<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink v-for="item in hotlist" :key="item.id" class="goods-item" to="/">
      <img :src="item.picture" alt=""/>
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style lang="scss" scoped>
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>