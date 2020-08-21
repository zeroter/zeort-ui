<template>
    <div id="msg">
        <ze-slider></ze-slider>
        <button @click="btn">点击</button>
        <button @click="clo">取消</button>
        <ze-button type="info" @click="fn">默认按钮</ze-button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            num: 0,
        };
    },
    mounted() {},
    methods: {
        btn() {
            this.$message.info('这是一条提示语句');
        },
        clo() {
            this.$message.remove()
        },
        fn(data) {
            console.log(data)
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .aa{
        padding: 20px 40px;
    }
</style>
