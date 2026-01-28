export interface PopupConfig {
    id: string
    title: string
    content: string
    type: 'text' | 'banner'
    imageUrl?: string
    link?: string
    pages: string[] // List of routes where this popup should appear, e.g. ['/']
    active: boolean
}

export const usePopups = () => {
    // Initial mock data for popups
    const popups = useState<PopupConfig[]>('global-popups', () => [
        {
            id: 'p2',
            title: 'Hệ thống khuyến mãi nạp tiền',
            content: 'Tặng ngay 5% giá trị nạp tiền cho lần nạp đầu tiên trong ngày. Xem chi tiết tại kênh nạp tiền.',
            type: 'banner',
            imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            link: '/user/wallet',
            pages: ['/'],
            active: true
        },
        {
            id: 'p1',
            title: 'Chào mừng bạn đến với MMO DUYLON!',
            content: 'Dịch vụ Scam uy tín, chất lượng Scam nhất thị trường. Chúc bạn một ngày giao dịch thành công!',
            type: 'text',
            pages: ['/'],
            active: true
        }
    ])

    const visiblePopups = useState<string[]>('visible-popups', () => [])


    const isPopupVisible = (popupId: string) => {
        if (!import.meta.client) return false

        const lastClosed = localStorage.getItem(`popup-closed-${popupId}`)
        if (!lastClosed) return true

        const twelveHours = 12 * 60 * 60 * 1000
        const now = Date.now()
        return now - parseInt(lastClosed) > twelveHours
    }

    const closePopup = (popupId: string, snooze = false) => {
        visiblePopups.value = visiblePopups.value.filter(id => id !== popupId)
        if (import.meta.client && snooze) {
            localStorage.setItem(`popup-closed-${popupId}`, Date.now().toString())
        }
    }

    const markPopupVisible = (popupId: string) => {
        if (!visiblePopups.value.includes(popupId)) {
            visiblePopups.value.push(popupId)
        }
    }

    return {
        popups,
        visiblePopups,
        isPopupVisible,
        closePopup,
        markPopupVisible
    }
}
