<template>
  <div>
    <NuxtWelcome />
    <div class="alerts">
      <div v-for="(alert, index) in alerts" :key="index" class="alert">
        {{ alert }}
        <button @click="removeAlert(index)">Fechar</button>
      </div>
    </div>
    <button @click="addTestAlert">Adicionar Alerta de Teste</button>
  </div>
</template>

<script>
import { useAlertsStore } from '~/stores/index' // Certifique-se de usar o caminho correto para sua store

export default {
  setup() {
    const alertsStore = useAlertsStore()
    const alerts = alertsStore.allAlerts

    const removeAlert = (index) => {
      alertsStore.removeAlert(index)
    }

    const addTestAlert = () => {
      alertsStore.addAlert('Este é um alerta de teste')
    }

    return {
      alerts,
      removeAlert,
      addTestAlert,
    }
  },
}
</script>

<style>
.alerts {
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.alert {
  background-color: #f0f0f0;
  padding: 8px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
}
</style>
