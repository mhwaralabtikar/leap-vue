<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Floating language selector for mobile -->
    <div class="fixed top-20 right-4 rtl:right-auto rtl:left-4 z-40 md:hidden">
      <Button 
        @click="toggleLanguage" 
        variant="outline"
        size="sm"
        class="flex items-center gap-2 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md"
      >
        <GlobeIcon class="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
        <span v-if="localeStore.isRTL">English</span>
        <span v-else>العربية</span>
      </Button>
    </div>

    <!-- Hero Section with Page Header -->
    <PageHeader
      :title="$t('about.title')"
      :subtitle="$t('about.description')"
      :badge="$t('about.aboutUs')"
      :breadcrumbs="breadcrumbs"
      backgroundImage="/covers/about-2.jpg"
      v-animate="'fade-in'"
    >
      <!-- Animated background shapes -->
      <template #background-layer>
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 right-40 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div class="absolute bottom-20 left-20 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
        </div>
      </template>
      
      <template #actions>
        <div class="flex flex-wrap gap-4 justify-center">
          <Button 
            as="RouterLink" 
            to="/contact" 
            variant="default"
            class="group shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            {{ $t('cta.contactUs') }}
            <ArrowRightIcon class="h-4 w-4 ms-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Button>
          <Button 
            as="RouterLink" 
            to="/services" 
            variant="outline"
            class="group hover:bg-primary/5"
          >
            {{ $t('about.learnMore') }}
            <ChevronRightIcon class="h-4 w-4 ms-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Button>
        </div>
      </template>
    </PageHeader>
    
    <!-- Main Content -->
    <div class="py-16 md:py-24 bg-background">
      <div class="container mx-auto px-4">
        <!-- Company Story Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div class="space-y-6" v-animate="'slide-in-left'">
            <Badge variant="outline" class="bg-primary/10 text-primary border-primary/20">
              {{ $t('about.ourStory') }}
            </Badge>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('about.ourStoryTitle') }}</h2>
            <p class="text-lg text-foreground/80 leading-relaxed">
              {{ $t('about.ourStoryContent1') }}
            </p>
            <p class="text-lg text-foreground/80 leading-relaxed">
              {{ $t('about.ourStoryContent2') }}
            </p>
            
            <!-- Company timeline -->
            <div class="mt-10 relative" v-animate="'fade-in-bottom'">
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              <div class="relative z-10 pl-12 pb-8">
                <div class="absolute left-0 rounded-full bg-primary w-8 h-8 flex items-center justify-center shadow-lg">
                  <span class="text-primary-foreground text-sm font-bold">1</span>
                </div>
                <div class="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-primary/20">
                  <h3 class="text-lg font-semibold text-primary">2008</h3>
                  <p class="text-foreground/70">{{ $t('about.timeline.founded') || 'Company founded' }}</p>
                </div>
              </div>
              
              <div class="relative z-10 pl-12 pb-8">
                <div class="absolute left-0 rounded-full bg-primary/90 w-8 h-8 flex items-center justify-center shadow-lg">
                  <span class="text-primary-foreground text-sm font-bold">2</span>
                </div>
                <div class="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-primary/20">
                  <h3 class="text-lg font-semibold text-primary">2015</h3>
                  <p class="text-foreground/70">{{ $t('about.timeline.expansion') || 'Regional expansion' }}</p>
                </div>
              </div>
              
              <div class="relative z-10 pl-12">
                <div class="absolute left-0 rounded-full bg-primary/80 w-8 h-8 flex items-center justify-center shadow-lg">
                  <span class="text-primary-foreground text-sm font-bold">3</span>
                </div>
                <div class="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-primary/20">
                  <h3 class="text-lg font-semibold text-primary">{{ new Date().getFullYear() }}</h3>
                  <p class="text-foreground/70">{{ $t('about.timeline.present') || 'Present day' }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative" v-animate="'slide-in-right'">
            <!-- Main image with layered design -->
            <div class="rounded-2xl overflow-hidden shadow-2xl relative group border border-border/40">
              <img src="/covers/about-2.jpg" alt="Company history" class="object-cover w-full h-full aspect-[4/3] transition-transform duration-700 group-hover:scale-105" />
              
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              <!-- Caption -->
              <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-1/2 group-hover:translate-y-0 transition-transform duration-300">
                <p class="text-white font-medium">{{ $t('about.imageCaption') }}</p>
              </div>
            </div>
            
            <!-- Decorative elements -->
            <div class="absolute -bottom-8 -right-8 rtl:-right-auto rtl:-left-8 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            <div class="absolute -top-8 -left-8 rtl:-left-auto rtl:-right-8 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            
            <!-- Floating year badge -->
            <div class="absolute top-6 right-6 rtl:right-auto rtl:left-6 bg-card px-4 py-2 rounded-lg shadow-lg border border-border/50 text-sm font-medium">
              {{ $t('about.since') }} {{ companyHistory.foundedYear }}
            </div>
            
            <!-- Featured achievement -->
            <div class="absolute -bottom-6 -right-6 rtl:-right-auto rtl:-left-6 bg-card p-4 rounded-xl shadow-lg border border-border/50 max-w-[180px] transform hover:scale-105 transition-transform">
              <div class="flex items-center gap-3">
                <div class="bg-primary/10 rounded-full p-2">
                  <TrophyIcon class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p class="font-semibold text-sm">{{ $t('about.achievement') || 'Achievement' }}</p>
                  <p class="text-xs text-foreground/70">{{ $t('about.awardWinning') || 'Award winning company' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Tabs Section -->
        <div class="max-w-5xl mx-auto mb-24" v-animate="'fade-in'">
          <div class="mb-10 text-center">
            <Badge variant="outline" class="bg-primary/10 text-primary border-primary/20 mb-2">
              {{ $t('about.discovery') }}
            </Badge>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('about.whatWeDo') }}</h2>
            <p class="text-lg text-foreground/70 max-w-2xl mx-auto">
              {{ $t('about.whatWeDoSubtitle') }}
            </p>
          </div>
          
          <!-- Tabs UI -->
          <Tabs defaultValue="company" class="w-full">
            <TabsList class="grid w-full grid-cols-3 p-1">
              <TabsTrigger 
                v-for="(tab, index) in tabs" 
                :key="`tab-${index}`" 
                :value="tab"
                class="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div class="flex items-center justify-center gap-2">
                  <component :is="tabIcons[index]" class="w-4 h-4" />
                  {{ $t(`about.tabs.${tab}`) }}
                </div>
              </TabsTrigger>
            </TabsList>
            
            <!-- Company Tab Content -->
            <TabsContent value="company" class="mt-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
              <p class="text-lg mb-6 leading-relaxed text-foreground/80">{{ $t('about.companyContent') }}</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6" v-animate="'scale-in'">
                <Card class="hover:shadow-md transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2 text-primary">
                      <TrophyIcon class="w-5 h-5" />
                      {{ $t('about.expertise') }}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p class="text-foreground/80">{{ $t('about.expertiseContent') }}</p>
                  </CardContent>
                </Card>
                <Card class="hover:shadow-md transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2 text-primary">
                      <MapIcon class="w-5 h-5" />
                      {{ $t('about.global') }}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p class="text-foreground/80">{{ $t('about.globalContent') }}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <!-- Mission Tab Content -->
            <TabsContent value="mission" class="mt-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8" v-animate="'scale-in'">
                <Card class="bg-primary/5 border-primary/10 hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div class="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <TargetIcon class="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle>{{ $t('about.missionTitle') }}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p class="text-lg text-foreground/80 leading-relaxed">{{ $t('about.missionContent') }}</p>
                  </CardContent>
                </Card>
                <Card class="hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div class="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <EyeIcon class="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle>{{ $t('about.visionTitle') }}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p class="text-lg text-foreground/80 leading-relaxed">{{ $t('about.visionContent') }}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <!-- Values Tab Content -->
            <TabsContent value="values" class="mt-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" v-animate="'scale-in'">
                <Card 
                  v-for="(value, index) in values" 
                  :key="`value-${index}`"
                  class="text-center hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 group"
                >
                  <CardHeader>
                    <div class="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <component :is="valueIconMap[value.icon]" class="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle class="mt-4 text-primary">{{ $t(`about.values.${value.value.toLowerCase()}`) }}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p class="text-foreground/70">{{ $t(`about.values.${value.value.toLowerCase()}Content`) }}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <!-- Team Section -->
        <div class="mb-24" v-animate="'fade-in'">
          <div class="mb-10 text-center">
            <Badge variant="outline" class="bg-primary/10 text-primary border-primary/20 mb-2">
              {{ $t('about.meetTheTeam') }}
            </Badge>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('about.ourTeam') }}</h2>
            <p class="text-lg text-foreground/70 max-w-2xl mx-auto">
              {{ $t('about.ourTeamSubtitle') }}
            </p>
          </div>
          
          <!-- Team credo/values banner -->
          <div class="mb-12 bg-primary/5 py-8 px-6 rounded-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 filter blur-3xl"></div>
            <div class="relative z-10 max-w-3xl mx-auto text-center">
              <p class="text-xl md:text-2xl font-medium text-foreground/90 italic">
                "{{ $t('about.teamCredo') || 'Our team is dedicated to excellence, innovation, and building lasting partnerships with our clients.' }}"
              </p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card 
              v-for="(member, index) in teamMembers" 
              :key="`member-${index}`"
              class="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50"
              v-animate="'slide-up'"
              :style="{ 'animation-delay': `${index * 100}ms` }"
            >
              <div class="relative overflow-hidden aspect-square">
                <img 
                  :src="member.image" 
                  :alt="member.name" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-semibold text-white mb-1">{{ member.name }}</h3>
                  <p class="text-white/80 text-sm mb-2">{{ member.role }}</p>
                  
                  <!-- Bio -->
                  <p class="text-white/90 text-sm mb-4 line-clamp-3">{{ member.bio || 'Team member with expertise in project management' }}</p>
                  
                  <!-- Social links -->
                  <div class="flex gap-3">
                    <Button size="icon" variant="ghost" class="h-9 w-9 rounded-full bg-white/20 hover:bg-primary text-white hover:text-white">
                      <LinkedinIcon class="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" class="h-9 w-9 rounded-full bg-white/20 hover:bg-primary text-white hover:text-white">
                      <MailIcon class="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <!-- Info visible by default -->
              <CardContent class="text-center group-hover:opacity-0 group-hover:translate-y-8 transition-all duration-300">
                <h3 class="text-lg font-semibold">{{ member.name }}</h3>
                <p class="text-muted-foreground">{{ member.role }}</p>
                <!-- Skill tags -->
                <div class="flex flex-wrap gap-1 mt-2 justify-center">
                  <Badge variant="secondary" class="text-xs">{{ $t(`about.skills.${index + 1}`) || 'Project Management' }}</Badge>
                  <Badge variant="secondary" class="text-xs">{{ $t(`about.skills.${index + 5}`) || 'Leadership' }}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <!-- Team CTA -->
          <div class="mt-12 text-center">
            <Button variant="outline" as="RouterLink" to="/contact" class="group">
              <UsersIcon class="h-4 w-4 me-2" />
              <span>{{ $t('about.joinOurTeam') || 'Join Our Team' }}</span>
              <ArrowRightIcon class="h-4 w-4 ms-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <!-- Stats Section -->
        <div class="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 relative overflow-hidden mb-24" v-animate="'fade-in'">
          <!-- Decorative backgrounds -->
          <div class="absolute -top-40 -right-40 rtl:-right-auto rtl:-left-40 w-80 h-80 bg-primary/10 rounded-full blur-[80px] opacity-60"></div>
          <div class="absolute -bottom-40 -left-40 rtl:-left-auto rtl:-right-40 w-80 h-80 bg-primary/10 rounded-full blur-[80px] opacity-60"></div>
          
          <div class="mb-10 text-center relative z-10">
            <Badge variant="outline" class="bg-primary/20 text-primary border-primary/30 mb-2">
              {{ $t('about.achievements') }}
            </Badge>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('stats.title') }}</h2>
            <p class="text-lg text-foreground/70 max-w-2xl mx-auto">
              {{ $t('stats.subtitle') }}
            </p>
          </div>
          
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <Card
              v-for="(stat, index) in stats" 
              :key="`stat-${index}`"
              class="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/20"
              v-animate="'scale-in'"
              :style="{ 'animation-delay': `${index * 150}ms` }"
            >
              <CardContent class="pt-6">
                <div class="text-4xl md:text-5xl font-bold text-primary mb-2 relative">
                  <span>{{ stat.value }}</span>
                  <span class="text-2xl absolute -right-4 rtl:-right-auto rtl:-left-4 top-0">+</span>
                </div>
                <p class="text-foreground/70 font-medium">{{ $t(stat.label) }}</p>
                
                <!-- Decorative underline -->
                <div class="h-1 w-12 bg-primary/30 rounded-full mx-auto mt-3"></div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <!-- Partners Section -->
        <div class="mb-24" v-animate="'fade-in'">
          <div class="mb-10 text-center">
            <Badge variant="outline" class="bg-primary/10 text-primary border-primary/20 mb-2">
              {{ $t('about.partnerships') }}
            </Badge>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('about.ourPartners') }}</h2>
            <p class="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              {{ $t('about.ourPartnersSubtitle') }}
            </p>
            
            <!-- Partner category filter buttons -->
            <div class="flex flex-wrap justify-center gap-2 mb-8">
              <Button 
                v-for="(category, index) in ['All', 'Strategic', 'Technology', 'Implementation']" 
                :key="index"
                variant="outline"
                size="sm" 
                :class="{ 'bg-primary/10 border-primary/20': activePartnerFilter === category }"
                @click="activePartnerFilter = category"
              >
                {{ category }}
              </Button>
            </div>
            
            <!-- Partners Carousel -->
            <div class="relative mt-16 overflow-hidden">
              <!-- Animated background -->
              <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 -z-10 rounded-3xl"></div>
              <div class="absolute -top-10 -left-10 rtl:-left-auto rtl:-right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div class="absolute -bottom-10 -right-10 rtl:-right-auto rtl:-left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              <!-- Carousel controls -->
              <div class="absolute -left-2 top-1/2 -translate-y-1/2 z-20 rtl:-left-auto rtl:-right-2">
                <Button size="icon" variant="secondary" class="h-10 w-10 rounded-full opacity-80 shadow-md" @click="scrollPartners('prev')">
                  <ChevronLeftIcon class="h-5 w-5 rtl:rotate-180" />
                </Button>
              </div>
              <div class="absolute -right-2 top-1/2 -translate-y-1/2 z-20 rtl:-right-auto rtl:-left-2">
                <Button size="icon" variant="secondary" class="h-10 w-10 rounded-full opacity-80 shadow-md" @click="scrollPartners('next')">
                  <ChevronRightIcon class="h-5 w-5 rtl:rotate-180" />
                </Button>
              </div>
              
              <!-- Partners carousel with RTL support -->
              <div class="py-12 px-8 partners-carousel overflow-hidden" ref="partnersCarousel" v-animate="'slide-up'">
                <div 
                  class="flex partners-track transition-transform duration-500" 
                  :style="{ transform: `translateX(${carouselPosition}px)` }"
                  @mouseenter="isHoveringCarousel = true" 
                  @mouseleave="isHoveringCarousel = false"
                >
                  <div 
                    v-for="(partner, index) in filteredPartners" 
                    :key="`partner-${index}`" 
                    class="partner-item flex items-center justify-center px-8 min-w-[200px]"
                  >
                    <Card class="p-6 h-32 w-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group">
                      <img 
                        :src="partner.logo" 
                        :alt="partner.name" 
                        class="h-16 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 opacity-70 group-hover:opacity-100" 
                      />
                    </Card>
                  </div>
                </div>
              </div>
              
              <!-- Partners spotlight grid -->
              <div class="mt-16 relative">
                <Separator class="mb-8" />
                <h3 class="text-xl font-semibold text-center mb-6">{{ $t('about.featuredPartners') || 'Featured Partners' }}</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <Card
                    v-for="(partner, index) in featuredPartners" 
                    :key="`featured-${index}`"
                    class="transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:scale-105 group"
                    v-animate="'fade-in'"
                    :style="{ 'animation-delay': `${index * 100}ms` }"
                  >
                    <CardContent class="p-4 flex flex-col items-center h-full">
                      <div class="p-4 flex items-center justify-center mb-2">
                        <img 
                          :src="partner.logo" 
                          :alt="partner.name" 
                          class="h-12 object-contain mb-4 transition-all duration-300 group-hover:scale-110" 
                        />
                      </div>
                      <div class="mt-auto text-center">
                        <p class="text-sm font-medium">{{ partner.name }}</p>
                        <p class="text-xs text-muted-foreground mt-1">{{ partner.type }}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <!-- Partner call to action -->
              <div class="mt-12 text-center" v-animate="'slide-up'">
                <Button as="RouterLink" to="/contact" variant="outline" class="group">
                  <HandshakeIcon class="h-4 w-4 me-2" />
                  <span>{{ $t('about.becomePartner') }}</span>
                  <span class="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 ms-1">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- CTA Section -->
    <div class="py-16 md:py-24 bg-card border-t border-border relative overflow-hidden" v-animate="'fade-in'">
      <!-- Decorative backgrounds -->
      <div class="absolute -top-40 -right-40 rtl:-right-auto rtl:-left-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div class="absolute -bottom-40 -left-40 rtl:-left-auto rtl:-right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      
      <!-- Animated patterns -->
      <div class="absolute top-10 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 animate-spin-slow opacity-30"></div>
      <div class="absolute bottom-20 right-20 w-16 h-16 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30"></div>
      
      <div class="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div class="inline-block mb-6 animate-bounce-slow">
          <div class="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <ArrowDownIcon class="h-6 w-6 text-primary" />
          </div>
        </div>
        
        <h2 class="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80" v-animate="'scale-in'">
          {{ $t('cta.title') }}
        </h2>
        <p class="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto" v-animate="'slide-up'">
          {{ $t('cta.description') }}
        </p>

        <!-- Interactive CTA buttons -->
        <div class="flex flex-wrap gap-4 justify-center items-center" v-animate="'slide-up'">
          <Button 
            as="RouterLink" 
            to="/contact" 
            size="lg" 
            class="group relative overflow-hidden"
          >
            <span class="relative z-10 flex items-center">
              {{ $t('cta.contactUs') }}
              <ArrowRightIcon class="ml-2 h-5 w-5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </span>
            
            <!-- Animated background on hover -->
            <span class="absolute inset-0 w-full h-full bg-primary group-hover:bg-primary/90 transition-colors duration-300"></span>
            <span class="absolute bottom-0 left-0 w-full h-1 bg-primary-foreground/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rtl:origin-right"></span>
          </Button>
          
          <Button as="RouterLink" to="/services" variant="outline" size="lg" class="group relative overflow-hidden">
            <span class="relative z-10">
              {{ $t('cta.learnMore') }}
            </span>
            <span class="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rtl:origin-right"></span>
          </Button>
          
          <Separator orientation="vertical" class="h-8 hidden md:block" />
          
          <!-- Social share buttons -->
          <div class="flex items-center gap-2">
            <Button variant="ghost" size="icon" class="rounded-full" title="Share on LinkedIn">
              <LinkedinIcon class="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" class="rounded-full" title="Share on Twitter">
              <TwitterIcon class="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" class="rounded-full" title="Share on Facebook">
              <FacebookIcon class="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <!-- FAQ teaser -->
        <div class="mt-16 max-w-2xl mx-auto">
          <Accordion type="single" collapsible class="bg-background rounded-lg border border-border">
            <AccordionItem value="faq-1">
              <AccordionTrigger class="text-left px-4">{{ $t('about.faq.question1') || 'How can I become a client?' }}</AccordionTrigger>
              <AccordionContent class="px-4 pb-4">
                {{ $t('about.faq.answer1') || 'Contact our team through the contact page to schedule an initial consultation where we can discuss your project needs.' }}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger class="text-left px-4">{{ $t('about.faq.question2') || 'What industries do you specialize in?' }}</AccordionTrigger>
              <AccordionContent class="px-4 pb-4">
                {{ $t('about.faq.answer2') || 'We specialize in construction, infrastructure, transportation, and technology sectors across the Middle East region.' }}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  ClockIcon,
  TargetIcon,
  EyeIcon,
  ShieldIcon,
  AwardIcon,
  UsersIcon,
  LightbulbIcon,
  MapIcon,
  LinkedinIcon,
  MailIcon,
  ArrowRightIcon,
  HandshakeIcon,
  GlobeIcon,
  TrophyIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowDownIcon,
  TwitterIcon,
  FacebookIcon
} from 'lucide-vue-next'
import { useAboutStore } from '@/stores/about'
import { useLocaleStore } from '@/stores/locale'
import PageHeader from '@/components/PageHeader.vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion'

const { t } = useI18n()
const aboutStore = useAboutStore()
const localeStore = useLocaleStore()
const isHoveringCarousel = ref(false)
const partnersCarousel = ref<HTMLElement | null>(null)
const carouselPosition = ref(0)
const activePartnerFilter = ref('All')

// Breadcrumbs
const breadcrumbs = [
  { name: t('common.home'), path: '/' },
  { name: t('about.aboutUs'), path: '/about' }
]

// Get data from store
const { companyHistory, valueProps, missionVision, values, teamMembers, stats, partners } = aboutStore

// Tabs
const tabs = ['company', 'mission', 'values']
const tabIcons = [MapIcon, TargetIcon, ShieldIcon]

// Language toggle
function toggleLanguage() {
  localeStore.toggleLocale()
}

// Partner filtering and carousel functionality
const filteredPartners = computed(() => {
  if (activePartnerFilter.value === 'All') {
    return partners
  }
  
  return partners.filter(partner => {
    // Assign random partner types if not defined
    const partnerType = partner.type || ['Strategic', 'Technology', 'Implementation'][Math.floor(Math.random() * 3)]
    return partnerType === activePartnerFilter.value
  })
})

// Get a subset of featured partners
const featuredPartners = computed(() => {
  return partners.slice(0, 6).map(partner => ({
    ...partner,
    type: partner.type || ['Strategic', 'Technology', 'Implementation', 'Solution', 'Industry', 'Regional'][Math.floor(Math.random() * 6)] + ' Partner'
  }))
})

// Handle carousel scrolling
function scrollPartners(direction: 'next' | 'prev') {
  const carousel = partnersCarousel.value
  if (!carousel) return
  
  const itemWidth = 216 // partner item width + padding
  const visibleWidth = carousel.clientWidth
  const scrollOffset = Math.min(visibleWidth, itemWidth * 3)
  
  if (direction === 'next') {
    carouselPosition.value -= scrollOffset
    // Prevent scrolling too far
    const maxScroll = -(filteredPartners.value.length * itemWidth - visibleWidth)
    if (carouselPosition.value < maxScroll) {
      carouselPosition.value = maxScroll
    }
  } else {
    carouselPosition.value += scrollOffset
    if (carouselPosition.value > 0) {
      carouselPosition.value = 0
    }
  }
}

// Reset carousel position when filter changes
function resetCarouselPosition() {
  carouselPosition.value = 0
}

// Watch for filter changes
watch(activePartnerFilter, () => {
  resetCarouselPosition()
})

// Value icons mapping
const valueIconMap: Record<string, any> = {
  ShieldIcon,
  AwardIcon,
  UsersIcon,
  LightbulbIcon
}

// Reset carousel on component mount
onMounted(() => {
  resetCarouselPosition()
})
</script>

<style scoped>
.partners-carousel {
  width: 100%;
  position: relative;
}

.partners-track {
  display: flex;
  width: max-content;
  padding: 1rem 0;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-rtl {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}

.animate-scroll-rtl {
  animation: scroll-rtl 40s linear infinite;
}

/* For better dark mode effects */
:root.dark .partners-track img {
  filter: brightness(1.2) grayscale(0.8);
}

:root.dark .partners-track img:hover {
  filter: brightness(1.4) grayscale(0);
}

/* New animations */
@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-10px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

@keyframes float-delayed {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(10px) translateX(-10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style> 