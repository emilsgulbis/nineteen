<template>
  <div>
    <div v-for="n in 20" :key="n" class="boom" :class="`boom${n}`"></div>
  </div>
</template>
