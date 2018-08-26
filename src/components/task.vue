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


<script>
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
};
</script>
