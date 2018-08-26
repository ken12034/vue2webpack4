<template>
  <div class="input-container">
    <input
      v-focus="focusState"
      v-model="message"
      type="text" >
    <button @click="add"> + </button>
  </div>
</template>


<script>
export default {
  directives: {
    focus: {
      update(el, { value }) {
        if (value) {
          el.focus();
        }
      },
    },
  },
  data() {
    return {
      message: '',
      focusState: false,
    };
  },
  mounted() {

  },
  methods: {
    add() {
      this.$emit('addData', this.message);
      this.message = '';
      this.focusState = true;
    },
  },
};
</script>
