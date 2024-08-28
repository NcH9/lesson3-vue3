<template>
    <div>
        <label>
            <input type="checkbox" v-model="isDisabled" />
            Disabled
        </label>
      
        <label>
            <input type="checkbox" v-model="isReadonly" />
            Readonly
        </label>
  
        <input
            type="text"
            v-bind:disabled="isDisabled"
            v-bind:readonly="isReadonly"
            placeholder="Enter text"
        />
    </div>
</template>
 
<script type="module">
    export default {
        name: 'bindComp',
        data () {
            return {
                isDisabled: false,
                isReadonly: false,
            }
        }
    }  
</script>
  