<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-vue-next"

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Coriss Ambady",
    role: "Financial Analyst",
    content: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.",
    avatarUrl: 'https://picsum.photos/id/0/200/100',
    initials: "CA"
  },
  {
    id: 2,
    name: "Cory Zamora",
    role: "Marketing Specialist",
    content: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.",
    avatarUrl: 'https://picsum.photos/id/0/200/100',
    initials: "CZ"
  },
  {
    id: 3,
    name: "Nikolas Brooten",
    role: "Sales Manager",
    content: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.",
    avatarUrl: 'https://picsum.photos/id/0/200/100',
    initials: "NB"
  },
  {
    id: 4,
    name: "Jackie Sanders",
    role: "Investment Planner",
    content: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.",
    avatarUrl: 'https://picsum.photos/id/0/200/100',
    initials: "JS"
  },
  {
    id: 5,
    name: "Laura Widerski",
    role: "Sales Specialist",
    content: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.",
    avatarUrl: 'https://picsum.photos/id/0/200/100',
    initials: "LW"
  }
]
</script>

<template>
  <section class="py-24 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-xl font-bold mb-4">Happy Customers</h2>
        <p class="text-xl text-foreground/70">
          Customer satisfaction is our major goal. See what our customers are saying about us.
        </p>
      </div>

      <Carousel class="w-full">
        <CarouselContent>
          <CarouselItem v-for="testimonial in testimonials" :key="`testimonial-${testimonial.id}`" class="md:basis-1/2 lg:basis-1/3 ps-4">
            <Card>
              <CardContent class="p-6">
                <QuoteIcon class="h-8 w-8 text-primary/20 mb-4" />
                <p class="text-foreground/80 mb-6 italic">
                  "{{ testimonial.content }}"
                </p>
                <div class="flex items-center">
                  <Avatar class="h-12 w-12 border border-border">
                    <AvatarImage :src="testimonial.avatarUrl" :alt="testimonial.name" />
                    <AvatarFallback>{{ testimonial.initials }}</AvatarFallback>
                  </Avatar>
                  <div class="ms-4">
                    <h4 class="font-semibold">{{ testimonial.name }}</h4>
                    <p class="text-sm text-foreground/60">{{ testimonial.role }}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <div class="flex justify-center mt-8">
          <CarouselPrevious variant="outline" className="me-2 static translate-y-0" />
          <CarouselNext variant="outline" className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  </section>
</template> 