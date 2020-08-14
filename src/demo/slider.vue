<template>
  <div id="msg">
    <ze-slider></ze-slider>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.$message.info({
      content: "测试数据",
      duration: 3000
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
