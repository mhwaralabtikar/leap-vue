import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Client {
  id: number
  name: string
  logo: string
  industry?: string
}

export const useClientsStore = defineStore('clients', () => {
  // Client data
  const clients = ref<Client[]>([
    { id: 1, name: 'Royal Commission for Riyadh City', logo: 'https://picsum.photos/id/0/200/100', industry: 'Government' },
    { id: 2, name: 'Saudi Aramco', logo: 'https://picsum.photos/id/1/200/100', industry: 'Energy' },
    { id: 3, name: 'NEOM', logo: 'https://picsum.photos/id/2/200/100', industry: 'Development' },
    { id: 4, name: 'Public Investment Fund', logo: 'https://picsum.photos/id/3/200/100', industry: 'Finance' },
    { id: 5, name: 'Ministry of Transport', logo: 'https://picsum.photos/id/4/200/100', industry: 'Government' },
    { id: 6, name: 'Red Sea Development Company', logo: 'https://picsum.photos/id/5/200/100', industry: 'Development' },
    { id: 7, name: 'SABIC', logo: 'https://picsum.photos/id/6/200/100', industry: 'Manufacturing' },
    { id: 8, name: 'Amaala', logo: 'https://picsum.photos/id/7/200/100', industry: 'Development' },
    { id: 9, name: 'Qiddiya Investment Company', logo: 'https://picsum.photos/id/8/200/100', industry: 'Entertainment' },
    { id: 10, name: 'Diriyah Gate Development Authority', logo: 'https://picsum.photos/id/9/200/100', industry: 'Heritage' }
  ])

  // Stats data
  const stats = ref([
    { id: 1, value: 250, label: 'stats.clients', suffix: '+' },
    { id: 2, value: 15, label: 'stats.yearsExperience', suffix: '+' },
    { id: 3, value: 98, label: 'stats.clientSatisfaction', suffix: '%' },
    { id: 4, value: 40, label: 'stats.employees', suffix: '+' }
  ])

  // Filter clients by industry
  function getClientsByIndustry(industry: string) {
    if (!industry) {
      return clients.value
    }
    return clients.value.filter(client => client.industry === industry)
  }

  return {
    clients,
    stats,
    getClientsByIndustry
  }
}) 