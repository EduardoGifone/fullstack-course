<template>
  <q-page
    class="flex flex-center text-white"
    v-touch-pan.vertical.prevent.mouse="handlePan"
  >
    <div class="row">
      <q-input
        filled
        placeholder="Counter"
        input-class="text-white text-center text-h5"
        color="teal"
        v-model="data.name"
      />
    </div>
    <div class="row full-width items-center">
      <div class="col text-center">
        <q-btn
          @click="decreaseCounter"
          round
          icon="remove"
          size="xl"
          v-touch-repeat:300:300:300:50.mouse="decreaseCounter"
        />
      </div>
      <div class="col text-center text-h2">{{ data.counter }}</div>
      <div class="col text-center">
        <q-btn
          @click="increaseCounter"
          round
          icon="add"
          size="xl"
          v-touch-repeat:300:300:300:50.mouse="increaseCounter"
        />
      </div>
    </div>
    <div class="row">
      <q-btn @click="restartCounter" round icon="restart_alt" size="xl" />
    </div>
  </q-page>
</template>

<script setup>
// Imports
import { reactive, watch } from "vue";
import { useQuasar } from "quasar";

// Data
const data = reactive({
  counter: 0,
  name: "",
});

const $q = useQuasar();

const savedData = $q.localStorage.getItem("data");
if (savedData) Object.assign(data, savedData);

// Methods
const increaseCounter = () => {
  data.counter++;
};
const decreaseCounter = () => {
  if (data.counter > 0) data.counter--;
};
const restartCounter = () => {
  data.counter = 0;
};

// Watch
watch(data, (value) => {
  console.log(value);
  $q.localStorage.set("data", value);
});

// handle pan
const handlePan = (e) => {
  console.log(e.delta.y);
  if (e.delta.y < 0) increaseCounter();
  else decreaseCounter();
};
</script>

<style scoped>
.q-page {
  max-width: 700px;
  margin: 0 auto;
}
</style>
