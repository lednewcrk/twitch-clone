import { useEffect, useMemo, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { View } from 'react-native'
import {
    DataProvider,
    RecyclerListView,
    RecyclerListViewProps
} from 'recyclerlistview'
import StickyContainer from 'recyclerlistview/sticky'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { styles } from './styles'
import { FollowingScreenProps } from './types'
import { fetchFollowedCategories, fetchLiveChannels } from '../../services/api'
import { Category, Channel } from '../../types'
import { CategoriesList } from '../../components/CategoriesList'
import {
    LayoutData,
    LayoutType,
    LayoutUtils,
    SCREEN_TITLE_HEIGHT
} from './LayoutUtils'
import { ListHeader } from '../../components/ListHeader'
import { LiveChannelItem } from '../../components/LiveChannelItem'
import { AnimatedHeader } from '../../components/AnimatedHeader'
import { useStreamViewer } from '../../components/StreamViewer'

const AnimatedRecyclerList = Animated.createAnimatedComponent(RecyclerListView)

export function FollowingScreen({}: FollowingScreenProps) {
    const { onStartStream } = useStreamViewer()
    const recyclerRef = useRef<any>(null)
    const recyclerViewOffsetY = useSharedValue(0)

    const { data: followedCategories } = useQuery<Category[]>({
        queryKey: ['followedCategories'],
        queryFn: fetchFollowedCategories
    })

    const { data: liveChannels } = useQuery<Channel[]>({
        queryKey: ['live_channels'],
        queryFn: fetchLiveChannels
    })

    const [dataProvider, setDataProvider] = useState(
        new DataProvider((r1, r2) => {
            return r1 !== r2
        })
    )

    useEffect(() => {
        const data: LayoutData[] = []

        data.push({
            type: LayoutType.SCREEN_TITLE,
            data: { title: 'Seguindo' }
        })

        if (followedCategories) {
            data.push(
                {
                    type: LayoutType.LIST_HEADER,
                    data: { title: 'Categorias seguidas' }
                },
                {
                    type: LayoutType.CATEGORY_LIST,
                    data: { categories: followedCategories }
                }
            )
        }

        if (liveChannels) {
            data.push({
                type: LayoutType.LIST_HEADER,
                data: { title: 'Seus canais ao vivo' }
            })

            const channels = liveChannels.map(it => ({
                type: LayoutType.LIVE_CHANNEL_ITEM,
                data: { channel: it }
            }))

            data.push(...channels)
        }

        setDataProvider(dataProvider.cloneWithRows(data))
    }, [followedCategories, liveChannels])

    // dataProvider = dataProvider.cloneWithRows(data)

    const layoutProvider = useMemo(() => {
        return LayoutUtils.getLayoutProvider(dataProvider.getAllData())
    }, [dataProvider])

    const onPressLiveChannel = (channel: Channel) => {
        onStartStream({
            id: channel.id,
            source: channel.streamUrl
        })
    }

    const rowRenderer = (
        type: string | number,
        { data }: any,
        index: number
    ) => {
        switch (type) {
            case LayoutType.SCREEN_TITLE:
                return (
                    <AnimatedHeader
                        title={data.title}
                        style={styles.screenPadding}
                        offsetY={recyclerViewOffsetY}
                        height={SCREEN_TITLE_HEIGHT}
                    />
                )
            case LayoutType.LIST_HEADER:
                return (
                    <ListHeader
                        title={data.title}
                        style={styles.screenPadding}
                    />
                )
            case LayoutType.CATEGORY_LIST:
                return (
                    <CategoriesList
                        categories={data.categories}
                        listScrollContainerStyle={styles.listStartPadding}
                    />
                )
            case LayoutType.LIVE_CHANNEL_ITEM:
                return (
                    <LiveChannelItem
                        channel={data.channel}
                        style={styles.screenPadding}
                        onPress={() => onPressLiveChannel(data.channel)}
                    />
                )
            default:
                return null
        }
    }

    const stickyHeaderIndices = useMemo(() => {
        const data: LayoutData[] = dataProvider.getAllData()

        const indices: number[] = []

        data.forEach((it, index) => {
            if (it.type === LayoutType.LIST_HEADER) {
                indices.push(index)
            }
        })

        return indices
    }, [dataProvider])

    const scrollHandler: RecyclerListViewProps['onScroll'] = (
        rawEvent,
        offsetX,
        offsetY
    ) => {
        'worklet'
        recyclerViewOffsetY.value = offsetY
    }

    return (
        <View style={styles.container}>
            {/* @ts-ignore */}
            <StickyContainer stickyHeaderIndices={stickyHeaderIndices}>
                <AnimatedRecyclerList
                    layoutProvider={layoutProvider}
                    ref={ref => {
                        recyclerRef.current = ref
                    }}
                    dataProvider={dataProvider}
                    rowRenderer={rowRenderer}
                    scrollViewProps={{ bounces: false }}
                    onScroll={scrollHandler}
                />
            </StickyContainer>
        </View>
    )
}
