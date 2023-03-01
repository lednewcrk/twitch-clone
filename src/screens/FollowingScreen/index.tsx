import { useQuery } from '@tanstack/react-query'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { FollowingScreenProps } from './types'
import { fetchFollowedCategories, fetchLiveChannels } from '../../services/api'
import { Category, Channel } from '../../types'
import { CategoriesList } from '../../components/CategoriesList'
import { LiveChannelsList } from '../../components/LiveChannelsList'

export function FollowingScreen({}: FollowingScreenProps) {
    const { data: followedCategories } = useQuery<Category[]>({
        queryKey: ['followedCategories'],
        queryFn: fetchFollowedCategories
    })

    const { data: liveChannels } = useQuery<Channel[]>({
        queryKey: ['live_channels'],
        queryFn: fetchLiveChannels
    })

    return (
        <View style={styles.container}>
            <CategoriesList categories={followedCategories ?? []} />
            <LiveChannelsList channels={liveChannels ?? []} />
        </View>
    )
}
