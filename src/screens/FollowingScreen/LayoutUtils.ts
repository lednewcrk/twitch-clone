import { Dimensions } from 'react-native'
import { LayoutProvider } from 'recyclerlistview'
import { ListHeaderProps } from '../../components/ListHeader'
import { Category, Channel, Streamer } from '../../types'

export enum LayoutType {
    SCREEN_TITLE,
    LIST_HEADER,
    CATEGORY_LIST,
    LIVE_CHANNEL_ITEM,
    STREAMER_ITEM
}

export type LayoutData = {
    type: LayoutType
    data:
        | ListHeaderProps
        | { categories: Category[] }
        | { channel: Channel }
        | { streamer: Streamer }
}

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_TITLE_HEIGHT = 60
export const LIST_HEADER_HEIGHT = 50
export const CATEGORY_LIST_HEIGHT = 260
export const LIVE_CHANNEL_ITEM_HEIGHT = 140
export const STREAMER_ITEM_HEIGHT = 100

export class LayoutUtils {
    static getLayoutProvider(data: LayoutData[]) {
        return new LayoutProvider(
            index => {
                const item = data[index]
                return item.type
            },
            (type, dim, index) => {
                switch (type) {
                    case LayoutType.SCREEN_TITLE:
                        dim.width = SCREEN_WIDTH
                        dim.height = SCREEN_TITLE_HEIGHT
                        break
                    case LayoutType.LIST_HEADER:
                        dim.width = SCREEN_WIDTH
                        dim.height = LIST_HEADER_HEIGHT
                        break
                    case LayoutType.CATEGORY_LIST:
                        dim.width = SCREEN_WIDTH
                        dim.height = CATEGORY_LIST_HEIGHT
                        break
                    case LayoutType.LIVE_CHANNEL_ITEM:
                        dim.width = SCREEN_WIDTH
                        dim.height = LIVE_CHANNEL_ITEM_HEIGHT
                        break
                    case LayoutType.STREAMER_ITEM:
                        dim.width = SCREEN_WIDTH
                        dim.height = STREAMER_ITEM_HEIGHT
                        break
                    default:
                        dim.width = 0
                        dim.height = 0
                }
            }
        )
    }
}
