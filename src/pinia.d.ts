declare module 'pinia' {
  import { App } from 'vue'
  
  export function createPinia(): any
  export function defineStore(id: string, setup: Function): any
  export function setActivePinia(pinia: any): void
  export function mapStores(...stores: any[]): any
  export function storeToRefs(store: any): any
} 