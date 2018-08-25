<template>
  <div class="input-container">
    <input type="text" v-model="message" v-focus="focusState" >
    <button @click="add"> + </button>
  </div>
</template>


<script>
export default {
  directives: {
    focus: {
      update: function (el, {value}) {
        if (value) {
          el.focus()
        }
      }
    }
  },
  data(){
    return{
      message : '',
      focusState: false
    }
  },
  mounted() {
    
  },
  methods:{
    add() {
      this.$emit('addData', this.message);
      this.message = '';
      this.focusState = true
    }
  }
}
</script>

