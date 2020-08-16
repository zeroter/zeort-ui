<template>
    <button :class="classes" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "ZeButton",
    data () {
        return{
            baseClass: 'ze-button'
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
        }
    },
    computed: {
        classes () {
            return [
                this.baseClass,
                {
                    [`ze-button-${this.type}`]: this.type,
                    [`ze-button-${this.size}`]: this.size,
                    [`ze-button-${this.disabled ? 'disabled' : ''}`]: this.disabled
                }
            ]
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .ze-button{
        padding: 10px 16px;
        font-size: 14px;
        background-color: white;
        outline: none;
        border: 1px solid #999;
        line-height: 1;
        color: #666;
        border-radius: 4px;
        cursor: pointer;
        transition: all .15s;
        &:hover{
            color: #19B5FE;
            border-color: #19B5FE;
        }
    }
    .ze-button-info{
        background-color: rgba(25, 181, 254, 1);
        color: #fff;
        border-color: rgba(25, 181, 254, 1);
        &:hover{
            background-color: rgba(25, 181, 254, .7);
            color: #fff;
            border-color: rgba(25, 181, 254, .7);
        }
    }
    .ze-button-disabled{
        opacity: .5;
        cursor: not-allowed;
    }
</style>