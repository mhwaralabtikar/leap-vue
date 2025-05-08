import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Define the contact submission type
export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  phone?: string
  inquiryType: string
  message: string
  createdAt: string
  status: 'new' | 'read' | 'responded'
}

export const useContactStore = defineStore('contact', () => {
  // State
  const submissions = ref<ContactSubmission[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  
  // Computed
  const newSubmissionsCount = computed(() => {
    return submissions.value.filter(s => s.status === 'new').length
  })
  
  const submissionsByType = computed(() => {
    const result: Record<string, ContactSubmission[]> = {
      general: [],
      services: [],
      partnership: [],
      support: []
    }
    
    submissions.value.forEach(submission => {
      if (result[submission.inquiryType]) {
        result[submission.inquiryType].push(submission)
      } else {
        result.general.push(submission)
      }
    })
    
    return result
  })
  
  // Actions
  function saveContactSubmission(submission: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>) {
    const newSubmission: ContactSubmission = {
      ...submission,
      id: generateId(),
      createdAt: new Date().toISOString(),
      status: 'new'
    }
    
    submissions.value.unshift(newSubmission)
    saveToLocalStorage()
    
    return newSubmission
  }
  
  function updateSubmissionStatus(id: string, status: 'new' | 'read' | 'responded') {
    const submission = submissions.value.find(s => s.id === id)
    if (submission) {
      submission.status = status
      saveToLocalStorage()
    }
  }
  
  function deleteSubmission(id: string) {
    submissions.value = submissions.value.filter(s => s.id !== id)
    saveToLocalStorage()
  }
  
  async function fetchSubmissions() {
    // In a real app, this would call the backend API
    // For now, we'll just load from localStorage
    try {
      isLoading.value = true
      error.value = null
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const stored = localStorage.getItem('contactSubmissions')
      if (stored) {
        submissions.value = JSON.parse(stored)
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error occurred'
      console.error('Error fetching contact submissions:', err)
    } finally {
      isLoading.value = false
    }
  }
  
  // Helper functions
  function saveToLocalStorage() {
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions.value))
  }
  
  function generateId() {
    return `submission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
  
  // Initialize
  fetchSubmissions()
  
  return {
    // State
    submissions,
    isLoading,
    error,
    
    // Computed
    newSubmissionsCount,
    submissionsByType,
    
    // Actions
    saveContactSubmission,
    updateSubmissionStatus,
    deleteSubmission,
    fetchSubmissions
  }
}) 