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


<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import createInput from './createInput.vue';
import task from './task.vue';


export default {
  components: {
    createInput,
    task,
  },
  data() {
    return {
      message: '123',
      taskList: [],
      createNumber: 0,
    };
  },
  computed: {
    ...mapGetters({
      test: 'allTask',
    }),
  },
  created() {
    this.$store.dispatch('getTask');
    axios.get('/posts').then((res) => {
      this.taskList = res.data.reverse();
      this.maxID();
    });
  },
  mounted() {
    console.log(this.test);
  },
  methods: {
    newData(message) {
      axios.post('/posts',
        {
          id: this.createNumber += 1,
          taskContent: message,
          status: false,
        }).then((res) => {
        this.taskList.unshift(res.data);
      });
      // this.taskList.unshift();
    },

    maxID() {
      if (this.taskList.length > 0) {
        this.createNumber = this.taskList[0].id + 1;
      }
    },

    async removeAsync(number) {
      await axios.delete(`/posts/${number}`);
      await axios.get('/posts').then((res) => {
        this.taskList = res.data.reverse();
        this.maxID();
      });
    },
    async removeTaskData(number) {
      // let removeNumber = '';

      await axios.delete(`/posts/${number}`);
      await axios.get('/posts').then((res) => {
        this.taskList = res.data.reverse();
        this.maxID();
      });
      // this.removeAsync(number);

      /* axios.delete(`/api/posts/${number}`)
      .then((res)=>{
        console.log(res.data);
      }).get('/api/posts').then((res)=>{
        console.log(res.data);
        this.taskList = res.data.reverse();
      }); */


      /* Object.keys( this.taskList ).forEach((key) => {

        if(this.taskList[key].id === number ){
           removeNumber = key;
        }

      }); */

      // this.taskList.splice(parseInt(removeNumber), 1);
    },

    setClose(obj) {
      Object.keys(this.taskList).forEach((key) => {
        if (this.taskList[key].id === obj.id) {
          this.taskList[key].status = !this.taskList[key].status;
          // return false;
        }
      });
    },
  },
};
</script>
