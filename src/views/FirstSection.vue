<template>
  <div>
    <section>
      <h2 v-show="hidden">The First section!</h2>
      <v-btn v-bind:disabled="hidden">Sheep</v-btn>
      <v-btn elevation="2" v-on:click="hidden = !hidden">Toggle</v-btn>
      <span v-html="rawHtml"></span>
    </section>
    <section>
      <div>
        <v-btn v-on:click="add" elevation="2">Add</v-btn>
        <v-btn v-on:click="subtract(6)" elevation="2">Subtract</v-btn>
      </div>
      <div>{{ total }}</div>
      <div v-once>{{total}}</div>
    </section>
    <section>
      <v-text-field type="text" v-on:input="updateName" v-bind:value="name"></v-text-field>
      <v-btn elevation="2" v-on:click="onResetName">Reset name</v-btn>
      <div>{{name}}</div>
      <div>{{outputName()}}</div>
    </section>
    <div></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FirstSection',
  data() {
    return {
      hidden: true,
      total: 0,
      rawHtml: '<span style="color: red">This will be red!</span>',
      name: ''
    };
  },
  methods: {
    add(): void {
      this.total += 5;
    },
    subtract(amount: number): void {
      this.total -= amount;
    },
    updateName(name: string): void {
      this.name = name + ' _ ';
    },
    outputName(): string {
      console.log('outputname function runs'); // will run whenever vue recognises change detection - does not know dependencies
      return this.name === '' ? '' : this.name + ' < ';
    },
    onResetName(): void {
      this.name = '';
    }
  }
};
</script>

<style scoped>
button {
  margin: 8px;
}
</style>
