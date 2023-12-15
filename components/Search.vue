<template>
    <input 
      type="text" 
      v-model="searchTerm" 
      @input="emitSearchTerm" 
      placeholder="Digite para pesquisar..."
    />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchTerm = ref('');
  const emit = defineEmits(['updateSearchTerm']);
  
  const emitSearchTerm = () => {
    emit('updateSearchTerm', searchTerm.value);
  };
  </script>
  