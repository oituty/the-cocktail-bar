import { ToastOptions } from 'vue3-toastify';

declare module '#app' {
  interface NuxtApp {
    $toastify: (msg: string, options?: ToastOptions) => void;
  }
}
