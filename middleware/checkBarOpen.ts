// middleware/checkBarOpen.js

export default defineNuxtRouteMiddleware((to, from) => {
    const barStore = useBarStore();
    if (!barStore.isBarOpen) {
      // Redirecionar o usuário se o bar estiver fechado
      return navigateTo('/'); 
    }
  });
  