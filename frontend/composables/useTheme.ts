export type ThemeBrand = 'standard' | 'admin'

export const useTheme = () => {
    const theme = useState<ThemeBrand>('theme-brand', () => 'standard')

    const setTheme = (newTheme: ThemeBrand) => {
        theme.value = newTheme
        if (import.meta.client) {
            document.documentElement.setAttribute('data-brand', newTheme)
            localStorage.setItem('app-brand', newTheme)
        }
    }

    const initTheme = () => {
        if (import.meta.client) {
            const saved = localStorage.getItem('app-brand') as ThemeBrand
            if (saved) {
                setTheme(saved)
            }
        }
    }

    return {
        theme,
        setTheme,
        initTheme
    }
}
