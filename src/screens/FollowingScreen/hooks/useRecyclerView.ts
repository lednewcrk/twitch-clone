import { useEffect, useMemo, useState } from 'react'
import { DataProvider } from 'recyclerlistview'
import { Category, Channel, Streamer } from '../../../types'
import { LayoutData, LayoutType, LayoutUtils } from '../LayoutUtils'

type UseRecyclerViewProps = {
    followedCategories: Category[] | undefined
    liveChannels: Channel[] | undefined
    recommendedChannels: Channel[] | undefined
    offlineChannels: Streamer[] | undefined
}

export function useRecyclerView({
    followedCategories,
    liveChannels,
    offlineChannels,
    recommendedChannels
}: UseRecyclerViewProps) {
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

        if (recommendedChannels) {
            data.push({
                type: LayoutType.LIST_HEADER,
                data: { title: 'Canais recomendados para você' }
            })

            const channels = recommendedChannels.map(it => ({
                type: LayoutType.LIVE_CHANNEL_ITEM,
                data: { channel: it }
            }))

            data.push(...channels)
        }

        if (offlineChannels) {
            data.push({
                type: LayoutType.LIST_HEADER,
                data: { title: 'Seus canais off-line' }
            })

            const channels = offlineChannels.map(it => ({
                type: LayoutType.STREAMER_ITEM,
                data: { streamer: it }
            }))

            data.push(...channels)
        }

        setDataProvider(dataProvider.cloneWithRows(data))
    }, [followedCategories, liveChannels, recommendedChannels, offlineChannels])

    const layoutProvider = useMemo(() => {
        return LayoutUtils.getLayoutProvider(dataProvider.getAllData())
    }, [dataProvider])

    return { dataProvider, layoutProvider }
}
