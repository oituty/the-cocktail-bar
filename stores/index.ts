import { defineStore } from 'pinia'

// Define a store chamada 'alerts'
export const useAlertsStore = defineStore('alerts', {
  state: () => ({
    alerts: [], // Inicialize o estado com um array vazio de alertas
  }),

  getters: {
    // Getter para obter todos os alertas
    allAlerts: (state) => state.alerts,

    // Getter para obter o número de alertas
    numberOfAlerts: (state) => state.alerts.length,
  },

  actions: {
    // Action para adicionar um novo alerta
    addAlert(message) {
      this.alerts.push(message);
    },

    // Action para remover um alerta
    removeAlert(index) {
      this.alerts.splice(index, 1);
    },
  },
})
