import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Feature {
  id: number
  titleKey: string
  descriptionKey: string
  icon: string
  link: string
}

export const useFeaturesStore = defineStore('features', () => {
  // Features data
  const features = ref<Feature[]>([
    {
      id: 1,
      titleKey: 'features.feature1.title',
      descriptionKey: 'features.feature1.description',
      icon: 'LayoutDashboardIcon',
      link: '/services'
    },
    {
      id: 2,
      titleKey: 'features.feature2.title',
      descriptionKey: 'features.feature2.description',
      icon: 'UsersIcon',
      link: '/services'
    },
    {
      id: 3,
      titleKey: 'features.feature3.title',
      descriptionKey: 'features.feature3.description',
      icon: 'BarChartIcon',
      link: '/services'
    },
    {
      id: 4,
      titleKey: 'features.feature4.title',
      descriptionKey: 'features.feature4.description',
      icon: 'ClockIcon',
      link: '/services'
    },
    {
      id: 5,
      titleKey: 'features.feature5.title',
      descriptionKey: 'features.feature5.description',
      icon: 'LightbulbIcon',
      link: '/services'
    },
    {
      id: 6,
      titleKey: 'features.feature6.title',
      descriptionKey: 'features.feature6.description',
      icon: 'HeadsetIcon',
      link: '/contact'
    }
  ])

  return {
    features
  }
}) 