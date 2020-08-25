<template>
    <div :class="`${prefix}-slider`" :style="sliderStyles">
        <div :class="`${prefix}-slider-background`" :style="backgroundStyles"></div>
        <div :class="`${prefix}-slider-foreground`" :style="foregroundStyles" ref="foreground"></div>
        <div :class="`${prefix}-slider-handle`" :style="handleStyles" ref="handle"></div>
        <!-- icon -->
        <div v-if="isShowLable" :class="`${prefix}-slider-label`">{{value}}</div>
    </div>
</template>
<script>
import { setElStyle } from "../../utils/common";
export default {
    name: "Slider",
    data () {
        return{
            prefix: Zeort.uiPrefix
        }
    },
    props: {
        styles: {
            type: Object,
            default: function () {
                return {
                    width: 200,
                    height: 5,
                    radius: 8,
                    background: '#999',
                    foreground: 'rgba(25, 181, 254, 1)',
                    handle: 'rgba(25, 181, 254, 1)'
                }
            }
        },
        value: {
            type: Number,
            default: 50
        },
        isShowLabel: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'left'
        },
        isShowLable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        sliderStyles () {
            return {
                width: this.styles.width + 'px',
                height: this.styles.radius * 2 + 'px'
            }
        },
        backgroundStyles () {
            return {
                background: this.styles.background,
                height: this.styles.height + 'px',
                borderRadius: this.styles.height + 'px'
            }
        },
        foregroundStyles () {
            return {
                background: this.styles.foreground,
                height: this.styles.height + 'px',
                borderRadius: this.styles.height + 'px'
            }
        },
        handleStyles () {
            return {
                background: this.styles.handle,
                width: this.styles.radius * 2 + 'px',
                height: this.styles.radius * 2 + 'px'
            }
        }
    },
    mounted () {
        this.$nextTick(()=>{
            this.init()
        })
    },
    methods: {
        init () {
            const that = this;
            const foreground = this.$refs.foreground;
            const handle = this.$refs.handle;

            if (foreground && handle) {
                setElStyle(foreground, {
                    width: that.styles.width * (that.value / 100) + 'px',
                })
                setElStyle(handle, {
                    left: that.styles.width * (that.value / 100) - that.styles.radius + 'px'
                })
            }
        }
    },
    watch: {
        value (val) {
            this.init()
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .#{$prefix}-slider{
        position: relative;
        display: flex;
        align-items: center;
        .#{$prefix}-slider-background, .#{$prefix}-slider-foreground{
            width: 100%;
            position: absolute;
        }
        .#{$prefix}-slider-background{          
            z-index: 1;
        }
        .#{$prefix}-slider-foreground{
            z-index: 2;
        }
        .#{$prefix}-slider-handle{
            border-radius: 50%;
            position: absolute;
            z-index: 3;
        }
    }
</style>