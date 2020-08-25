<template>
    <button :class="classes" :disabled="disabled" @click="handleClick" :ref="btn_ref">
        <slot></slot>
    </button>
</template>
<script>
import { setElStyle } from "../../utils/common";
export default {
    name: `Button`,
    data () {
        return{
            baseClass: `${Zeort.uiPrefix}-button`,
            btn_ref: `${Zeort.uiPrefix}-button-${new Date().getTime()}`
        }
    },
    props: {
        type: {
            type: String,
        },
        size: {
            type: String,
        },
        disabled: {
            type: Boolean,
        },
        isAnimation: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        classes () {
            return [
                this.baseClass,
                {
                    [`${Zeort.uiPrefix}-button-${this.type}`]: this.type,
                    [`${Zeort.uiPrefix}-button-${this.size}`]: this.size,
                    [`${Zeort.uiPrefix}-button-${this.disabled ? 'disabled' : ''}`]: this.disabled
                }
            ]
        }
    },
    methods: {
        handleClick (event) {
            const button = this.$refs[this.btn_ref];

            if(this.isAnimation && event && button) {
                this.animation(event, button)
            }

            this.$emit('click', event)
        },
        animation (event, button) {
            if(!event) return

            let x = event.clientX;
            let y = event.clientY;
            
            let btnX = button.getBoundingClientRect().left;
            let btnY = button.getBoundingClientRect().top;

            let span = document.createElement('span');
            span.className = `${Zeort.uiPrefix}-button-animation`;
            span.style.left = x - btnX + 'px';
            span.style.top = y - btnY + 'px';
            button.appendChild(span);
            
            setTimeout(() => {
                button.removeChild(span)
            }, 600)
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .#{$prefix}-button{
        padding: 10px 16px;
        font-size: $text;
        background-color: white;
        outline: none;
        border: 1px solid #999;
        line-height: 1;
        color: $default;
        border-radius: 4px;
        cursor: pointer;
        transition: all .15s;
        position: relative;
        overflow: hidden;
        &:not(:disabled):hover{
            color: $default-hover;
            border-color: $default-hover;
        }
    }
    .#{$prefix}-button-info{
        background-color: $info;
        color: #fff;
        border-color: $info;
        &:not(:disabled):hover{
            background-color: $info-hover;
            color: #fff;
            border-color: $info-hover;
        }
    }
    .#{$prefix}-button-primary{
        background-color: $primary;
        color: #fff;
        border-color: $primary;
        &:not(:disabled):hover{
            background-color: $primary-hover;
            color: #fff;
            border-color: $primary-hover;
        }
    }
    .#{$prefix}-button-success{
        background-color: $success;
        color: #fff;
        border-color: $success;
        &:not(:disabled):hover{
            background-color: $success-hover;
            color: #fff;
            border-color: $success-hover;
        }
    }
    .#{$prefix}-button-warning{
        background-color: $warning;
        color: #fff;
        border-color: $warning;
        &:not(:disabled):hover{
            background-color: $warning-hover;
            color: #fff;
            border-color: $warning-hover;
        }
    }
    .#{$prefix}-button-error{
        background-color: $error;
        color: #fff;
        border-color: $error;
        &:not(:disabled):hover{
            background-color: $error-hover;
            color: #fff;
            border-color: $error-hover;
        }
    }
    .#{$prefix}-button-disabled{
        opacity: $disabled;
        cursor: not-allowed;
    }
</style>