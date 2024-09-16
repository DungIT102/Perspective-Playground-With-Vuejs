<script setup>
  import { ref, computed } from 'vue'

  const perspective = ref(100)
  const rotateX = ref(0)
  const rotateY = ref(0)
  const rotateZ = ref(0)

  const box = computed(() => {
    return {
      transform: `
            perspective(${perspective.value}px)
            rotateX(${rotateX.value}deg)
            rotateY(${rotateY.value}deg)
            rotateZ(${rotateZ.value}deg)
        `
    }
  })

  const reset = () => {
    perspective.value = 100
    rotateX.value = 0
    rotateY.value = 0
    rotateZ.value = 0
  }

  const copy = async () => {
    let text = `transform: ${box.value.transform}`

    await navigator.clipboard.writeText(text)

    alert('CSS Copied to clipboard!')
  }
</script>

<template>
  <h2>CSS3 Perspective Playground</h2>
  <main>
    <section class="settings">
      <div class="settings-container">
        <label>perspective: {{ perspective }}px;</label>
        <input type="range" min="0" max="999" v-model="perspective" />

        <label>rotateX: {{ rotateX }}deg; </label>
        <input type="range" min="-180" max="180" v-model="rotateX" />

        <label>rotateY: {{ rotateY }}deg; </label>
        <input type="range" min="-180" max="180" v-model="rotateY" />

        <label>rotateZ: {{ rotateZ }}deg; </label>
        <input type="range" min="-180" max="180" v-model="rotateZ" />

        <button type="button" @click.prevent="reset">Reset</button>
        <button type="button" @click.prevent="copy">Copy</button>
      </div>
    </section>
    <section class="output">
      <div class="box-container">
        <div class="box" :style="box"></div>
      </div>
    </section>
  </main>
</template>

<style scoped>
  h2 {
    color: #8d81f3;
    text-align: center;
    font-size: 40px;
    margin: 20px;
  }
  main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 420px;
    max-width: 768px;
    margin: 0 auto;
    font-family: monospace, sans-serif;
    font-size: 22px;
  }
  main label {
    display: block;
  }
  main input[type='range'] {
    display: block;
    margin-bottom: 10px;
    width: 200px;
  }
  section.settings {
    width: 50%;
    z-index: 2;
  }
  .box-container {
    padding: 50px;
    border: 1px solid #8d81f3;
  }
  .box {
    width: 150px;
    height: 150px;
    background: #8d81f3;
  }

  button {
    background-color: #8d81f3;
    color: #fff;
    display: inline-block;
    font-size: 20px;
    padding: 10px;
    outline: none;
    border: none;
    margin-right: 10px;
  }

  label {
    color: #fff;
  }
</style>
