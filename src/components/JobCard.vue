<template>
  <div class="group rounded-lg shadow-md bg-white dark:bg-card border border-transparent dark:border-border/30 hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6">
    <!-- Top section with job title and company logo -->
    <div class="flex items-start justify-between mb-4">
      <div>
        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{{ job.title }}</h3>
        <div class="flex items-center flex-wrap gap-2 mb-3">
          <!-- Job Type Badge -->
          <span class="inline-flex items-center bg-primary/10 dark:bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
            {{ job.type }}
          </span>
          
          <!-- Department Badge -->
          <span class="inline-flex items-center bg-slate-100 dark:bg-slate-800 text-foreground/70 dark:text-foreground/60 text-xs px-3 py-1 rounded-full">
            {{ job.department }}
          </span>
          
          <!-- Location Badge with icon -->
          <span class="inline-flex items-center text-foreground/60 dark:text-foreground/50 text-xs">
            <MapPinIcon class="h-3 w-3 mr-1" />
            {{ job.location }}
          </span>
        </div>
      </div>
      
      <!-- Company Logo or Job Icon (optional) -->
      <div v-if="job.logo" class="flex-shrink-0 h-14 w-14 rounded-md overflow-hidden border border-border/10 dark:border-border/20">
        <img :src="job.logo" :alt="job.company || 'Company logo'" class="w-full h-full object-contain p-1" />
      </div>
      <div v-else class="flex-shrink-0 h-14 w-14 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
        <BriefcaseIcon class="h-7 w-7 text-primary" />
      </div>
    </div>
    
    <!-- Job Description -->
    <p class="text-foreground/70 dark:text-foreground/60 text-sm mb-6 line-clamp-3">
      {{ job.description }}
    </p>
    
    <!-- Skills Section (optional) -->
    <div v-if="job.skills && job.skills.length" class="mb-6">
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="(skill, i) in job.skills" 
          :key="`skill-${i}`" 
          class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-foreground/70 dark:text-foreground/60 rounded"
        >
          {{ skill }}
        </span>
      </div>
    </div>
    
    <!-- Footer with job details and apply button -->
    <div class="flex flex-wrap items-center justify-between mt-auto gap-4 pt-4 border-t border-border/20 dark:border-border/10">
      <div class="space-y-1">
        <!-- Salary range if available -->
        <div v-if="job.salary" class="flex items-center text-sm text-foreground font-medium">
          <DollarSignIcon class="h-4 w-4 mr-1 text-primary/70" />
          {{ job.salary }}
        </div>
        
        <!-- Posted date -->
        <div class="flex items-center text-xs text-foreground/60 dark:text-foreground/50">
          <CalendarIcon class="h-3 w-3 mr-1" />
          Posted: {{ job.postedDate }}
        </div>
      </div>
      
      <!-- Apply Button -->
      <RouterLink 
        :to="`/jobs/${job.id}`" 
        class="px-5 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors shrink-0"
      >
        Apply Now
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BriefcaseIcon, MapPinIcon, CalendarIcon, DollarSignIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

// Props definition with TypeScript interface
interface JobCardProps {
  job: {
    id: string;
    title: string;
    type: string;
    department: string;
    location: string;
    description: string;
    postedDate: string;
    company?: string;
    logo?: string;
    salary?: string;
    skills?: string[];
  }
}

defineProps<JobCardProps>()
</script> 