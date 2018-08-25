<template>
  <div class="container">
    <createInput @addData="newData" />
    <task v-for="(taskItem, index) in taskList" :key="index" 
      
      
      :task-id="taskItem.id"
      :task-content="taskItem.taskContent"
      :task-status="taskItem.status"

      @removeTask="removeTaskData(taskItem.id)"
      @popStatus="setClose"
    />
    
  </div>
</template>


<script>
import createInput from './createInput.vue';
import task from './task.vue';


export default {
  components: {
    createInput,
    task
  },
  data(){
    return{
      message: '123',
      taskList: [],
      createNumber: 0
    }
  },
  mounted() {
    
  },
  methods:{
    newData(message) {
      
      this.taskList.unshift(
        {
          'id': this.createNumber++,
          'taskContent': message,
          'status': false
        }
      );

    },
    removeTaskData(number){
      let removeNumber = '';
      Object.keys( this.taskList ).forEach((key) => {
        
        if(this.taskList[key].id === number ){  
           removeNumber = key;
        }

      });

      this.taskList.splice(parseInt(removeNumber), 1);
    },

    setClose(obj){
      Object.keys( this.taskList ).forEach((key) => {

        if(this.taskList[key].id === obj.id ){
           this.taskList[key].status = !this.taskList[key].status;
           return false;
        }

      });
     
    }
  }
}
</script>

