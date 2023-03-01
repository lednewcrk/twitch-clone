import { useEffect, useState } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {
    DataProvider,
    LayoutProvider,
    RecyclerListView
} from 'recyclerlistview'
import { Category } from '../../types/Category'
import { CategoryCoverItem } from '../CategoryCoverItem'
import { styles } from './styles'

export type CategoriesListProps = {
    categories: Category[]
    itemSize: { width: number; height: number }
    listScrollContainerStyle?: StyleProp<ViewStyle>
}

export function CategoriesList({
    categories,
    itemSize = { width: 135, height: 220 },
    listScrollContainerStyle
}: CategoriesListProps) {
    const dataProvider = new DataProvider((r1, r2) => {
        return r1.id !== r2.id
    })

    const layoutProvider = new LayoutProvider(
        index => 'CATEGORY_COVER_ITEM',
        (type, dim) => {
            dim.width = itemSize.width
            dim.height = itemSize.height
        }
    )

    const [data, setData] = useState(dataProvider.cloneWithRows(categories))

    useEffect(() => {
        setData(dataProvider.cloneWithRows(categories))
    }, [categories])

    const rowRenderer = (type: string | number, data: any) => {
        const category = data as Category

        return (
            <CategoryCoverItem
                name={category.name}
                coverUrl={category.coverUrl}
                onlineViewerCount={category.onlineViewerCount ?? 0}
                style={styles.categoryCoverItem}
            />
        )
    }

    return (
        <View style={styles.container}>
            <RecyclerListView
                isHorizontal
                style={styles.list}
                dataProvider={data}
                layoutProvider={layoutProvider}
                rowRenderer={rowRenderer}
                scrollViewProps={{
                    contentContainerStyle: listScrollContainerStyle
                }}
            />
        </View>
    )
}
