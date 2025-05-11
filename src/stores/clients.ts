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
    { id: 1, name: 'Royal Commission for Riyadh City', logo: '/partners/c1.png', industry: 'Government' },
    { id: 2, name: 'Saudi Aramco', logo: '/partners/c2.png', industry: 'Energy' },
    { id: 3, name: 'NEOM', logo: '/partners/c3.png', industry: 'Development' },
    { id: 4, name: 'Public Investment Fund', logo: '/partners/c4.png', industry: 'Finance' },
    { id: 5, name: 'Ministry of Transport', logo: '/partners/c5.png', industry: 'Government' },
    { id: 6, name: 'Red Sea Development Company', logo: '/partners/c6.png', industry: 'Development' },
    { id: 7, name: 'SABIC', logo: '/partners/c7.png', industry: 'Manufacturing' },
    { id: 8, name: 'Amaala', logo: '/partners/c8.png', industry: 'Development' },
    { id: 9, name: 'Qiddiya Investment Company', logo: '/partners/c9.png', industry: 'Entertainment' },
    { id: 10, name: 'Diriyah Gate Development Authority', logo: '/partners/c10.png', industry: 'Heritage' }
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