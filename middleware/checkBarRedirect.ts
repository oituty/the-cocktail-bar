export default defineNuxtRouteMiddleware((to, from) => {
    const barStore = useBarStore();
    
    // Verifica se o bar está aberto e se o usuário está tentando acessar a rota "/"
    if (barStore.isBarOpen && to.path === '/') {
      // Redireciona para a rota "/cocktails" se o bar estiver aberto
      return navigateTo('/cocktails');
    }
  });
  