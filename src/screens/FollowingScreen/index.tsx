import { useQuery } from '@tanstack/react-query'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { FollowingScreenProps } from './types'
import { fetchFollowedCategories } from '../../services/api'

export function FollowingScreen({}: FollowingScreenProps) {
    const { data: followedCategories } = useQuery({
        queryKey: ['followedCategories'],
        queryFn: fetchFollowedCategories
    })

    return (
        <View style={styles.container}>
            <Text>Following Screen</Text>
        </View>
    )
}
