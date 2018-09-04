<template>
  <div class="container">
    <createInput @addData="newData" />
    <task
      v-for="(taskItem, index) in taskList"
      :key="index"

      :task-id="taskItem.id"
      :task-content="taskItem.taskContent"
      :task-status="taskItem.status"

      @removeTask="removeTaskData(taskItem.id)"
      @popStatus="setClose"
    />

  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import axios from 'axios';
import createInput from './createInput.vue';
import task from './task.vue';

interface List {
  id:number; 
  taskList:string; 
  status:boolean;
}

@Component({
  components: {
    createInput,
    task,
  }
})
export default class Home extends Vue {
  public taskList:Array<{id:number, taskList:string, status:boolean}> = [];
  public createNumber:number = 0;

  
  created() {
    axios.get('/api/posts').then((res) => {
      this.taskList = res.data.reverse();
      this.maxID();
    });
  }

  newData(message: string) {
      axios.post('/api/posts',
        {
          id: this.createNumber += 1,
          taskContent: message,
          status: false,
        }).then((res) => {
        this.taskList.unshift(res.data);
      });
  }

  maxID() {
      if (this.taskList.length > 0) {
        this.createNumber = this.taskList[0].id + 1;
      }
  }

  async removeAsync(number: string) {
      await axios.delete(`/api/posts/${number}`);
      await axios.get('/api/posts').then((res) => {
        this.taskList = res.data.reverse();
        this.maxID();
      });
  }

  async removeTaskData(number :string) {
    await axios.delete(`/api/posts/${number}`);
    await axios.get('/api/posts').then((res) => {
        this.taskList = res.data.reverse();
        this.maxID();
    });
  }

  setClose(obj:List) {
      Object.keys(this.taskList).forEach((key:any) => {
        if (this.taskList[key].id === obj.id) {
          this.taskList[key].status = !this.taskList[key].status;
          // return false;
        }
      });
  }



}

</script>
