<template>
    <div :class="`${prefix}-slider`" :style="sliderStyles" ref="sliderBox">
        <div :class="`${prefix}-slider-background`" :style="backgroundStyles"></div>
        <div :class="`${prefix}-slider-foreground`" :style="foregroundStyles" ref="foreground"></div>
        <div 
            ref="handle" 
            :class="`${prefix}-slider-handle`" 
            :style="handleStyles" 
            @mousedown="onMouseDown($event)"
        ></div>
        <!-- icon -->
        <div v-if="isShowLabel" :class="`${prefix}-slider-label`">{{value}}</div>
    </div>
</template>
<script>
import { setElStyle, on, off } from "../../utils/common";
export default {
    name: "Slider",
    data () {
        return{
            prefix: Zeort.uiPrefix,
            dragging: false,
            pointStart: {}
        }
    },
    model: {
        prop: 'value',
        event: 'changeValue'
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
            default: true
        },
        type: {
            type: String,
            default: 'left'
        },
        step: {
            type: Number,
            default: 1
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
        },
        getBit () {
            let decimal = this.step.toString().split('.')[1]
            return decimal ? decimal.length : 0 
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
            const {foreground, handle} = this.$refs;

            if (foreground && handle) {
                setElStyle(foreground, {
                    width: that.styles.width * (that.value / 100) + 'px',
                })
                setElStyle(handle, {
                    left: that.styles.width * (that.value / 100) - that.styles.radius + 'px'
                })
            }
        },
        onMouseDown (event) {
            event.preventDefault();
            this.dragging = true;

            let {offsetX, clientX} = event;
            this.pointStart = {
                offsetX,
                clientX 
            }

            on(document, 'mouseup', this.onMouseUp);
            on(document, 'mousemove', this.onMouseMove);
        },
        onMouseMove (event) {
            if(!this.dragging) return

            const that = this;
            const {foreground, handle, sliderBox} = this.$refs;

            if(!foreground || !handle || !sliderBox) return

            let {clientX} = event;
            let sliBoxLeft = sliderBox.getBoundingClientRect().left;
            let x = clientX - sliBoxLeft - this.pointStart.offsetX;

            x = that.setBoundary(x, -that.styles.radius, that.styles.width - that.styles.radius, that.step, that.styles.radius)

            setElStyle(handle, {
                left: x + 'px'
            })
            setElStyle(foreground, {
                width: x + that.styles.radius + 'px'
            })
            let value = ((x + that.styles.radius) / that.styles.width * 100).toFixed(that.getBit);
            this.$emit('changeValue', Number(value));
        },
        onMouseUp (event) {
            this.dragging = false;
            
            off(document, 'mouseup', this.onMouseUp);
            off(document, 'mousemove', this.onMouseMove);
        },
        setBoundary (value, minVal, maxVal, step, diff) {
            if(value < minVal){
                value = minVal
            }
            if(value > maxVal){
                value = maxVal
            }
            value = parseInt((value + diff) / step ) * step - diff;

            return value
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