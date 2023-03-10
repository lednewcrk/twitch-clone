import { User } from './User'

export type Message = {
    id: string
    user: User & { isSubscribed: boolean; subscribeBadgeImageUrl?: string }
    createdAt: Date
    text: string
}
