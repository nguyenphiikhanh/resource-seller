<template>
  <aside class="w-full sm:hidden lg:w-64 flex-shrink-0 space-y-8">
    
    <div class="bg-white dark:bg-dark-800 rounded-xl p-5 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors duration-300">
        <h3 class="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm tracking-wider flex items-center">
            <i class="fas fa-layer-group mr-2 text-brand-cyan"></i> Danh Mục
        </h3>
        <ul class="space-y-2">
            <li>
                <a href="#" class="flex items-center justify-between p-2 rounded-lg bg-brand-fb/10 text-brand-fb font-medium border border-brand-fb/20">
                    <span><i class="fab fa-facebook mr-2"></i> Facebook Ads</span>
                    <span class="bg-brand-fb/20 text-xs px-2 py-0.5 rounded-full">120</span>
                </a>
            </li>
            
            <li>
                <a href="#" class="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                    <span><i class="fab fa-google mr-2 text-red-500"></i> Youtube</span>
                    <span class="bg-gray-100 dark:bg-dark-900 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 text-xs px-2 py-0.5 rounded-full transition-colors">45</span>
                </a>
            </li>

            <li>
                <a href="#" class="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                    <span><i class="fab fa-tiktok mr-2 text-gray-900 dark:text-white"></i> TikTok</span>
                    <span class="bg-gray-100 dark:bg-dark-900 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 text-xs px-2 py-0.5 rounded-full transition-colors">32</span>
                </a>
            </li>

            <li>
                <a href="#" class="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                    <span><i class="fas fa-code mr-2 text-brand-green"></i> Code / Tool</span>
                    <span class="bg-gray-100 dark:bg-dark-900 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 text-xs px-2 py-0.5 rounded-full transition-colors">18</span>
                </a>
            </li>
        </ul>
    </div>

    <div class="bg-white dark:bg-dark-800 rounded-xl p-5 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors duration-300">
        <h3 class="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm tracking-wider">Khoảng Giá</h3>
        <div class="flex gap-2 mb-4">
            <input type="number" placeholder="0" class="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded px-2 py-1 text-sm focus:border-brand-purple outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-600">
            
            <input type="number" placeholder="5M" class="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded px-2 py-1 text-sm focus:border-brand-purple outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-600">
        </div>
        <button class="w-full py-2 bg-gray-100 hover:bg-gray-200 dark:bg-dark-700 dark:hover:bg-dark-600 text-gray-900 dark:text-white rounded text-sm font-medium transition-colors">Áp dụng</button>
    </div>

    <div class="relative overflow-hidden rounded-xl h-40 group cursor-pointer shadow-md">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover opacity-90 dark:opacity-60 group-hover:scale-110 transition duration-700">
        
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent dark:from-dark-900 dark:to-transparent"></div>
        
        <div class="absolute bottom-4 left-4">
            <span class="text-brand-green text-xs font-bold uppercase mb-1 block shadow-black drop-shadow-md">New Tool</span>
            <h4 class="text-white font-bold leading-tight drop-shadow-md">Auto Reg Clone <br>Max Speed 2024</h4>
        </div>
    </div>
  </aside>
</template>