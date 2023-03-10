import { useEffect, useState } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import {
    DataProvider,
    LayoutProvider,
    RecyclerListView
} from 'recyclerlistview'
import { Category } from '../../types/Category'
import { CategoryCoverItem } from '../CategoryCoverItem'
import { ITEM_HEIGHT, ITEM_WIDTH, styles } from './styles'

export type CategoriesListProps = {
    categories: Category[]
    itemSize?: { width: number; height: number }
    listScrollContainerStyle?: StyleProp<ViewStyle>
}

export function CategoriesList({
    categories,
    itemSize = { width: ITEM_WIDTH, height: ITEM_HEIGHT },
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
                category={category}
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
