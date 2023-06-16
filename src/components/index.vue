<script setup>
import {ref, watch} from 'vue'
import {useMouseInElement} from '@vueuse/core'


// 图片列表
const imageList = [
  "https://yanxuan-item.nosdn.127.net/d917c92e663c5ed0bb577c7ded73e4ec.png",
  "https://yanxuan-item.nosdn.127.net/e801b9572f0b0c02a52952b01adab967.jpg",
  "https://yanxuan-item.nosdn.127.net/b52c447ad472d51adbdde1a83f550ac2.jpg",
  "https://yanxuan-item.nosdn.127.net/f93243224dc37674dfca5874fe089c60.jpg",
  "https://yanxuan-item.nosdn.127.net/f881cfe7de9a576aaeea6ee0d1d24823.jpg"
]
let index_image = ref(0);

function bigimagecover(i) {
  console.log(i)
  index_image.value = i
}

// 控制滑块：控制xy轴坐标
const target = ref(null)

const {elementX, elementY, isOutside} = useMouseInElement(target)
watch([elementX, elementY], () => {
  console.log(变化了);
})

</script>


<template>
  {{ elementX }} {{ elementY }} {{ isOutside }}
  <div class="goods-image">
    <!-- 左侧大图-->
    <div ref="target" class="middle">
      <img :src="imageList[index_image]" alt=""/>
      <!-- 蒙层小滑块 -->
      <div :style="{ left: `${elementX}px`, top: `${elementY}px` }" class="layer"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i" :class="{active:i===index_image}" @mouseenter="bigimagecover(i)">
        <img :src="img" alt=""/>
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div v-show="false" :style="[
      {
        backgroundImage: `url(${imageList[0]})`,
        backgroundPositionX: `0px`,
        backgroundPositionY: `0px`,
      },
    ]" class="large"></div>
  </div>
</template>

<style lang="scss" scoped>
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>