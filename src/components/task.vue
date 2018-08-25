<template>
  <div 
    class="task-container" 
    :class="{ 'close' : taskStatus }">

    <input type="checkbox" name="" id="" 
      @change="getValue()" 
      :checked="taskStatus" >
      
    {{ taskContent }}
    <button @click="remove"> - </button>
  </div>
</template>


<script>
export default {
  props:{
    taskId: {
      type: Number,
      default: ''
    },
    taskContent: {
      type: String,
      default: ''
    },
    taskStatus: {
      type: Boolean,
    },
  },
  data(){
    return{
      isClose: false
    }
  },
  computed:{
  },
  mounted() {
    this.isClose = this.taskStatus;
  },
  methods:{
    remove() {
        this.$emit('removeTask');
    },
    getValue() {
      this.isClose = !this.isClose
      this.$emit('popStatus', 
        { 
          'id': this.taskId,
          'status': this.isClose,
        }
      );
    }
  }
}
</script>

