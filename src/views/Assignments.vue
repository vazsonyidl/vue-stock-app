<template>
  <section id="assignment">
    <!-- 1) Output your name -->
    <h2>{{name}}</h2>
    <!-- 2) Output your age -->
    <p>{{calculateAge}}</p>
    <!-- 3) Output your age + 5 -->
    <!-- DANGER ZONE  -->
    <p>{{increaseAge(5)}}</p>
    <!-- 4) Output a random number (0 to 1) -->
    <p @click="random">
      <span v-if="!randomNumber">Generate random number</span>
      <span v-else>{{randomNumber}}</span>
    </p>
    <div>
      <!-- 5) Display some image you found via Google -->
      <img :src="imageSrc"  alt="goldenRetriever"/>
    </div>
    <!-- 6) Prepopulate the input field with your name via the "value" attribute -->
    <input v-model="name" type="text" />
  </section>
</template>

<script>
export default {
  name: 'Assignments',
  data() {
    return {
      name: 'Daniel Vazsonyi',
      birthDate: new Date(1997, 9, 6),
      randomNumber: null,
      imageSrc: 'https://www.rover.com/blog/wp-content/uploads/2016/02/6818283013_0262163f5e_o.jpg'
    }
  },
  computed: {
    calculateAge: function () {
      return new Date().getFullYear() - this.birthDate.getFullYear();
    }
  },
  methods: {
    increaseAge: function (year = 0) {
      /**
       * @sad-info: This will run whenever CD runs as Vue does not "track" dependencies for methods /called from template/
       */
      console.log('increase age runs');
      return this.calculateAge + year;
    },
    random: function () {
      console.log('generate random runs');
      this.randomNumber = Math.random();
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

section {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #970076;
  margin: 0 0 1rem 0;
}

p {
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #970076;
  padding: 0.5rem;
  color: white;
  border-radius: 25px;
}

input {
  font: inherit;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

img {
  width: 240px;
}

</style>
