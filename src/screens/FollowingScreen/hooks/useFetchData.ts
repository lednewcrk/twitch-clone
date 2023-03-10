import { useQuery } from '@tanstack/react-query'
import {
    fetchFollowedCategories,
    fetchLiveChannels,
    fetchOfflineChannels,
    fetchRecommendedChannels
} from '../../../services/api'
import { Category, Channel, Streamer } from '../../../types'

export function useFetchData() {
    const { data: followedCategories } = useQuery<Category[]>({
        queryKey: ['followedCategories'],
        queryFn: fetchFollowedCategories
    })

    const { data: liveChannels } = useQuery<Channel[]>({
        queryKey: ['live_channels'],
        queryFn: fetchLiveChannels
    })

    const { data: recommendedChannels } = useQuery<Channel[]>({
        queryKey: ['recommended_channels'],
        queryFn: fetchRecommendedChannels
    })

    const { data: offlineChannels } = useQuery<Streamer[]>({
        queryKey: ['offline_channels'],
        queryFn: fetchOfflineChannels
    })

    return {
        followedCategories,
        liveChannels,
        recommendedChannels,
        offlineChannels
    }
}
