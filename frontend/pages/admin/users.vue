<script setup lang="ts">
import { ref } from 'vue'
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  Shield, 
  Ban, 
  CreditCard,
  UserCheck,
  ShieldAlert
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

const users = [
  { id: '1001', username: 'khanh_mmo', email: 'khanh@example.com', role: 'Seller', balance: '12,500,000đ', status: 'Hoạt động' },
  { id: '1002', username: 'duy_dev', email: 'duy@mmo.vn', role: 'User', balance: '520,000đ', status: 'Hoạt động' },
  { id: '1003', username: 'scammer_99', email: 'bad@luck.com', role: 'User', balance: '0đ', status: 'Đã khóa' },
  { id: '1004', username: 'admin_master', email: 'boss@system.com', role: 'Admin', balance: '1,000,000,000đ', status: 'Hoạt động' },
]
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-black tracking-tight">Cơ sở dữ liệu người dùng</h1>
        <p class="text-muted-foreground mt-1">Quản lý tài khoản, số dư và phân quyền cho toàn bộ thành viên.</p>
      </div>
      
      <Button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold gap-2 h-11 px-6 rounded-xl">
        <Users class="h-4 w-4" /> Xuất danh sách Excel
      </Button>
    </div>

    <!-- Stats Mini Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="s in [
        { l: 'Tổng User', v: '5,280', c: 'text-indigo-600' },
        { l: 'Đang Online', v: '842', c: 'text-green-600' },
        { l: 'Mới (24h)', v: '+24', c: 'text-blue-600' },
        { l: 'Bị Khóa', v: '18', c: 'text-red-600' }
      ]" :key="s.l" class="p-4 bg-card rounded-2xl shadow-sm border flex flex-col gap-1">
        <span class="text-[10px] uppercase font-black text-muted-foreground tracking-widest">{{ s.l }}</span>
        <span class="text-xl font-black" :class="s.c">{{ s.v }}</span>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex flex-col md:flex-row gap-4 items-center bg-card p-4 rounded-2xl shadow-sm border">
      <div class="relative flex-1 w-full">
        <Search class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Tìm tên, email, ID người dùng..." class="pl-10 h-11 bg-muted/30 border-0 rounded-xl" />
      </div>
      <div class="flex gap-2 w-full md:w-auto">
        <Button variant="outline" class="h-11 rounded-xl gap-2 font-bold border-slate-200">
          <Filter class="h-4 w-4" /> Lọc nâng cao
        </Button>
        <Select>
          <SelectTrigger class="h-11 w-40 bg-muted/30 border-0 rounded-xl font-bold">
            <SelectValue placeholder="Vai trò" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả</SelectItem>
            <SelectItem value="user">Người mua (User)</SelectItem>
            <SelectItem value="seller">Người bán (Seller)</SelectItem>
            <SelectItem value="admin">Quản trị viên (Admin)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <!-- User Table -->
    <Card class="border-0 shadow-md overflow-hidden">
      <Table>
        <TableHeader class="bg-indigo-50 dark:bg-slate-900">
          <TableRow>
            <TableHead class="w-20">ID</TableHead>
            <TableHead>Thông tin tài khoản</TableHead>
            <TableHead>Vai trò</TableHead>
            <TableHead>Số dư ví</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead class="text-right">Thao tác</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="u in users" :key="u.id" class="hover:bg-muted/5 transition-colors border-b last:border-0">
            <TableCell class="font-mono text-xs font-black">#{{ u.id }}</TableCell>
            <TableCell>
              <div class="flex items-center gap-3">
                <Avatar class="h-10 w-10 border-2 border-background shadow-sm">
                  <AvatarFallback class="bg-slate-200 text-slate-700 text-xs font-black">{{ u.username.substring(0, 2).toUpperCase() }}</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-black text-sm text-slate-800 dark:text-slate-100">{{ u.username }}</p>
                  <p class="text-xs text-muted-foreground">{{ u.email }}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge 
                :variant="u.role === 'Admin' ? 'default' : 'secondary'"
                class="font-black text-[10px] uppercase px-2 py-0.5"
                :class="{
                  'bg-indigo-600': u.role === 'Admin',
                  'bg-blue-500/10 text-blue-600': u.role === 'Seller',
                  'bg-slate-100 text-slate-600': u.role === 'User',
                }"
              >
                {{ u.role }}
              </Badge>
            </TableCell>
            <TableCell class="font-black font-mono text-indigo-600 text-sm italic">{{ u.balance }}</TableCell>
            <TableCell>
              <div class="flex items-center gap-2">
                <div :class="`h-1.5 w-1.5 rounded-full ${u.status === 'Hoạt động' ? 'bg-green-500' : 'bg-red-500'}`"></div>
                <span class="text-xs font-bold">{{ u.status }}</span>
              </div>
            </TableCell>
            <TableCell class="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <Button variant="ghost" size="icon" class="h-9 w-9 rounded-full">
                    <MoreVertical class="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" class="w-48 rounded-2xl p-2">
                  <DropdownMenuItem class="gap-3 rounded-xl py-2.5 font-bold">
                    <UserCheck class="h-4 w-4 text-indigo-600" /> Sửa thông tin
                  </DropdownMenuItem>
                  <DropdownMenuItem class="gap-3 rounded-xl py-2.5 font-bold">
                    <CreditCard class="h-4 w-4 text-green-600" /> Cộng/Trừ tiền
                  </DropdownMenuItem>
                  <DropdownMenuItem class="gap-3 rounded-xl py-2.5 font-bold">
                    <ShieldAlert class="h-4 w-4 text-amber-600" /> Đổi vai trò
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem class="gap-3 rounded-xl py-2.5 font-bold text-red-600 focus:bg-red-50">
                    <Ban class="h-4 w-4" /> Khóa tài khoản
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  </div>
</template>
