<template>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div class="ze-message" v-if="isShowMsg">
            <div class="ze-def-flex ze-message-content ze-noselect">
                {{content}}
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'ze-message',
    data(){
        return{
            isShowMsg: false
        }
    },
    props: {
        content: {
            type: String
        },
        duration: {
            type: Number
        },
        top: {
            type: Number
        }
    },
    computed: {

    },
    methods: {
        beforeEnter (el) {
            el.style.transition = "all .5s ease";
            el.style.opacity = 0;
            el.style.transform = "translate(-50%, 0)"
        },
        enter (el) {
            setTimeout(()=>{
                el.style.transition = "all .5s ease";
                el.style.opacity = 1;
                el.style.transform = `translate(-50%, ${this.top}px)`;
            },300)
        },
        leave (el) {
            setTimeout(()=>{
                el.style.transition = "all .5s ease";
                el.style.opacity = 1;
                el.style.transform = "translate(-50%, 0px)";
            },300)
        },
        close () {
            setTimeout(()=>{
                this.isShowMsg = false
            },this.duration)
        }
    },
    mounted() {
        this.isShowMsg = true;
        this.close()
    },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .ze-message{
        position: fixed;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        .ze-message-content{
            border-radius: 4px;
            box-shadow: 0 1px 6px rgba(0,0,0,.2);
            background: #fff;
            padding: 7px 15px;
            color: #666;
            font-size: 13px;
        }
    }
</style>