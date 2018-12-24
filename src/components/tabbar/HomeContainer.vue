<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  margin-top: -20px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: yellowgreen;
    }
    &:nth-child(2) {
      background-color: burlywood;
    }
    &:nth-child(3) {
      background-color: grey;
    }
  }
}
</style>
