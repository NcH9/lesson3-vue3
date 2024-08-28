<template>
    <div class="bubble">
        <div>
            local component
        </div>
        <globalComponent value="this is global component called in local component"></globalComponent>
    </div>
</template>

<script type="module">

    export default {
        name: 'localComponent'
    }
</script>