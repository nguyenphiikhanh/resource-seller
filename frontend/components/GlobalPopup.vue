<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { X, Bell, ChevronRight, CheckCircle2, Clock } from 'lucide-vue-next'
import { type PopupConfig, usePopups } from '@/composables/usePopups'

const { isPopupVisible, closePopup, markPopupVisible } = usePopups()

interface Props {
  popup: PopupConfig
}

const props = defineProps<Props>()
const show = ref(false)
const snooze = ref(false)

onMounted(() => {
  if (isPopupVisible(props.popup.id)) {
    // Small delay for better UX
    setTimeout(() => {
      show.value = true
      markPopupVisible(props.popup.id)
    }, 1500)
  }
})

const handleClose = () => {
  show.value = false
  closePopup(props.popup.id, snooze.value)
}
</script>

<template>
  <Transition
    enter-active-class="duration-500 ease-out"
    enter-from-class="opacity-0 scale-95 translate-y-8"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="duration-300 ease-in"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-95 translate-y-8"
  >
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4 py-20 overflow-y-auto pointer-events-none">
      <div class="relative w-full max-w-lg bg-card border shadow-2xl rounded-[2.5rem] overflow-hidden animate-in zoom-in duration-500 pointer-events-auto h-[520px] flex flex-col">
        <!-- Close Button -->
        <button 
          @click="handleClose"
          class="absolute top-4 right-4 h-10 w-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors z-[30] group"
        >
          <X class="h-5 w-5 text-muted-foreground group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <!-- Banner Type -->
        <template v-if="popup.type === 'banner'">
          <div class="relative h-56 overflow-hidden shrink-0">
            <img :src="popup.imageUrl" :alt="popup.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-8 right-8">
              <h3 class="text-2xl font-black text-white italic uppercase tracking-tighter">{{ popup.title }}</h3>
            </div>
          </div>
          <div class="p-8 pb-10 flex-1 flex flex-col justify-between">
            <p class="text-muted-foreground font-bold leading-relaxed">{{ popup.content }}</p>
            <div class="flex items-center justify-between gap-4 pt-6 mt-auto">
              <label class="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" v-model="snooze" class="hidden" />
                <div 
                  class="h-6 w-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300"
                  :class="snooze ? 'bg-primary border-primary shadow-lg shadow-primary/30' : 'border-muted-foreground/20 bg-background'"
                >
                  <CheckCircle2 v-if="snooze" class="h-4 w-4 text-white" />
                </div>
                <span class="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Không hiển thị lại trong 12h</span>
              </label>
              
              <Button 
                v-if="popup.link"
                @click="navigateTo(popup.link); handleClose()"
                class="bg-primary hover:bg-primary/90 text-white font-black rounded-2xl px-6 h-12 shadow-xl shadow-primary/20 gap-2 group"
              >
                XEM NGAY <ChevronRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </template>

        <!-- Text Type -->
        <template v-else>
          <div class="p-10 flex-1 flex flex-col">
            <div class="flex items-center gap-4 mb-8">
              <div class="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                <Bell class="h-7 w-7 animate-bounce" />
              </div>
              <div>
                <h3 class="text-2xl font-black italic uppercase tracking-tighter text-primary">Thông báo mới</h3>
                <p class="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">Official Announcement</p>
              </div>
            </div>

            <div class="space-y-4 flex-1">
              <h4 class="text-xl font-black leading-tight">{{ popup.title }}</h4>
              <p class="text-muted-foreground font-bold leading-relaxed">{{ popup.content }}</p>
            </div>

            <div class="pt-8 flex flex-col gap-4 mt-auto">
               <Button 
                @click="handleClose"
                class="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black rounded-2xl shadow-xl shadow-primary/20 text-lg"
              >
                TÔI ĐÃ HIỂU
              </Button>

              <label class="flex items-center justify-center gap-3 cursor-pointer group py-2">
                <input type="checkbox" v-model="snooze" class="hidden" />
                <div 
                  class="h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all duration-300"
                  :class="snooze ? 'bg-primary border-primary' : 'border-muted-foreground/20'"
                >
                  <CheckCircle2 v-if="snooze" class="h-3 w-3 text-white" />
                </div>
                <span class="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Tạm ẩn thông báo này trong 12h tới</span>
              </label>
            </div>
          </div>
        </template>
        
        <!-- Decorative background elements -->
        <div class="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div class="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10"></div>
      </div>
    </div>
  </Transition>
</template>
