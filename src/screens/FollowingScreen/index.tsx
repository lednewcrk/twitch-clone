import { useQuery } from '@tanstack/react-query'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { FollowingScreenProps } from './types'
import { fetchFollowedCategories } from '../../services/api'
import { DataProvider, RecyclerListView } from 'recyclerlistview'
import { CategoriesList } from '../../components'
import { Category } from '../../types/Category'

export function FollowingScreen({}: FollowingScreenProps) {
    const { data: followedCategories } = useQuery<Category[]>({
        queryKey: ['followedCategories'],
        queryFn: fetchFollowedCategories
    })

    return (
        <View style={styles.container}>
            <CategoriesList categories={followedCategories ?? []} />
        </View>
    )
}
