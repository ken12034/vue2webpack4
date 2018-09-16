<template>
  <div class="container">
    
    <createInput @addData="newData" />
    
    <task
      v-for="(taskItem, index) in taskList"
      :key="index"

      :task-id="taskItem.id"
      :task-content="taskItem.taskContent"
      :task-status="taskItem.status || false"

      @removeTask="removeTaskData(taskItem.id)"
      @popStatus="setClose"
    />
  </div>
</template>


<script lang="ts">
import axios from 'axios';
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { PRODUCT } from '../store/stateType';

import createInput from './createInput.vue';
import task from './task.vue';


@Component({
  components: {
    createInput,
    task
  }
})
export default class Home extends Vue {
  @Getter('product') public taskList!: PRODUCT[];
  @Action('getProduct') public getProduct!: any;


  public createNumber: number = 0;


  public created() {
    this.getProduct();
    setTimeout(() => {
      this.maxID();
      console.log(this.taskList);
    }, 1000);
  }


  public async newData(message: string) {
    await this.getProduct([{
        id: (this.createNumber += 1),
        taskContent: message,
        status: false
    }]);

    await this.getProduct();
    /*
    axios
      .post('/api/posts', {
        id: (this.createNumber += 1),
        taskContent: message,
        status: false
      })
      .then(res => {
        this.taskList.unshift(res.data);
      });
      */
  }

  public maxID() {
    if (this.taskList.length > 0) {
      this.createNumber = this.taskList[0].id + 1;
    }
  }

  public async removeAsync(number: string) {
    await axios.delete(`/api/posts/${number}`);
    await axios.get('/api/posts').then(res => {
      this.taskList = res.data.reverse();
      this.maxID();
    });
  }

  public async removeTaskData(number: string) {
    await axios.delete(`/api/posts/${number}`);
    await this.getProduct();
    await this.maxID();
  }

  public setClose(obj: PRODUCT) {
    Object.keys(this.taskList).forEach((key: any) => {
      if (this.taskList[key].id === obj.id) {
        this.taskList[key].status = !this.taskList[key].status;
        // return false;
      }
    });
  }


}
</script>
