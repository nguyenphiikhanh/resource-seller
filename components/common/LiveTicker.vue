<template>
  <div class="flex h-5 w-full items-center gap-4 overflow-hidden md:w-1/2">
    <span class="whitespace-nowrap font-bold text-brand-cyan">
      <i class="fas fa-bolt mr-1"></i> LIVE:
    </span>
    <div class="relative flex h-5 w-full flex-col overflow-hidden">
      <Transition name="slide-up" mode="out-in">
        <div :key="liveData.name" class="absolute w-full text-xs">
          <span class="text-gray-400">User </span>
          <span class="font-mono font-bold text-gray-900 dark:text-white"
            >{{ liveData.name }}***</span
          >
          <span class="text-gray-600 dark:text-gray-400"> vừa {{ liveData.action }}&nbsp;</span>
          <span class="font-medium text-brand-green">{{ liveData.target }}</span>
          <span class="italic text-gray-500"> - {{ liveData.time }} phút trước</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
const names = ['nam_mmo', 'tuan_ads', 'hacker_lo', 'facebook_king', 'hoang_dv', 'mmo_master']
const listActions = [
  { action: 'mua', target: '50 Clone' },
  { action: 'mua', target: 'BM2500' },
  { action: 'mua', target: 'Source Code' },
  { action: 'nạp', target: '500,000đ' },
]

const liveData = ref({
  name: '...',
  action: '...',
  target: '...',
  time: 0,
})

const updateLiveText = () => {
  const randomName = names[Math.floor(Math.random() * names.length)]
  const randomObj = listActions[Math.floor(Math.random() * listActions.length)]

  liveData.value = {
    name: randomName,
    action: randomObj.action,
    target: randomObj.target,
    time: Math.floor(Math.random() * 5) + 1,
  }
}

let timer = null
onMounted(() => {
  updateLiveText()
  timer = setInterval(updateLiveText, 4000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
