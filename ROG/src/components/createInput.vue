<template>
  <div class="input-container">
    <input
      v-model="message"
      type="text" >
    <button @click="add"> + </button>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  public message: string = '';
  public focusState: boolean = false;

  public add() {
    this.$emit('addData', this.message);
    this.message = '';
    this.focusState = true;
  }
}
/*
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

*/
</script>
