<template>
    <div class="bubble">
        <div class="bubble" v-if="boolVariable=='true'">{{ boolVarIsTrue }}</div>
        <div class="bubble" v-else>{{ boolVarIsFalse }}</div>
    </div>
</template>
<script type="module">
    export default {
        name: 'boolComponent',
        data () {
            return {
                boolVarIsTrue: 'variable is true',
                boolVarIsFalse: 'variable is false',
            }
        },
        props: {
            boolVariable: false,
        },
    }
</script>