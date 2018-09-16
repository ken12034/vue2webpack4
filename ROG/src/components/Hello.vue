<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
// import Vue from "vue";
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class HelloDecorator extends Vue {
    @Prop() public name!: string;
    @Prop() public initialEnthusiasm!: number;

    public enthusiasm = this.initialEnthusiasm;

    public increment() {
        this.enthusiasm++;
    }
    public decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    public mounted() {
     console.log(this.exclamationMarks);
    }

    public updated() {
     console.log(this.exclamationMarks);
    }

    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}
</script>