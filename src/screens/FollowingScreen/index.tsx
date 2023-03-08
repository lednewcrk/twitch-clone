import { useMemo, useRef } from 'react'
import { View } from 'react-native'
import { RecyclerListView, RecyclerListViewProps } from 'recyclerlistview'
import StickyContainer from 'recyclerlistview/sticky'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { styles } from './styles'
import { FollowingScreenProps } from './types'
import { Channel } from '../../types'
import { CategoriesList } from '../../components/CategoriesList'
import { LayoutData, LayoutType, SCREEN_TITLE_HEIGHT } from './LayoutUtils'
import { ListHeader } from '../../components/ListHeader'
import { LiveChannelItem } from '../../components/LiveChannelItem'
import { AnimatedHeader } from '../../components/AnimatedHeader'
import { useStreamViewer } from '../../components/StreamViewer'
import { StreamerItem } from '../../components/StreamerItem'
import { useFetchData, useRecyclerView } from './hooks'

const AnimatedRecyclerList = Animated.createAnimatedComponent(RecyclerListView)

export function FollowingScreen({}: FollowingScreenProps) {
    const { onStartStream } = useStreamViewer()
    const recyclerRef = useRef<any>(null)
    const recyclerViewOffsetY = useSharedValue(0)

    const {
        followedCategories,
        liveChannels,
        offlineChannels,
        recommendedChannels
    } = useFetchData()

    const { dataProvider, layoutProvider } = useRecyclerView({
        followedCategories,
        liveChannels,
        offlineChannels,
        recommendedChannels
    })

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
            case LayoutType.STREAMER_ITEM:
                return (
                    <StreamerItem
                        streamer={data.streamer}
                        style={styles.screenPadding}
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
