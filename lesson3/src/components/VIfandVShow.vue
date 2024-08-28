<template>
    <div class="bubble">
        <div class="bubble" v-if="isVisible=='true'">{{ message }}</div>
        <div class="bubble" v-show="isVisible=='true'">{{ message }}</div>
    </div>
</template>
<script type="module">
    export default {
        name: 'VIfandVShow',
        data () {
            return {
                message: 'you can see this message!'
            }
        },
        props: {
            isVisible: false,
        },
    }
</script>