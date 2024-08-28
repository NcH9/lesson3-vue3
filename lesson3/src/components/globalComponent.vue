<template>
    <div class="bubble">{{value}}</div>
</template>
<script type="module">
    export default {
        name: 'globalComponent',
        data () {
            return {
                
            }
        },
        props: {
            value: 'global',

        }
    }
</script>