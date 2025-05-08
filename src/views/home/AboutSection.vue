<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle2Icon, ChevronRightIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeTab = ref('company')
</script>

<template>
  <section class="py-24 bg-background">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column: Image -->
        <div class="relative order-2 lg:order-1">
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://picsum.photos/id/342/800/600" 
              alt="LEAP PM Office" 
              class="w-full h-auto"
            />
          </div>
          <div class="absolute -bottom-6 -end-6 bg-primary text-primary-foreground rounded-lg p-6 shadow-lg hidden lg:block">
            <div class="text-3xl font-bold mb-1">15+</div>
            <div class="text-sm opacity-90">Years of Experience</div>
          </div>
        </div>
        
        <!-- Right Column: Content -->
        <div class="order-1 lg:order-2">
          <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {{ t('about.aboutUs') }}
          </div>
          <h2 class="text-3xl md:text-xl font-bold mb-6">{{ t('about.title') }}</h2>
          <p class="text-foreground/70 mb-8">
            {{ t('about.description') }}
          </p>
          
          <Tabs v-model:value="activeTab" class="w-full mb-8">
            <TabsList class="grid w-full grid-cols-3">
              <TabsTrigger value="company">{{ t('about.tabs.company') }}</TabsTrigger>
              <TabsTrigger value="mission">{{ t('about.tabs.mission') }}</TabsTrigger>
              <TabsTrigger value="values">{{ t('about.tabs.values') }}</TabsTrigger>
            </TabsList>
            <TabsContent value="company" class="pt-6">
              <p class="text-foreground/70">
                {{ t('about.companyContent') }}
              </p>
            </TabsContent>
            <TabsContent value="mission" class="pt-6">
              <p class="text-foreground/70">
                {{ t('about.missionContent') }}
              </p>
            </TabsContent>
            <TabsContent value="values" class="pt-6">
              <ul class="space-y-3">
                <li v-for="(value, index) in [
                  t('about.values.integrity'),
                  t('about.values.excellence'),
                  t('about.values.innovation'),
                  t('about.values.collaboration')
                ]" :key="index" class="flex">
                  <CheckCircle2Icon class="h-5 w-5 text-primary me-2 flex-shrink-0 mt-0.5" />
                  <span>{{ value }}</span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
          
          <Button class="group">
            {{ t('about.learnMore') }}
            <ChevronRightIcon class="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  </section>
</template> 