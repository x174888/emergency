<template>
  <div class="whole">
    <div class="left">
      123
    </div>
    <div class="right">

    </div>

  </div>

</template>

<script>
export default {
  name: "shishitongxun"
}
</script>

<style>
.whole{
  width: 100%;
  height:100%;
  background-color: #fafafa;
  padding: 16px;
}
.left{
  width: 240px;
  height: 100%;
  background:pink;
  margin-right:24px;
}
.right {
  height: 100%;
  overflow: hidden; /* 触发bfc */
  background: green;
}
</style>