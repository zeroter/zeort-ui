<template>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" appear>
        <div class="ze-message-container" v-if="isShowMsg">
            <div class="ze-def-flex ze-message-content ze-noselect">{{content}}</div>
        </div>
    </transition>
</template>
<script>
import { setElStyle } from "../../utils/common";
let _this = {};
export default {
    name: "Message",
    data() {
        return {
            isShowMsg: true
        };
    },
    props: {
        content: {
            type: String,
        },
        duration: {
            type: Number,
        },
        top: {
            type: Number,
        },
        onClose: {
            type: Function,
        },
        type: {
            type: String
        }
    },
    created() {
        _this = this;
    },
    methods: {
        beforeEnter(el) {
            setElStyle(el, {
                transition: "all .5s ease",
                opacity: 0,
                transform: "translate(-50%, 0)",
            });
        },
        enter(el) {
            setElStyle(
                el, {
                    opacity: 1,
                    transform: `translate(-50%, ${this.top}px)`,
                }, 300, this.close
            );
        },
        leave(el) {
            setElStyle(el, {
                opacity: 0,
                transform: `translate(-50%, 0)`,
            });
            this.onClose();
        },
        close(duration = this.duration) {
            if (duration === Infinity) return;
            
            Zeort.clearCloseTimer();

            Zeort.closeTimer = setTimeout(() => {
                _this.isShowMsg = false;
                Zeort.clearCloseTimer();
            }, duration);
        },
    },
    beforeDestroy () {
        Zeort.clearCloseTimer();
    }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .ze-message-container {
        position: fixed;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        .ze-message-content {
            border-radius: 4px;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
            background: #fff;
            padding: 7px 15px;
            color: #666;
            font-size: 13px;
        }
    }
</style>