import { StyleProp, View, ViewStyle, Text, Pressable } from 'react-native'
import { Channel } from '../../types'
import { Avatar } from '../Avatar'
import { LiveStreamThumbnail } from '../LiveStreamThumbnail'
import { TagList } from '../TagList'

import { styles } from './styles'

export type LiveChannelItemProps = {
    channel: Channel
    style?: StyleProp<ViewStyle>
    onPress?: () => void
}

export function LiveChannelItem({
    channel: { category, onlineViewerCount, streamUrl, streamer, tags, title },
    style,
    onPress
}: LiveChannelItemProps) {
    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
            <LiveStreamThumbnail
                streamUrl={streamUrl}
                onlineViewerCount={onlineViewerCount}
            />
            <View style={styles.infoContainer}>
                <View style={styles.row}>
                    <Avatar
                        source={{ uri: streamer.avatarUrl }}
                        size={30}
                        style={styles.avatar}
                    />
                    <Text style={styles.streamerName}>{streamer.name}</Text>
                </View>
                <View style={styles.space} />
                <View style={styles.row}>
                    <Text style={styles.streamTitle} numberOfLines={1}>
                        {title}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.categoryName} numberOfLines={1}>
                        {category.name}
                    </Text>
                </View>
                <View style={styles.space} />
                <View style={styles.row}>
                    <TagList tags={tags} numberOfLines={1} />
                </View>
            </View>
        </Pressable>
    )
}
