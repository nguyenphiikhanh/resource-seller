<template>
  <div class="flex items-center gap-4 overflow-hidden h-5 w-full md:w-1/2">
    <span class="text-brand-cyan font-bold whitespace-nowrap">
      <i class="fas fa-bolt mr-1"></i> LIVE:
    </span>
    <div class="flex flex-col relative w-full h-5 overflow-hidden">
      <Transition name="slide-up" mode="out-in">
        <div :key="liveData.name" class="absolute w-full text-xs">
          <span class="text-gray-400">User </span>
          <span class="text-gray-900 dark:text-white font-mono font-bold">{{ liveData.name }}***</span>
          <span class="text-gray-600 dark:text-gray-400"> vừa {{ liveData.action }}&nbsp;</span>
          <span class="text-brand-green font-medium">{{ liveData.target }}</span>
          <span class="text-gray-500 italic"> - {{ liveData.time }} phút trước</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
const names = ['nam_mmo', 'tuan_ads', 'hacker_lo', 'facebook_king', 'hoang_dv', 'mmo_master'];
const listActions = [
  { action: 'mua', target: '50 Clone' },
  { action: 'mua', target: 'BM2500' },
  { action: 'mua', target: 'Source Code' },
  { action: 'nạp', target: '500,000đ' }
];

const liveData = ref({
  name: '...',
  action: '...',
  target: '...',
  time: 0
});

const updateLiveText = () => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomObj = listActions[Math.floor(Math.random() * listActions.length)];

  liveData.value = {
    name: randomName,
    action: randomObj.action,
    target: randomObj.target,
    time: Math.floor(Math.random() * 5) + 1
  };
};

let timer = null;
onMounted(() => {
  updateLiveText();
  timer = setInterval(updateLiveText, 4000);
});
onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>