<template>
  <div
    :class="{ 'close' : taskStatus }"
    class="task-container">

    <input
      id=""
      :checked="taskStatus"
      type="checkbox"
      name=""
      @change="getValue()" >

    {{ taskContent }}
    <button @click="remove"> - </button>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Task extends Vue {
  @Prop() public taskId!: number;
  @Prop() public taskContent!: string;
  @Prop() public taskStatus: boolean = false;

  public isClose: boolean = false;

  public mounted() {
    this.isClose = this.taskStatus;
  }

  public remove() {
    this.$emit('removeTask');
  }
  public getValue() {
    this.isClose = !this.isClose;
    this.$emit('popStatus',
    {
      id: this.taskId,
      status: this.isClose,
    });
  }
}
/*
export default {
  props: {
    taskId: {
      type: Number,
      default: 0,
    },
    taskContent: {
      type: String,
      default: '',
    },
    taskStatus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isClose: false,
    };
  },
  computed: {
  },
  mounted() {
    this.isClose = this.taskStatus;
  },
  methods: {
    remove() {
      this.$emit('removeTask');
    },
    getValue() {
      this.isClose = !this.isClose;
      this.$emit('popStatus',
        {
          id: this.taskId,
          status: this.isClose,
        });
    },
  },
};*/
</script>
