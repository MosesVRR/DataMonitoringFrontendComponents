<template>
  <button @click="handleClick" class="custom-button">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    label: {
      type: String as PropType<string>,
      required: true
    },
    onClick: {
      type: Function as PropType<() => void>,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.onClick();
    }
  }
});
</script>

<style scoped>
.custom-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.custom-button:hover {
  background-color: #0056b3;
}
</style>