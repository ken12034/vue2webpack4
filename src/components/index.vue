<template>
  <div class="container">
    <Left/>{{ message }}
  </div>
</template>


<script>
import Left from './left';

export default {
  components: {
    Left,
  },
  data(){
    return{
      message: '123',
    }
  },
  mounted() {
    
  },
}
</script>

