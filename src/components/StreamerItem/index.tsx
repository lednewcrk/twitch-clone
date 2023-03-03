import { StyleProp, View, ViewStyle, Text, Pressable } from 'react-native'
import { Streamer } from '../../types'
import { Colors } from '../../values/colors'
import { Avatar } from '../Avatar'
import { Dot } from '../Dot'
import { styles } from './styles'

export type StreamerItemProps = {
    streamer: Streamer
    style?: StyleProp<ViewStyle>
    onPress?: () => void
}

export function StreamerItem({
    streamer: { avatarUrl, name, newVideosCount },
    style,
    onPress
}: StreamerItemProps) {
    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
            <Avatar source={{ uri: avatarUrl }} size={50} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text
                    style={styles.newVideosCount}
                >{`${newVideosCount} novos vídeos`}</Text>
            </View>
            <Dot color={Colors.text} />
        </Pressable>
    )
}
