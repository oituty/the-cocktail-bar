import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { toast, type ToastOptions } from 'vue3-toastify';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify);

  nuxtApp.provide('toastify', (msg: string, options?: ToastOptions) => {
    toast(msg, {
      autoClose: 5000,
      position: toast.POSITION.BOTTOM_RIGHT,
      ...options,
    });
  });
});
