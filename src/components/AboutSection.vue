<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle2Icon, ChevronRightIcon } from "lucide-vue-next"
import { ref } from "vue"

const activeTab = ref('vision')
</script>

<template>
  <section class="py-24 bg-background">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column: Image -->
        <div class="relative">
          <div class="rounded-lg overflow-hidden">
            <img 
              src="https://picsum.photos/id/0/200/100" 
              alt="LEAP PM Team" 
              class="w-full h-auto"
            />
          </div>
          <div class="absolute -bottom-6 -end-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg md:max-w-xs">
            <p class="font-semibold text-xl mb-2">Experience Excellence</p>
            <p>Our team of project management professionals brings decades of experience to every project.</p>
          </div>
        </div>

        <!-- Right Column: Content -->
        <div>
          <h2 class="text-3xl md:text-xl font-bold mb-6">Who We Are</h2>
          <p class="text-xl text-foreground/70 mb-6">
            At LEAP, we go beyond conventional project management by integrating practical learning
            experiences into our training programs. We empower professionals by equipping them with the
            essential skills, knowledge, and tools required for career growth in the project management industry.
          </p>

          <Tabs v-model="activeTab" class="w-full mb-8">
            <TabsList class="mb-6">
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>

            <TabsContent value="vision" class="mt-0">
              <p class="text-foreground/70 mb-4">
                To be a leading firm recognized for delivering innovative and high-impact 
                project management services and professional training.
              </p>
            </TabsContent>

            <TabsContent value="mission" class="mt-0">
              <p class="text-foreground/70 mb-4">
                Our mission is to provide unique, value-driven project management solutions and 
                professional training services that contribute to the advancement of the project management community.
              </p>
            </TabsContent>

            <TabsContent value="values" class="mt-0">
              <p class="text-foreground/70 mb-4">
                We operate on a foundation of strong values that define our approach to project management and training services:
              </p>
              <ul class="space-y-2">
                <li class="flex">
                  <CheckCircle2Icon class="h-6 w-6 text-primary shrink-0 me-3" />
                  <span><span class="font-medium">Excellence:</span> We strive for excellence in all our deliverables and services.</span>
                </li>
                <li class="flex">
                  <CheckCircle2Icon class="h-6 w-6 text-primary shrink-0 me-3" />
                  <span><span class="font-medium">Innovation:</span> We continuously seek innovative solutions to project challenges.</span>
                </li>
                <li class="flex">
                  <CheckCircle2Icon class="h-6 w-6 text-primary shrink-0 me-3" />
                  <span><span class="font-medium">Integrity:</span> We conduct our business with the highest level of integrity and ethics.</span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>

          <Button class="group">
            Learn More About Us
            <ChevronRightIcon class="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  </section>
</template> 