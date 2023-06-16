<script setup>
import httpInstance from '@/utils/http'
import HomePanel from './HomePanel.vue'
import { ref, onMounted } from 'vue'

const newList = ref([])

function getnewList() {
  httpInstance.get('/home/hot').then((res) => {
    newList.value = res.result
  })
}

onMounted(() => {
  getnewList()
})
</script>

<template>
  <HomePanel title="人气推荐" subTitle="人气推荐 好多商品">
    <div>
      <ul class="goods-list">
        <li v-for="item in newList" :key="item.id">
          <RouterLink to="/">
            <img v-imglazy="item.picture" alt="" />
            <p class="name">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </HomePanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>