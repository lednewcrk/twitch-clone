import { useEffect, useState } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import {
    DataProvider,
    LayoutProvider,
    RecyclerListView
} from 'recyclerlistview'
import { Channel } from '../../types'
import { LiveChannelItem } from '../LiveChannelItem'

import { ITEM_HEIGHT, ITEM_WIDTH, styles } from './styles'

export type LiveChannelsListProps = {
    channels: Channel[]
    itemSize?: { width: number; height: number }
    listScrollContainerStyle?: StyleProp<ViewStyle>
}

export function LiveChannelsList({
    channels,
    itemSize = { width: ITEM_WIDTH, height: ITEM_HEIGHT },
    listScrollContainerStyle
}: LiveChannelsListProps) {
    const dataProvider = new DataProvider((r1, r2) => {
        return r1.id !== r2.id
    })

    const layoutProvider = new LayoutProvider(
        index => 'ONLINE_CHANNEL_ITEM',
        (type, dim) => {
            dim.width = itemSize.width
            dim.height = itemSize.height
        }
    )

    const [data, setData] = useState(dataProvider.cloneWithRows(channels))

    useEffect(() => {
        setData(dataProvider.cloneWithRows(channels))
    }, [channels])

    const rowRenderer = (type: string | number, data: any) => {
        const channel = data as Channel

        return <LiveChannelItem channel={channel} />
    }

    return (
        <View style={styles.container}>
            <RecyclerListView
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
