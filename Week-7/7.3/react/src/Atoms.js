import { atom , selector } from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkAtom = get(networkAtom)
        const jobsAtom = get(jobsAtom)
        const notificationsAtom = get(notificationsAtom)
        const messagingAtom = get(messagingAtom)

        return networkAtom + jobsAtom + notificationsAtom + messagingAtom
    }
})