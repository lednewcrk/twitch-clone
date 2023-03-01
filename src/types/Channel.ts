import { Category } from './Category'
import { Streamer } from './Streamer'
import { Tag } from './Tag'

export type Channel = {
    id: number
    onlineViewerCount: number | null
    title: string
    category: Omit<Category, 'coverUrl' | 'onlineViewerCount'>
    tags: Tag[]
    streamer: Streamer
    streamUrl: string
}
