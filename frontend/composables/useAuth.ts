export const useAuth = () => {
  const user = useState('user', () => ({
    name: 'Nguyen Phuc Khanh',
    role: 'user', // 'user', 'seller', 'admin', 'guest'
    balance: '1,250,000đ',
    avatar: 'NK'
  }))

  const isLoggedIn = computed(() => user.value.role !== 'guest')
  const isSeller = computed(() => user.value.role === 'seller' || user.value.role === 'admin')
  const isAdmin = computed(() => user.value.role === 'admin')

  const login = (role: string) => {
    user.value.role = role
    if (role === 'admin') {
      user.value.name = 'System Admin'
      user.value.avatar = 'AD'
    } else {
      user.value.name = 'Nguyen Phuc Khanh'
      user.value.avatar = 'NK'
    }
  }

  const logout = () => {
    user.value.role = 'guest'
  }

  return {
    user,
    isLoggedIn,
    isSeller,
    isAdmin,
    login,
    logout
  }
}
